import { createServer as createHttpServer } from "node:http";
import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT_DIR = dirname(fileURLToPath(import.meta.url));
const MAX_BODY_BYTES = 256 * 1024;
const SESSION_DAYS = 30;
const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};

function emptyDatabase() {
  return {
    version: 1,
    users: [],
    sessions: [],
    friendRequests: [],
    gifts: [],
    snapshots: {},
  };
}

class SocialStore {
  constructor(filePath) {
    this.filePath = filePath;
    mkdirSync(dirname(filePath), { recursive: true });
    this.data = emptyDatabase();
    if (existsSync(filePath)) {
      try {
        this.data = { ...emptyDatabase(), ...JSON.parse(readFileSync(filePath, "utf8")) };
      } catch (error) {
        throw new Error(`Cannot read social store: ${error instanceof Error ? error.message : error}`);
      }
    }
  }

  save() {
    const temporary = `${this.filePath}.tmp`;
    writeFileSync(temporary, `${JSON.stringify(this.data, null, 2)}\n`, { mode: 0o600 });
    renameSync(temporary, this.filePath);
  }
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function cleanText(value, maximum) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, maximum);
}

function passwordRecord(password, salt = randomBytes(16).toString("hex")) {
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function passwordMatches(password, record) {
  const [salt, expectedHex] = String(record || "").split(":");
  if (!salt || !expectedHex) return false;
  const actual = scryptSync(password, salt, 64);
  const expected = Buffer.from(expectedHex, "hex");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

function publicUser(user) {
  return {
    id: user.id,
    email: user.email,
    displayName: user.displayName,
    createdAt: user.createdAt,
  };
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(JSON.stringify(payload));
}

async function readJson(request) {
  let size = 0;
  const chunks = [];
  for await (const chunk of request) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      const error = new Error("Request body is too large");
      error.status = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  if (!chunks.length) return {};
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    const error = new Error("Invalid JSON");
    error.status = 400;
    throw error;
  }
}

function createSession(store, userId) {
  const token = randomBytes(32).toString("hex");
  store.data.sessions = store.data.sessions.filter((session) => new Date(session.expiresAt).getTime() > Date.now());
  store.data.sessions.push({
    token,
    userId,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + SESSION_DAYS * 86400000).toISOString(),
  });
  return token;
}

function authenticatedUser(request, store) {
  const authorization = String(request.headers.authorization || "");
  const token = authorization.startsWith("Bearer ") ? authorization.slice(7).trim() : "";
  if (!token) return null;
  const session = store.data.sessions.find((item) => item.token === token && new Date(item.expiresAt).getTime() > Date.now());
  return session ? store.data.users.find((user) => user.id === session.userId) || null : null;
}

function requireUser(request, response, store) {
  const user = authenticatedUser(request, store);
  if (!user) sendJson(response, 401, { error: "请先登录设备账户" });
  return user;
}

function acceptedFriendship(store, leftId, rightId) {
  return store.data.friendRequests.some((request) => (
    request.status === "accepted"
    && ((request.fromUserId === leftId && request.toUserId === rightId)
      || (request.fromUserId === rightId && request.toUserId === leftId))
  ));
}

function socialSnapshot(store, user) {
  const incoming = store.data.friendRequests
    .filter((request) => request.toUserId === user.id && request.status === "pending")
    .map((request) => ({
      ...request,
      from: publicUser(store.data.users.find((candidate) => candidate.id === request.fromUserId)),
    }));
  const outgoing = store.data.friendRequests
    .filter((request) => request.fromUserId === user.id && request.status === "pending")
    .map((request) => ({
      ...request,
      to: publicUser(store.data.users.find((candidate) => candidate.id === request.toUserId)),
    }));
  const accepted = store.data.friendRequests.filter((request) => (
    request.status === "accepted"
    && (request.fromUserId === user.id || request.toUserId === user.id)
  ));
  const friendIds = [...new Set(accepted.map((request) => (
    request.fromUserId === user.id ? request.toUserId : request.fromUserId
  )))];
  const friends = friendIds
    .map((id) => store.data.users.find((candidate) => candidate.id === id))
    .filter(Boolean)
    .map(publicUser);
  const gifts = store.data.gifts
    .filter((gift) => gift.toUserId === user.id || gift.fromUserId === user.id)
    .slice(-30)
    .map((gift) => ({
      ...gift,
      from: publicUser(store.data.users.find((candidate) => candidate.id === gift.fromUserId)),
      to: publicUser(store.data.users.find((candidate) => candidate.id === gift.toUserId)),
    }));
  return { account: publicUser(user), incoming, outgoing, friends, gifts };
}

async function handleApi(request, response, store, pathname) {
  if (request.method === "GET" && pathname === "/api/health") {
    sendJson(response, 200, { ok: true, service: "dedalion-device", version: 1 });
    return;
  }

  if (request.method === "POST" && pathname === "/api/auth/register") {
    const body = await readJson(request);
    const email = normalizeEmail(body.email);
    const displayName = cleanText(body.displayName, 24);
    const password = String(body.password || "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      sendJson(response, 400, { error: "请输入有效邮箱" });
      return;
    }
    if (displayName.length < 1 || password.length < 6) {
      sendJson(response, 400, { error: "名字不能为空，密码至少 6 位" });
      return;
    }
    if (store.data.users.some((user) => user.email === email)) {
      sendJson(response, 409, { error: "这个邮箱已经注册" });
      return;
    }
    const user = {
      id: randomUUID(),
      email,
      displayName,
      password: passwordRecord(password),
      createdAt: new Date().toISOString(),
    };
    store.data.users.push(user);
    const token = createSession(store, user.id);
    store.save();
    sendJson(response, 201, { token, account: publicUser(user) });
    return;
  }

  if (request.method === "POST" && pathname === "/api/auth/login") {
    const body = await readJson(request);
    const email = normalizeEmail(body.email);
    const user = store.data.users.find((candidate) => candidate.email === email);
    if (!user || !passwordMatches(String(body.password || ""), user.password)) {
      sendJson(response, 401, { error: "邮箱或密码不正确" });
      return;
    }
    const token = createSession(store, user.id);
    store.save();
    sendJson(response, 200, { token, account: publicUser(user) });
    return;
  }

  const user = requireUser(request, response, store);
  if (!user) return;

  if (request.method === "GET" && pathname === "/api/social") {
    sendJson(response, 200, socialSnapshot(store, user));
    return;
  }

  if (request.method === "POST" && pathname === "/api/auth/logout") {
    const token = String(request.headers.authorization || "").replace(/^Bearer\s+/, "");
    store.data.sessions = store.data.sessions.filter((session) => session.token !== token);
    store.save();
    sendJson(response, 200, { ok: true });
    return;
  }

  if (request.method === "POST" && pathname === "/api/friend-requests") {
    const body = await readJson(request);
    const target = store.data.users.find((candidate) => candidate.email === normalizeEmail(body.email));
    if (!target) {
      sendJson(response, 404, { error: "没有找到这个账户" });
      return;
    }
    if (target.id === user.id) {
      sendJson(response, 400, { error: "不能向自己发送邀请" });
      return;
    }
    if (acceptedFriendship(store, user.id, target.id)) {
      sendJson(response, 409, { error: "你们已经共同确认关系" });
      return;
    }
    const pending = store.data.friendRequests.find((item) => (
      item.status === "pending"
      && ((item.fromUserId === user.id && item.toUserId === target.id)
        || (item.fromUserId === target.id && item.toUserId === user.id))
    ));
    if (pending) {
      sendJson(response, 409, { error: "已有一份邀请正在等待确认" });
      return;
    }
    const friendRequest = {
      id: randomUUID(),
      fromUserId: user.id,
      toUserId: target.id,
      status: "pending",
      createdAt: new Date().toISOString(),
      acceptedAt: null,
    };
    store.data.friendRequests.push(friendRequest);
    store.save();
    sendJson(response, 201, { request: friendRequest });
    return;
  }

  const acceptMatch = pathname.match(/^\/api\/friend-requests\/([^/]+)\/accept$/);
  if (request.method === "POST" && acceptMatch) {
    const friendRequest = store.data.friendRequests.find((item) => item.id === acceptMatch[1]);
    if (!friendRequest || friendRequest.toUserId !== user.id || friendRequest.status !== "pending") {
      sendJson(response, 404, { error: "没有可确认的邀请" });
      return;
    }
    friendRequest.status = "accepted";
    friendRequest.acceptedAt = new Date().toISOString();
    store.save();
    sendJson(response, 200, { request: friendRequest });
    return;
  }

  if (request.method === "POST" && pathname === "/api/gifts") {
    const body = await readJson(request);
    const toUserId = cleanText(body.toUserId, 64);
    const recipient = store.data.users.find((candidate) => candidate.id === toUserId);
    if (!recipient || !acceptedFriendship(store, user.id, recipient.id)) {
      sendJson(response, 403, { error: "只有双方确认的好友可以互赠生活物品" });
      return;
    }
    const gift = {
      id: randomUUID(),
      fromUserId: user.id,
      toUserId: recipient.id,
      item: cleanText(body.item || "蒲公英信物", 40),
      message: cleanText(body.message, 120),
      createdAt: new Date().toISOString(),
    };
    store.data.gifts.push(gift);
    store.save();
    sendJson(response, 201, { gift });
    return;
  }

  if (request.method === "GET" && pathname === "/api/state") {
    sendJson(response, 200, { snapshot: store.data.snapshots[user.id] || null });
    return;
  }

  if (request.method === "POST" && pathname === "/api/state") {
    const body = await readJson(request);
    const snapshot = body.snapshot && typeof body.snapshot === "object" ? body.snapshot : {};
    const encoded = JSON.stringify(snapshot);
    if (encoded.length > 128 * 1024) {
      sendJson(response, 413, { error: "生活存档超过设备同步上限" });
      return;
    }
    store.data.snapshots[user.id] = {
      value: snapshot,
      updatedAt: new Date().toISOString(),
    };
    store.save();
    sendJson(response, 200, { ok: true, updatedAt: store.data.snapshots[user.id].updatedAt });
    return;
  }

  sendJson(response, 404, { error: "API not found" });
}

function serveStatic(request, response, rootDir, pathname) {
  const relativePath = pathname === "/" ? "index.html" : decodeURIComponent(pathname).replace(/^\/+/, "");
  const root = resolve(rootDir);
  const filePath = resolve(root, relativePath);
  if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
    sendJson(response, 403, { error: "Forbidden" });
    return;
  }
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    sendJson(response, 404, { error: "Not found" });
    return;
  }
  const contentType = MIME_TYPES[extname(filePath).toLowerCase()] || "application/octet-stream";
  const noCache = relativePath === "service-worker.js" || relativePath === "index.html";
  response.writeHead(200, {
    "Content-Type": contentType,
    "Content-Length": statSync(filePath).size,
    "Cache-Control": noCache ? "no-cache" : "public, max-age=3600",
    "X-Content-Type-Options": "nosniff",
    "Cross-Origin-Resource-Policy": "same-origin",
  });
  if (request.method === "HEAD") response.end();
  else response.end(readFileSync(filePath));
}

export function createDedalionServer({
  rootDir = ROOT_DIR,
  dataDir = process.env.DEDALION_DATA_DIR || resolve(ROOT_DIR, ".data"),
} = {}) {
  const store = new SocialStore(resolve(dataDir, "social-store.json"));
  const server = createHttpServer(async (request, response) => {
    try {
      const url = new URL(request.url || "/", "http://127.0.0.1");
      if (url.pathname.startsWith("/api/")) {
        await handleApi(request, response, store, url.pathname);
        return;
      }
      if (!["GET", "HEAD"].includes(request.method || "")) {
        sendJson(response, 405, { error: "Method not allowed" });
        return;
      }
      serveStatic(request, response, rootDir, url.pathname);
    } catch (error) {
      sendJson(response, Number(error?.status) || 500, {
        error: error instanceof Error ? error.message : "Server error",
      });
    }
  });
  server.dedalionStore = store;
  return server;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = Number(process.env.PORT || 8787);
  const host = process.env.HOST || "127.0.0.1";
  const server = createDedalionServer();
  server.listen(port, host, () => {
    console.log(`Dedalion device runtime: http://${host}:${port}/?device=1`);
  });
}

import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { createDedalionServer } from "../server.mjs";

async function startServer() {
  const dataDir = mkdtempSync(join(tmpdir(), "dedalion-social-"));
  const server = createDedalionServer({ dataDir });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  return {
    baseUrl: `http://127.0.0.1:${address.port}`,
    close: async () => {
      await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
      rmSync(dataDir, { recursive: true, force: true });
    },
  };
}

async function request(baseUrl, path, { token, body, method = body ? "POST" : "GET" } = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return { response, payload: await response.json() };
}

test("friendship requires both accounts to confirm before gifts", async () => {
  const runtime = await startServer();
  try {
    const first = await request(runtime.baseUrl, "/api/auth/register", {
      body: { email: "wind@example.com", displayName: "风芽", password: "garden12" },
    });
    const second = await request(runtime.baseUrl, "/api/auth/register", {
      body: { email: "rain@example.com", displayName: "雨芽", password: "garden34" },
    });
    assert.equal(first.response.status, 201);
    assert.equal(second.response.status, 201);

    const invitation = await request(runtime.baseUrl, "/api/friend-requests", {
      token: first.payload.token,
      body: { email: "rain@example.com" },
    });
    assert.equal(invitation.response.status, 201);

    const blockedGift = await request(runtime.baseUrl, "/api/gifts", {
      token: first.payload.token,
      body: {
        toUserId: second.payload.account.id,
        item: "蒲公英信物",
      },
    });
    assert.equal(blockedGift.response.status, 403);

    const secondSocial = await request(runtime.baseUrl, "/api/social", {
      token: second.payload.token,
    });
    assert.equal(secondSocial.payload.incoming.length, 1);

    const accepted = await request(
      runtime.baseUrl,
      `/api/friend-requests/${invitation.payload.request.id}/accept`,
      { token: second.payload.token, body: {} },
    );
    assert.equal(accepted.response.status, 200);

    const gift = await request(runtime.baseUrl, "/api/gifts", {
      token: first.payload.token,
      body: {
        toUserId: second.payload.account.id,
        item: "蒲公英信物",
        message: "一起照顾家园",
      },
    });
    assert.equal(gift.response.status, 201);

    const finalSocial = await request(runtime.baseUrl, "/api/social", {
      token: second.payload.token,
    });
    assert.equal(finalSocial.payload.friends.length, 1);
    assert.equal(finalSocial.payload.gifts.length, 1);
    assert.equal(finalSocial.payload.gifts[0].message, "一起照顾家园");
  } finally {
    await runtime.close();
  }
});

test("device state is isolated by account", async () => {
  const runtime = await startServer();
  try {
    const first = await request(runtime.baseUrl, "/api/auth/register", {
      body: { email: "one@example.com", displayName: "一芽", password: "garden12" },
    });
    const second = await request(runtime.baseUrl, "/api/auth/register", {
      body: { email: "two@example.com", displayName: "二芽", password: "garden34" },
    });

    await request(runtime.baseUrl, "/api/state", {
      token: first.payload.token,
      body: { snapshot: { x: 96, y: 71, flowers: 3 } },
    });
    const firstState = await request(runtime.baseUrl, "/api/state", { token: first.payload.token });
    const secondState = await request(runtime.baseUrl, "/api/state", { token: second.payload.token });
    assert.equal(firstState.payload.snapshot.value.flowers, 3);
    assert.equal(secondState.payload.snapshot, null);
  } finally {
    await runtime.close();
  }
});

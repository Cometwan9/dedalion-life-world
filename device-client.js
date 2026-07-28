(() => {
  const TOKEN_KEY = "dedalionDeviceToken";
  const isDeviceMode = new URLSearchParams(location.search).get("device") === "1"
    || matchMedia("(display-mode: standalone)").matches;
  let token = localStorage.getItem(TOKEN_KEY) || "";
  let mode = "login";
  let authOverlay;
  let socialPanel;

  async function api(path, options = {}) {
    const response = await fetch(path, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {}),
      },
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error || `Request failed: ${response.status}`);
    return payload;
  }

  function setStatus(node, message, isError = false) {
    node.textContent = message;
    node.classList.toggle("is-error", isError);
  }

  function createAuthOverlay() {
    authOverlay = document.createElement("section");
    authOverlay.className = "device-auth";
    authOverlay.setAttribute("aria-label", "Dedalion 设备账户");
    authOverlay.innerHTML = `
      <article>
        <i class="device-auth-dandelion" aria-hidden="true"></i>
        <h1>Dedalion</h1>
        <p>共同生活从双方确认开始。</p>
        <form>
          <label class="device-display-name">名字<input name="displayName" autocomplete="nickname" maxlength="24"></label>
          <label>邮箱<input name="email" type="email" autocomplete="email" required></label>
          <label>密码<input name="password" type="password" autocomplete="current-password" minlength="6" required></label>
          <button type="submit"><i aria-hidden="true"></i><span>进入生活岛</span></button>
        </form>
        <button class="device-auth-switch" type="button">创建新账户</button>
        <small aria-live="polite"></small>
      </article>
    `;
    const form = authOverlay.querySelector("form");
    const status = authOverlay.querySelector("small");
    const switchButton = authOverlay.querySelector(".device-auth-switch");
    switchButton.addEventListener("click", () => {
      mode = mode === "login" ? "register" : "login";
      authOverlay.classList.toggle("is-register", mode === "register");
      switchButton.textContent = mode === "register" ? "已有账户，直接登录" : "创建新账户";
      form.querySelector("button span").textContent = mode === "register" ? "创建并进入" : "进入生活岛";
      form.elements.password.autocomplete = mode === "register" ? "new-password" : "current-password";
      setStatus(status, "");
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submit = form.querySelector("button[type=submit]");
      submit.disabled = true;
      setStatus(status, "正在连接生活岛…");
      try {
        const formData = new FormData(form);
        const payload = await api(`/api/auth/${mode}`, {
          method: "POST",
          body: JSON.stringify({
            email: formData.get("email"),
            password: formData.get("password"),
            displayName: formData.get("displayName"),
          }),
        });
        token = payload.token;
        localStorage.setItem(TOKEN_KEY, token);
        authOverlay.classList.add("is-hidden");
        await refreshSocial();
      } catch (error) {
        setStatus(status, error.message, true);
      } finally {
        submit.disabled = false;
      }
    });
    document.body.appendChild(authOverlay);
  }

  function createSocialPanel() {
    const postPanel = document.querySelector("#postPanel");
    if (!postPanel) return;
    socialPanel = document.createElement("section");
    socialPanel.className = "device-social";
    socialPanel.innerHTML = `
      <header>
        <span><b>共同生活</b><small data-account></small></span>
        <button type="button" data-sound aria-label="切换音效" title="切换音效"><i aria-hidden="true"></i></button>
        <button type="button" data-logout aria-label="退出设备账户" title="退出设备账户"><i aria-hidden="true"></i></button>
      </header>
      <form data-friend-form>
        <input name="email" type="email" autocomplete="email" placeholder="朋友的邮箱" aria-label="朋友的邮箱" required>
        <button type="submit" aria-label="发送好友邀请" title="发送好友邀请"><i aria-hidden="true"></i></button>
      </form>
      <small data-status aria-live="polite"></small>
      <div data-social-list></div>
    `;
    socialPanel.querySelector("[data-sound]").addEventListener("click", () => {
      const enabled = globalThis.DedalionDevice?.toggleSound?.();
      socialPanel.dataset.sound = enabled ? "on" : "off";
    });
    socialPanel.querySelector("[data-logout]").addEventListener("click", async () => {
      try {
        await api("/api/auth/logout", { method: "POST" });
      } catch {}
      token = "";
      localStorage.removeItem(TOKEN_KEY);
      authOverlay?.classList.remove("is-hidden");
      socialPanel.classList.add("is-locked");
    });
    socialPanel.querySelector("[data-friend-form]").addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const status = socialPanel.querySelector("[data-status]");
      try {
        await api("/api/friend-requests", {
          method: "POST",
          body: JSON.stringify({ email: new FormData(form).get("email") }),
        });
        form.reset();
        setStatus(status, "邀请已经送出，等待对方确认。");
        await refreshSocial();
      } catch (error) {
        setStatus(status, error.message, true);
      }
    });
    postPanel.appendChild(socialPanel);
  }

  function relationCard(title, subtitle) {
    const article = document.createElement("article");
    const copy = document.createElement("span");
    const strong = document.createElement("b");
    const small = document.createElement("small");
    strong.textContent = title;
    small.textContent = subtitle;
    copy.append(strong, small);
    article.appendChild(copy);
    return article;
  }

  async function acceptFriend(requestId) {
    const status = socialPanel.querySelector("[data-status]");
    try {
      await api(`/api/friend-requests/${encodeURIComponent(requestId)}/accept`, { method: "POST" });
      setStatus(status, "双方已经确认，可以开始共同生活。");
      await refreshSocial();
    } catch (error) {
      setStatus(status, error.message, true);
    }
  }

  async function sendGift(friend) {
    const status = socialPanel.querySelector("[data-status]");
    try {
      await api("/api/gifts", {
        method: "POST",
        body: JSON.stringify({
          toUserId: friend.id,
          item: "蒲公英信物",
          message: "愿这颗种子在你的家园里慢慢长大。",
        }),
      });
      setStatus(status, `已经把蒲公英信物送给${friend.displayName}。`);
      await refreshSocial();
    } catch (error) {
      setStatus(status, error.message, true);
    }
  }

  function renderSocial(payload) {
    socialPanel.classList.remove("is-locked");
    socialPanel.dataset.sound = globalThis.DedalionDevice?.soundEnabled === false ? "off" : "on";
    socialPanel.querySelector("[data-account]").textContent = `${payload.account.displayName} · ${payload.account.email}`;
    const list = socialPanel.querySelector("[data-social-list]");
    list.replaceChildren();

    payload.incoming.forEach((request) => {
      const card = relationCard(request.from.displayName, "邀请你共同生活");
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "确认";
      button.addEventListener("click", () => acceptFriend(request.id));
      card.appendChild(button);
      list.appendChild(card);
    });

    payload.outgoing.forEach((request) => {
      list.appendChild(relationCard(request.to.displayName, "等待对方确认"));
    });

    payload.friends.forEach((friend) => {
      const card = relationCard(friend.displayName, "双方已确认 · 可以互赠生活物品");
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `送礼物给${friend.displayName}`);
      button.title = `送礼物给${friend.displayName}`;
      button.innerHTML = "<i aria-hidden=\"true\"></i>";
      button.addEventListener("click", () => sendGift(friend));
      card.appendChild(button);
      list.appendChild(card);
    });

    if (!payload.incoming.length && !payload.outgoing.length && !payload.friends.length) {
      list.appendChild(relationCard("还没有共同生活的人", "输入邮箱发送邀请，对方确认后才会建立关系。"));
    }
  }

  async function refreshSocial() {
    if (!token || !socialPanel) return;
    const status = socialPanel.querySelector("[data-status]");
    try {
      const payload = await api("/api/social");
      renderSocial(payload);
      setStatus(status, payload.gifts.length ? `共同生活留下 ${payload.gifts.length} 件礼物记录。` : "");
    } catch (error) {
      if (/登录/.test(error.message)) {
        token = "";
        localStorage.removeItem(TOKEN_KEY);
        authOverlay?.classList.remove("is-hidden");
      }
      setStatus(status, error.message, true);
    }
  }

  globalThis.DedalionSocial = Object.freeze({
    refresh: refreshSocial,
    get token() {
      return token;
    },
  });

  if (!isDeviceMode) return;
  document.body.classList.add("is-device-app");
  createAuthOverlay();
  createSocialPanel();
  document.querySelector("#surfacePostButton")?.addEventListener("click", refreshSocial);
  if (token) {
    authOverlay.classList.add("is-hidden");
    refreshSocial();
  }
})();

(() => {
  const SOUND_KEY = "dedalionDeviceSound";
  const storedSound = localStorage.getItem(SOUND_KEY);
  let soundEnabled = storedSound === null ? true : storedSound === "1";
  const nativeBridge = globalThis.DedalionNative || null;

  function notifySoundChange() {
    globalThis.dispatchEvent(new CustomEvent("dedalion:sound-change", {
      detail: { enabled: soundEnabled },
    }));
  }

  function setSoundEnabled(enabled) {
    soundEnabled = Boolean(enabled);
    localStorage.setItem(SOUND_KEY, soundEnabled ? "1" : "0");
    nativeBridge?.setSoundEnabled?.(soundEnabled);
    notifySoundChange();
    return soundEnabled;
  }

  function vibrate(pattern = 24) {
    if (nativeBridge?.vibrate) return nativeBridge.vibrate(pattern);
    return navigator.vibrate?.(pattern) || false;
  }

  const bridge = {
    get soundEnabled() {
      return soundEnabled;
    },
    setSoundEnabled,
    toggleSound() {
      return setSoundEnabled(!soundEnabled);
    },
    vibrate,
    getDeviceInfo() {
      return nativeBridge?.getDeviceInfo?.() || {
        shell: matchMedia("(display-mode: standalone)").matches ? "pwa" : "browser",
        online: navigator.onLine,
        language: navigator.language,
      };
    },
  };

  globalThis.DedalionDevice = Object.freeze(bridge);

  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch((error) => {
        console.info("Device cache unavailable:", error instanceof Error ? error.message : error);
      });
    }, { once: true });
  }

  addEventListener("online", () => {
    dispatchEvent(new CustomEvent("dedalion:device-network", { detail: { online: true } }));
  });
  addEventListener("offline", () => {
    dispatchEvent(new CustomEvent("dedalion:device-network", { detail: { online: false } }));
  });
})();

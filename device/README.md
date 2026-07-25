# Dedalion Device Runtime

This package turns the prototype into an installable device application instead
of asking a player to open a local HTML file.

## Supported Shells

- Chromium kiosk on Raspberry Pi or Linux touch displays
- Android WebView or Trusted Web Activity shells
- PWA installation on desktop and mobile devices

## Start

```bash
npm start
```

Open `http://127.0.0.1:8787/?device=1`. The same URL is used by
`kiosk.config.json`.

Runtime data is stored in `.data/social-store.json` and is intentionally not
committed. Set `DEDALION_DATA_DIR` to place the database on persistent device
storage.

## Device Bridge

A native shell may expose `window.DedalionNative` with:

- `vibrate(pattern)`
- `setSoundEnabled(enabled)`
- `getDeviceInfo()`

Without a native bridge the app uses browser vibration, local sound settings,
and the same HTTP API.

## Social Boundary

A relationship is never created by entering another place. One account sends an
invitation and the other account must accept it. Gifts are available only after
acceptance. The server stores both participants, the request history, and each
gift event.

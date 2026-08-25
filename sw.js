const CACHE = "zijin-v4.2";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(key => key.startsWith("zijin-") && key !== CACHE)
        .map(key => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

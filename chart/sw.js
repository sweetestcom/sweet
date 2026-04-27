const CACHE_NAME = "podcast-chart-shell-v4";
const RUNTIME_CACHE = "podcast-chart-runtime-v4";

const PRECACHE_URLS = [
  "./manifest.json",
  "./favicon.ico",
  "./favicon-16x16.png",
  "./favicon-32x32.png",
  "./apple-icon-180x180.png",
  "./pwa-192.png",
  "./pwa-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

function parseMaxAgeSeconds(cacheControl) {
  const value = String(cacheControl || "");
  const match = value.match(/(?:^|,)\s*max-age=(\d+)/i);
  return match ? Math.max(0, Number(match[1]) || 0) : 0;
}

function getResponseAgeMs(response) {
  const dateHeader = response && response.headers ? response.headers.get("date") : "";
  const timestamp = Date.parse(String(dateHeader || ""));
  if (!Number.isFinite(timestamp)) return Number.POSITIVE_INFINITY;
  return Math.max(0, Date.now() - timestamp);
}

function isFreshCachedApiResponse(response) {
  if (!response || response.status !== 200) return false;
  const cacheControl = response.headers ? response.headers.get("cache-control") : "";
  const maxAgeSeconds = parseMaxAgeSeconds(cacheControl);
  if (!maxAgeSeconds) return false;
  return getResponseAgeMs(response) < (maxAgeSeconds * 1000);
}

async function putRuntimeCache(request, response) {
  if (!response || response.status !== 200) return;
  const cache = await caches.open(RUNTIME_CACHE);
  await cache.put(request, response.clone());
}

async function handlePodcastApiRequest(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);

  if (cached && isFreshCachedApiResponse(cached)) {
    return cached;
  }

  try {
    const network = await fetch(request);
    if (network && network.status === 200) {
      await cache.put(request, network.clone());
    }
    return network;
  } catch (error) {
    if (cached) return cached;
    throw error;
  }
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  const isSharedAsset = /\/podcastchart-shared\.(css|js)$/i.test(url.pathname);
  const isPodcastApi = /^\/api\/podcast\/?$/i.test(url.pathname);

  if (isPodcastApi) {
    event.respondWith(handlePodcastApiRequest(request));
    return;
  }

  // Keep navigation resilient offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          return caches.match("./podcastchart.html");
        })
    );
    return;
  }

  // Shared chart assets should refresh immediately after deploy/edit.
  if (isSharedAsset) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          throw new Error("Shared asset unavailable");
        })
    );
    return;
  }

  // For same-origin assets: stale-while-revalidate.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});

const CACHE_NAME = 'jkssb-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install Service Worker and cache basic assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      // Optional: Return a fallback page if network fails completely
    })
  );
});

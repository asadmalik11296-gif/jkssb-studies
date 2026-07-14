// ==========================================
// 1. YOUR ORIGINAL PWA CACHE CODE
// ==========================================
const CACHE_NAME = 'jkssb-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      // Optional fallback
    })
  );
});

// ==========================================
// 2. PASTE MONETAG CODE DIRECTLY BELOW THIS
// ==========================================
self.options = {
    "domain": "5gvci.com",
    "zoneId": 11290736
}
self.lary = ""
importScripts('https://5gvci.com/act/files/service-worker.min.js?r=sw')

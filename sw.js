const VERSION = 'wochenplan-v1';
const CACHE = ['./', './index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // GitHub API requests: network only
  if (e.request.url.includes('api.github.com')) {
    e.respondWith(fetch(e.request).catch(()=>new Response('{"error":"offline"}',{headers:{'Content-Type':'application/json'}})));
    return;
  }
  // App shell: cache first
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

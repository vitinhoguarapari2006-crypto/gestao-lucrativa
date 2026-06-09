/* Service Worker — Gestão Lucrativa
   Estratégia: REDE PRIMEIRO para o app (HTML/JS) → sempre pega a versão nova
   quando há internet; cache só como reserva (offline). */
const CACHE = 'gestao-lucrativa-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/header-logo.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png',
  './assets/favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(ASSETS.map(u => c.add(u)))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

// permite que a página force a ativação imediata da nova versão
self.addEventListener('message', e => { if (e.data === 'skip') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || req.url.includes('supabase') || req.url.includes('/rest/') || req.url.includes('/auth/')) return;

  const isHTML = req.mode === 'navigate' || req.destination === 'document' || req.url.endsWith('.html') || req.url.endsWith('/');

  if (isHTML) {
    // REDE PRIMEIRO: pega a versão nova; se offline, usa o cache
    e.respondWith(
      fetch(req).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return resp;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
  } else {
    // ASSETS: cache primeiro (são fixos), atualiza em segundo plano
    e.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return resp;
      }).catch(() => cached))
    );
  }
});

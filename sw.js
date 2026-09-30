// Service worker de "Movimientos JDM": guarda la página y la última copia (cifrada) de los datos
// para que la app abra aunque no haya conexión. Siempre intenta primero la red.
var CACHE = 'mjdm-app-v1';
var BASICOS = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(BASICOS); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.filter(function(k){ return k !== CACHE && k !== 'mjdm-datos'; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  if (/\/datos\.bin$/.test(url.pathname)) return;   // la página maneja los datos (red primero, copia cifrada si no hay red)
  e.respondWith(fetch(req).then(function(r){
    if (r && r.ok && r.type === 'basic'){ var copia = r.clone(); caches.open(CACHE).then(function(c){ c.put(req, copia); }); }
    return r;
  }).catch(function(){
    return caches.match(req, {ignoreSearch:true}).then(function(r){
      return r || (req.mode === 'navigate' ? caches.match('index.html') : Response.error());
    });
  }));
});

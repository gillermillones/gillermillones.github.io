importScripts('/workbox-sw.js');

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => clients.claim());

let precacheManifest = [{"revision":"4226d08ebb29dcc5e4f22f529f839a6b","url":"workbox-sw.js"},{"revision":"201bca2347d3d4d4a72558e48e243bb8","url":"workbox-aa2f3006.js"},{"revision":"6b7eee73a1415d1695c8b2bd53858b00","url":"workbox-0859ddfe.js"},{"revision":"a2760511c65806022ad20adf74370ff3","url":"window.svg"},{"revision":"c0af2f507b369b085b35ef4bbe3bcf1e","url":"vercel.svg"},{"revision":"8e061864f388b47f33a1c3780831193e","url":"next.svg"},{"revision":"6a2aabd03ed3b07dbee34cf0e4a33d08","url":"manifest.json"},{"revision":"4dd298820c7e062d6193be290671b81c","url":"index.html"},{"revision":"2aaafa6a49b6563925fe440891e32717","url":"globe.svg"},{"revision":"d09f95206c3fa0bb9bd9fefabfd0ea71","url":"file.svg"},{"revision":"c30c7d42707a47a3f4591831641e50dc","url":"favicon.ico"},{"revision":"44398badbaa415cfc8abb29eaad63ef8","url":"_not-found.html"},{"revision":"44398badbaa415cfc8abb29eaad63ef8","url":"404.html"},{"revision":"b404e23d62d95bafd03ad7747cc0e88b","url":"_next/static/xx7UOfWq9USlj3PC-osHv/_ssgManifest.js"},{"revision":"d751713988987e9331980363e24189ce","url":"_next/static/xx7UOfWq9USlj3PC-osHv/_clientMiddlewareManifest.json"},{"revision":"a02c1347626a3fb5fdfd040548ce5e9f","url":"_next/static/xx7UOfWq9USlj3PC-osHv/_buildManifest.js"},{"revision":"020c3f98b7c1a902e935893eaedeb8a8","url":"_next/static/chunks/turbopack-59680dad9df20a9a.js"},{"revision":"3a939c72612905fee29a47c317adc9ee","url":"_next/static/chunks/fd5f064b2a3f9309.js"},{"revision":"dc1b9b9e538672eedcfd6454db56e256","url":"_next/static/chunks/ee727da944680740.js"},{"revision":"b9c3c3faef008dfb97fa62b6bde3eb98","url":"_next/static/chunks/b32a0963684b9933.js"},{"revision":"16b37c9659b04309b9a3d176933f41e4","url":"_next/static/chunks/a8dc0cecba955867.css"},{"revision":"846118c33b2c0e922d7b3a7676f81f6f","url":"_next/static/chunks/a6dad97d9634a72d.js"},{"revision":"426d01c62f016fe684e9ee2d4c6b07e8","url":"_next/static/chunks/81ae3bbab8a0cdf0.js"},{"revision":"5fcc01f80632cedd173c6e7884e8c91b","url":"_next/static/chunks/42879de7b8087bc9.js"},{"revision":"a8502566f692c143b7b8013e22a4ae6c","url":"_next/static/chunks/26808309ccc2e230.js"}] || [];

precacheManifest = precacheManifest.filter(entry => !entry.url.startsWith('.next/static/'));

precacheManifest = precacheManifest.map(entry => ({
  entry,
  url: entry.url.replace(/^public\//, '/')
}));

workbox.precaching.precacheAndRoute(precacheManifest);

workbox.routing.registerRoute(
  ({ request }) => request.mode === 'navigate',
  new workbox.strategies.NetworkFirst({
    cacheName: 'html-cache'
  })
);

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg?)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-assets-cache',
  }),
  'GET'
);

workbox.routing.registerRoute(
  /^\/_next\/static\/.*/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'next-static-cache',
  }),
  'GET'
);
importScripts('/workbox-sw.js');

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => clients.claim());

let precacheManifest = [{"revision":"4226d08ebb29dcc5e4f22f529f839a6b","url":"workbox-sw.js"},{"revision":"201bca2347d3d4d4a72558e48e243bb8","url":"workbox-aa2f3006.js"},{"revision":"6b7eee73a1415d1695c8b2bd53858b00","url":"workbox-0859ddfe.js"},{"revision":"a2760511c65806022ad20adf74370ff3","url":"window.svg"},{"revision":"c0af2f507b369b085b35ef4bbe3bcf1e","url":"vercel.svg"},{"revision":"8e061864f388b47f33a1c3780831193e","url":"next.svg"},{"revision":"6a2aabd03ed3b07dbee34cf0e4a33d08","url":"manifest.json"},{"revision":"874adb66cec468613e784cf722375fd5","url":"index.html"},{"revision":"2aaafa6a49b6563925fe440891e32717","url":"globe.svg"},{"revision":"d09f95206c3fa0bb9bd9fefabfd0ea71","url":"file.svg"},{"revision":"c30c7d42707a47a3f4591831641e50dc","url":"favicon.ico"},{"revision":"e2345726f8c56822f3c99425572264ed","url":"_not-found.html"},{"revision":"e2345726f8c56822f3c99425572264ed","url":"404.html"},{"revision":"2f8c0f9c345c44479cc191676c632157","url":"_next/static/chunks/turbopack-340acf9f5b7c65ea.js"},{"revision":"3a939c72612905fee29a47c317adc9ee","url":"_next/static/chunks/fd5f064b2a3f9309.js"},{"revision":"dc1b9b9e538672eedcfd6454db56e256","url":"_next/static/chunks/ee727da944680740.js"},{"revision":"b9c3c3faef008dfb97fa62b6bde3eb98","url":"_next/static/chunks/b32a0963684b9933.js"},{"revision":"846118c33b2c0e922d7b3a7676f81f6f","url":"_next/static/chunks/a6dad97d9634a72d.js"},{"revision":"d42870418e77c20fa8ef187618f0e0a5","url":"_next/static/chunks/905417f9461b3b51.js"},{"revision":"e44e50bd5d167decc2601d3632645cfc","url":"_next/static/chunks/88e2f8c014d67f2c.css"},{"revision":"5fcc01f80632cedd173c6e7884e8c91b","url":"_next/static/chunks/42879de7b8087bc9.js"},{"revision":"b79018340d19c8c3f5f71e23738f4f13","url":"_next/static/chunks/1e510328958fd3cb.js"},{"revision":"b404e23d62d95bafd03ad7747cc0e88b","url":"_next/static/9i0OBYWFtbFBfbdXjhOAT/_ssgManifest.js"},{"revision":"d751713988987e9331980363e24189ce","url":"_next/static/9i0OBYWFtbFBfbdXjhOAT/_clientMiddlewareManifest.json"},{"revision":"3f290ecb505664f59e6ec20e14f7fccd","url":"_next/static/9i0OBYWFtbFBfbdXjhOAT/_buildManifest.js"}] || [];

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
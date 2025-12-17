importScripts('/workbox-sw.js');

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => clients.claim());

let precacheManifest = [{"revision":"a2760511c65806022ad20adf74370ff3","url":"public/window.svg"},{"revision":"c0af2f507b369b085b35ef4bbe3bcf1e","url":"public/vercel.svg"},{"revision":"8e061864f388b47f33a1c3780831193e","url":"public/next.svg"},{"revision":"562adc8f60846db2ad9328fa3f71e25f","url":"public/manifest.json"},{"revision":"2aaafa6a49b6563925fe440891e32717","url":"public/globe.svg"},{"revision":"d09f95206c3fa0bb9bd9fefabfd0ea71","url":"public/file.svg"},{"revision":"c30c7d42707a47a3f4591831641e50dc","url":"public/favicon.ico"},{"revision":"58e0d01ae035b98d3e14bf7a99be13cc","url":".next/static/chunks/turbopack-0e5438e345ce1bc8.js"},{"revision":"3a939c72612905fee29a47c317adc9ee","url":".next/static/chunks/fd5f064b2a3f9309.js"},{"revision":"8d54838240304866dded94d41315f017","url":".next/static/chunks/fac5ae1e3fcd988d.js"},{"revision":"db795236392d00f71763387d6f58f0bb","url":".next/static/chunks/f39efe183210d53e.css"},{"revision":"c2453c7a5958fd37694826b0a0d211bf","url":".next/static/chunks/edda14529ded6063.js"},{"revision":"d8cad7cb86f1c92aa32d7b2a16411130","url":".next/static/chunks/c73ff364ca3634a4.js"},{"revision":"846118c33b2c0e922d7b3a7676f81f6f","url":".next/static/chunks/a6dad97d9634a72d.js"},{"revision":"5fcc01f80632cedd173c6e7884e8c91b","url":".next/static/chunks/42879de7b8087bc9.js"},{"revision":"bc313444ee4f9217be36c8806de038ad","url":".next/static/chunks/25393690ece2b925.js"},{"revision":"b404e23d62d95bafd03ad7747cc0e88b","url":".next/static/5fBycNN6sywG6aFBbxnSw/_ssgManifest.js"},{"revision":"3f290ecb505664f59e6ec20e14f7fccd","url":".next/static/5fBycNN6sywG6aFBbxnSw/_buildManifest.js"}] || [];

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
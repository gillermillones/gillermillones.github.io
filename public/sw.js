importScripts('/workbox-sw.js');

self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => clients.claim());

workbox.precaching.precacheAndRoute([
  {"revision":"6b7eee73a1415d1695c8b2bd53858b00","url":"workbox-0859ddfe.js"},
  {"revision":"a2760511c65806022ad20adf74370ff3","url":"window.svg"},
  {"revision":"c0af2f507b369b085b35ef4bbe3bcf1e","url":"vercel.svg"},
  {"revision":"8e061864f388b47f33a1c3780831193e","url":"next.svg"},
  {"revision":"562adc8f60846db2ad9328fa3f71e25f","url":"manifest.json"},
  {"revision":"2aaafa6a49b6563925fe440891e32717","url":"globe.svg"},
  {"revision":"d09f95206c3fa0bb9bd9fefabfd0ea71","url":"file.svg"},
  {"revision":"c30c7d42707a47a3f4591831641e50dc","url":"favicon.ico"}
  //, {"revision":"123456","url":"index.html"}
  ] || []);

workbox.routing.registerRoute(
  /^\/api\//,
  new workbox.strategies.NetworkFirst({
    cacheName: 'api-cache',
    networkTimeoutSeconds: 3,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 86400,
      }),
    ],
  }),
  'GET'
);

workbox.routing.registerRoute(
  /^\/$/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'html-cache',
  }),
  'GET'
);
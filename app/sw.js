importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.6.2/workbox-sw.js');

self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => clients.claim());

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

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
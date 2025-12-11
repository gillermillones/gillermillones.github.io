importScripts('/workbox-sw.js');

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => clients.claim());

let precacheManifest = self.__WB_MANIFEST || [];

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
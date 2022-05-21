const ONE_MINUTE = 60
const ONE_HOUR = 60 * ONE_MINUTE
const ONE_DAY = 24 * ONE_HOUR

export const CACHE_PAGES = {
  edge: {
    maxAgeSeconds: 5 * ONE_MINUTE,
    staleWhileRevalidateSeconds: ONE_HOUR,
  },
  browser: {
    maxAgeSeconds: 0,
    serviceWorkerSeconds: ONE_HOUR,
  },
}

export const CACHE_ASSETS = {
  edge: {
    maxAgeSeconds: ONE_DAY,
    forcePrivateCaching: true,
  },
  browser: {
    maxAgeSeconds: 0,
    serviceWorkerSeconds: ONE_DAY,
  },
}

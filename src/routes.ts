import { CACHE_ASSETS } from './cache'
import { Router } from '@layer0/core/router'
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler'

export default new Router()
  // L0 specific files
  .match('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('dist/service-worker.js')
  })
  .match('/l0_main.js', ({ serveStatic, cache }) => {
    cache(CACHE_ASSETS)
    serveStatic('dist/browser.js')
  })
  // Homepage
  .match('/', shoppingFlowRouteHandler)
  // Everything back from origin
  .fallback(({ proxy }) => {
    proxy('origin')
  })

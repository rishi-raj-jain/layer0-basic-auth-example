import { CACHE_PAGES } from './cache'
import transformResponse from './transform'
import { RouteHandler } from '@layer0/core/router/Router'

const handler: RouteHandler = async ({ cache, removeUpstreamResponseHeader, setResponseHeader, updateResponseHeader, proxy }) => {
  cache(CACHE_PAGES)
  removeUpstreamResponseHeader('set-cookie')
  removeUpstreamResponseHeader('cache-control')
  setResponseHeader('cache-control', 'public, max-age=86400')
  updateResponseHeader('location', /https:\/\/docs\.layer0\.co\//gi, '/')
  proxy('origin', { transformResponse })
}

export default handler

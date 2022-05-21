import cheerio from 'cheerio'
import Request from '@layer0/core/router/Request'
import Response from '@layer0/core/router/Response'

export default function transformResponse(response: Response, request: Request) {
  if (response.body) {
    const $ = cheerio.load(response.body)

    $('head').append(`
      <script src="/__layer0__/cache-manifest.js" defer="defer"></script>
      <script src="/l0_main.js" defer="defer"></script>
    `)

    response.body = $.html()
      .replace(/\{ display\: none\; \}/g, '{}')
      .replace(/\opacity\: 0\;/g, '')
      .replace(/\visibility\: hidden;/g, '')
      .replace(/\=\"\/\//g, '="https://')
      .replace(/https?:\/\/docs\.layer0\.co\//g, '/')
      .replace(/\?layer0\_dt\_pf\=1/g, '')
  }
}

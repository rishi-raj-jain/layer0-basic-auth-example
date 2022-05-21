import { Router } from '@layer0/core/router'

export default new Router()
  // BASIC_AUTH_USERNAME= rishi18304@iiitd.ac.in, BASIC_AUTH_PASSWORD= Layer0 by Limelight
  // Authorization: Basic cmlzaGkxODMwNEBpaWl0ZC5hYy5pbjpMYXllcjAgYnkgTGltZWxpZ2h0
  // Add environement variables: https://docs.layer0.co/guides/environments#environment-variables
  .requireBasicAuth({
    username: process.env.BASIC_AUTH_USERNAME || 'rishi18304@iiitd.ac.in',
    password: process.env.BASIC_AUTH_PASSWORD || 'Layer0 by Limelight',
  })
  // Homepage
  .match('/:path*', ({ redirect }) => {
    redirect('/:path*')
  })

import { Middleware } from '@nuxt/types'

const homeMiddleware: Middleware = (ctx) => {
  console.log('Log from home middleware')
}

export default homeMiddleware;

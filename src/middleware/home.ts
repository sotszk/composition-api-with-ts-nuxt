import { Middleware } from '@nuxt/types'

const homeMiddleware: Middleware = (ctx) => {
  console.log('ctx in middleware:', ctx);
}

export default homeMiddleware;

import { Middleware } from '@nuxt/types'

const homeMiddleware: Middleware = () => {
  console.log('Log from home middleware')
}

export default homeMiddleware

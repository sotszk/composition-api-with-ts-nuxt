import { Plugin } from '@nuxt/types'
import ky from 'ky-universal'
// const api = ky.create({ prefixUrl: 'https://httpbin.org' })

type Url = string
type Options = object

interface ApiClient {
  get(url: Url, options: Options): any;
  post(url: Url, options: Options): any;
  put(url: Url, options: Options): any;
  delete(url: Url, options: Options): any;
}

const apiClient: ApiClient = {
  get(url, options) {
    return ky.get(url, options);
  },
  post(url, options) {
    return ky.post(url, options);
  },
  put(url, options) {
    return ky.put(url, options);
  },
  delete(url, options) {
    return ky.delete(url, options);
  },
}

declare module 'vue/types/vue' {
  interface Vue {
    $_apiClient: ApiClient
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $_apiClient: ApiClient
  }
}

const apiClientPlugin: Plugin = (ctx, inject) => {
  inject('_apiClient', apiClient)
}

export default apiClientPlugin

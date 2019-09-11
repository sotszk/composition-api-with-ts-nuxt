import { Plugin } from '@nuxt/types'
import ky from 'ky-universal'
// const api = ky.create({ prefixUrl: 'https://httpbin.org' })

type Url = string
type Options = object

export interface ApiClient {
  get(url: Url, options: Options): any
  post(url: Url, options: Options): any
  put(url: Url, options: Options): any
  delete(url: Url, options: Options): any
  head(url: Url, options: Options): any
}

const apiClient: ApiClient = {
  get(url, options) {
    return ky.get(url, options)
  },
  post(url, options) {
    return ky.post(url, options)
  },
  put(url, options) {
    return ky.put(url, options)
  },
  delete(url, options) {
    return ky.delete(url, options)
  },
  head(url, options) {
    return ky.head(url, options)
  },
}

const apiClientPlugin: Plugin = (_, inject) => {
  inject('_apiClient', apiClient)
}

export default apiClientPlugin

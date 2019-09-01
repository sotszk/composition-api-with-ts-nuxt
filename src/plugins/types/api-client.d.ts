import Vue from 'vue'
import { ApiClient } from '../api-client'

declare module 'vue/types/vue' {
  interface Vue {
    $_apiClient: ApiClient // eslint-disable-line
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $_apiClient: ApiClient // eslint-disable-line
  }
}

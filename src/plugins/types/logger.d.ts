import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $_logger(msg: string): void // eslint-disable-line
  }
}

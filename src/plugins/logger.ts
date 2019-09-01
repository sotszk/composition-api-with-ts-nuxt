import Vue from 'vue'

Vue.prototype.$_logger = (msg: string): void => {
  console.log(msg)
}

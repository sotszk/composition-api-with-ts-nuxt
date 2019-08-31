<template>
  <div>
    <h1>{{ title }}</h1>
    <input v-model="title" type="text">
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'

export default createComponent({
  asyncData () {
    return {}
  },

  setup () {
    const title: string = reactive('Hello Type safety world!')

    return {
      title
    }
  }
})
</script>

<style lang="css" scoped>
</style>

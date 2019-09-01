<template>
  <div>
    <h1>{{ title }}</h1>
    <input v-model="title" type="text" placeholder="hogehoge" />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from '@vue/composition-api'

export default {
  asyncData() {
    return {}
  },

  setup() {
    const title = ref('Hello Type safety world!')

    onMounted(() => {
      setTimeout(() => {
        title.value = 'Good night. Type safety world.'
      }, 1000)
    })

    return {
      title,
    }
  },
}
</script>

<style lang="css" scoped></style>

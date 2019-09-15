<template>
  <div>
    <h1>{{ title }}</h1>
    <input v-model="title" type="text" placeholder="hogehoge" />
    <div>{{ store.state.count }}</div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from '@vue/composition-api'
import { useStore } from '@u3u/vue-hooks'

export default {
  middleware: ['home'],

  asyncData() {
    return {}
  },

  setup() {
    const title = ref('Hello Type safety world!')
    const store: any = useStore()
    console.log('count', store.value.state.count)
    console.log('obj', store.value.state.obj)

    onMounted(() => {
      setTimeout(() => {
        title.value = 'Good night. Type safety world.'
      }, 1000)
    })

    return {
      title,
      store,
    }
  },
}
</script>

<style lang="css" scoped></style>

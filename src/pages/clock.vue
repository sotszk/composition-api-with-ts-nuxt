<template>
  <div>
    <Clock>
      <template v-slot="{ time }">
        <div>{{ time.toLocaleTimeString() }}</div>
      </template>
    </Clock>

    <hr />

    <List :items="nameList" inline>
      <template v-slot="{ item }">
        <div>{{ item.name }}</div>
      </template>
    </List>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from '@vue/composition-api'
import Clock from '~/components/Clock.vue'
import List from '~/components/List.vue'

type NameList = {
  id: number
  name: string
}

export default {
  components: {
    Clock,
    List,
  },

  setup() {
    const nameList: Ref<NameList[]> = ref([
      { id: 1, name: 'hoge' },
      { id: 2, name: 'fuga' },
      { id: 3, name: 'poco' },
    ])

    return {
      nameList,
    }
  },
}
</script>

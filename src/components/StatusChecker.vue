<template>
  <div>
    <h2>STATUS CHECKER</h2>
    <p>{{ status }}</p>
    <p>{{ statusMsg }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { computed } from '@vue/composition-api'
import { Status } from '~/hooks/useChangeStatus'

export default Vue.extend({
  props: {
    status: {
      type: String,
      required: false,
      default: Status.TODO,
    } as PropOptions<string>,
  },

  setup(props) {
    const statusMsg = computed(() => `今の状態は ${props.status} どぇす。`)
    return {
      statusMsg,
    }
  },
})
</script>

<template>
  <div>
    <h2>STATUS CHECKER</h2>
    <p>{{ status }}</p>
    <p>{{ statusMsg }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { computed } from '@vue/composition-api'
import { Status } from '~/hooks/useChangeStatus'

export default Vue.extend({
  props: {
    status: {
      type: String as PropType<string>,
      required: false,
      default: Status.TODO,
    },
  },

  setup(props) {
    // const { status } = props // NOTE: 分割代入すると computed が動かない？
    const statusMsg = computed(() => `今の状態は ${props.status} どぇす。`)
    return {
      statusMsg,
    }
  },
})
</script>

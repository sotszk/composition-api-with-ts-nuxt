<template>
  <div>
    <h1 ref="titleRef">TypeScript Playground</h1>
    <button type="button" @click="onClickChangeStatusBtn">Change Status</button>
    <StatusChecker :status="status" />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from '@vue/composition-api'
import useChangeStatus from '~/hooks/useChangeStatus'
import StatusChecker from '~/components/StatusChecker.vue'

export default {
  components: {
    StatusChecker,
  },

  setup() {
    const titleRef = ref(null)
    const { status, toggleStatus } = useChangeStatus()

    const onClickChangeStatusBtn = () => {
      toggleStatus()
    }

    onMounted(() => {
      const el: any = titleRef.value
      el.style.color = '#338'
    })

    return {
      status,
      onClickChangeStatusBtn,
      titleRef,
    }
  },
}
</script>

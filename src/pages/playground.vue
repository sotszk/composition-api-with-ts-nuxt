<template>
  <div>
    <h1>TypeScript Playground</h1>
    <button type="button" @click="onClickChangeStatusBtn">Change Status</button>
    <StatusChecker :status="status" />
  </div>
</template>

<script lang="ts">
import useChangeStatus from '~/hooks/useChangeStatus'
import StatusChecker from '~/components/StatusChecker.vue'

export default {
  components: {
    StatusChecker,
  },

  setup() {
    const { status, toggleStatus } = useChangeStatus()

    const onClickChangeStatusBtn = () => {
      toggleStatus()
    }

    return {
      status,
      onClickChangeStatusBtn,
    }
  },
}
</script>

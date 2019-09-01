<template>
  <div>
    <h1>TypeScript Playground</h1>
    <button type="button" @click="onClickChangeStatusBtn">Change Status</button>
    <StatusChecker :status="status" />
  </div>
</template>

<script lang="ts">
import useChangeStatus, { Status } from '~/hooks/useChangeStatus'
import StatusChecker from '~/components/StatusChecker.vue'

export default {
  components: {
    StatusChecker,
  },

  setup() {
    const { status } = useChangeStatus()

    const onClickChangeStatusBtn = () => {
      status.value = status.value === Status.TODO ? Status.DONE : Status.TODO
    }

    return {
      status,
      onClickChangeStatusBtn,
    }
  },
}
</script>

<template>
  <div>
    <h1 ref="titleRef">TypeScript Playground</h1>
    <button type="button" @click="onClickChangeStatusBtn">Change Status</button>
    <StatusChecker :status="status" />
  </div>
</template>

<script lang="ts">
import { ref, toRefs, reactive, onMounted } from '@vue/composition-api'
import useChangeStatus from '~/hooks/useChangeStatus'
import StatusChecker from '~/components/StatusChecker.vue'

export default {
  components: {
    StatusChecker,
  },

  setup() {
    // NOTE: reactive with Array
    const unwrapTestState = reactive({
      list: [reactive({ count: ref(0) })],
    })
    const newItem = reactive({ count: ref(10) })
    const newItem2 = reactive({ count: 10 })
    unwrapTestState.list.push(newItem)
    unwrapTestState.list.push(newItem2)
    console.log(unwrapTestState.list[0].count === 0) // Unwrap される（value は不要）
    console.log(unwrapTestState.list[1].count === 10)
    console.log(unwrapTestState.list[2].count === 10)

    // NOTE: template ref
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
      ...toRefs({
        status,
      }),
      onClickChangeStatusBtn,
      titleRef,
    }
  },
}
</script>

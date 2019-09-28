<template>
  <div>
    <div>Clock Component</div>
    <slot :time="time">
      It is overridden.
    </slot>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from '@vue/composition-api'

export default {
  setup() {
    const time: Ref<Date> = ref(new Date())

    return {
      time,
    }
  },
}
</script>

<style></style>

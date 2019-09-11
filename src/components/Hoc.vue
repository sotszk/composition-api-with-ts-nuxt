<template>
  <div>
    <slot :some="some" :them="them" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      some: 'some',
      them: 'them',
    }
  },
}
</script>

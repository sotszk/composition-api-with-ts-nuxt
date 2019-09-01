<template>
  <div>
    <Navigation />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation,
  },
}
</script>

<style lang="css" scoped></style>

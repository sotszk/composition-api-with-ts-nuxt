<template>
  <div>
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import Navigation from '~/components/Navigation'

export default Vue.extend({
  components: {
    Navigation
  }
})
</script>

<style lang="css" scoped>
</style>

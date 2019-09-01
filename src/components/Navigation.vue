<template>
  <nav class="nav">
    <span v-for="item in navItems" :key="item.name" class="nav-item">
      <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
    </span>
  </nav>
</template>

<script lang="ts">
export default {
  setup() {
    const navItems = [
      { name: 'TOP', path: '/' },
      { name: 'ABOUT', path: '/about' },
      { name: 'PLAYGROUND', path: '/playground' },
    ]

    return {
      navItems,
    }
  },
}
</script>

<style lang="css" scoped>
.nav-item {
  display: inline-block;
  margin-right: 8px;
}
</style>

<template>
  <ul :class="['list', { 'list--inline': inline }]">
    <li v-for="item in items" :key="key(item)" class="list__item">
      <slot :item="item" />
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    const key = (item: any): string => {
      return item.id
    }

    return {
      key,
    }
  },
}
</script>

<style>
.list__item {
  list-style-type: circle;
}

.list--inline {
  list-style-type: none;
  padding-left: 0;
}

.list--inline > .list__item {
  display: inline-block;
}

.list--inline > .list__item:not(:first-child) {
  margin-left: 16px;
}
</style>

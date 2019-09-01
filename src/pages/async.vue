<template>
  <div>
    <h1>Async Playground</h1>

    <div>
      <h2>Slideshow</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ slideshow.title }}</td>
            <td>{{ slideshow.author }}</td>
            <td>{{ slideshow.date }}</td>
          </tr>
        </tbody>
      </table>

      <h3>Items</h3>
      <table v-for="slide in slideshow.slides" :key="slide.title" border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ slide.title }}</td>
            <td>{{ slide.type }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Slide {
  title: string
  type: string
}

interface Slideshow {
  title: string
  author: string
  date: string | Date
  slides: Array<Slide>
}

export default Vue.extend({
  async asyncData({ error, app }) {
    let slideshow: Slideshow
    try {
      const response = await app.$_apiClient
        .get('https://httpbin.org/json')
        .json()
      slideshow = response.slideshow
    } catch (err) {
      console.log(err)
      return error(err)
    }

    return {
      slideshow,
    }
  },

  setup(_, { root }) {
    root.$_logger('Hello logger')
    return {}
  },
})
</script>

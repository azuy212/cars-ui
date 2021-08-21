<template>
  <v-container>
    <div class="title my-5">How To Buy</div>
    <div v-html="content"></div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Content } from '@/interfaces/Content'
export default Vue.extend({
  layout: 'car',
  async asyncData({ $axios }) {
    const { content } = await $axios.$get<Content>('/content/BUY')
    return { content }
  },
})
</script>
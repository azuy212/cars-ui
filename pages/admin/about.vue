<template>
  <v-container>
    <div class="title my-5">Who are we</div>
    <client-only>
      <AdminTextArea v-model="content" class="my-5" />
    </client-only>
    <v-btn color="primary" @click="handleSave">Save</v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Content } from '@/interfaces/Content'

export default Vue.extend({
  layout: 'admin',

  data() {
    return {
      content: '',
    }
  },

  async mounted() {
    const { content } = await this.$axios.$get<Content>('/content/ABOUT')
    this.content = content
  },

  methods: {
    async handleSave() {
      try {
        await this.$axios.$post<Content>('/content', {
          type: 'ABOUT',
          content: this.content,
        })
      } catch (error) {}
    },
  },
})
</script>
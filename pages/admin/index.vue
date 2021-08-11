<template>
  <div>Admin</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'admin',

  async asyncData({ $axios, redirect }) {
    try {
      if ($axios.defaults.headers.common.Authorization?.includes?.('Bearer')) {
        await $axios.$get('/auth/profile')
      } else {
        throw new Error('No Token')
      }
    } catch (error) {
      redirect('/admin/login')
    }
  },
})
</script>
<template>
  <v-container>
    <client-only>
      <AdminTextArea v-model="details" class="my-5" />
    </client-only>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'admin',

  data() {
    return {
      details: '',
    }
  },
})
</script>
<template>
  <v-container fluid class="fill-height">
    <CarDetail />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'car',
  asyncData({ params }) {
    return { carId: params.id }
  },
})
</script>
<template>
  <v-container fluid class="fill-height">
    <CarDetail :car-id="carId" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'car',
  asyncData({ params }): { carId: string } {
    return { carId: params.id }
  },
})
</script>
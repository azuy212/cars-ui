<template>
  <div>
    <CarDetailHeader />
    <v-container fluid class="fill-height">
      <CarDetail />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  asyncData({ params }) {
    return { carId: params.id }
  },
})
</script>
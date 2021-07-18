<template>
  <div>
    <AppMainHeader />
    <v-container>
      <AppMainSearch />
      <CarList :cars="cars" />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Car } from '@/interfaces/Car'

export default Vue.extend({
  computed: {
    ...(mapGetters(['cars']) as { cars: () => Car[] }),
  },
  mounted() {
    this.$store.dispatch('fetchCars')
  },
})
</script>
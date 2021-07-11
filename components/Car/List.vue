<template>
  <v-container class="mt-15">
    <v-row align="center" justify="center">
      <v-col v-for="car in cars" :key="car._id" cols="12" lg="3" md="4" sm="6">
        <CarListItem :car="car" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Car } from '@/interfaces/Car'

export default Vue.extend({
  computed: {
    ...(mapGetters(['cars']) as { cars: () => Car[] }),
  },
})
</script>
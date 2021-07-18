<template>
  <v-container>
    <v-row>
      <v-col lg="4" md="4">
        <v-card outlined>
          <CarFilters />
        </v-card>
      </v-col>
      <v-col lg="8" md="8">
        <v-row>
          <v-col>
            <div class="title">
              <strong>{{ filteredCars.length }}</strong
              >&nbsp;Cars match your search criteria
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <CarList
              :cars="filteredCars"
              :cars-cols="{ lg: 4, md: 6, sm: 12 }"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Car } from '@/interfaces/Car'
import { mapGetters } from 'vuex'

export default Vue.extend({
  layout: 'car',
  computed: {
    ...(mapGetters('search', ['filteredCars']) as {
      filteredCars: () => Car[]
    }),
  },
})
</script>
<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="6">
          <v-card-title class="text-h5 font-weight-medium">
            {{ car.make }} {{ car.model }} ({{ car.year }})
          </v-card-title>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="6">
          <v-card-title
            class="
              text-h5
              primary--text
              font-weight-bold
              justify-md-end justify-sm-center
            "
          >
            {{ car.price | currency }}
          </v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="2" md="3" lg="2">
          <v-btn depressed text color="primary">
            <v-icon class="mr-2">mdi-calendar</v-icon>
            {{ car.year }}
          </v-btn>
        </v-col>
        <v-col sm="2" md="3" lg="2">
          <v-btn depressed text color="primary">
            <v-icon class="mr-2">mdi-engine</v-icon>
            {{ car.engineCapacity }} CC
          </v-btn>
        </v-col>
        <v-col sm="2" md="3" lg="2">
          <v-btn depressed text color="primary">
            <v-icon class="mr-2">mdi-car-door</v-icon>
            {{ car.door }} Door
          </v-btn>
        </v-col>
        <v-col sm="2" md="3" lg="2">
          <v-btn depressed text color="primary">
            <v-icon class="mr-2">mdi-gas-station</v-icon>
            {{ car.fuelType[0] }}
          </v-btn>
        </v-col>
        <v-col sm="2" md="3" lg="2">
          <v-btn depressed text color="primary">
            <v-icon class="mr-2">mdi-car-shift-pattern</v-icon>
            {{ car.transmission }}
          </v-btn>
        </v-col>
        <v-col sm="2" md="3" lg="2">
          <v-btn depressed text color="primary">
            <v-icon class="mr-2">mdi-palette</v-icon>
            {{ car.color }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Car } from '@/interfaces/Car'

export default Vue.extend({
  computed: {
    ...(mapGetters('detail', ['car']) as { car: () => Car }),
  },
})
</script>
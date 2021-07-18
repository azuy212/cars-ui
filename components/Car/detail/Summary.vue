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
        <v-col v-for="item in summary" :key="item.text" sm="6" md="6" lg="4">
          <v-btn depressed text color="primary">
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.text }}
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div class="title">Features</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="feature in car.features"
              :key="feature"
              sm="6"
              md="6"
              lg="6"
            >
              <v-btn depressed text class="caption" :ripple="false">
                <v-icon left small>mdi-star</v-icon>
                {{ feature | casing }}
              </v-btn>
            </v-col>
          </v-row>
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
    summary(): Array<{ icon: string; text: string | number }> {
      return [
        { icon: 'mdi-calendar', text: this.car.year },
        { icon: 'mdi-engine', text: `${this.car.engineCapacity} CC` },
        { icon: 'mdi-car-door', text: `${this.car.door} Doors` },
        { icon: 'mdi-car-shift-pattern', text: this.car.transmission },
        { icon: 'mdi-palette', text: this.car.color },
        ...this.car.fuelType.map((fuelType) => ({
          icon: 'mdi-gas-station',
          text: fuelType,
        })),
      ]
    },
  },
})
</script>
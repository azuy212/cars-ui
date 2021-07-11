<template>
  <v-card height="100%">
    <v-responsive v-if="car" :aspect-ratio="2 / 1">
      <v-img height="250" :src="primaryImage"></v-img>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>REGESTERED {{ car.year }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title class="text-right font-weight-bold text-h5">{{
            formattedPrice
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-title>
        {{ car.make }} {{ car.model }}
      </v-card-title>

      <v-card-text>
        <v-chip-group column>
          <v-chip class="text-caption">{{ car.engineCapacity }} CC</v-chip>
          <v-chip class="text-caption">{{ car.transmission }}</v-chip>
          <v-chip class="text-caption">{{ car.color }}</v-chip>
          <v-chip class="text-caption">{{ car.door }} DOORS</v-chip>
          <v-chip class="text-caption">{{ car.fuelType.join('+') }}</v-chip>
        </v-chip-group>
      </v-card-text>
    </v-responsive>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Car } from '@/interfaces/Car'

export default Vue.extend({
  props: {
    car: {
      type: Object as PropType<Car>,
      default: () => ({} as Car),
    },
  },
  computed: {
    primaryImage(): string | undefined {
      return this.car.assets.find((asset) => asset.primary)?.source
    },
    formattedPrice(): string {
      return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      }).format(this.car.price)
    },
  },
})
</script>

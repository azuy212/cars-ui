<template>
  <v-card height="100%" @click="handleClick">
    <v-responsive v-if="car" :aspect-ratio="2 / 1">
      <v-img height="250" :src="primaryImage"></v-img>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>REGESTERED {{ car.year }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title
            class="primary--text text-right font-weight-bold text-h5"
          >
            {{ car.price | currency }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-title> {{ car.make }} {{ car.model }} </v-card-title>

      <v-card-text>
        <v-chip-group column>
          <v-chip
            v-for="chip in summaryChips"
            :key="chip"
            color="primary"
            class="text-caption"
          >
            {{ chip }}
          </v-chip>
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
    summaryChips(): string[] {
      return [
        `${this.car.engineCapacity} CC`,
        `${this.car.transmission}`,
        `${this.car.color}`,
        `${this.car.door} DOORS`,
        `${this.car.fuelType.join('+')}`,
      ]
    },
  },
  methods: {
    handleClick() {
      this.$store.commit('detail/SET_CAR', this.car)
      this.$router.push({ name: 'car-id', params: { id: this.car._id! } })
    },
  },
})
</script>

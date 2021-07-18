<template>
  <v-row>
    <v-col v-for="car in cars" :key="car._id" v-bind="carsCols">
      <CarListItem :car="car" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Car } from '@/interfaces/Car'

export default Vue.extend({
  props: {
    cars: {
      type: Array as PropType<Car[]>,
      default: () => [],
    },
    carsCols: {
      type: Object as PropType<{ [key in 'lg' | 'md' | 'sm']: number }>,
      default: () => ({ lg: 3, md: 4, sm: 6 }),
    },
  },
})
</script>
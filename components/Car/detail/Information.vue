<template>
  <v-card flat>
    <v-card-title> General Information </v-card-title>
    <v-card-text>
      <div class="list__overflow">
        <dl class="list list--table">
          <template v-for="(item, i) in items">
            <div :key="i" class="list__row">
              <dt class="list__label">{{ item.label }}</dt>
              <dd class="list__value">{{ item.value }}</dd>
            </div>
          </template>
        </dl>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Car } from '@/interfaces/Car'

export default Vue.extend({
  computed: {
    ...(mapGetters('detail', ['car']) as { car: () => Car }),
    items(): Array<{ label: string; value: string | number }> {
      return [
        { label: 'Make', value: this.car.make },
        { label: 'Model', value: this.car.model },
        { label: 'Year', value: this.car.year },
        { label: 'Engine Capacity', value: `${this.car.engineCapacity} CC` },
        { label: 'Color', value: this.car.color },
        { label: 'Doors', value: this.car.door },
        { label: 'Fuel Type', value: this.car.fuelType.join(' + ') },
        { label: 'Steering Position', value: this.car.steeringPosition },
        { label: 'Transmission', value: this.car.transmission },
        { label: 'Body Type', value: this.car.bodyType.replace(/_/g, ' ') },
      ]
    },
  },
})
</script>

<style scoped lang="scss">
.list {
  width: 100%;
}

.list__overflow {
  overflow-x: auto;
  max-width: 100%;
}

.list--table {
  display: table;
  border: 1px solid lightgrey;
  border-top: none;

  .list__row {
    display: table-row;
  }

  .list__label {
    white-space: nowrap;
    color: #00695c;
  }
}

.list--table .list__label,
.list--table .list__value {
  border-top: 1px solid lightgrey;
  display: table-cell;
  padding: 1rem;
}
</style>
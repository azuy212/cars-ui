<template>
  <v-list expand>
    <v-list-group
      v-for="item in items"
      :key="item.title"
      :prepend-icon="item.action"
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <template v-if="isRangeField(getFieldOptions(item))">
        <v-list-item-group v-model="models[item.field]" multiple>
          <v-list-item v-for="option in getFieldOptions(item)" :key="option">
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" color="primary"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-subtitle>{{
                  option | casing
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </template>
      <template v-else>
        <v-range-slider
          v-model="models[item.field]"
          :min="getFieldOptions(item).min"
          :max="getFieldOptions(item).max"
          v-bind="item.props"
        >
          <template v-slot:prepend>
            <span class="ml-2 caption"
              >Min: {{ getMinMaxValues(item).min }}</span
            >
          </template>
          <template v-slot:append>
            <span class="caption">Max: {{ getMinMaxValues(item).max }}</span>
          </template>
        </v-range-slider>
      </template>
    </v-list-group>
    <v-btn block color="primary" large @click="handleSubmit"> Find Cars </v-btn>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Filters } from '@/interfaces/Car'

interface FilterItem {
  action: string
  title: string
  field: string
  type: 'multiselect' | 'range'
}

export default Vue.extend({
  data: () => ({
    models: {} as { [key in keyof Filters]: number[] },
    items: [
      {
        action: 'mdi-tag-outline',
        title: 'Make',
        type: 'multiselect',
        field: 'make',
      },
      {
        action: 'mdi-calendar',
        title: 'Year',
        type: 'range',
        field: 'year',
      },
      {
        action: 'mdi-currency-usd',
        title: 'Price',
        type: 'range',
        field: 'price',
        props: {
          step: 100,
        },
      },
      {
        action: 'mdi-car-shift-pattern',
        title: 'Transmission',
        type: 'multiselect',
        field: 'transmission',
      },
      {
        action: 'mdi-gas-station',
        title: 'Fuel Type',
        type: 'multiselect',
        field: 'fuelType',
      },
      {
        action: 'mdi-palette',
        title: 'Color',
        type: 'multiselect',
        field: 'color',
      },
      {
        action: 'mdi-engine',
        title: 'Engine Capacity',
        type: 'range',
        field: 'engineCapacity',
      },
      {
        action: 'mdi-car',
        title: 'Body Type',
        type: 'multiselect',
        field: 'bodyType',
      },
      {
        action: 'mdi-star',
        title: 'Features',
        type: 'multiselect',
        field: 'features',
      },
    ] as FilterItem[],
  }),

  computed: {
    form(): HTMLFormElement {
      return this.$refs.form as HTMLFormElement
    },
    ...(mapGetters('search', ['filters']) as { filters: () => Filters }),
  },

  watch: {
    filters: {
      immediate: true,
      handler() {
        const { make } = this.$route.query
        if (make) {
          this.$set(
            this.models,
            'make',
            make
              .toString()
              .split(',')
              .map((m) => this.filters.make.indexOf(m))
          )
        }
        this.models.price = [this.filters.price.min, this.filters.price.max]
        this.models.year = [this.filters.year.min, this.filters.year.max]
        this.models.engineCapacity = [
          this.filters.engineCapacity.min,
          this.filters.engineCapacity.max,
        ]
      },
    },
  },

  methods: {
    isRangeField(item: Filters[string]): item is string[] {
      return Array.isArray(item)
    },

    getFieldOptions(item: FilterItem) {
      return this.filters[item.field]
    },

    getMinMaxValues(item: FilterItem) {
      return {
        min: this.models[item.field]?.[0],
        max: this.models[item.field]?.[1],
      }
    },

    handleSubmit() {
      const mappedModel = Object.keys(this.models).reduce<
        Record<keyof Filters, Array<string | number>>
      >((acc, cur: keyof Filters) => {
        const curFilter = this.filters[cur]
        acc[cur] = this.models[cur].map((i) =>
          this.isRangeField(curFilter) ? curFilter[i] : i
        )
        return acc
      }, {})

      this.$store.dispatch('search/searchCars', mappedModel)
    },
  },
})
</script>
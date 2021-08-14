<template>
  <v-form ref="form" v-model="validForm" lazy-validation>
    <v-card>
      <v-card-title>Car Details</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <AdminFormCombobox v-model="make" label="Make" :items="makeItems" />
          </v-col>
          <v-col>
            <AdminFormCombobox
              v-model="model"
              label="Model"
              :items="modelItems"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="year"
              label="Year"
              type="number"
              shaped
              outlined
              counter="4"
              required
              :rules="[
                (v) => (v && v.length === 4) || 'Year must be valid (YYYY)',
              ]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="engineCapacity"
              label="Engine Capacity"
              suffix="CC"
              type="number"
              shaped
              outlined
            ></v-text-field>
          </v-col>
          <v-col>
            <AdminFormCombobox
              v-model="fuelType"
              label="Fuel Type"
              :items="fuelTypeItems"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="doors"
              label="Doors"
              type="number"
              shaped
              outlined
            ></v-text-field>
          </v-col>
          <v-col>
            <AdminFormCombobox
              v-model="bodyType"
              label="Body Type"
              :items="bodyTypeItems"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              :items="['AUTOMATIC', 'MANUAL']"
              label="Transmission"
              shaped
              outlined
            >
            </v-select>
          </v-col>
          <v-col>
            <v-select
              v-model="steeringPosition"
              :items="['LEFT', 'RIGHT']"
              label="Steering Position"
              shaped
              outlined
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <AdminFormCombobox
              v-model="color"
              label="Color"
              :items="colorItems"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="submit"> submit </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import { Car } from '~/interfaces/Car'
export default Vue.extend({
  data: () => ({
    validForm: false,
    make: '',
    model: '',
    year: null,
    fuelType: '',
    engineCapacity: null,
    bodyType: '',
    color: '',
    doors: null,
    steeringPosition: null,
    makeItems: [] as Array<string>,
    modelItems: [] as Array<string>,
    fuelTypeItems: [
      'PETROL',
      'HYBRID',
      'DIESEL',
      'CNG',
      'LPG',
      'ELECTRIC',
    ] as Array<string>,
    bodyTypeItems: [
      'COMPACT_SEDAN',
      'COMPACT_SUV',
      'CONVERTIBLE',
      'COUPE',
      'CROSSOVER',
      'DOUBLE_CABIN',
      'HATCHBACK',
      'HIGH_ROOF',
      'MICRO_VAN',
      'MINI_VAN',
      'MINI_VEHICLES',
      'MPV',
      'OFF-ROAD_VEHICLES',
      'PICK_UP',
      'SEDAN',
      'SINGLE_CABIN',
      'STATION_WAGON',
      'SUV',
      'TRUCK',
      'VAN',
    ] as Array<string>,
    colorItems: [] as Array<string>,
  }),

  computed: {
    form() {
      return this.$refs.form as HTMLFormElement
    },
  },

  async mounted() {
    try {
      this.makeItems = await this.$axios.$get<string[]>('/cars/filters/make')
    } catch (error) {}
  },

  methods: {
    submit() {
      const carObj = {
        make: this.make,
        model: this.model,
        year: Number(this.year),
        fuelType: this.fuelType,
        engineCapacity: this.engineCapacity,
        bodyType: this.bodyType,
        color: this.color,
        door: Number(this.doors),
        steeringPosition: this.steeringPosition,
      }
      if (this.$route.params.id === 'create') {
        this.$axios.$post<Car>('/cars', carObj)
      } else {
        this.$axios.$post<Car>(`/cars/${this.$route.params.id}`, carObj)
      }
    },
  },
})
</script>
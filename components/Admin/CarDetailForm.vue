<template>
  <ValidationObserver ref="obs" v-slot="{ invalid, validated, handleSubmit }">
    <v-form ref="form" v-model="validForm" lazy-validation>
      <v-card>
        <v-card-title>Car Details</v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Make"
                rules="required"
              >
                <AdminFormCombobox
                  v-model="make"
                  label="Make"
                  :items="makeItems"
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Model"
                rules="required"
              >
                <AdminFormCombobox
                  v-model="model"
                  label="Model"
                  :items="modelItems"
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Year"
                rules="required|digits:4"
              >
                <v-text-field
                  v-model="year"
                  label="Year"
                  type="number"
                  shaped
                  outlined
                  counter="4"
                  :success="valid"
                  :error-messages="errors"
                  :rules="[
                    (v) => (v && v.length === 4) || 'Year must be valid (YYYY)',
                  ]"
                />
              </validation-provider>
            </v-col>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Chassis No"
                rules="required"
              >
                <v-text-field
                  v-model="chassisNo"
                  label="Chassis No"
                  type="text"
                  shaped
                  outlined
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Registration Month"
                rules="required"
              >
                <v-select
                  v-model="registrationMonth"
                  label="Registration Month"
                  :items="registrationMonthItems"
                  shaped
                  outlined
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Engine Capacity"
                rules="required"
              >
                <v-text-field
                  v-model="engineCapacity"
                  label="Engine Capacity"
                  suffix="CC"
                  type="number"
                  shaped
                  outlined
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Fuel Type"
                rules="required"
              >
                <AdminFormCombobox
                  v-model="fuelType"
                  label="Fuel Type"
                  :items="fuelTypeItems"
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Doors"
                rules="required|digits:1"
              >
                <v-text-field
                  v-model="doors"
                  label="Doors"
                  type="number"
                  shaped
                  outlined
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Body Type"
                rules="required"
              >
                <AdminFormCombobox
                  v-model="bodyType"
                  label="Body Type"
                  :items="bodyTypeItems"
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Transmission"
                rules="required"
              >
                <v-select
                  v-model="transmission"
                  :items="['AUTO', 'MANUAL']"
                  label="Transmission"
                  shaped
                  outlined
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Steering Position"
                rules="required"
              >
                <v-select
                  v-model="steeringPosition"
                  :items="['LEFT', 'RIGHT']"
                  label="Steering Position"
                  shaped
                  outlined
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Color"
                rules="required"
              >
                <AdminFormCombobox
                  v-model="color"
                  label="Color"
                  :items="colorItems"
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Price"
                rules="required"
              >
                <v-text-field
                  v-model="price"
                  label="Price"
                  type="number"
                  shaped
                  outlined
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <validation-provider
                v-slot="{ errors, valid }"
                name="Features"
                rules="required"
              >
                <AdminFormCombobox
                  v-model="features"
                  label="Feature Type"
                  :items="featureItems"
                  :success="valid"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block
            color="primary"
            :disabled="invalid || !validated"
            @click="handleSubmit(submit)"
          >
            submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </ValidationObserver>
</template>

<script lang="ts">
import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { Car } from '~/interfaces/Car'
export default Vue.extend({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    validForm: false,
    make: '',
    model: '',
    year: null,
    features: '',
    fuelType: '',
    price: null,
    chassisNo: '',
    transmission: '',
    registrationMonth: '',
    engineCapacity: null,
    bodyType: '',
    color: '',
    doors: null,
    steeringPosition: null,
    makeItems: [] as Array<string>,
    modelItems: [] as Array<string>,
    featureItems: [] as Array<string>,
    registrationMonthItems: [
      'JANUARY',
      'FEBRUARY',
      'MARCH',
      'APRIL',
      'MAY',
      'JUNE',
      'JULY',
      'AUGUST',
      'SEPTEMBER',
      'OCTOBER',
      'NOVEMBER',
      'DECEMBER',
    ],
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
        features: this.features,
        price: Number(this.price),
        chassisNo: this.chassisNo,
        transmission: this.transmission,
        registrationMonth: this.registrationMonth,
        engineCapacity: Number(this.engineCapacity),
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
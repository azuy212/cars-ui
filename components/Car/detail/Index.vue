<template>
  <v-container>
    <v-card flat>
      <v-row>
        <v-col sm="6">
          <v-row>
            <v-col>
              <CarDetailImageSlider
                v-if="car.assets && car.assets.length > 0"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <CarDetailSummary />
            </v-col>
          </v-row>
        </v-col>
        <v-col sm="6">
          <v-row>
            <v-col>
              <CarDetailInformation />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <ContactForm />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Car } from '@/interfaces/Car'

export default Vue.extend({
  props: {
    carId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...(mapGetters('detail', ['car']) as { car: () => Car }),
  },

  mounted() {
    this.$store.dispatch('detail/fetchCar', this.carId)
  },
})
</script>
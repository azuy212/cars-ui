<template>
  <v-container>
    <v-card flat>
      <v-row>
        <v-col sm="6">
          <v-row>
            <v-col>
              <CarDetailImageSlider v-if="car.assets.length > 0" />
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
      <!-- <v-row class="d-flex d-sm-none d-none d-sm-flex d-md-none">
        <v-col>
          <v-row>
            <v-col><CarDetailImageSlider v-if="car.assets.length > 0" /></v-col>
          </v-row>
          <CarDetailSummary />
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
      </v-row> -->
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Car } from '@/interfaces/Car'

export default Vue.extend({
  computed: {
    ...(mapGetters('detail', ['car']) as { car: () => Car }),
  },

  mounted() {
    this.$store.commit(
      'detail/SET_CAR',
      (this.$store.state.cars as Car[]).find(
        (car) => car._id === this.$route.params.id
      )
    )
  },
})
</script>
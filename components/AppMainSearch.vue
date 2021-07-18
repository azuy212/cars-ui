<template>
  <v-row justify="center" class="mt-n16 mb-15">
    <v-card class="py-10 px-15">
      <v-row justify="center">
        <div class="text-h6 text-sm-h5 font-weight-bold">
          Find Your Dream Car!
        </div>
      </v-row>
      <v-row>
        <v-col cols="12" lg="5" md="5" sm="5">
          <v-select
            v-model="make"
            :items="makeItems"
            label="Make"
            @change="onMakeSelect"
          >
          </v-select>
        </v-col>
        <v-col cols="12" lg="5" md="5" sm="5">
          <v-select v-model="model" :items="modelItems" label="Model">
          </v-select>
        </v-col>
        <v-col cols="12" lg="2" md="2" sm="2" align-self="center">
          <v-btn
            color="primary"
            :block="$vuetify.breakpoint.smAndDown"
            small
            outlined
            @click="searchCar"
          >
            Search Car
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col sm="4">
          <v-btn
            color="primary"
            :block="$vuetify.breakpoint.smAndDown"
            small
            outlined
            @click="handleAdvanceFilterClick"
          >
            Advanced Filters
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    make: '',
    model: '',
    makeItems: [],
    modelItems: [],
  }),

  async mounted() {
    const { data } = await this.$axios.get(
      `${this.$config.serverURL}/cars/filters/make`
    )
    this.makeItems = data
  },

  methods: {
    handleAdvanceFilterClick() {
      this.$router.push({ name: 'car' })
    },

    searchCar() {
      this.$router.push({
        name: 'car',
        query: { make: this.make, model: this.model },
      })
    },

    async onMakeSelect(make: string) {
      const { data } = await this.$axios.get(
        `${this.$config.serverURL}/cars/filters/model`,
        { params: { make } }
      )
      this.modelItems = data
    },
  },
})
</script>
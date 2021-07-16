<template>
  <v-container class="mt-n16">
    <v-row justify="center">
      <v-card class="py-10 px-15">
        <v-row justify="center">
          <div class="text-h6 text-sm-h5 font-weight-bold">
            Find Your Dream Car!
          </div>
        </v-row>
        <v-row>
          <v-col cols="12" lg="5" md="5" sm="5">
            <v-select v-model="select" :items="items" label="Make"> </v-select>
          </v-col>
          <v-col cols="12" lg="5" md="5" sm="5">
            <v-select v-model="select" :items="items" label="Model"> </v-select>
          </v-col>
          <v-col
            cols="12"
            lg="2"
            md="2"
            sm="2"
            class="d-none d-sm-flex"
            align-self="center"
          >
            <v-btn color="primary" small outlined>Search Car</v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" class="d-flex d-sm-none">
          <v-col>
            <v-btn color="primary" block small outlined>Search Car</v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="d-none d-sm-flex" sm="4">
            <v-btn color="primary" small outlined>
              Advanced Filters
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
          <v-col class="d-flex d-sm-none">
            <v-btn color="primary" block small outlined>
              Advanced Filters
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    select: '',
    items: [],
  }),
})
</script>
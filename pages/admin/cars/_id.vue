<template>
  <v-container>
    <v-row>
      <v-col lg="8" md="6">
        <AdminCarDetailForm />
      </v-col>
      <v-col lg="4" md="6">
        <v-card outlined>B</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'admin',

  asyncData({ params }): { carId: string } {
    return { carId: params.id }
  },
})
</script>
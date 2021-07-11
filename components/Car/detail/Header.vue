<template>
  <v-toolbar color="primary" dark>
    <v-btn icon @click="handleBack">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-toolbar-title>
      {{ car.make }} {{ car.model }} ({{ car.year }})
    </v-toolbar-title>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Car } from '@/interfaces/Car'

export default Vue.extend({
  computed: {
    ...(mapGetters('detail', ['car']) as { car: () => Car }),
  },
  methods: {
    handleBack() {
      this.$router.back()
    },
  },
})
</script>
<template>
  <v-data-table
    :headers="headers"
    :items="cars"
    :options.sync="options"
    :server-items-length="totalCars"
    :loading="loading"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My Cars</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary">Add new Car</v-btn>
      </v-toolbar>
    </template>
    <template v-slot:item.thumbnail="{ item }">
      <v-img
        :src="item.assets.find((a) => a.primary).source"
        aspect-ratio="1.5"
        contain
      ></v-img>
    </template>
    <template v-slot:item.title="{ item }">
      <div>{{ item.make }} {{ item.model }} ({{ item.year }})</div>
    </template>
    <template v-slot:item.edit>
      <v-btn depressed text>
        <v-icon left>mdi-pencil</v-icon>
        Edit
      </v-btn>
    </template>
    <template v-slot:item.delete>
      <v-btn depressed text color="error">
        <v-icon left>mdi-delete</v-icon>
        Delete
      </v-btn>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue'
import { Car, Page } from '~/interfaces/Car'
import { DataTableOptions } from '~/interfaces/Common'

export default Vue.extend({
  data: () => ({
    dialogDelete: false,
    headers: [
      {
        text: '',
        value: 'thumbnail',
      },
      {
        text: '',
        value: 'title',
      },
      {
        text: '',
        value: 'edit',
      },
      {
        text: '',
        value: 'delete',
      },
    ],
    cars: [] as Array<Car>,
    options: {},
    totalCars: 0,
    loading: false,
  }),

  watch: {
    options: {
      handler(options: DataTableOptions) {
        this.fetchCars(options)
      },
      deep: true,
    },
  },

  methods: {
    async fetchCars({ page, itemsPerPage }: DataTableOptions) {
      this.loading = true
      const { content, totalElements } = await this.$axios
        .$get<Page<Car>>('/cars', {
          params: { page: page - 1, size: itemsPerPage },
        })
        .finally(() => (this.loading = false))
      this.cars = content
      this.totalCars = totalElements
    },
  },
})
</script>
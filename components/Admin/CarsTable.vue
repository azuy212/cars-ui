<template>
  <v-data-table
    class="elevation-1"
    :loading="loading"
    :headers="headers"
    :items="cars"
    :options.sync="options"
    :server-items-length="totalCars"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My Cars</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" nuxt to="/admin/cars/create">Add new Car</v-btn>
      </v-toolbar>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title>
            {{ editedItem.make }} {{ editedItem.model }} ({{ editedItem.year }})
          </v-card-title>
          <v-card-subtitle>
            Are you sure you want to delete this car ?
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="closeDelete">
              <v-icon left>mdi-cancel</v-icon>
              No
            </v-btn>
            <v-btn color="error" text @click="deleteItemConfirm">
              <v-icon left>mdi-delete</v-icon>
              Yes
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <template v-slot:[`item.thumbnail`]="{ item }">
      <v-img
        v-if="item.assets.find((a) => a.primary)"
        :src="item.assets.find((a) => a.primary).source"
        aspect-ratio="1"
        contain
      ></v-img>
    </template>
    <template v-slot:[`item.title`]="{ item }">
      <div>{{ item.make }} {{ item.model }} ({{ item.year }})</div>
    </template>
    <template v-slot:[`item.edit`]="{ item }">
      <v-btn depressed text nuxt :to="'/admin/cars/' + item._id">
        <v-icon left>mdi-pencil</v-icon>
        Edit
      </v-btn>
    </template>
    <template v-slot:[`item.delete`]="{ item }">
      <v-btn depressed text color="error" @click="deleteItem(item)">
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
        sortable: false,
      },
      {
        text: '',
        value: 'title',
        sortable: false,
      },
      {
        text: '',
        value: 'edit',
        sortable: false,
      },
      {
        text: '',
        value: 'delete',
        sortable: false,
      },
    ],
    cars: [] as Array<Car>,
    options: {},
    totalCars: 0,
    loading: false,
    editedItem: {} as Car,
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

    async removeCar(id: string) {
      this.loading = true
      const deletedCar = await this.$axios
        .$delete<Car>(`/cars/${id}`)
        .finally(() => (this.loading = false))
      this.cars = this.cars.filter((item) => item._id !== deletedCar._id)
      this.totalCars = this.totalCars - 1
    },

    deleteItem(item: Car) {
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm() {
      await this.removeCar(this.editedItem._id!)
      this.closeDelete()
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = {} as Car
      })
    },
  },
})
</script>
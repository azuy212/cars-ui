<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="10"
      label="Name"
      required
    ></v-text-field>

    <v-text-field v-model="email" label="E-mail" required></v-text-field>

    <v-select v-model="select" :items="items" label="Item" required></v-select>

    <v-checkbox v-model="checkbox" label="Do you agree?" required></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

    <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    valid: true,
    name: '',
    email: '',
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
  }),

  computed: {
    form(): HTMLFormElement {
      return this.$refs.form as HTMLFormElement
    },
  },

  methods: {
    validate() {
      this.form.validate()
    },
    reset() {
      this.form.reset()
    },
    resetValidation() {
      this.form.resetValidation()
    },
  },
})
</script>
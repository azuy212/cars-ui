<template>
  <v-form ref="form" v-model="valid" lazy-validation class="ma-4">
    <v-text-field v-model="name" label="Name" required outlined></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      outlined
    ></v-text-field>

    <v-text-field
      v-model="phone"
      label="Phone No."
      required
      outlined
    ></v-text-field>

    <v-btn :disabled="!valid" color="primary" outlined block @click="validate">
      Contact Now
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    valid: true,
    name: '',
    email: '',
    emailRules: [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    phone: '',
    select: null,
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
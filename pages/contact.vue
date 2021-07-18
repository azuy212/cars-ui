<template>
  <v-container>
    <v-row justify="center" align="center" class="my-5">
      <v-col>
        <div class="title">Contact Form</div>
        <div class="my-5">
          Enter your comments through the form below, and our customer service
          professionals will contact you as soon as possible.
        </div>
        <ContactForm />
      </v-col>
      <v-col>
        <v-row>
          <v-col><v-icon>mdi-home</v-icon> Address</v-col>
          <v-col>123 St City State</v-col>
        </v-row>
        <v-row>
          <v-col><v-icon>mdi-phone</v-icon> Phone</v-col>
          <v-col>987654321</v-col>
        </v-row>
        <v-row>
          <v-col><v-icon>mdi-email</v-icon> Address</v-col>
          <v-col>123 St City State</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'car',
})
</script>
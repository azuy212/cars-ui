<template>
  <v-app>
    <v-main>
      <v-card class="mx-auto login-container" max-width="500">
        <v-container>
          <v-img max-height="200" contain src="/icon.png"></v-img>
          <v-card-title class="title-break-word">
            Log into {{ appTitle }} Admin Panel
          </v-card-title>
          <v-card-subtitle class="grey--text text--darken-2">
            Enter your login details below
          </v-card-subtitle>
          <v-form @submit.prevent>
            <v-card-text>
              <v-text-field v-model="username" label="Username"></v-text-field>
              <v-text-field v-model="password" label="Password" type="password"></v-text-field>
              <v-checkbox v-model="remember" label="Remember me"></v-checkbox>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="primary" type="submit" @click="login">
                Login
              </v-btn>
            </v-card-actions>
          </v-form>
          <v-footer absolute class="white">
            <v-col class="text-center caption grey--text">
              &copy; {{ appTitle }}
            </v-col>
          </v-footer>
        </v-container>
      </v-card>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      appTitle: 'Prime Traders',
      username: '',
      password: '',
      remember: false,
    }
  },
  methods: {
    login() {
      console.log({
        username: this.username,
        password: this.password,
        remember: this.remember,
      })
    },
  },
})
</script>

<style scoped>
.login-container {
  height: 100vh;
}
.title-break-word {
  word-break: break-word;
}
</style>
<template>
  <v-app-bar color="primary" app dark>
    <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">
      {{ appTitle }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="item in menuItems"
      :key="item.title"
      depressed
      text
      nuxt
      :to="item.path"
      exact
    >
      <v-icon left>{{ item.icon }}</v-icon>
      {{ item.title }}
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      appTitle: 'Prime Traders',
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/', icon: 'mdi-home-outline' },
        { title: 'Search', path: '/car', icon: 'mdi-magnify' },
        { title: 'How To Buy', path: '/buy', icon: 'mdi-cart-arrow-down' },
        { title: 'About Us', path: '/about', icon: 'mdi-information-outline' },
        { title: 'Contact Us', path: '/contact', icon: 'mdi-face-agent' },
      ],
    }
  },
})
</script>
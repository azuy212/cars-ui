<template>
  <v-app>
    <AppDetailHeader :menu-items="menuItems" />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
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
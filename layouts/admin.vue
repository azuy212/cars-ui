<template>
  <v-app>
    <AppDetailHeader
      app-title-path="/admin"
      :app-title="appTitle"
      :menu-items="menuItems"
    />
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
      appTitle: 'Prime Traders - Admin Panel',
      menuItems: [
        { title: 'Cars', path: '/admin', icon: 'mdi-car' },
        {
          title: 'How To Buy',
          path: '/admin/buy',
          icon: 'mdi-cart-arrow-down',
        },
        {
          title: 'About Us',
          path: '/admin/about',
          icon: 'mdi-information-outline',
        },
        { title: 'Contact Us', path: '/admin/contact', icon: 'mdi-face-agent' },
      ],
    }
  },
})
</script>
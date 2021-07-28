<template>
  <v-app-bar color="primary" app dark>
    <nuxt-link :to="appTitlePath">
      <v-toolbar-title class="white--text">
        {{ appTitle }}
      </v-toolbar-title>
    </nuxt-link>
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
import Vue, { PropType } from 'vue'

export interface MenuItem {
  title: string
  path: string
  icon: string
}

export default Vue.extend({
  props: {
    appTitle: {
      type: String,
      default: 'Prime Traders',
    },
    appTitlePath: {
      type: String,
      default: '/',
    },
    menuItems: {
      type: Array as PropType<Array<MenuItem>>,
      default: () => [],
    },
  },
})
</script>
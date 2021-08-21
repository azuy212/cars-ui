module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/v-slot-style': ['off'],
    'vue/no-v-html': ['off'],
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
  },
}

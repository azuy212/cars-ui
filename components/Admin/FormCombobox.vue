<template>
  <v-combobox
    v-model="syncedValue"
    :items="items"
    :search-input.sync="search"
    :label="label"
    :disabled="disabled"
    hide-selected
    :success="success"
    :error-messages="errorMessages"
    shaped
    outlined
    required
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            No results matching "
            <strong>
              {{ search }}
            </strong>
            ". Press <kbd>enter</kbd> to create a new one
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    success: {
      type: Boolean,
      default: false,
    },
    errorMessages: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    items: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      search: '',
    }
  },

  computed: {
    syncedValue: {
      get(): string {
        return this.value
      },
      set(value: string) {
        this.$emit('input', value)
      },
    },
  },

  watch: {
    syncedValue(newVal: string, oldVal: string) {
      if (newVal === oldVal) return
      this.syncedValue = this.syncedValue.toUpperCase()
    },
  },
})
</script>
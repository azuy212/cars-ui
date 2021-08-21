<template>
  <v-combobox
    v-model="syncedValue"
    :search-input.sync="search"
    :error-messages="errorMessages"
    :multiple="multiple"
    v-bind="attributes"
    shaped
    outlined
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
    errorMessages: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Array] as PropType<Array<string>>,
      default: '',
    },
  },

  data() {
    return {
      search: '',
    }
  },

  computed: {
    attributes(): Record<string, string> {
      const { search: _, ...rest } = this.$attrs
      return rest
    },

    syncedValue: {
      get(): string | string[] {
        return this.value
      },
      set(value: string | string[]) {
        this.$emit('input', value)
      },
    },
  },
})
</script>
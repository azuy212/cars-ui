import Vue from 'vue'

Vue.filter('currency', (val: number) =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(val)
)

Vue.filter('casing', (val?: string) => {
  return val?.replace(/_/g, ' ')
})

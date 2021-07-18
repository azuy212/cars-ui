import qs from 'qs'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { Car, CarListFilterQuery, Filters, Page } from '~/interfaces/Car'

export const state = (): { filters: Filters; filteredCars: Car[] } => ({
  filters: {
    make: [],
    model: [],
    transmission: [],
    fuelType: [],
    color: [],
    bodyType: [],
    features: [],
    engineCapacity: {
      min: 0,
      max: 0,
    },
    year: {
      min: 0,
      max: 0,
    },
    price: {
      min: 0,
      max: 0,
    },
  },
  filteredCars: [],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  filters: (state) => state.filters,
  filteredCars: (state) => state.filteredCars,
}

export const mutations: MutationTree<RootState> = {
  SET_FILTERS: (state, filters: Filters) => (state.filters = filters),
  SET_FILTERED_CARS: (state, cars: Car[]) => (state.filteredCars = cars),
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchFilters({ commit }) {
    const { data } = await this.$axios.get<Filters>(
      `${this.app.$config.serverURL}/cars/filters`
    )
    commit('SET_FILTERS', data)
  },

  async searchCars({ commit }, filters: CarListFilterQuery) {
    const { data } = await this.$axios.get<Page<Car>>(
      `${this.app.$config.serverURL}/cars`,
      {
        params: filters,
        paramsSerializer: (p: any) => qs.stringify(p, { arrayFormat: 'comma' }),
      }
    )
    commit('SET_FILTERED_CARS', data.content)
  },
}

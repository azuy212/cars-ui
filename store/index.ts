import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { Car, Page } from '~/interfaces/Car'

export const state = (): { cars: Car[] } => ({
  cars: [],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  cars: (state) => state.cars,
}

export const mutations: MutationTree<RootState> = {
  SET_CARS: (state, car: Car[]) => (state.cars = car),
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchCars({ commit, state }) {
    if (state.cars.length === 0) {
      const { content } = await this.$axios.$get<Page<Car>>('/cars', {
        params: { page: 0, size: 10 },
      })
      commit('SET_CARS', content)
    }
  },
}

import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { Car } from '~/interfaces/Car'

export const state = (): { car: Car } => ({
  car: {
    fuelType: [],
    chassisNo: '',
    make: '',
    model: '',
    year: 0,
    registrationMonth: '',
    engineCapacity: 0,
    steeringPosition: 'RIGHT',
    transmission: 'AUTO',
    color: '',
    door: 0,
    bodyType: 'SEDAN',
    price: 0,
    assets: [],
    features: [],
    createdAt: '',
    updatedAt: '',
  },
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  car: (state) => state.car,
}

export const mutations: MutationTree<RootState> = {
  SET_CAR: (state, car: Car) => (state.car = car),
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchCar({ commit }, carId: string) {
    const data = await this.$axios.$get<Car>(`/cars/${carId}`)
    commit('SET_CAR', data)
  },
}

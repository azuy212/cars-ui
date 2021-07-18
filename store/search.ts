import { GetterTree, MutationTree } from 'vuex'
import { Car, Filters } from '~/interfaces/Car'

export const state = (): { filters: Filters; filteredCars: Car[] } => ({
  filters: {
    make: ['AUDI', 'TOYOTA', 'VOLKSWAGEN'],
    transmission: ['AUTO'],
    fuelType: ['PETROL'],
    color: ['GREY', 'RED', 'WHITE'],
    bodyType: ['STATION_WAGON'],
    features: ['ABS', 'AIR_BAG', 'AIR_CONDITION', 'MULTIMEDIA'],
    engineCapacity: {
      min: 1200,
      max: 2000,
    },
    year: {
      min: 2009,
      max: 2014,
    },
    price: {
      min: 1700,
      max: 6600,
    },
  },
  filteredCars: [
    {
      fuelType: ['PETROL'],
      _id: '60e1e98b13f9661445fa1d46',
      chassisNo: 'WVWZZ6RZAU046861',
      make: 'VOLKSWAGEN',
      model: 'POLO',
      year: 2010,
      registrationMonth: 'DECEMBER',
      engineCapacity: 1200,
      steeringPosition: 'RIGHT',
      transmission: 'AUTO',
      color: 'RED',
      door: 4,
      bodyType: 'STATION_WAGON',
      price: 2500,
      features: ['MULTIMEDIA'],
      assets: [
        {
          _id: '60e1e98b13f9661445fa1d47',
          primary: true,
          source: 'https://www.mdkjapan.com/img/202102071614201.jpg',
        },
        {
          _id: '60e1e98b13f9661445fa1d48',
          primary: false,
          source: 'https://www.mdkjapan.com/img/202102071614222.jpg',
        },
        {
          _id: '60e1e98b13f9661445fa1d49',
          primary: false,
          source: 'https://www.mdkjapan.com/img/202102071614263.jpg',
        },
      ],
      createdAt: '2021-07-04T17:02:03.651Z',
      updatedAt: '2021-07-04T17:07:04.119Z',
    },
    {
      fuelType: ['PETROL'],
      _id: '60e1e9d213f9661445fa1d4d',
      chassisNo: 'WAUZZZ8K7DA079185',
      make: 'AUDI',
      model: 'A4',
      year: 2012,
      registrationMonth: 'DECEMBER',
      engineCapacity: 2000,
      steeringPosition: 'RIGHT',
      transmission: 'AUTO',
      color: 'WHITE',
      door: 4,
      bodyType: 'STATION_WAGON',
      price: 5000,
      features: ['ABS', 'AIR_BAG', 'AIR_CONDITION', 'MULTIMEDIA'],
      assets: [
        {
          _id: '60e1e80f13f9661445fa1d41',
          primary: true,
          source: 'https://www.mdkjapan.com/img/202102071611491.jpg',
        },
        {
          _id: '60e1e80f13f9661445fa1d42',
          primary: false,
          source: 'https://www.mdkjapan.com/img/202102071611522.jpg',
        },
        {
          _id: '60e1e80f13f9661445fa1d43',
          primary: false,
          source: 'https://www.mdkjapan.com/img/202102071611593.jpg',
        },
      ],
      createdAt: '2021-07-04T17:03:14.850Z',
      updatedAt: '2021-07-04T17:03:14.850Z',
    },
    {
      fuelType: ['PETROL'],
      _id: '60e1ea4a13f9661445fa1d54',
      chassisNo: 'NZE161G-7001335',
      make: 'TOYOTA',
      model: 'COROLLA FIELDER',
      year: 2014,
      registrationMonth: 'DECEMBER',
      engineCapacity: 1500,
      steeringPosition: 'RIGHT',
      transmission: 'AUTO',
      color: 'GREY',
      door: 4,
      bodyType: 'STATION_WAGON',
      price: 6600,
      features: ['AIR_CONDITION', 'MULTIMEDIA'],
      assets: [
        {
          _id: '60e1ea4a13f9661445fa1d55',
          primary: true,
          source: 'https://www.mdkjapan.com/img/202102071627291.jpg',
        },
        {
          _id: '60e1ea4a13f9661445fa1d56',
          primary: false,
          source: 'https://www.mdkjapan.com/img/202102071627312.jpg',
        },
        {
          _id: '60e1ea4a13f9661445fa1d57',
          primary: false,
          source: 'https://www.mdkjapan.com/img/202102071627333.jpg',
        },
      ],
      createdAt: '2021-07-04T17:05:14.207Z',
      updatedAt: '2021-07-04T17:05:14.207Z',
    },
    {
      fuelType: ['PETROL'],
      _id: '60e1ea8413f9661445fa1d5c',
      chassisNo: 'WVWZZZ9NZ9U019415',
      make: 'HONDA',
      model: 'FIT',
      year: 2008,
      registrationMonth: 'DECEMBER',
      engineCapacity: 1300,
      steeringPosition: 'RIGHT',
      transmission: 'AUTO',
      color: 'BLACK',
      door: 4,
      bodyType: 'HATCHBACK',
      price: 1400,
      features: ['MULTIMEDIA'],
      assets: [
        {
          _id: '60e1e4489d3faf0b5a6c5e43',
          name: 'FIT-1',
          primary: true,
          source: 'https://www.mdkjapan.com/img/202105071502221.jpg',
        },
        {
          _id: '60e1e4489d3faf0b5a6c5e44',
          name: 'FIT-2',
          primary: false,
          source: 'https://www.mdkjapan.com/img/202105071502262.jpg',
        },
        {
          _id: '60e1e4489d3faf0b5a6c5e45',
          name: 'FIT-3',
          primary: false,
          source: 'https://www.mdkjapan.com/img/202105071502293.jpg',
        },
      ],
      createdAt: '2021-07-04T17:06:12.680Z',
      updatedAt: '2021-07-04T17:06:12.680Z',
    },
  ],
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

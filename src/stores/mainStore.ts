import { defineStore } from 'pinia'

const DEFAULT_LIFEPOINTS = 20

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    lifepoints: DEFAULT_LIFEPOINTS,
  }),
  getters: {
    alive() {
      return this.lifepoints > 0
    }
  },
  actions: {
    reset() {
      this.lifepoints = DEFAULT_LIFEPOINTS
    },
    raise(amount: number = 1) {
      this.lifepoints += Math.abs(amount)
    },
    reduce(amount: number = 1) {
      this.lifepoints -=  Math.abs(amount)

      if (this.lifepoints < 0) {
        this.lifepoints = 0
      }
    }
  },
})
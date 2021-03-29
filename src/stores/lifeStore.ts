import { defineStore } from "pinia"

const DEFAULT_LIFEPOINTS = 20

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createLifeStore = (id: number) =>
  defineStore({
    id: `life-${id}`,
    state: () => ({
      remainingLife: DEFAULT_LIFEPOINTS,
    }),
    getters: {
      alive() {
        return this.remainingLife > 0
      },
    },
    actions: {
      reset() {
        this.remainingLife = DEFAULT_LIFEPOINTS
      },
      raise(amount = 1) {
        this.remainingLife += Math.abs(amount)
      },
      reduce(amount = 1) {
        this.remainingLife -= Math.abs(amount)

        if (this.remainingLife < 0) {
          this.remainingLife = 0
        }
      },
    },
  })

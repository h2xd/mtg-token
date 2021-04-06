import { defineStore } from "pinia"

const DEFAULT_LIFEPOINTS = 20

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createLifeStore = (id: number) =>
  defineStore({
    id: `life-${id}`,
    state: () => ({
      commitValue: 0,
      remainingLife: DEFAULT_LIFEPOINTS,
      timeoutHook: 0,
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
        this.commitValue += Math.abs(amount)
        this.setTimeoutHandler()
      },
      reduce(amount = 1) {
        this.commitValue -= Math.abs(amount)
        this.setTimeoutHandler()
      },
      setTimeoutHandler() {
        window.clearTimeout(this.timeoutHook)
        this.timeoutHook = window.setTimeout(() => {
          this.commit()
        }, 600)
      },
      commit() {
        this.remainingLife += this.commitValue
        this.commitValue = 0

        if (this.remainingLife < 0) {
          this.remainingLife = 0
        }
      },
    },
  })

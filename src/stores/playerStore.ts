import { defineStore } from "pinia"
import { useLifeStore } from "./lifeStore"
import { useBoardStore } from "./boardStore"

export const usePlayerStore = defineStore({
  id: "main",
  state: () => ({
    life: useLifeStore(),
    board: useBoardStore(),
  }),
  getters: {
    alive() {
      return this.life.alive
    },
  },
  actions: {
    reset() {
      this.life.reset()
      this.board.reset()
    },
    nextTurn() {
      this.board.nextTurn()
    },
  },
})

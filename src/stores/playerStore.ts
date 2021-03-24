import { defineStore } from "pinia"
import { useLifeStore } from "./lifeStore"
import { useBoardStore } from "./boardStore"
import { uuidv4 } from "../utils/uuidv4"

export const usePlayerStore = defineStore({
  id: "main",
  state: () => ({
    life: useLifeStore(),
    board: useBoardStore(),
    uuid: uuidv4().split("-")[0],
    name: "Test",
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

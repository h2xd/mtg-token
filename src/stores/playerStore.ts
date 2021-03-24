import { defineStore } from "pinia"
import { useLifeStore } from "./lifeStore"
import { useBoardStore } from "./boardStore"
import { ManaType } from "../@types/mana"

export const usePlayerStore = defineStore({
  id: "player",
  state: () => ({
    life: useLifeStore(),
    board: useBoardStore(),
    mana: ManaType.WHITE,
  }),
  getters: {
    alive() {
      return this.life.alive
    },
  },
  actions: {
    setManaType(mana: ManaType) {
      this.mana = mana
    },
    reset() {
      this.life.reset()
      this.board.reset()
    },
    nextTurn() {
      this.board.nextTurn()
    },
  },
})

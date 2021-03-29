import { defineStore } from "pinia"
import { createLifeStore } from "./lifeStore"
import { createBoardStore } from "./boardStore"
import { ManaType } from "../@types/mana"

export const createPlayerStore = (id: number): ReturnType<typeof defineStore> =>
  defineStore({
    id: `player-${id}`,
    state: () => ({
      life: createLifeStore(id).call(void 0),
      board: createBoardStore(id).call(void 0),
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

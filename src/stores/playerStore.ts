import { defineStore } from "pinia"
import { createLifeStore } from "./lifeStore"
import { createBoardStore } from "./boardStore"
import { ManaType } from "../@types/mana"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createPlayerStore = (id: number) =>
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

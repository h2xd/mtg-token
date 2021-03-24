import { defineStore } from "pinia"
import { usePlayerStore } from "./playerStore"

function createPlayerStores(amount: number) {
  return Array.from(Array(amount)).map(() => usePlayerStore())
}

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    players: createPlayerStores(1),
    countOptions: [1, 2, 3, 4],
  }),
  getters: {
    count() {
      return this.players.length
    },
  },
  actions: {
    setPlayerCount(countOption: number) {
      if (!this.countOptions.includes(countOption)) {
        return
      }

      this.players = createPlayerStores(countOption)
    },
    reset() {
      this.players.forEach((player) => player.reset())
    },
  },
})

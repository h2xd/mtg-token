import { defineStore } from "pinia"
import { defineAsyncComponent, markRaw } from "vue"
import { usePlayerStore } from "./playerStore"

function createPlayerStores(amount: number) {
  return Array.from(Array(amount)).map(() => usePlayerStore())
}

type AppLayout = {
  component: ReturnType<typeof defineAsyncComponent>
  name: string
}

const AppLayouts: AppLayout[] = [
  {
    component: markRaw(defineAsyncComponent(() => import("../layouts/OnePlayerWithBoard.vue"))),
    name: "One Player, with board",
  },
]

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    players: createPlayerStores(1),
    countOptions: [1, 2, 3, 4],
    layout: AppLayouts[0],
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

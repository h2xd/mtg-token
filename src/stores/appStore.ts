import { defineStore } from "pinia"
import { defineAsyncComponent, markRaw } from "vue"
import { createPlayerStore } from "./playerStore"

function createPlayerStores(amount: number) {
  return Array.from(Array(amount)).map((_, index) => createPlayerStore(index).call(void 0))
}

export type AppLayout = {
  component: ReturnType<typeof defineAsyncComponent>
  name: string
}

const AppLayouts: AppLayout[] = [
  {
    component: markRaw(defineAsyncComponent(() => import("../layouts/OnePlayerWithBoard.vue"))),
    name: "One Player, with board",
  },
  {
    component: markRaw(defineAsyncComponent(() => import("../layouts/TwoPlayersWithoutBoard.vue"))),
    name: "Two Players, without a board",
  },
]

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    players: createPlayerStores(6),
    countOptions: [1, 2, 3, 4, 5, 6],
    layout: AppLayouts[0],
  }),
  getters: {
    count() {
      return this.players.length
    },
    layouts() {
      return AppLayouts
    },
  },
  actions: {
    setPlayerCount(countOption: number) {
      if (!this.countOptions.includes(countOption)) {
        return
      }

      this.players = createPlayerStores(countOption)
    },
    setLayout(layout: AppLayout) {
      this.layout = layout
    },
    reset() {
      this.players.forEach((player) => player.reset())
    },
  },
})

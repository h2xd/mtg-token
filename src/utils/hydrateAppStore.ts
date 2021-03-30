import { createPlayerStore } from "../stores/playerStore"
import { TokenCreature } from "../entities/TokenCreature"
import { TokenCreatureOptions } from "../@types/token"
import { useAppStore } from "../stores/appStore"
import { ManaType } from "../@types/mana"

const HYDRATION_ID = "mtg-token-store"

export function hydrateAppStore(): void {
  const appStore = useAppStore()

  appStore.$subscribe((data, state) => {
    window.localStorage.setItem(
      HYDRATION_ID,
      JSON.stringify({
        players: state.players.map((player) => {
          return {
            board: player.board.$state,
            life: player.life.$state,
            mana: player.mana,
          }
        }),
        layout: state.layout.name,
      })
    )
  })

  try {
    const stringifiedStore = window.localStorage.getItem(HYDRATION_ID)

    if (stringifiedStore) {
      const { players, layout, ...appSetting } = JSON.parse(stringifiedStore)

      console.log(layout)

      appStore.setLayoutByName(layout)

      appStore.$patch({
        ...appSetting,
      })

      appStore.players.forEach((playerStore, index) => {
        const hydratedData = players[index]

        rehydratePlayerStore(playerStore, hydratedData)
      })
    }
  } catch (error) {
    console.error(error)
  }
}

export function rehydratePlayerStore(
  store: ReturnType<ReturnType<typeof createPlayerStore>>,
  hydratedData: {
    board: { token: { _options: TokenCreatureOptions; _summoningSickness: boolean; _tapped: boolean }[] }
    life: {
      remainingLife: number
    }
    mana: ManaType
  }
): void {
  try {
    store.$patch({
      board: {
        ...hydratedData.board,
        token: hydratedData.board.token.map((hydratedTokenData) => {
          return new TokenCreature({
            ...hydratedTokenData._options,
            hasSummoningSickness: hydratedTokenData._summoningSickness,
            isTapped: hydratedTokenData._tapped,
          })
        }),
      },
      life: hydratedData.life,
      mana: hydratedData.mana,
    })
  } catch (error) {
    console.error(error)
  }
}

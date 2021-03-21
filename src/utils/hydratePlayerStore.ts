import { usePlayerStore } from "../stores/playerStore"
import { TokenCreature } from "../entities/TokenCreature"

export function hydratePlayerStore(store: ReturnType<typeof usePlayerStore>): void {
  store.$subscribe((_, state) => {
    window.localStorage.setItem(
      "player1Store",
      JSON.stringify({
        board: state.board.$state,
        life: state.life.$state,
      })
    )
  })

  try {
    const stringifiedStore = window.localStorage.getItem("player1Store")

    if (stringifiedStore) {
      const hydratedData = JSON.parse(stringifiedStore)

      store.$patch({
        board: {
          ...hydratedData.board,
          token: hydratedData.board.token.map((hydratedTokenData: any) => {
            return new TokenCreature({
              ...hydratedTokenData._options,
              hasSummoningSickness: hydratedTokenData._summoningSickness,
              isTapped: hydratedTokenData._tapped,
            })
          }),
        },
        life: hydratedData.life,
      })
    }
  } catch (error) {
    console.error(error)
  }
}

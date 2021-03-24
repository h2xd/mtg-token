<template>
  <LifePointsCounter :player="player1" />
  <Board :board="player1.board" />

  <Button @click="appStore.reset">Reset</Button>
  <Button @click="handleAttackAll">Attack with all</Button>
  <Button @click="handleNextTurn">Next Turn</Button>

  <Library @summon="handleSummon" />
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { LibraryEntry } from "./@types/library"
import { useAppStore } from "./stores/appStore"
import { TokenCreature } from "./entities/TokenCreature"
import { hydratePlayerStore } from "./utils/hydratePlayerStore"

import Board from "./components/Board.vue"
import Button from "./components/base/Button.vue"
import Library from "./components/Library.vue"
import LifePointsCounter from "./components/LifePointsCounter.vue"

export default defineComponent({
  name: "App",
  components: {
    Board,
    Button,
    Library,
    LifePointsCounter,
  },
  setup() {
    const appStore = useAppStore()
    const player1 = appStore.players[0]
    const handleAttackAll = () => player1.board.attackWithAll()
    const handleNextTurn = () => player1.nextTurn()

    hydratePlayerStore(player1)

    const handleSummon = (entry: LibraryEntry) => {
      const newToken = new TokenCreature({
        ...entry.tokenOptions,
      })

      player1.board.addToken(newToken)
    }

    return { player1, appStore, handleAttackAll, handleNextTurn, handleSummon }
  },
})
</script>

<style>
:root {
  /* Main-Colors */
  --color-accent: #6014d7;
  --color-background: #08010e;
  --color-shadow: #010002;
  --color-text: #ffffff;

  /* Mana-Colors */
  --mana-color-red-background: #f51b07;
  --mana-color-red-text: #350600;
  --mana-color-blue-background: #0250ae;
  --mana-color-blue-text: #002a62;
  --mana-color-white-background: #fcc662;
  --mana-color-white-text: #99762a;
  --mana-color-black-background: #000000;
  --mana-color-black-text: #535353;
  --mana-color-green-background: #1ab000;
  --mana-color-green-text: #0d4c02;

  /* Box-Shadow */
  --box-shadow-overlay: 0 -0.8rem 1rem -0.05rem var(--color-shadow);
  --box-shadow-token: 0 0 1rem -0.2rem var(--color-shadow);

  /* Font-Size */
  --font-size-l: 1.2rem;

  /* Spacing */
  --space-xs: 0.3rem;
  --space-s: 0.5rem;
  --space-m: 1rem;
  --space-l: 1.2rem;

  /* Border */
  --border-width: 0.15rem;
  --border-radius: 0.4rem;

  /* Transitions */
  --transition: all 300ms ease-in-out;
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

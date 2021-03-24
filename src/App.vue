<template>
  <LifePointsCounter :life="player1Store.life" />
  <Board :board="player1Store.board" />

  <Button @click="player1Store.reset">Reset</Button>
  <Button @click="handleAttackAll">Attack with all</Button>
  <Button @click="handleNextTurn">Next Turn</Button>

  <div>
    <button @click="rtc.open(player1Store.uuid)" v-if="!rtc.hasPeer">Open Peer</button>
    <div v-else>Peer-UUID: {{ player1Store.uuid }}</div>

    <input v-model="connection" />
    <button @click="handleConnect">Connect</button>
  </div>

  <Library @summon="handleSummon" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import { LibraryEntry } from "./@types/library"
import { usePlayerStore } from "./stores/playerStore"
import { hydratePlayerStore } from "./utils/hydratePlayerStore"

import Board from "./components/Board.vue"
import Button from "./components/base/Button.vue"
import Library from "./components/Library.vue"
import LifePointsCounter from "./components/LifePointsCounter.vue"
import { TokenCreature } from "./entities/TokenCreature"
import { useRtc } from "./stores/rtcStore"

export default defineComponent({
  name: "App",
  components: {
    Board,
    Button,
    Library,
    LifePointsCounter,
  },
  setup() {
    const player1Store = usePlayerStore()
    const rtc = useRtc()

    const handleAttackAll = () => player1Store.board.attackWithAll()
    const handleNextTurn = () => player1Store.nextTurn()

    const connection = ref("")

    hydratePlayerStore(player1Store)

    const handleSummon = (entry: LibraryEntry) => {
      const newToken = new TokenCreature({
        ...entry.tokenOptions,
      })

      player1Store.board.addToken(newToken)
    }

    const handleConnect = () => {
      rtc.connect(connection.value)
    }

    return { player1Store, handleAttackAll, handleNextTurn, handleSummon, connection, rtc, handleConnect }
  },
})
</script>

<style>
:root {
  /* Main-Colors */
  --accent-color-background: #6014d7;
  --accent-color-text: #ffffff;
  --color-background: #030108;
  --color-text: #ffffff;

  /* Mana-Colors */
  --mana-color-red-backgrond: #f51b07;
  --mana-color-red-text: #350600;

  /* Box-Shadow */
  --box-shadow-overlay: 0 -0.8rem 1rem -0.05rem var(--accent-color-background);
  --box-shadow-token: 0 0 1rem -0.2rem var(--accent-color-background);

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
  color: #2c3e50;
}
</style>

<template>
  <LifePointsCounter :life="player1Store.life" />
  <Board :board="player1Store.board" />

  <Button @click="player1Store.reset">Reset</Button>
  <Button @click="handleAttackAll">Attack with all</Button>
  <Button @click="handleNextTurn">Next Turn</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { usePlayerStore } from "./stores/playerStore"
import { hydratePlayerStore } from "./utils/hydratePlayerStore"
import Board from "./components/Board.vue"
import Button from "./components/base/Button.vue"
import LifePointsCounter from "./components/LifePointsCounter.vue"

export default defineComponent({
  name: "App",
  components: {
    Board,
    Button,
    LifePointsCounter,
  },
  setup() {
    const player1Store = usePlayerStore()
    const handleAttackAll = () => player1Store.board.attackWithAll()
    const handleNextTurn = () => player1Store.nextTurn()

    hydratePlayerStore(player1Store)

    return { player1Store, handleAttackAll, handleNextTurn }
  },
})
</script>

<style>
:root {
  /* Main-Colors */
  --accent-color-background: #6014d7;
  --accent-color-text: #ffffff;

  /* Mana-Colors */
  --mana-color-red-backgrond: #f51b07;
  --mana-color-red-text: #350600;

  /* Spacing */
  --space-s: 0.3rem;
  --space-m: 0.5rem;
  --space-l: 0.5rem;

  /* Border */
  --border-width: 0.15rem;
  --border-radius: 0.4rem;

  /* Transitions */
  --transition: all 300ms ease-in-out;
}

@keyframes iconKeyFrames {
  0% {
    stroke-dashoffset: 70;
  }

  100% {
    stroke-dashoffset: 0;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

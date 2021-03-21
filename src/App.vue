<template>
  <LifePointsCounter :life="player1Store.life" />
  <Board :board="player1Store.board" />

  <button @click="player1Store.reset">Reset</button>
  <button @click="handleAttackAll">Attack with all</button>
  <button @click="handleNextTurn">Next Turn</button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { usePlayerStore } from "./stores/playerStore"
import Board from "./components/Board.vue"
import LifePointsCounter from "./components/LifePointsCounter.vue"

export default defineComponent({
  name: "App",
  components: {
    Board,
    LifePointsCounter,
  },
  setup() {
    const player1Store = usePlayerStore()
    const handleAttackAll = () => player1Store.board.attackWithAll()
    const handleNextTurn = () => player1Store.nextTurn()

    return { player1Store, handleAttackAll, handleNextTurn }
  },
})
</script>

<style>
:root {
  --mana-color-red-backgrond: #f51b07;
  --mana-color-red-text: #350600;
  --space-m: 0.5rem;
  --border-width: 0.1rem;
  --border-radius: 0.2rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

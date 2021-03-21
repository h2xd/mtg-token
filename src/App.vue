<template>
  <LifePointsCounter :life="player1Store.life" />
  <Board :board="player1Store.board" />
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

    return { player1Store }
  },
})
</script>

<style>
:root {
  --mana-color-red-backgrond: #f51b07;
  --mana-color-red-text: #350600;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

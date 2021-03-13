<template>
  <LifePointsCounter />
  <Board />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Board from './components/Board.vue'
import LifePointsCounter from './components/LifePointsCounter.vue'

export default defineComponent({
  name: 'App',
  components: {
    Board,
    LifePointsCounter
  }
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
<template>
  <LifePoints :player="player1" />

  <SettingsBar />

  <Board :board="player1.board" />

  <Button @click="handleAttackAll">Attack with all</Button>
  <Button @click="handleNextTurn">Next Turn</Button>

  <Library @summon="handleSummon" />
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { LibraryEntry } from "../@types/library"
import { useAppStore } from "../stores/appStore"
import { TokenCreature } from "../entities/TokenCreature"

import Board from "../components/Board.vue"
import Button from "../components/base/Button.vue"
import Library from "../components/Library.vue"
import LifePoints from "../components/LifePoints.vue"
import SettingsBar from "../components/base/SettingsBar.vue"

export default defineComponent({
  name: "OnePlayerWithBoard",
  components: {
    Board,
    Button,
    Library,
    LifePoints,
    SettingsBar,
  },
  setup() {
    const appStore = useAppStore()
    const player1 = appStore.players[0]
    const handleAttackAll = () => player1.board.attackWithAll()
    const handleNextTurn = () => player1.nextTurn()

    const handleSummon = (entry: LibraryEntry) => {
      const newToken = new TokenCreature({
        ...entry.tokenOptions,
      })

      player1.board.addToken(newToken)
    }

    return { player1, handleAttackAll, handleNextTurn, handleSummon }
  },
})
</script>

<style scoped></style>

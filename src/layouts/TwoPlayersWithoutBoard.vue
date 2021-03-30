<template>
  <div :class="$style.flip">
    <LifePointsCounter :player="player1" />
  </div>
  <LifePointsCounter :player="player2" />
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { useAppStore } from "../stores/appStore"

import LifePointsCounter from "../components/LifePointsCounter.vue"

export default defineComponent({
  name: "TwoPlayersWithoutBoard",
  components: {
    LifePointsCounter,
  },
  setup() {
    const appStore = useAppStore()

    const player1 = appStore.players[0]
    const player2 = appStore.players[1]

    return { player1, player2 }
  },
})
</script>

<style module>
.flip {
  transform: rotate(180deg);
}
</style>

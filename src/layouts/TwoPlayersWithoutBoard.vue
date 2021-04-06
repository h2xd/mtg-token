<template>
  <div :class="$style.flip">
    <LifePoints :player="player1" />
  </div>
  <SettingsBar />
  <LifePoints :player="player2" />
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { useAppStore } from "../stores/appStore"

import LifePoints from "../components/LifePoints.vue"
import SettingsBar from "../components/base/SettingsBar.vue"

export default defineComponent({
  name: "TwoPlayersWithoutBoard",
  components: {
    LifePoints,
    SettingsBar,
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

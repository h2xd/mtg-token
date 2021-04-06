<template>
  <LifePointsCounter
    :commit-value="player.life.commitValue"
    :life-amount="player.life.remainingLife"
    :mana="player.mana"
    @raise="player.life.raise(1)"
    @reduce="player.life.reduce(1)"
    @click-number="popupStore.open(popupId)"
  />
  <Popup v-if="isPopupSelected">
    <button
      v-for="item in manaCollection"
      :key="item.mana"
      :class="[$style.manaButton, item.selected && $style.selected]"
      :style="item.styles"
      @click="player.setManaType(item.mana)"
    ></button>

    <LifePointsCounter :life-amount="player.life.remainingLife" :mana="player.mana" />
  </Popup>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref } from "vue"
import { createPlayerStore } from "../stores/playerStore"

import { ManaType } from "../@types/mana"
import { manaToCustomProperties } from "../utils/manaToCustomProperties"
import { usePopupStore } from "../stores/popupStore"

import LifePointsCounter from "./base/LifePointsCounter.vue"
import Popup from "./Popup.vue"

export default defineComponent({
  name: "LifePoints",
  components: {
    LifePointsCounter,
    Popup,
  },
  props: {
    player: Object as PropType<ReturnType<typeof createPlayerStore>>,
  },
  setup(props) {
    const manaCollection = computed(() =>
      Object.values(ManaType).map((mana) => ({
        mana,
        selected: props.player?.mana === mana,
        styles: manaToCustomProperties(mana),
      }))
    )

    const popupStore = usePopupStore()
    const popupId = ref(popupStore.generateId())
    const isPopupSelected = computed(() => popupStore.selectedId === popupId.value)

    return {
      popupStore,
      popupId,
      isPopupSelected,
      manaCollection,
    }
  },
})
</script>

<style module>
.manaButton {
  background-color: var(--mana-background);
  width: 2.3rem;
  height: 2.3rem;
  border: var(--mana-text);
  outline: 0;
  border-radius: var(--border-radius);
  transform: var(--scale-zoomout);
  transition: var(--transition);
}

.manaButton.selected {
  transform: var(--scale-default);
}
</style>

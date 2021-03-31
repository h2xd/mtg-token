<template>
  <div :class="$style.container" :style="styles">
    <transition name="bounce">
      <div v-if="player.life.hasCommitValue" :class="$style.commitValue">{{ player.life.decoratedCommitValue }}</div>
    </transition>
    <div :class="$style.counter" @click="popupStore.open(popupId)">
      <AnimatedInteger :number="player.life.remainingLife" />
    </div>

    <button
      @mousedown="createMouseDownHandler(() => player.life.raise(1))"
      @mouseup="clearMouseDownHandler"
      :class="[$style.button, $style.raise]"
    >
      <PlusIcon />
    </button>
    <button
      @mousedown="createMouseDownHandler(() => player.life.reduce(1))"
      @mouseup="clearMouseDownHandler"
      :class="[$style.button, $style.reduce]"
    >
      <MinusIcon />
    </button>
  </div>

  <Popup v-if="isPopupSelected">
    <button
      v-for="item in manaCollection"
      :key="item.mana"
      :class="[$style.manaButton, item.selected && $style.selected]"
      :style="item.styles"
      @click="player.setManaType(item.mana)"
    ></button>

    <div>
      <Button @click="appStore.reset()">Reset Game</Button>
    </div>

    <div>
      <Button v-for="layout in appStore.layouts" :key="layout.name" @click="handleLayoutChange(layout)">
        {{ layout.name }}
      </Button>
    </div>
  </Popup>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref } from "vue"
import { createPlayerStore } from "../stores/playerStore"

import { ManaType } from "../@types/mana"
import { manaToCustomProperties } from "../utils/manaToCustomProperties"
import { usePopupStore } from "../stores/popupStore"
import { AppLayout, useAppStore } from "../stores/appStore"

import AnimatedInteger from "./utils/AnimatedInteger"
import Button from "./base/Button.vue"
import Popup from "./Popup.vue"
import PlusIcon from "../assets/svg/plus.svg"
import MinusIcon from "../assets/svg/minus.svg"

export default defineComponent({
  name: "LifePointsCounter",
  components: {
    AnimatedInteger,
    Button,
    PlusIcon,
    MinusIcon,
    Popup,
  },
  props: {
    player: Object as PropType<ReturnType<typeof createPlayerStore>>,
  },
  setup(props) {
    const appStore = useAppStore()

    const styles = computed(() => manaToCustomProperties(props.player?.mana))
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

    const handleLayoutChange = (layout: AppLayout) => {
      appStore.setLayout(layout)
      popupStore.close()
    }

    const intervalTarget = ref(0)

    const createMouseDownHandler = (callback: () => void) => {
      callback()
      intervalTarget.value = window.setInterval(callback, 175)
    }

    const clearMouseDownHandler = () => {
      window.clearInterval(intervalTarget.value)
    }

    return {
      styles,
      appStore,
      popupStore,
      popupId,
      isPopupSelected,
      manaCollection,
      handleLayoutChange,
      createMouseDownHandler,
      clearMouseDownHandler,
    }
  },
})
</script>

<style module>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--mana-background);
  color: var(--mana-text);
  text-align: center;
  width: calc(100% - var(--space-l) * 2);
  height: calc(100vw - var(--space-l) * 2);
  margin: var(--space-l);
  border-radius: var(--border-radius);
}

.manaButton {
  background-color: var(--mana-background);
  width: 1.3rem;
  height: 1.3rem;
  border: var(--mana-text);
  outline: 0;
  border-radius: 50%;
  transform: var(--scale-zoomout);
  transition: var(--transition);
}

.manaButton.selected {
  transform: var(--scale-default);
}

.counter {
  font-size: 50vw;
}

.commitValue {
  font-size: 7vw;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.button {
  position: absolute;
  top: 0;
  width: 25%;
  height: 100%;

  background-color: transparent;
  border: 0;
  outline: 0;
}

.button svg {
  opacity: 0.9;
  stroke: var(--mana-text);
  transition: all 200ms ease-in-out;
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
}

.button:active svg {
  transition: none;
  transform: scale(0.7);
}

.raise {
  left: 0;
}

.raise::before {
  transform: rotate(180deg);
}

.reduce {
  right: 0;
}
</style>

<template>
  <div :class="$style.square">
    <div :class="$style.container" :style="styles">
      <transition name="bounce">
        <div v-if="hasCommitValue" :class="$style.commitValue">{{ decoradedCommitValue }}</div>
      </transition>
      <div :class="$style.counter" @click="$emit('click-number')">
        <AnimatedInteger :number="lifeAmount" />
      </div>

      <button
        @pointerdown="createPointerDownHandler(() => $emit('reduce'))"
        @pointerup="clearPointerDownHandler"
        @lostpointercapture="clearPointerDownHandler"
        :class="[$style.button, $style.reduce]"
      >
        <MinusIcon />
      </button>
      <button
        @pointerdown="createPointerDownHandler(() => $emit('raise'))"
        @pointerup="clearPointerDownHandler"
        @lostpointercapture="clearPointerDownHandler"
        :class="[$style.button, $style.raise]"
      >
        <PlusIcon />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, PropType } from "vue"

import { ManaType } from "../../@types/mana"
import AnimatedInteger from "../utils/AnimatedInteger"
import { manaToCustomProperties } from "../../utils/manaToCustomProperties"

import PlusIcon from "../../assets/svg/plus.svg"
import MinusIcon from "../../assets/svg/minus.svg"

export default defineComponent({
  name: "LifePointsCounter",
  components: {
    AnimatedInteger,
    PlusIcon,
    MinusIcon,
  },
  props: {
    commitValue: {
      type: Number,
      default: 0,
    },
    lifeAmount: {
      type: Number,
      required: true,
    },
    mana: {
      type: String as PropType<ManaType>,
      required: true,
    },
  },
  setup(props) {
    const hasCommitValue = computed(() => props.commitValue > 0 || props.commitValue < 0)

    const intervalTarget = ref(0)

    const createPointerDownHandler = (callback: () => void) => {
      callback()
      intervalTarget.value = window.setInterval(callback, 175)
    }

    const clearPointerDownHandler = () => {
      window.clearInterval(intervalTarget.value)
    }

    const decoradedCommitValue = computed(() => {
      return props.commitValue > 0 ? `+${props.commitValue}` : props.commitValue
    })

    const styles = computed(() => manaToCustomProperties(props.mana))

    return { hasCommitValue, createPointerDownHandler, clearPointerDownHandler, decoradedCommitValue, styles }
  },
})
</script>

<style module>
.square {
  position: relative;
  width: 100%;
  padding-top: 100%;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--mana-background);
  color: var(--mana-text);
  text-align: center;
  border-radius: var(--border-radius);
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

.reduce {
  left: 0;
}

.reduce::before {
  transform: rotate(180deg);
}

.raise {
  right: 0;
}
</style>

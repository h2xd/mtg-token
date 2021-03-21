<template>
  <div class="container">
    <div class="counter">{{ life.remainingLife }}</div>

    <button @click="life.raise(1)" class="button raise">
      <PlusIcon />
    </button>
    <button @click="life.reduce(1)" class="button reduce">
      <MinusIcon />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { useLifeStore } from "../stores/lifeStore"

import PlusIcon from "../assets/svg/plus.svg"
import MinusIcon from "../assets/svg/minus.svg"

export default defineComponent({
  name: "LifePointsCounter",
  components: {
    PlusIcon,
    MinusIcon,
  },
  props: {
    life: Object as PropType<ReturnType<typeof useLifeStore>>,
  },
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--mana-color-red-backgrond);
  color: var(--mana-color-red-text);
  text-align: center;
  width: 100%;
  height: 100vw;
}

.counter {
  font-size: 50vw;
}

.button {
  position: absolute;
  left: 0;
  width: 100%;
  height: 25%;

  background-color: transparent;
  border: 0;
  outline: 0;
}

.button svg {
  opacity: 0.6;
  fill: var(--mana-color-red-text);
  transition: all 200ms ease-in-out;
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
}

.button:active svg {
  transition: none;
  transform: scale(0.7);
}

.raise {
  top: 0;
}

.raise::before {
  transform: rotate(180deg);
}

.reduce {
  bottom: 0;
}
</style>

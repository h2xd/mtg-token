<template>
  <div class="container">
    <div class="counter">{{ MainStore.lifepoints }}</div>

    <button @click="MainStore.raise(1)" class="raise"></button>
    <button @click="MainStore.reduce(1)" class="reduce"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMainStore } from "../stores/mainStore";

export default defineComponent({
  name: 'LifePointsCounter',
  setup: () => {
    const MainStore = useMainStore()

    return { MainStore }
  }
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

.raise, .reduce {
  position: absolute;
  left: 0;
  width: 100%;
  height: 25%;

  background-color: transparent;
  border: 0;
  outline: 0;
}

.raise::before, .reduce::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
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


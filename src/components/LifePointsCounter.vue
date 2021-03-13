<template>
  <div>{{ MainStore.lifepoints }}</div>
  <div>{{ MainStore.alive }}</div>

  <button @click="MainStore.raise(1)">Plus</button>
  <button @click="MainStore.reduce(1)">Minus</button>
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


<template>
  <div :class="['app-container', popupStore.isOpen && 'scale']">
    <suspense>
      <component :is="appStore.layout.component" />
    </suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { useAppStore } from "./stores/appStore"

import { hydratePlayerStore } from "./utils/hydratePlayerStore"
import { usePopupStore } from "./stores/popupStore"

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const appStore = useAppStore()
    const player1 = appStore.players[0]

    hydratePlayerStore(player1)

    const popupStore = usePopupStore()

    return { appStore, popupStore }
  },
})
</script>

<style>
:root {
  /* Main-Colors */
  --color-accent: #6014d7;
  --color-background: #08010e;
  --color-shadow: #010002;
  --color-text: #ffffff;

  /* Mana-Colors */
  --mana-color-red-background: #f51b07;
  --mana-color-red-text: #350600;
  --mana-color-blue-background: #0250ae;
  --mana-color-blue-text: #002a62;
  --mana-color-white-background: #fcc662;
  --mana-color-white-text: #99762a;
  --mana-color-black-background: #000000;
  --mana-color-black-text: #535353;
  --mana-color-green-background: #1ab000;
  --mana-color-green-text: #0d4c02;

  /* Box-Shadow */
  --box-shadow-overlay: 0 0rem 1rem -0.05rem var(--color-shadow);
  --box-shadow-token: 0 0 1rem -0.2rem var(--color-shadow);

  /* Scaling */
  --scale-default: scale3d(1, 1, 1);
  --scale-zoomout: scale3d(0.8, 0.8, 0.8);

  /* Font-Size */
  --font-size-l: 1.2rem;

  /* Spacing */
  --space-xs: 0.3rem;
  --space-s: 0.5rem;
  --space-m: 1rem;
  --space-l: 1.2rem;

  /* Border */
  --border-width: 0.15rem;
  --border-radius: 0.4rem;

  /* Transitions */
  --transition: all 300ms ease-in-out;
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

.app-container {
  transition: var(--transition);
  z-index: 10;
  transform: var(--scale-default);
}

.scale {
  position: relative;
  transform: var(--scale-zoomout);
  filter: blur(10px);
  z-index: 0;
  opacity: 0.8;
}
</style>

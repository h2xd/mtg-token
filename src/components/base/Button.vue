<template>
  <button :class="[$style.button, clean && $style.clean]">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    clean: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style module>
.button {
  padding: var(--space-xs) var(--space-m);
  background-color: var(--color-accent);
  border: 0;
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-weight: bold;
  cursor: pointer;
  outline: 0;
  transition: var(--transition);
}

.clean {
  padding: 0;
  margin: 0;
  background-color: transparent;
}

.button:hover {
  transform: scale(1.05);
}

.button:active {
  transform: scale(0.9);
  transition: none;
}
</style>

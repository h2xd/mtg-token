<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  padding: var(--space-m) var(--space-l);
  background-color: var(--accent-color-background);
  border: 0;
  border-radius: var(--border-radius);
  color: var(--accent-color-text);
  font-weight: bold;
  cursor: pointer;
  outline: 0;
  transition: var(--transition);
}

.button:hover {
  transform: scale(1.05);
}

.button:active {
  transform: scale(0.9);
  transition: none;
}
</style>

<template>
  <div class="headline">
    <slot name="icon" />
    <h3 class="text"><slot /></h3>
  </div>
</template>

<style scoped>
.headline {
  display: inline-flex;
  align-items: center;
  margin-bottom: var(--space-l);
}

.text {
  font-weight: bold;
  font-size: var(--font-size-l);
  margin-left: var(--space-s);
}
</style>

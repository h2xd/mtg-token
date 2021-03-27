<template>
  <div :class="$style.container">
    <span :class="[$style.base, $style.underlay]">
      <slot name="default" />
    </span>
    <span :class="[$style.base, $style.overlayed, active && $style.active]">
      <slot name="default" />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style module>
.container {
  position: relative;
}

.base,
.base svg {
  display: block;
  width: 1rem;
  height: 1rem;
}

.underlay {
  opacity: 0.3;
}

.overlayed {
  position: absolute;
  top: 0;
  left: 0;
}

.overlayed svg {
  stroke-dashoffset: 70;
  stroke-dasharray: 70;
  transition: all 500ms ease-in-out;
}

.active svg {
  stroke-dashoffset: 0;
  stroke-dasharray: 70;
}
</style>

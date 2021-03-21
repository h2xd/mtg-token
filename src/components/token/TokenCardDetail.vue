<template>
  <component :is="is" class="card" v-if="token">
    <div>{{ token.power }} / {{ token.toughness }}</div>

    <div>
      <CornerDownLeftIcon class="icon" v-if="token.isTapped" />
      <MoonIcon class="icon" v-if="token.hasSummoningSickness" />
    </div>

    <button @click="$emit('death', token)">Kill</button>
    <button @click="$emit('copy', token)">Clone</button>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { TokenCreature } from "../../entities/TokenCreature"

import CornerDownLeftIcon from "../../assets/svg/corner-down-left.svg"
import MoonIcon from "../../assets/svg/moon.svg"

export default defineComponent({
  name: "TokenCardDetail",
  components: {
    CornerDownLeftIcon,
    MoonIcon,
  },
  props: {
    token: Object as PropType<TokenCreature>,
    is: {
      type: String,
      default: "li",
    },
  },
})
</script>

<style scoped>
.card {
  padding: var(--space-m);
  border: var(--border-width) solid #000;
  border-radius: var(--border-radius);
}

.icon {
  width: 1rem;
  height: 1rem;
  stroke-dasharray: 70;
  stroke-dashoffset: 70;
  animation: iconKeyFrames 2s ease-in-out 0s 1 forwards;
}
</style>

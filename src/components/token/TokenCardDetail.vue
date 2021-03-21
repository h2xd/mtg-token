<template>
  <component :is="is" :class="['card', token.isTapped && 'tapped']" v-if="token">
    <div>{{ token.power }} / {{ token.toughness }}</div>

    <div>
      <Icon :active="token.isTapped"><CornerDownLeftIcon /></Icon>
      <Icon :active="token.hasSummoningSickness"><MoonIcon /></Icon>
    </div>

    <!--    <button @click="$emit('death', token)">Kill</button>-->
    <!--    <button @click="$emit('copy', token)">Clone</button>-->
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { TokenCreature } from "../../entities/TokenCreature"

import Icon from "../base/Icon.vue"
import CornerDownLeftIcon from "../../assets/svg/corner-down-left.svg"
import MoonIcon from "../../assets/svg/moon.svg"

export default defineComponent({
  name: "TokenCardDetail",
  components: {
    Icon,
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
  margin: var(--space-m);
  transition: var(--transition);
}

.tapped {
  transform: rotate(5deg);
  opacity: 0.5;
  filter: grayscale(1);
}
</style>

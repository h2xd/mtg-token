<template>
  <component :is="is" :class="['card', token.isTapped && 'tapped']" :style="manaStyles" v-if="token">
    <div>{{ token.power }} / {{ token.toughness }}</div>

    <div>
      <Icon :active="token.isTapped"><CornerDownLeftIcon /></Icon>
      <Icon :active="token.hasSummoningSickness"><MoonIcon /></Icon>
    </div>

    <button @click="$emit('death', token)">Kill</button>
    <button @click="$emit('copy', token)">Clone</button>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue"
import { TokenCreature } from "../../entities/TokenCreature"

import Icon from "../base/Icon.vue"
import CornerDownLeftIcon from "../../assets/svg/corner-down-left.svg"
import MoonIcon from "../../assets/svg/moon.svg"
import { manaToCustomProperties } from "../../utils/manaToCustomProperties"

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
  setup(props) {
    const manaStyles = computed(() => manaToCustomProperties(props.token.mana[0]))

    return { manaStyles }
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
  box-shadow: var(--box-shadow-token);
  background-color: var(--mana-background);
  color: var(--mana-text);
}

.tapped {
  transform: rotate(5deg);
  opacity: 0.5;
  filter: grayscale(1);
}
</style>

<template>
  <component :is="is" class="card" v-if="token">
    <div>{{ token.power }} / {{ token.toughness }}</div>
    <div>Sick?: {{ token.hasSummoningSickness }}</div>
    <div>Tapped?: {{ token.isTapped }}</div>

    <button @click="$emit('death', token)">Kill</button>
    <button @click="$emit('copy', token)">Clone</button>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { TokenCreature } from "../../entities/TokenCreature"

export default defineComponent({
  name: "TokenCardDetail",
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
</style>

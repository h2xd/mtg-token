<template>
  <div>
    <div v-if="token">
      <div>{{ token.power }} / {{ token.toughness }} Sick?: {{ token.hasSummoningSickness }}</div>
    </div>

    <button @click="$emit('death', token)">Kill</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { TokenCreature } from "../../entities/TokenCreature"

export default defineComponent({
  name: "TokenCardDetail",
  props: {
    token: Object as PropType<TokenCreature>,
  },
})
</script>

<style scoped></style>

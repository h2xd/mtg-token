<template>
  <div>AttackPower: {{ board.attackPower }}</div>
  <div>
    <ol v-if="board.hasToken" class="board">
      <TokenCardDetail
        is="li"
        v-for="token in board.token"
        :key="token.uuid"
        :token="token"
        @death="handleDeath"
        @copy="handleCopy"
      />
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

import { useBoardStore } from "../stores/boardStore"
import { TokenCreature } from "../entities/TokenCreature"

import TokenCardDetail from "../components/token/TokenCardDetail.vue"

export default defineComponent({
  name: "Board",
  components: {
    TokenCardDetail,
  },
  props: {
    board: Object as PropType<ReturnType<typeof useBoardStore>>,
  },
  setup: (props) => {
    const handleDeath = (token: TokenCreature) => props.board.removeToken(token)
    const handleCopy = (token: TokenCreature) => props.board.copyToken(token)

    return { handleDeath, handleCopy }
  },
})
</script>

<style scoped>
.board {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}
</style>

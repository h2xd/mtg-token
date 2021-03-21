<template>
  <div>AttackPower: {{ board.attackPower }}</div>
  <div>
    <ol v-if="board.hasToken" class="board">
      <TokenCardDetail
        is="li"
        v-for="(token, index) in board.token"
        :key="index"
        :token="token"
        @death="handleDeath"
        @copy="handleCopy"
      />
    </ol>

    <button @click="createToken(1, 1)">Create 1/1 Token</button>
    <button @click="createToken(2, 2)">Create 2/2 Token</button>
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
    board: Object as PropType<ReturnType<useBoardStore>>,
  },
  setup: (props) => {
    function createToken(power, toughness) {
      const newToken = new TokenCreature({ power, toughness })

      props.board.addToken(newToken)
    }

    const handleDeath = (token: TokenCreature) => props.board.removeToken(token)
    const handleCopy = (token: TokenCreature) => props.board.copyToken(token)

    return { createToken, handleDeath, handleCopy }
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

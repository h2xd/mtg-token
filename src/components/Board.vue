<template>
  <div>
    <div v-if="board.hasToken">
      <div v-for="(token, index) in board.token" :key="index">
        <TokenCardDetail :token="token" @death="handleDeath" />
      </div>
    </div>

    <button @click="createToken">Create 1/1 Token</button>
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
    function createToken() {
      const newToken = new TokenCreature({ power: 1, toughness: 1 })

      props.board.addToken(newToken)
    }

    function handleDeath(token: TokenCreature) {
      props.board.removeToken(token)
    }

    return { createToken, handleDeath }
  },
})
</script>

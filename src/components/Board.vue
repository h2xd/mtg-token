<template>
  <div>
    <div v-if="BoardStore.hasToken">
      <div v-for="token in BoardStore.token">
        <TokenCardDetail :token="token" />
      </div>
    </div>

    <button @click="createToken">Create 1/1 Token</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useBoardStore } from "../stores/boardStore";
import { TokenCreature } from "../entities/TokenCreature";

import TokenCardDetail from '../components/token/TokenCardDetail.vue'

export default defineComponent({
  name: 'Board',
  components: {
    TokenCardDetail
  },
  setup: () => {
    const BoardStore = useBoardStore()

    function createToken() {
      const newToken = new TokenCreature({ power: 1, toughness: 1 })

      BoardStore.addToken(newToken)
    }

    return { BoardStore, createToken } 
  }
})
</script>

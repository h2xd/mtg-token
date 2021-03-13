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


<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--mana-color-red-backgrond);
  color: var(--mana-color-red-text);
  text-align: center;
  width: 100%;
  height: 100vw;
}

.counter {
  font-size: 50vw;
}

.raise, .reduce {
  position: absolute;
  left: 0;
  width: 100%;
  height: 25%;

  background-color: transparent;
  border: 0;
  outline: 0;
}

.raise::before, .reduce::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
}

.raise {
  top: 0;
}

.raise::before {
  transform: rotate(180deg);
}

.reduce {
  bottom: 0;
}
</style>


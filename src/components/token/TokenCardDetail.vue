<template>
  <div>
    <div v-if="token">
      <div>{{ token.power }} / {{ token.toughness }} Sick?: {{ token.hasSummoningSickness }}</div>
    </div>

    <button @click="BoardStore.removeToken(token)">Kill</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { TokenCreature } from "../../entities/TokenCreature"
import { useBoardStore } from "../../stores/boardStore"

export default defineComponent({
  name: "TokenCardDetail",
  props: {
    token: Object as PropType<TokenCreature>,
  },
  setup: () => {
    const BoardStore = useBoardStore()

    function killToken() {
      console.log("killToken")
    }

    return { BoardStore, killToken }
  },
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

.raise,
.reduce {
  position: absolute;
  left: 0;
  width: 100%;
  height: 25%;

  background-color: transparent;
  border: 0;
  outline: 0;
}

.raise::before,
.reduce::before {
  content: "";
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

import { defineStore } from "pinia"
import { TokenCreature } from "../entities/TokenCreature"

export const useBoardStore = defineStore({
  id: "board",
  state: () => ({
    token: [] as TokenCreature[],
  }),
  getters: {
    hasToken() {
      return this.token.length > 0
    },
    tokenThatCanAttack() {
      return this.token.filter((token) => token.canAttack)
    },
    attackPower() {
      return this.tokenThatCanAttack.reduce((prevValue, token) => prevValue + token.power, 0)
    },
  },
  actions: {
    addToken(newToken: TokenCreature) {
      this.token = [...this.token, newToken]
    },
    removeToken(filterToken: TokenCreature) {
      this.token = this.token.filter((token) => token !== filterToken)
    },
    copyToken(token: TokenCreature) {
      this.token = [...this.token, new TokenCreature({ power: token.power, toughness: token.toughness })]
    },
    attackWithAll() {
      this.token.forEach((token) => token.attack())
    },
    nextTurn() {
      this.token.forEach((token) => token.clear())
    },
    reset() {
      this.token = []
    },
  },
})

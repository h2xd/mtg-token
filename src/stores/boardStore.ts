import { defineStore } from 'pinia'
import { TokenCreature } from "../entities/TokenCreature";

export const useBoardStore = defineStore({
  id: 'board',
  state: () => ({
    token: [] as TokenCreature[],
  }),
  getters: {
    hasToken() {
      return this.token.length > 0
    },
  },
  actions: {
    addToken(newToken: TokenCreature) {
      this.token = [...this.token, newToken]
    }
  },
})
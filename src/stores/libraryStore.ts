import { defineStore } from "pinia"
import { LibraryEntry } from "../@types/library"

import * as TokenLibrary from "../library"

export const useLibraryStore = defineStore({
  id: "library",
  state: () => ({
    active: false,
    entries: [...Object.values(TokenLibrary)] as LibraryEntry[],
  }),
  getters: {
    isActive() {
      return this.active
    },
  },
  actions: {
    setActive() {
      this.active = true
    },
    setInactive() {
      this.active = false
    },
    toggleActive() {
      this.active = !this.active
    },
  },
})

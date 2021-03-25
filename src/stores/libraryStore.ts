import { defineStore } from "pinia"
import { LibraryEntry } from "../@types/library"

import * as TokenLibrary from "../library"

export const useLibraryStore = defineStore({
  id: "library",
  state: () => ({
    entries: [...Object.values(TokenLibrary)] as LibraryEntry[],
  }),
  getters: {},
  actions: {},
})

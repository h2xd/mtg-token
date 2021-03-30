import { nextTick } from "vue"
import { defineStore } from "pinia"
import { uuidv4 } from "../utils/uuidv4"

const POPUP_PORTAL_TARGET = "popup-portal"

export const usePopupStore = defineStore({
  id: "popup",
  state: () => ({
    portalTarget: `#${POPUP_PORTAL_TARGET}`,
    selectedId: "",
    isOpen: false,
  }),
  actions: {
    async open(id: string) {
      this.selectedId = id
      await nextTick(() => {
        this.isOpen = true
      })
    },
    close() {
      this.isOpen = false
    },
    generateId() {
      return uuidv4()
    },
  },
})

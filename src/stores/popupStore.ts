import { defineStore } from "pinia"

const POPUP_PORTAL_TARGET = "popup-portal"

export const usePopupStore = defineStore({
  id: "popup",
  state: () => ({
    portalTarget: `#${POPUP_PORTAL_TARGET}`,
    isOpen: false,
  }),
  actions: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
  },
})

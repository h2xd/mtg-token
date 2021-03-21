import "reset-css"

import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"

const VueApp = createApp(App)

VueApp.use(createPinia())
VueApp.mount("#app")

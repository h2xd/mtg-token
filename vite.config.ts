import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import svgLoader from "vite-svg-loader"

export default ({ command, mode }) => {
  if (command === "serve") {
    return defineConfig({
      plugins: [vue(), svgLoader()],
    })
  } else {
    return defineConfig({
      base: "https://h2xd.github.io/mtg-token/",
      plugins: [vue(), svgLoader()],
    })
  }
}

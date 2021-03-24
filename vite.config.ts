import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import svgLoader from "vite-svg-loader"

const plugins = [vue(), svgLoader()]

export default ({ command }) => {
  if (command === "serve") {
    return defineConfig({
      plugins,
    })
  } else {
    return defineConfig({
      base: "https://h2xd.github.io/mtg-token/",
      plugins,
    })
  }
}

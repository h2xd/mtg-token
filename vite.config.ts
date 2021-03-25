import { defineConfig, UserConfigExport } from "vite"
import vue from "@vitejs/plugin-vue"

import svgLoader from "vite-svg-loader"

const plugins = [vue(), svgLoader()]

export default ({ command }: { command: string }): UserConfigExport => {
  if (command === "serve") {
    return defineConfig({
      plugins,
    })
  }

  return defineConfig({
    base: "https://h2xd.github.io/mtg-token/",
    plugins,
  })
}

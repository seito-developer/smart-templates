import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import type { PluginOption } from 'vite'

// Import PostCSS plugins dynamically to avoid ESM issues
const config = defineConfig(async () => ({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    css: {
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})

export default config

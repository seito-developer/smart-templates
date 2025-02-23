import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'

const config = {
  main: {
    plugins: []
  },
  preload: {
    plugins: []
  },
  renderer: {
    plugins: [react()],
    css: true,
    resolve: {
      alias: {
        '@': './src/renderer/src'
      }
    }
  }
}

export default defineConfig(config)

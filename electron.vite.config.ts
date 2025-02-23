import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcssPlugin from 'tailwindcss'
import autoprefixerPlugin from 'autoprefixer'

const tailwindcss = () => tailwindcssPlugin
const autoprefixer = () => autoprefixerPlugin

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer()
      ],
    },
  },
  resolve: {
    alias: {
      '@': './src/renderer/src'
    }
  }
  }
})

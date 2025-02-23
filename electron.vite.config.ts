import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

const config = defineConfig({
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
      plugins: async () => [
        (await import('tailwindcss')).default(),
        (await import('autoprefixer')).default(),
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

export default config

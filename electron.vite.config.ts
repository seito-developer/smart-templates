import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

const config = {
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
        plugins: {
          'tailwindcss': {},
          'autoprefixer': {}
        }
      }
    },
    resolve: {
      alias: {
        '@': './src/renderer/src'
      }
    }
  }
}

export default defineConfig(config)

import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        external: ['tailwindcss', 'autoprefixer']
      }
    }
  },
  preload: {
    build: {
      rollupOptions: {
        external: ['tailwindcss', 'autoprefixer']
      }
    }
  },
  renderer: {
    plugins: [react()],
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
        '@': './src/renderer/src'
      }
    }
  }
})

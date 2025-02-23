import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import type { PluginOption } from 'vite'

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer]
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

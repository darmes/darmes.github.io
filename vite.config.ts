import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext', //browsers can handle the latest ES features
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        hidden: resolve(__dirname, 'hidden/index.html'),
      },
    },
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

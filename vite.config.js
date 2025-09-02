import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [vue()],
  alias: { 
    // paths
    '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias for src folder
    '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    '@pages': fileURLToPath(new URL('./src/pages', import.meta.url))
  }
})

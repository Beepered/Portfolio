/*
Deployment help
https://www.youtube.com/watch?v=U2nRRXhhrd4&ab_channel=Abstractprogrammer
*/

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
  resolve: {
    alias: { 
      // paths
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias for src folder
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  },
  server: {
    fs: {
      cachedChecks: false
    }
  }
})

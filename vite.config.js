/*
Deployment help
https://www.youtube.com/watch?v=U2nRRXhhrd4&ab_channel=Abstractprogrammer
*/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "Portfolio",
  resolve: {
    alias: [{ 
    find: "@server", 
    replacement: resolve(__dirname, './src/server/') 
  }]
  },
  server: {
  fs: {
    cachedChecks: false
  }
}
})

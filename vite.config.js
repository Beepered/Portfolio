import { defineConfig } from "vite";
import path from "node:path";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/Portfolio/",
  plugins: [vue()],
  resolve: {
    alias: {
      // paths
      "@": path.resolve(__dirname, "./src"), // Alias for src folder
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@characters": path.resolve(
        __dirname,
        "./src/components/BottomBar/Playground/characters"
      ),
    },
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
});

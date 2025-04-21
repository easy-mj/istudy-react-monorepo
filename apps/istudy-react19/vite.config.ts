import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 9001,
    open: false,
    proxy: {
      "/api": {
        target: "http://localhost:9000/",
        changeOrigin: true, // 允许跨域
      },
    },
  },
});

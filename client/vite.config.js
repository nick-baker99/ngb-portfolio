import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": { // Proxy all "/api" requests
        target: "http://localhost:8080", // backend
        changeOrigin: true,
        secure: false, // Required for some local setups
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove "/api" before sending to backend
      },
    },
  },
});

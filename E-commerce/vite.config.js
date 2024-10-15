import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Set to '0.0.0.0' if accessing from other devices
    port: 3000, // Default port for Vite
    hmr: {
      host: 'localhost', // Ensure this matches your server host
      port: 3000, // Make sure this matches the server port
      protocol: 'ws', // Use 'wss' if using HTTPS
    },
  }
})

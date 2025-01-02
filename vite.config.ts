import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/coin-tracker/',
  build: {
    outDir: 'dist', // Default output directory
  },
  plugins: [react()],
})

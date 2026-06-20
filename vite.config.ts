import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/idev.inc/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('three') || id.includes('@react-three')) return 'three';
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('react-router-dom')) return 'router';
        },
      },
    },
  },
})

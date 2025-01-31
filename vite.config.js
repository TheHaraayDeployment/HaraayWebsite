import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
  server: {
    // Handles SPA fallback locally during development
    historyApiFallback: true, // Keep for local dev
  },
  // Ensure Vercel builds with the right settings
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})

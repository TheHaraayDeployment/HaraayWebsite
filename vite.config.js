import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),

    viteImagemin({
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.7, 0.8], speed: 4 },
      gifsicle: false,
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
        ],
      },
      webp: { quality: 75 },
    }),
  ],

  assetsInclude: ['**/*.glb', '**/*.gltf'],

  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,

        // ✅ GLOBAL RESPONSIVE IMPORT (NO NEED TO IMPORT EVERYWHERE)
        additionalData: `
          @use "src/styles/responsive" as r;
        `,
      },
    },
  },

  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },

  server: {
    host: true,
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
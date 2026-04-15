// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.glb', '**/*.gltf'],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         quietDeps: true,
//       },
//     },
//   },
//   build: {
//     rollupOptions: {
//       input: '/index.html',
//     },
//   },
//   server: {
//     // Handles SPA fallback locally during development
//     historyApiFallback: true, // Keep for local dev
//   },
//   // Ensure Vercel builds with the right settings
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),

    // ✅ Image Optimization Plugin
    viteImagemin({
      // JPG compression
      mozjpeg: {
        quality: 75,
      },

      // PNG compression
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4,
      },

      gifsicle: false,

      // SVG optimization (safe config)
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
        ],
      },

      // WebP generation
      webp: {
        quality: 75,
      },
    }),
  ],

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
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
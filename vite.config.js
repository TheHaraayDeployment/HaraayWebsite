import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

// Vite's dev-server resolver treats a bare "/package" request as Node-style
// package resolution and serves the project's package.json instead of falling
// back to the SPA's index.html (every other route, e.g. /about, /works, is
// unaffected — this collision is specific to the "/package" path literally
// matching "package.json"). This plugin forces the SPA fallback for that
// one route, ahead of Vite's own resolution.
const fixPackageRouteCollision = () => ({
  name: 'fix-package-route-collision',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/package' || req.url?.startsWith('/package?')) {
        req.url = '/index.html'
      }
      next()
    })
  },
})

export default defineConfig({
  plugins: [
    react(),
    fixPackageRouteCollision(),

    viteImagemin({
      disable: true,
      filter: /\.(png|jpe?g|gif|webp)$/i,
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.7, 0.8], speed: 4 },
      gifsicle: false,
      svgo: false,
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
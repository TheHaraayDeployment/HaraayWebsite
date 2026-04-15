// vite.config.js
import { defineConfig } from "file:///sessions/compassionate-zealous-albattani/mnt/HaraayWebsite/node_modules/vite/dist/node/index.js";
import react from "file:///sessions/compassionate-zealous-albattani/mnt/HaraayWebsite/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteImagemin from "file:///sessions/compassionate-zealous-albattani/mnt/HaraayWebsite/node_modules/vite-plugin-imagemin/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    // ✅ Image Optimization Plugin
    viteImagemin({
      // JPG compression
      mozjpeg: {
        quality: 75
      },
      // PNG compression
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4
      },
      gifsicle: false,
      // SVG optimization (safe config)
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false
          }
        ]
      },
      // WebP generation
      webp: {
        quality: 75
      }
    })
  ],
  assetsInclude: ["**/*.glb", "**/*.gltf"],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  },
  build: {
    rollupOptions: {
      input: "/index.html"
    }
  },
  server: {
    historyApiFallback: true
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvY29tcGFzc2lvbmF0ZS16ZWFsb3VzLWFsYmF0dGFuaS9tbnQvSGFyYWF5V2Vic2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtemVhbG91cy1hbGJhdHRhbmkvbW50L0hhcmFheVdlYnNpdGUvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtemVhbG91cy1hbGJhdHRhbmkvbW50L0hhcmFheVdlYnNpdGUvdml0ZS5jb25maWcuanNcIjsvLyBpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG4vLyBpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4vLyAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuLy8gICBhc3NldHNJbmNsdWRlOiBbJyoqLyouZ2xiJywgJyoqLyouZ2x0ZiddLFxyXG4vLyAgIGNzczoge1xyXG4vLyAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4vLyAgICAgICBzY3NzOiB7XHJcbi8vICAgICAgICAgcXVpZXREZXBzOiB0cnVlLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgfSxcclxuLy8gICB9LFxyXG4vLyAgIGJ1aWxkOiB7XHJcbi8vICAgICByb2xsdXBPcHRpb25zOiB7XHJcbi8vICAgICAgIGlucHV0OiAnL2luZGV4Lmh0bWwnLFxyXG4vLyAgICAgfSxcclxuLy8gICB9LFxyXG4vLyAgIHNlcnZlcjoge1xyXG4vLyAgICAgLy8gSGFuZGxlcyBTUEEgZmFsbGJhY2sgbG9jYWxseSBkdXJpbmcgZGV2ZWxvcG1lbnRcclxuLy8gICAgIGhpc3RvcnlBcGlGYWxsYmFjazogdHJ1ZSwgLy8gS2VlcCBmb3IgbG9jYWwgZGV2XHJcbi8vICAgfSxcclxuLy8gICAvLyBFbnN1cmUgVmVyY2VsIGJ1aWxkcyB3aXRoIHRoZSByaWdodCBzZXR0aW5nc1xyXG4vLyAgIHJlc29sdmU6IHtcclxuLy8gICAgIGFsaWFzOiB7XHJcbi8vICAgICAgICdAJzogJy9zcmMnLFxyXG4vLyAgICAgfSxcclxuLy8gICB9LFxyXG4vLyB9KVxyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgdml0ZUltYWdlbWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG5cclxuICAgIC8vIFx1MjcwNSBJbWFnZSBPcHRpbWl6YXRpb24gUGx1Z2luXHJcbiAgICB2aXRlSW1hZ2VtaW4oe1xyXG4gICAgICAvLyBKUEcgY29tcHJlc3Npb25cclxuICAgICAgbW96anBlZzoge1xyXG4gICAgICAgIHF1YWxpdHk6IDc1LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8gUE5HIGNvbXByZXNzaW9uXHJcbiAgICAgIHBuZ3F1YW50OiB7XHJcbiAgICAgICAgcXVhbGl0eTogWzAuNywgMC44XSxcclxuICAgICAgICBzcGVlZDogNCxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGdpZnNpY2xlOiBmYWxzZSxcclxuXHJcbiAgICAgIC8vIFNWRyBvcHRpbWl6YXRpb24gKHNhZmUgY29uZmlnKVxyXG4gICAgICBzdmdvOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncmVtb3ZlVmlld0JveCcsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyBXZWJQIGdlbmVyYXRpb25cclxuICAgICAgd2VicDoge1xyXG4gICAgICAgIHF1YWxpdHk6IDc1LFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuXHJcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLmdsYicsICcqKi8qLmdsdGYnXSxcclxuXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBxdWlldERlcHM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiAnL2luZGV4Lmh0bWwnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzZXJ2ZXI6IHtcclxuICAgIGhpc3RvcnlBcGlGYWxsYmFjazogdHJ1ZSxcclxuICB9LFxyXG5cclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6ICcvc3JjJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBOEJBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLGtCQUFrQjtBQUV6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxJQUdOLGFBQWE7QUFBQTtBQUFBLE1BRVgsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLE1BQ1g7QUFBQTtBQUFBLE1BR0EsVUFBVTtBQUFBLFFBQ1IsU0FBUyxDQUFDLEtBQUssR0FBRztBQUFBLFFBQ2xCLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFFQSxVQUFVO0FBQUE7QUFBQSxNQUdWLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUdBLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsZUFBZSxDQUFDLFlBQVksV0FBVztBQUFBLEVBRXZDLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBRUEsUUFBUTtBQUFBLElBQ04sb0JBQW9CO0FBQUEsRUFDdEI7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

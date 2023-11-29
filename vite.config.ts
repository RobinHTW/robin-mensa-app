import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        short_name: 'Mensa App Robin',
        name: 'Die Mensa App von Robin',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          },
          {
            src: 'logos/maskable_icon_x48.png',
            type: 'image/png',
            sizes: '48x48',
            purpose: 'maskable'
          },
          {
            src: 'logos/maskable_icon_x72.png',
            type: 'image/png',
            sizes: '72x72',
            purpose: 'maskable'
          },
          {
            src: 'logos/maskable_icon_x96.png',
            type: 'image/png',
            sizes: '96x96',
            purpose: 'maskable'
          },
          {
            src: 'logos/maskable_icon_x128.png',
            type: 'image/png',
            sizes: '128x128',
            purpose: 'maskable'
          },
          {
            src: 'logos/maskable_icon_x192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'maskable'
          },
          {
            src: 'logos/maskable_icon_x384.png',
            type: 'image/png',
            sizes: '384x384',
            purpose: 'maskable'
          },
          {
            src: 'logos/maskable_icon_x512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable'
          },
          {
            src: 'logos/icon_x192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'any'
          },
          {
            src: 'logos/icon_x512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any'
          }
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff'
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

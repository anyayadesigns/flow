import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],

  // GitHub Pages: i-set ang DEPLOY_TARGET=gh-pages habang nagbu-build.
  // Vercel/Netlify/local: babalik sa '/'.
  base: process.env.DEPLOY_TARGET === 'gh-pages'
    ? '/flow/' // GitHub repo name (jedandsteph.github.io/flow/)
    : '/',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

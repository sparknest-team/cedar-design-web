/// <reference types="vitest" />
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: { alias: { '@cedar-design/use-vue': fileURLToPath(new URL('../use/src/index.ts', import.meta.url)) } },
  plugins: [vue(), jsx()],
  // Native fsevents can outlive Vitest 0.x workers on newer Node versions.
  server: { host: '127.0.0.1', watch: { useFsEvents: false } },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api'],
      },
      less: {
        javascriptEnabled: true,
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})

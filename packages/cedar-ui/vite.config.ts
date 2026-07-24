/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitest/config'
import pkg from './package.json'

export default defineConfig({
  plugins: [vue(), jsx()],
  build: {
    target: 'ES2015',
    lib: {
      entry: 'src/index.ts',
      name: pkg.name,
    },
    rollupOptions: {
      external: ['vue', 'vant', 'dayjs'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
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
  },
})

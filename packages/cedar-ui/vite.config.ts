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
    // jsx/tsx 文件按 web 模式转译，避免 @vitejs/plugin-vue-jsx 注入
    // SSR register helper 导致 jsdom 环境 mount 失败
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})

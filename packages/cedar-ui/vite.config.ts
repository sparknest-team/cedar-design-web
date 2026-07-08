/// <reference types="vitest" />
import { createViteConfig } from '@xxx-wad/fx-comp-kit/dist/vite.config.js'
import pkg from './package.json'

export default createViteConfig({
  name: pkg.name,
  build: {
    target: 'ES2015',
    rollupOptions: {
      external: [
        'vant',
        'dayjs'
      ],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})

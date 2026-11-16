import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: { host: '127.0.0.1' },
  test: { environment: 'node', include: ['docs/.vuepress/plugin-code-block/__tests__/*.test.ts'], maxWorkers: 1, fileParallelism: false },
})

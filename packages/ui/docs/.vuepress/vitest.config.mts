import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: { host: '127.0.0.1' },
  test: {
    environment: 'node',
    pool: 'forks',
    maxWorkers: 2,
    clearMocks: false,
    include: ['docs/.vuepress/**/*.test.ts'],
  },
})

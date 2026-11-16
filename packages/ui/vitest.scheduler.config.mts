import { defineConfig } from 'vitest/config'
import base from './vitest.config.mts'

// Replace include/exclude lists: Vite mergeConfig concatenates arrays.
export default defineConfig({
  ...base,
  test: {
    ...base.test,
    include: ['src/scheduler/__tests__/*.test.tsx'],
    coverage: {
      ...base.test?.coverage,
      include: ['src/scheduler/**/*.{ts,vue}'],
      exclude: ['**/__tests__/**', '**/__demos__/**', '**/style/**'],
      reporter: ['text', 'json-summary'],
      reportsDirectory: './coverage/scheduler',
    },
  },
})

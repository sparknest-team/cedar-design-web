import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: { environment: 'node', include: ['docs/.vuepress/plugin-code-block/__tests__/*.test.ts'], threads: false },
})

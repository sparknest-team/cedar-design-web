import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  server: { host: '127.0.0.1' },
  // The gate runs before package builds in clean CI; never consume stale lib output.
  resolve: {
    alias: [
      { find: /^@cedar-design\/resolver$/, replacement: fileURLToPath(new URL('../cedar-resolver/src/index.ts', import.meta.url)) },
      { find: /^@cedar-design\/shared$/, replacement: fileURLToPath(new URL('../cedar-shared/src/index.ts', import.meta.url)) },
    ],
  },
  test: {
    environment: 'node',
    include: ['docs/.vuepress/site-imports.test.ts'],
  },
})

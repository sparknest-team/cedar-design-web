/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitest/config'
import { createTestIconSourceImports, testSourceAliases } from './scripts/testing/source-dependencies.mjs'

export default defineConfig({
  resolve: { alias: testSourceAliases },
  plugins: [vue(), jsx(), createTestIconSourceImports()],
  server: { host: '127.0.0.1' },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    pool: 'forks',
    maxWorkers: 4,
    // Keep transforms and lockfile invalidation local to the test root. Sharing
    // the workspace cache made unrelated runs wait on a large cache cleanup.
    fsModuleCachePath: '.cache/vitest/modules',
    // Preserve the suite's explicit mock cleanup while migrating from 0.x.
    clearMocks: false,
    // Keep existing snapshots focused on rendered behavior, not serializer changes.
    snapshotFormat: { escapeString: true, printBasicPrototype: true },
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx,vue}'],
      exclude: ['src/**/__tests__/**', 'src/**/__demos__/**', 'src/**/*.d.ts'],
      reporter: ['text', 'json-summary', 'html'],
    },
  },
})

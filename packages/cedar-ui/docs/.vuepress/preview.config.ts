import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// Serve VuePress output only; do not load the legacy library Vite config.
export default defineConfig({
  root: fileURLToPath(new URL('../../', import.meta.url)),
  base: process.env.FX_BASE || '/',
  build: { outDir: 'dist' },
  preview: { host: '127.0.0.1', port: 4173 },
})

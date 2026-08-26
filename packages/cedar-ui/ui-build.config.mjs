import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from '@cedarjs/cli'

const root = import.meta.dirname
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'))

export default defineConfig({
  root,
  name: '@cedarjs/ui',
  globalName: 'Cedar',
  bundleName: 'cedar',
  external: [
    'vue',
    '@vue/shared',
    ...Object.keys(pkg.dependencies ?? {}),
  ],
  globals: {
    vue: 'Vue',
    '@vue/shared': 'VueShared',
  },
  tsconfig: 'tsconfig.unified-build.json',
})

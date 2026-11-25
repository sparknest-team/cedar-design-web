import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from '@cedar-design/cli-vue'

const root = import.meta.dirname
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'))

export default defineConfig({
  root,
  name: '@cedar-design/ui-vue',
  globalName: 'Cedar',
  bundleName: 'cedar',
  umdExternal: ['vue'],
  external: ['@cedar-design/ui-vue/trigger/server', 'vue', '@vue/shared', ...Object.keys(pkg.dependencies ?? {})],
  globals: {
    vue: 'Vue',
    '@vue/shared': 'VueShared',
  },
  tsconfig: 'tsconfig.unified-build.json',
})

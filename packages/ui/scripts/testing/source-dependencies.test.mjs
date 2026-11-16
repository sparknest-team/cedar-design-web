import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { createRequire } from 'node:module'
import test from 'node:test'
import { createTestIconSourceImports, testSourceAliases } from './source-dependencies.mjs'

test('SSR tests resolve the same Vue runtime as component tests', () => {
  const require = createRequire(new URL('../../package.json', import.meta.url))
  const renderer = createRequire(require.resolve('@vue/server-renderer'))
  assert.equal(require('@vue/server-renderer/package.json').version, require('vue/package.json').version)
  assert.equal(renderer.resolve('vue'), require.resolve('vue'))
})

function resolveSource(id) {
  const alias = testSourceAliases.find(alias => alias.find.test(id))
  return alias && id.replace(alias.find, alias.replacement)
}
test('workspace dependencies resolve to existing source without es/lib build artifacts', () => {
  for (const id of ['@cedar-design/use-vue', '@cedar-design/shared-vue', '@cedar-design/icons-vue', '@cedar-design/icons-vue/icon-info', '@cedar-design/icons-vue/icon-close']) {
    const target = resolveSource(id)
    assert.ok(target, id)
    assert.match(target, /\/src\//)
    assert.equal(existsSync(target), true, target)
  }
  assert.equal(resolveSource('@cedar-design/icons-vue-extra'), undefined)
})
test('named icon imports load only the actual icons and preserve aliases and type imports', () => {
  const plugin = createTestIconSourceImports()
  const result = plugin.transform(`import { IconArrowLeft as Back, IconArrowRight, type IconProps } from '@cedar-design/icons-vue';\nexport const pair = [Back, IconArrowRight]`, '/demo.vue')
  assert.match(result.code, /import \{ IconArrowLeft as Back \} from '@cedar-design\/icons-vue\/icon-arrow-left'/)
  assert.match(result.code, /import \{ IconArrowRight \} from '@cedar-design\/icons-vue\/icon-arrow-right'/)
  assert.match(result.code, /import \{ type IconProps \} from '@cedar-design\/icons-vue'/)
  assert.equal(plugin.transform(result.code, '/demo.vue'), undefined)
  assert.equal(plugin.transform('const ordinary = 1', '/ordinary.ts'), undefined)
})

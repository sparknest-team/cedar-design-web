import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const workspace = fileURLToPath(new URL('../../', import.meta.url))
const cedar = resolve(workspace, 'cedar-design-web/packages/cedar-ui/src/ripple')
const maple = resolve(workspace, 'maple-design-mobile/packages/maple-ui/src/ripple')
const implementation = (root) => {
  const source = readFileSync(resolve(root, 'index.ts'), 'utf8')
  return source.slice(source.indexOf("const { n }"))
}
assert.equal(implementation(cedar), implementation(maple), 'Ripple directive behavior differs')

const normalizeStyle = (source) => source
  .replaceAll('mp-ripple', 'PREFIX-ripple')
  .replaceAll('c-ripple', 'PREFIX-ripple')
  .replaceAll('--mp-ripple-', '--PREFIX-ripple-')
  .replaceAll('--c-ripple-', '--PREFIX-ripple-')
  .replace(/var\(~?['"]?(--PREFIX-ripple-[\w-]+)['"]?\)/g, 'var($1)')
  .replace(/z-index:\s*[^;]+;/g, '')
  .replace(/\s+/g, '')
const cedarStyle = readFileSync(resolve(cedar, 'style/index.less'), 'utf8').replace(/@import[^;]+;/g, '')
const mapleStyle = readFileSync(resolve(maple, 'style/ripple.less'), 'utf8').replace(/:root\s*\{[\s\S]*?\}/, '')
assert.equal(normalizeStyle(cedarStyle), normalizeStyle(mapleStyle), 'Ripple style rules differ')
console.log('Ripple parity passed: shared directive behavior and visual rules; token defaults remain platform-specific.')

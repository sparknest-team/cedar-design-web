import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const workspace = fileURLToPath(new URL('../../', import.meta.url))
const cedar = resolve(workspace, 'cedar-design-web/packages/cedar-ui/src/rate')
const maple = resolve(workspace, 'maple-design-mobile/packages/maple-ui/src/rate')

for (const file of ['props.ts', '__tests__/same-source.spec.ts']) {
  assert.equal(readFileSync(resolve(cedar, file), 'utf8'), readFileSync(resolve(maple, file), 'utf8'), `${file} differs`)
}

const behavior = (root) => readFileSync(resolve(root, 'rate-core.tsx'), 'utf8').slice(readFileSync(resolve(root, 'rate-core.tsx'), 'utf8').indexOf("const { name, n }"))
assert.equal(behavior(cedar), behavior(maple), 'rate-core.tsx behavior differs')

console.log('Rate parity passed: shared behavior, props and precedence; only package imports differ.')

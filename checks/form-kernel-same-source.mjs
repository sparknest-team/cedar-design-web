import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const workspace = fileURLToPath(new URL('../../', import.meta.url))
const cedar = resolve(workspace, 'cedar-design-web/packages/cedar-ui/src/form')
const maple = resolve(workspace, 'maple-design-mobile/packages/maple-ui/src/form')
const read = (root, file) => readFileSync(resolve(root, file), 'utf8')
const normalize = (source) => source.replace(/["';,]/g, '').replace(/\s+/g, '')

for (const file of [
  'form-controller.ts',
  '__tests__/form-controller.spec.ts',
  'validate-trigger.ts',
  '__tests__/validate-trigger.spec.ts',
]) {
  assert.equal(normalize(read(cedar, file)), normalize(read(maple, file)), `${file} differs`)
}

console.log('Form kernel parity passed: registry, validation, reset, clear, triggers and async race behavior are same-source.')

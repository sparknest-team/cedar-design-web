import { normalizeTypeScript } from './normalize-source.mjs'
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
  'item-decoration.ts',
  '__tests__/decoration-contract.spec.ts',
  '__tests__/form-controller.spec.ts',
  'validate-trigger.ts',
  'layout-props.ts',
  'form-id.ts',
  'use-form-item-layout.ts',
  'use-form-label-width.ts',
  '__tests__/layout-contract.spec.ts',
  '__tests__/validate-trigger.spec.ts',
]) {
  assert.equal(await normalizeTypeScript(read(cedar, file)), await normalizeTypeScript(read(maple, file)), `${file} differs`)
}

assert.equal(
  normalize(read(cedar, 'FormItemLabel.vue')).replaceAll('@cedar-design/icons-vue', '@icons').replaceAll('c-form-item-label', 'form-label'),
  normalize(read(maple, 'FormItemLabel.vue')).replaceAll('@maple-design/icons-vue', '@icons').replaceAll('mp-form-item__label', 'form-label'),
  'FormItemLabel.vue differs beyond local icon import and CSS namespace',
)

console.log('Form kernel parity passed: 12 copied pairs: registry, validation, reset, clear, triggers, async races, layout and label-width lifecycle are same-source.')

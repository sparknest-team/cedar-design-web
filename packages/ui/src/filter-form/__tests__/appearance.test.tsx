import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'

test('filter surface defaults to an unframed layout and actions retain a full-width non-wrapping collapse control', () => {
  const tokens = readFileSync('src/filter-form/style/token.less', 'utf8')
  const style = readFileSync('src/filter-form/style/index.less', 'utf8')
  expect(tokens).toContain('--c-filter-form-background-color: transparent')
  for (const token of ['padding', 'border-width', 'border-radius']) {
    expect(tokens).toContain(`--c-filter-form-${token}: 0px`)
  }
  expect(style).toMatch(/&__actions\s*\{[^}]*width: 100%/)
  expect(style).toMatch(/&__collapse\s*\{[^}]*white-space: nowrap/)
  expect(style).toContain('padding-top: var(--c-filter-form-action-offset)')
})

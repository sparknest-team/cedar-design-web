import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'

test('filter surface is unframed across themes and actions retain a full-width non-wrapping collapse control', () => {
  const tokens = readFileSync('src/filter-form/style/token.less', 'utf8')
  const style = readFileSync('src/filter-form/style/index.less', 'utf8')
  expect(tokens).not.toMatch(/--c-filter-form-(?:padding|border-[\w-]+|background-color):/)
  const rootStyle = style.match(/\.c-filter-form\s*\{([^{}]*)/)?.[1]
  for (const property of ['margin', 'padding', 'border']) {
    expect(rootStyle).toContain(`${property}: 0;`)
  }
  expect(style).toMatch(/&__actions\s*\{[^}]*width: 100%/)
  expect(style).toMatch(/&__collapse\s*\{[^}]*white-space: nowrap/)
  expect(style).toContain('padding-top: var(--c-filter-form-action-offset)')
})

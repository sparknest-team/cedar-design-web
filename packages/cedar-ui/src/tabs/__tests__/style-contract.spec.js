import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { expect, test } from 'vitest'

test('Tabs active color is exposed through the shared system role', () => {
  const tokens = readFileSync(resolve(process.cwd(), 'src/tabs/style/token.less'), 'utf8')
  const styles = readFileSync(resolve(process.cwd(), 'src/tabs/style/index.less'), 'utf8')

  expect(tokens).toContain(
    '--c-tabs-title-text-color-active: var(--c-sys-color-action-primary);',
  )
  expect(styles).toContain('&--tab-active { color: var(--c-tabs-title-text-color-active); }')
})

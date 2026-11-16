// @vitest-environment node
import { readFileSync } from 'node:fs'
import less from 'less'
import { describe, expect, it } from 'vitest'

describe('vertical divider text layout', () => {
  it('compiles a content-width override instead of retaining the zero-width plain line', async () => {
    const source = readFileSync(new URL('../style/implementation.less', import.meta.url), 'utf8')
    const { css } = await less.render(source)
    const selector = '.c-divider--with-text.c-divider--orientation-vertical {'
    const rule = css.split(selector)[1].split('}')[0]
    expect(rule).toContain('width: fit-content;')
    expect(rule).toContain('max-width: 100%;')
  })
})

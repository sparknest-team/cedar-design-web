import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import less from 'less'
import { expect, test } from 'vitest'

test('the Less compiler preserves the fade grid row and column', async () => {
  const filename = resolve(process.cwd(), 'src/carousel/style/index.less')
  const { css } = await less.render(readFileSync(filename, 'utf8'), { filename })
  const rule = css.split('.c-carousel--fade .c-carousel-item {')[1].split('}')[0]
  expect(rule).toContain('grid-area: 1 / 1;')
})

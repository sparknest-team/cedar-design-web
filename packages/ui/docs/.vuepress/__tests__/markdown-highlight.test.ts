import { createMarkdown } from 'vuepress/markdown'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { expect, test } from 'vitest'

test('eager Markdown highlighting retains tokens, line highlights, numbers and safe fallback', async () => {
  const md = createMarkdown()
  await (prismjsPlugin({}) as any).extendsMarkdown(md)
  const html = md.render('```ts {2}\nconst value: string = "中文"\nconsole.log(value)\n```')
  expect(html).toContain('token keyword')
  expect(html).toContain('highlighted')
  expect(html).toContain('line-numbers')
  expect(html).toContain('中文')
  const unknown = md.render('```unknown\n<script>alert(1)</script>\n```')
  expect(unknown).toContain('&lt;script&gt;')
  expect(unknown).not.toContain('<script>')
})

import { createPage, type Plugin } from '@vuepress/core'
import { readFile } from 'node:fs/promises'

// Native /en/ pages share example files; untranslated prose is explicitly marked.
// An authored /en/ page takes precedence over this fallback.
export function localizedPages(): Plugin {
  return {
    name: 'cedar-localized-pages',
    async onInitialized(app) {
      const originals = app.pages.filter(page => page.filePath && !page.path.startsWith('/en/'))
      const paths = new Set(app.pages.map(page => page.path))
      for (const page of originals) {
        const path = `/en${page.path}`
        if (paths.has(path)) continue
        let content = await readFile(page.filePath!, 'utf8')
        content = content.replace(/^---[\s\S]*?---\s*/, '')
        content = content.replace(/^## 案例$/gm, '## Examples')
          .replace('两端使用同一份实现和示例，组件前缀、主题基础变量与注册入口各自保留。', 'Both libraries share implementation and examples, with separate prefixes, theme tokens and registration.')
        content = `> Some documentation on this page is available in Chinese only. Component built-in messages follow English; untranslated example text remains in its original language.\n\n${content}`
        app.pages.push(await createPage(app, {
          filePath: page.filePath!, path, content,
          frontmatter: { ...page.frontmatter, permalink: path, lang: 'en-US', localizedFrom: page.path },
        }))
        paths.add(path)
      }
    },
  }
}

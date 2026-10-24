import { createPage, preparePageChunk, preparePageComponent, type Plugin, type App, type Page } from '@vuepress/core'
import { readFile } from 'node:fs/promises'

// Native /en/ pages share example files; untranslated prose is explicitly marked.
// An authored /en/ page takes precedence over this fallback.
export function localizedPages(): Plugin {
  let initialized = false
  async function translate(app: App, page: Page) {
    const path = `/en${page.path}`
    let content = await readFile(page.filePath!, 'utf8')
    content = content.replace(/^---[\s\S]*?---\s*/, '')
    content = content.replace(/^## 案例$/gm, '## Examples')
      .replace('两端使用同一份实现和示例，组件前缀、主题基础变量与注册入口各自保留。', 'Both libraries share implementation and examples, with separate prefixes, theme tokens and registration.')
    content = `> Some documentation on this page is available in Chinese only. Component built-in messages follow English; untranslated example text remains in its original language.\n\n${content}`
    return createPage(app, {
      filePath: page.filePath!, path, content,
      frontmatter: { ...page.frontmatter, permalink: path, lang: 'en-US', localizedFrom: page.path },
    })
  }
  return {
    name: 'cedar-localized-pages',
    async onInitialized(app) {
      const originals = app.pages.filter(page => page.filePath && !page.path.startsWith('/en/'))
      const paths = new Set(app.pages.map(page => page.path))
      const missing = originals.filter(page => {
        const path = `/en${page.path}`
        if (paths.has(path)) return false
        paths.add(path)
        return true
      })
      const translated = new Array<Page>(missing.length)
      const pending = missing.entries()
      // Bounded I/O concurrency; all locales still finish before startup and
      // results keep their original order regardless of read completion order.
      await Promise.all(Array.from({ length: Math.min(8, missing.length) }, async () => {
        for (const [index, page] of pending) translated[index] = await translate(app, page)
      }))
      app.pages.push(...translated)
      initialized = true
    },
    async extendsPage(page, app) {
      if (!initialized || !app.env.isDev || !page.filePath || page.path.startsWith('/en/')) return
      const index = app.pages.findIndex(candidate => candidate.path === `/en${page.path}` && candidate.frontmatter.localizedFrom === page.path)
      if (index < 0) return // Never replace an authored English page.
      const translated = await translate(app, page)
      app.pages.splice(index, 1, translated)
      await preparePageComponent(app, translated)
      await preparePageChunk(app, translated)
    },
  }
}

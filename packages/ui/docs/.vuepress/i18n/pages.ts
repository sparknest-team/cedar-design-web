import { createPage, preparePageChunk, preparePageComponent, type Plugin, type App, type Page } from '@vuepress/core'
import { readFile } from 'node:fs/promises'

// Native /en/ pages share example files; untranslated prose is explicitly marked.
// An authored /en/ page takes precedence over this fallback.
export function localizedPages(): Plugin {
  let initialized = false
  const groupLabels = readFile(new URL('../../../../../../design-ui/configs/demo-groups.json', import.meta.url), 'utf8')
    .then(source => {
      const components = JSON.parse(source) as Record<string, { title: string; en: string }[]>
      return new Map(Object.values(components).flatMap(groups => groups.map(group => [group.title, group.en] as const)))
    })
  async function translate(app: App, page: Page) {
    const path = `/en${page.path}`
    let content = await readFile(page.filePath!, 'utf8')
    content = content.replace(/^---[\s\S]*?---\s*/, '')
    const labels = await groupLabels
    content = content.replace(/^## (.+)$/gm, (heading, title) => title === '案例' ? '## Examples' : labels.has(title) ? `## ${labels.get(title)}` : heading)
      .replace('两端使用同一份实现和示例，组件前缀、主题基础变量与注册入口各自保留。', 'Both libraries share implementation and examples, with separate prefixes, theme tokens and registration.')
    content = `> Some documentation on this page is available in Chinese only. Component built-in messages follow English; untranslated example text remains in its original language.\n\n${content}`
    const translated = await createPage(app, {
      filePath: page.filePath!, path, content,
      frontmatter: { ...page.frontmatter, permalink: path, lang: 'en-US', localizedFrom: page.path },
    })
    // The source file is shared for relative demo imports, but its inferred
    // Chinese URL must not become a redirect to this English fallback.
    translated.pathInferred = path
    translated.pathLocale = '/en/'
    return translated
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
      if (!initialized || !Array.isArray(app.pages) || !app.env.isDev || !page.filePath || page.path.startsWith('/en/')) return
      const index = app.pages.findIndex(candidate => candidate.path === `/en${page.path}` && candidate.frontmatter.localizedFrom === page.path)
      if (index < 0) return // Never replace an authored English page.
      const translated = await translate(app, page)
      app.pages.splice(index, 1, translated)
      await preparePageComponent(app, translated)
      await preparePageChunk(app, translated)
    },
  }
}

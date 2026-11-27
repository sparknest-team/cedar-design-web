// @vitest-environment node
import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { expect, test, vi } from 'vitest'
import { createPage, preparePageChunk } from '@vuepress/core'
import { localizedPages } from '../i18n/pages'

vi.mock('@vuepress/core', () => ({
  createPage: vi.fn(async (_app, options) => options),
  preparePageChunk: vi.fn(),
  resolvePageChunkInfo: vi.fn(() => ({})),
}))
test('regenerates fallback English content on source HMR without replacing authored translations', async () => {
  const folder = await mkdtemp(join(tmpdir(), 'cedar-locale-test-'))
  try {
    const filePath = join(folder, 'README.md')
    await writeFile(filePath, '# Input\n\n## 案例\n\n原文。')
    const page = { filePath, path: '/input/', frontmatter: {} }
    const app = { env: { isDev: true }, pages: [page] } as any
    const plugin = localizedPages() as any
    await plugin.onInitialized(app)
    expect(app.pages[1].path).toBe('/en/input/')
    expect(app.pages[1].content).toContain('## Examples')
    // Config reloads reuse the plugin before the next app has resolved pages.
    await expect(plugin.extendsPage(page, { env: { isDev: true } })).resolves.toBeUndefined()
    await writeFile(filePath, '# Input\n\n## 基础示例\n\n更新后的说明。\n\n## 交互与控制\n\n交互。')
    await plugin.extendsPage(page, app)
    expect(app.pages[1].content).toContain('更新后的说明。')
    expect(app.pages[1].content).toContain('## Basic examples')
    expect(app.pages[1].content).toContain('## Interaction and control')
    expect(preparePageChunk).toHaveBeenCalled()
    app.pages[1].frontmatter = { lang: 'en-US' }
    vi.mocked(createPage).mockClear()
    await plugin.extendsPage(page, app)
    expect(createPage).not.toHaveBeenCalled()
  } finally { await rm(folder, { recursive: true }) }
})


test('parallel fallbacks finish in source order and retain authored English pages', async () => {
  const folder = await mkdtemp(join(tmpdir(), 'cedar-locale-order-'))
  try {
    const originals = await Promise.all(Array.from({ length: 19 }, async (_, i) => {
      const filePath = join(folder, `${i}.md`)
      await writeFile(filePath, `# Page ${i}\n\n## 案例\n`)
      return { filePath, path: `/page-${i}/`, frontmatter: {} }
    }))
    const authored = { path: '/en/page-4/', frontmatter: { lang: 'en-US' } }
    const app = { env: { isDev: true }, pages: [...originals, authored] } as any
    const plugin = localizedPages() as any
    await plugin.onInitialized(app)
    expect(app.pages[19]).toBe(authored)
    expect(app.pages.slice(20).map((page: any) => page.path)).toEqual(
      originals.filter((_, i) => i !== 4).map(page => `/en${page.path}`),
    )
    expect(app.pages.slice(20).every((page: any) => page.content.includes('## Examples'))).toBe(true)
  } finally { await rm(folder, { recursive: true, force: true }) }
})

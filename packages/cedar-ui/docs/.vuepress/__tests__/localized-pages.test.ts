// @vitest-environment node
import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { expect, test, vi } from 'vitest'
import { createPage, preparePageChunk, preparePageComponent } from '@vuepress/core'
import { localizedPages } from '../i18n/pages'

vi.mock('@vuepress/core', () => ({
  createPage: vi.fn(async (_app, options) => options),
  preparePageChunk: vi.fn(),
  preparePageComponent: vi.fn(),
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
    await writeFile(filePath, '# Input\n\n## 案例\n\n更新后的说明。')
    await plugin.extendsPage(page, app)
    expect(app.pages[1].content).toContain('更新后的说明。')
    expect(preparePageComponent).toHaveBeenCalled()
    expect(preparePageChunk).toHaveBeenCalled()
    app.pages[1].frontmatter = { lang: 'en-US' }
    vi.mocked(createPage).mockClear()
    await plugin.extendsPage(page, app)
    expect(createPage).not.toHaveBeenCalled()
  } finally { await rm(folder, { recursive: true }) }
})

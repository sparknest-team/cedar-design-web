// @vitest-environment node
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { expect, test } from 'vitest'
import { createDevApp } from '@vuepress/core'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
import { loadJSONIndex, search } from 'slimsearch'
import { decodeData } from '@vuepress/helper/shared'

test('all search sections and both locales are indexed before preparation finishes', async () => {
  const folder = await mkdtemp(join(tmpdir(), 'cedar-search-index-'))
  try {
    await mkdir(join(folder, 'en'))
    await writeFile(join(folder, 'README.md'), '# Scheduler\n\n' + Array.from({ length: 2001 }, (_, i) => `## UniqueSection${i}\n\n日程编辑 example${i}\n`).join('\n'))
    await writeFile(join(folder, 'en', 'README.md'), '# Scheduler English\n\n## Snapshot\n\nCopy verification token\n\n| Field | Meaning |\n| --- | --- |\n| timezone | TableSentinel |\n\n<div>Entity &amp; Nested <strong>NestedSentinel</strong></div>\n')
    const app = createDevApp({
      source: folder,
      theme: { name: 'test-only', plugins: [] },
      temp: join(folder, '.temp'),
      pagePatterns: ['**/*.md'],
      locales: { '/': { lang: 'zh-CN' }, '/en/': { lang: 'en-US' } },
      plugins: [slimsearchPlugin({ indexContent: true })],
      bundler: { name: 'test-only', dev: async () => () => {}, build: async () => {} },
    } as any)
    await app.init()
    await app.prepare()
    const readIndex = async (name: string) => {
      const module = await readFile(app.dir.temp(`slimsearch/${name}.js`), 'utf8')
      const encoded = JSON.parse(module.trim().replace(/^export default /, '').replace(/;$/, ''))
      return loadJSONIndex(decodeData(encoded), {
        fields: ['heading', 'text', 'customFields'], storeFields: ['heading', 'text', 'customFields'],
      })
    }
    expect(search(await readIndex('root'), 'UniqueSection2000').some(hit => String(hit.id).endsWith('#uniquesection2000'))).toBe(true)
    expect(search(await readIndex('en'), 'verification').some(hit => String(hit.id).endsWith('#snapshot'))).toBe(true)
    expect(search(await readIndex('root'), 'verification')).toEqual([])
    for (const word of ['TableSentinel', 'NestedSentinel']) expect(search(await readIndex('en'), word).length).toBeGreaterThan(0)
  } finally { await rm(folder, { recursive: true, force: true }) }
}, 15000)

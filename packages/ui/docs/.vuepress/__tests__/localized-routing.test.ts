// @vitest-environment node
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { expect, test } from 'vitest'
import { createDevApp, prepareRoutes } from '@vuepress/core'
import { localizedPages } from '../i18n/pages'
import { translateNavigation } from '../i18n/navigation'
import { zhNavBar } from '../configs/navbar/zh'

test('English fallbacks preserve Chinese routes and aliases during initialization and HMR', async () => {
  const folder = await mkdtemp(join(tmpdir(), 'cedar-localized-routing-'))
  try {
    const source = join(folder, 'docs')
    await mkdir(join(source, 'showcase'), { recursive: true })
    await mkdir(join(source, 'guide'), { recursive: true })
    const overview = join(source, 'showcase', 'README.md')
    await writeFile(overview, '---\npermalink: /showcase/\n---\n# 特色与场景\n')
    await writeFile(join(source, 'guide', 'quickstart.md'), '---\npermalink: /guide/quickstart/\n---\n# 快速开始\n')
    const plugin = localizedPages() as any
    const app = createDevApp({
      source, temp: join(folder, 'temp'),
      locales: { '/': { lang: 'zh-CN' }, '/en/': { lang: 'en-US' } },
      theme: { name: 'routing-test' },
      bundler: { name: 'routing-test', dev: async () => {}, build: async () => {} },
      plugins: [plugin],
    } as any)
    await app.init()
    const check = async () => {
      await prepareRoutes(app)
      const output = await readFile(join(folder, 'temp/internal/routes.js'), 'utf8')
      const literal = output.match(/^export const redirects = JSON.parse\((.+)\)$/m)![1]
      const redirects = JSON.parse(JSON.parse(literal))
      expect(redirects['/showcase/']).toBeUndefined()
      expect(redirects['/guide/quickstart.html']).toBe('/guide/quickstart/')
      for (const page of app.pages.filter(page => page.frontmatter.localizedFrom)) {
        expect(page.pathInferred).toBe(page.path)
        expect(page.pathLocale).toBe('/en/')
      }
      expect(app.pages.map(page => page.path)).toEqual(expect.arrayContaining([
        '/showcase/', '/en/showcase/', '/guide/quickstart/', '/en/guide/quickstart/',
      ]))
    }
    await check()
    await writeFile(overview, '---\npermalink: /showcase/\n---\n# 更新后的特色与场景\n')
    await plugin.extendsPage(app.pages.find(page => page.path === '/showcase/'), app)
    await check()
  } finally { await rm(folder, { recursive: true, force: true }) }
})

test('canonical navigation and translated prefixes remain stable across repeated use', () => {
  expect(zhNavBar).toContainEqual(expect.objectContaining({ text: '组件', link: '/components/button/' }))
  const input = [{ text: '特色与场景', link: '/showcase/', children: ['/showcase/forms/', '/en/showcase/themes/', '//example.com'] }]
  const translated = translateNavigation(input)
  expect(translated[0].link).toBe('/en/showcase/')
  expect(translated[0].children).toEqual(['/en/showcase/forms/', '/en/showcase/themes/', '//example.com'])
  expect(translateNavigation(translated)).toEqual(translated)
  expect(input[0].link).toBe('/showcase/')
})

import { existsSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, extname, resolve } from 'node:path'
import { expect, test } from 'vitest'
import { bundleThemeClient } from '../theme-client'

test('theme presentation shares chunks while providers stay native, and edits invalidate the server-local build', async () => {
  const require = createRequire(import.meta.url)
  const client = resolve(dirname(require.resolve('vuepress-theme-hope/package.json')), 'lib/client')
  const entry = resolve(client, 'layouts/Layout.js')
  const watched: string[] = []
  let resolutions = 0
  const context = {
    addWatchFile: (file: string) => watched.push(file),
    async resolve(id: string, importer: string) {
      resolutions++
      if (!id.startsWith('.') && !id.startsWith('@theme-hope/')) return { id: `/external/${id}.js`, external: true }
      let file = id.startsWith('@theme-hope/') ? resolve(client, id.slice('@theme-hope/'.length)) : resolve(dirname(importer), id)
      if (!extname(file)) file += '.js'
      if (!existsSync(file)) throw new Error(`Missing theme module: ${file}`)
      return { id: file }
    },
  }
  const plugin = bundleThemeClient() as any
  plugin.configureServer({ middlewares: { use() {} }, moduleGraph: { idToModuleMap: new Map([[entry, { id: entry }]]) } })
  expect(await plugin.load.call(context, `${entry}?raw`)).toBeUndefined()
  expect(await plugin.load.call(context, `${entry}?url`)).toBeUndefined()
  expect(resolutions).toBe(0)
  const code = await plugin.load.call(context, `${entry}?v=123`)
  expect(code).toContain('virtual:cedar-theme-client/chunk-')
  const chunk = code.match(/"(virtual:cedar-theme-client\/chunk-[^"]+)"/)![1]
  expect(await plugin.load.call(context, plugin.resolveId(`${chunk}?v=123`))).toContain('export')
  expect(watched.length).toBeGreaterThan(10)
  expect(watched.every(file => existsSync(file))).toBe(true)
  expect(watched.some(file => file.includes('/composables/') || file.includes('/utils/'))).toBe(false)
  const count = resolutions
  expect(await plugin.load.call(context, entry)).toBe(code)
  expect(resolutions).toBe(count)
  expect(plugin.handleHotUpdate({ file: watched[0] })).toEqual([{ id: entry }])
  await plugin.load.call(context, entry)
  expect(resolutions).toBeGreaterThan(count)
}, 15000)

test('server-local theme bundles change entry URLs on restart and cannot be cached as immutable dependencies', () => {
  const first = bundleThemeClient() as any
  const second = bundleThemeClient() as any
  const entry = 'vuepress-theme-hope/layouts/Layout.js'
  const resolved = first.resolveId(entry)
  expect(resolved).toContain('cedar-theme-build=')
  expect(second.resolveId(entry)).not.toBe(resolved)
  expect(first.resolveId(`${entry}?v=old`)).toContain('?v=old&cedar-theme-build=')
  expect(first.resolveId(resolved)).toBeUndefined()
  expect(first.resolveId(`${entry}?raw`)).toBeUndefined()
  expect(first.resolveId('vue')).toBeUndefined()
  let middleware: any
  first.configureServer({ middlewares: { use(fn: any) { middleware = fn } } })
  for (const url of [resolved, '/@id/__x00__cedar-theme-client/chunk-old.js', '/other.js?v=123']) {
    const headers = new Map()
    const response = { setHeader(name: string, value: string) { headers.set(name, value); return this } }
    let continued = false
    middleware({ url }, response, () => { continued = true })
    response.setHeader('Cache-Control', 'max-age=31536000,immutable')
    response.setHeader('Content-Type', 'text/javascript')
    expect(headers.get('Cache-Control')).toBe(url.includes('other.js') ? 'max-age=31536000,immutable' : 'no-cache')
    expect(headers.get('Content-Type')).toBe('text/javascript')
    expect(continued).toBe(true)
  }
})

test('generated component config reuses the exact optimized VueUse package without rewriting other versions or raw imports', () => {
  const require = createRequire(import.meta.url)
  const root = resolve(dirname(new URL(import.meta.url).pathname), '../../..')
  const nativeVueUse = resolve(dirname(require.resolve('@vueuse/core')), 'index.mjs')
  const plugin = bundleThemeClient() as any
  plugin.configResolved({ root, optimizeDeps: { include: ['@vueuse/core'] } })
  const id = '/temp/components/config.js'
  const code = `import { useScriptTag } from "${nativeVueUse}";`
  expect(plugin.transform(code, id).code).toBe('import { useScriptTag } from "@vueuse/core";')
  expect(plugin.transform(code, `${id}?raw`)).toBeUndefined()
  expect(plugin.transform(code, '/authored/config.js')).toBeUndefined()
  expect(plugin.transform(code.replace(nativeVueUse, '/other/node_modules/@vueuse/core/index.mjs'), id)).toBeUndefined()
  plugin.api.preserveOptimizedImports = false
  expect(plugin.transform(code, id)).toBeUndefined()
})

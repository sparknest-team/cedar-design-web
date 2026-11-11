import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, resolve } from 'node:path'
import { expect, test } from 'vitest'
import { flattenStyleImports } from '../style-imports'

test('only import-only style facades flatten in order and facade edits update their real callers', async () => {
  const root = await mkdtemp(resolve(tmpdir(), 'cedar-style-facades-'))
  const facade = resolve(root, 'button/style/index.ts')
  const shared = resolve(root, 'style/index.ts')
  const entry = resolve(root, 'demo.ts')
  const written = async (file: string, code: string) => { await mkdir(dirname(file), { recursive: true }); await writeFile(file, code) }
  try {
    await written(shared, 'import "./base.less";')
    await written(facade, 'import "../../style/index.ts";\nimport "../../style/index.ts";\nimport "./index.less";')
    const plugin = flattenStyleImports(root) as any
    const watched: string[] = []
    const caller = { id: entry }
    plugin.configureServer({ moduleGraph: { getModuleById: (id: string) => id === entry ? caller : undefined } })
    const context = { addWatchFile: (file: string) => {
      watched.push(file)
      expect(plugin.handleHotUpdate({ file, modules: [] })).toEqual([caller])
    },
      resolve: async (id: string, importer: string) => ({ id: resolve(dirname(importer), id) }) }
    const input = 'import "./button/style/index.ts";\nexport const demo = 1;'
    const first = await plugin.transform.call(context, input, entry)
    expect(first.code).toBe(`import ${JSON.stringify(resolve(root, 'style/base.less'))};\nimport ${JSON.stringify(resolve(root, 'button/style/index.less'))};\nexport const demo = 1;`)
    expect(watched.filter(file => file === shared)).toHaveLength(1)
    expect(plugin.handleHotUpdate({ file: shared, modules: [] })).toEqual([caller])
    await written(facade, 'import "./changed.less";')
    const second = await plugin.transform.call(context, input, entry)
    expect(second.code).toContain('changed.less')
    expect(second.code).not.toContain('base.less')
    expect(plugin.handleHotUpdate({ file: shared, modules: [] })).toEqual([])
    await written(facade, 'import "./index.less";\nconsole.log("side effect");')
    expect(await plugin.transform.call(context, input, entry)).toBeUndefined()
    expect(await plugin.transform.call(context, 'import value from "./button/style/index.ts";', entry)).toBeUndefined()
    expect(await plugin.transform.call(context, 'import "./button/style/index.ts?raw";', entry)).toBeUndefined()
    expect(await readFile(facade, 'utf8')).toContain('console.log')
    await written(facade, 'import "../../style/index.ts";')
    await written(shared, 'import "../button/style/index.ts";')
    expect(await plugin.transform.call(context, input, entry)).toBeUndefined()
    await plugin.transform.call(context, 'export const demo = 2;', entry)
    expect(plugin.handleHotUpdate({ file: shared, modules: [] })).toEqual([])
  } finally { await rm(root, { recursive: true, force: true }) }
})

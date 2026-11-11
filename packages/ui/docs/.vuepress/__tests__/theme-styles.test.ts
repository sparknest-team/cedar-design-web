import { createRequire } from 'node:module'
import { mkdtemp, writeFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { initAsyncCompiler } from 'sass-embedded'
import { expect, test } from 'vitest'
import { bundleThemeStyles } from '../theme-styles'

test('combines only side-effect shell styles in dev and preserves CSS modules and optional features', () => {
  const require = createRequire(import.meta.url)
  const client = resolve(dirname(require.resolve('vuepress-theme-hope/package.json')), 'lib/client')
  const entry = fileURLToPath(new URL('../hope-styles.scss', import.meta.url))
  const plugin = bundleThemeStyles(entry)
  const transform = plugin.transform as Function
  const id = `${client}/components/PageTitle.js`
  const code = `import '../styles/page-title.scss';\nimport vars from '../styles/variables.module.scss';\nimport '../modules/blog/styles/blog.scss';\nconst text = "import '../styles/page-title.scss'";`
  expect(plugin.apply).toBe('serve')
  const result = transform(code, id).code
  expect(result).toContain(`import ${JSON.stringify(entry)};`)
  expect(result).toContain("import vars from '../styles/variables.module.scss'")
  expect(result).toContain("import '../modules/blog/styles/blog.scss'")
  expect(result).toContain('const text = "import')
  expect(transform(code, `${id}?v=0123`).code).toBe(result)
  expect(transform('import "vuepress-theme-hope/client/styles/index.scss";', '/temp/hope/config.js').code).toContain(entry)
  expect(transform(code, '/workspace/demo.js')).toBeUndefined()
})

test('combined Sass preserves per-module palette scope and tracks real files for HMR', async () => {
  const folder = await mkdtemp(resolve(tmpdir(), 'cedar-theme-sass-'))
  const compiler = await initAsyncCompiler()
  try {
    const entry = resolve(folder, 'entry.scss')
    const module = resolve(folder, 'module.scss')
    const palette = resolve(folder, 'palette.scss')
    const source = `@use "cedar-theme/${module}" as demo;`
    await writeFile(entry, source)
    await writeFile(palette, '$width: 7px;')
    await writeFile(module, '.probe { width: hope-config.$width }')
    const config = { css: { preprocessorOptions: { scss: {
      additionalData: (code: string) => `@use "${pathToFileURL(palette).href}" as hope-config;\n${code}`,
      importers: [{ findFileUrl: (url: string) => url.startsWith('file:') ? new URL(url) : null }],
    } } } } as any
    ;(bundleThemeStyles(entry).configResolved as Function)(config)
    const compile = () => compiler.compileStringAsync(source, {
      url: pathToFileURL(entry), importers: config.css.preprocessorOptions.scss.importers,
    })
    const first = await compile()
    expect(first.css).toContain('width: 7px')
    expect(first.loadedUrls.map(url => fileURLToPath(url))).toContain(module)
    expect(first.loadedUrls.map(url => fileURLToPath(url))).toContain(palette)
    await writeFile(palette, '$width: 11px;')
    expect((await compile()).css).toContain('width: 11px')
  } finally { await compiler.dispose(); await rm(folder, { recursive: true, force: true }) }
})

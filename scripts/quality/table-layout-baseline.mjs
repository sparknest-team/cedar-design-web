import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync } from 'node:fs'
import { cp, mkdir, mkdtemp, readdir, readFile, rm, symlink, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { delimiter, dirname, relative, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { brotliCompressSync, gzipSync } from 'node:zlib'
import { buildLibrary } from '../../../design-ui/packages/ui-build/src/index.mjs'
import { verifyTableCoreConsumers } from './table-core-consumers.mjs'
import { assertTableLayoutContract } from './table-layout-contract.mjs'
import { buildTableOrchestrationBrowser } from './table-orchestration-browser.mjs'
import { captureTableOrchestration } from './table-orchestration-consumers.mjs'

// Build a private release snapshot, never the es/lib/types used by a running dev server.
const root = fileURLToPath(new URL('../../', import.meta.url))
const ui = resolve(root, 'packages/ui')
const require = createRequire(resolve(ui, 'package.json'))
const ts = require('typescript-js')
// Resolve the same binaries as the UI release build.
process.env.PATH = resolve(ui, 'node_modules/.bin') + delimiter + (process.env.PATH ?? '')
const { build } = await import(pathToFileURL(require.resolve('vite')).href)
const args = process.argv.slice(2)
const option = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined)
assert.ok(
  option('--out') || option('--compare'),
  'Usage: NODE_ENV=production pnpm exec node scripts/quality/table-layout-baseline.mjs [--out <new-directory>] [--compare <before-directory>]',
)
assert.equal(process.env.NODE_ENV, 'production', 'Capture with the same production environment as the release CLI')
const before = option('--compare') && resolve(option('--compare'))
const layoutReference = option('--layout-reference') && resolve(option('--layout-reference'))
const tableReference = option('--table-reference') && resolve(option('--table-reference'))
const tableScope = args.includes('--table-scope')
const referenceContextUi = option('--reference-context-ui') && resolve(option('--reference-context-ui'))
assert.ok(
  !referenceContextUi || (tableReference && tableScope),
  'A saved source context may only rebuild an explicit original Table reference',
)
const sourceContextUi = option('--source-context-ui') && resolve(option('--source-context-ui'))
assert.ok(
  !sourceContextUi || (tableScope && args.includes('--orchestration-contract') && !referenceContextUi),
  'A paired source snapshot requires the Table orchestration contract and no second context override',
)
const sourceUi = sourceContextUi ?? referenceContextUi ?? ui
const scratch = await mkdtemp(resolve(tmpdir(), 'cedar-table-release-'))
const output = option('--out') ? resolve(option('--out')) : resolve(scratch, 'report')
const workspace = resolve(scratch, 'workspace')
const snapshot = resolve(workspace, 'cedar-design-web/packages/ui')
const manifest = JSON.parse(await readFile(resolve(sourceUi, 'package.json'), 'utf8'))
const hash = (value) => createHash('sha256').update(value).digest('hex')
const json = (file, value) => writeFile(file, JSON.stringify(value, null, 2) + '\n')
const sizes = (contents) => ({
  minified: contents.length,
  gzip: gzipSync(contents).length,
  brotli: brotliCompressSync(contents).length,
})
const layoutNames = new Set([
  'getOperationColumnIndex',
  'getFirstDataColumn',
  'getLastDataColumn',
  'getOperationFixedNumber',
  'getFixedNumber',
  'getOperationStyle',
])
const variableName = (node) =>
  ts.isVariableStatement(node) ? node.declarationList.declarations[0].name.getText() : undefined
const isKernelImport = (node) => ts.isImportDeclaration(node) && node.moduleSpecifier.text === './kernel/frozen-columns'

function originalFrozenFunctions(current, original) {
  const oldTree = ts.createSourceFile('utils.ts', original, ts.ScriptTarget.Latest, true)
  const tree = ts.createSourceFile('utils.ts', current, ts.ScriptTarget.Latest, true)
  const old = new Map(
    oldTree.statements
      .filter((node) => layoutNames.has(variableName(node)))
      .map((node) => [variableName(node), node.getText(oldTree)]),
  )
  const helpers = ['getOperationColumnIndex', 'getFirstDataColumn', 'getLastDataColumn']
    .map((name) => old.get(name))
    .join('\n\n')
  const edits = []
  for (const node of tree.statements) {
    const name = variableName(node)
    if (['getOperationFixedNumber', 'getFixedNumber', 'getOperationStyle'].includes(name)) {
      edits.push({
        start: node.getStart(tree),
        end: node.end,
        text: (name === 'getOperationFixedNumber' ? helpers + '\n\n' : '') + old.get(name),
      })
    } else if (isKernelImport(node)) edits.push({ start: node.getStart(tree), end: node.end, text: '' })
  }
  assert.equal(
    edits.length,
    4,
    'Expected three layout adapters and their kernel import; review the reference transplant after structural changes',
  )
  for (const edit of edits.sort((a, b) => b.start - a.start))
    current = current.slice(0, edit.start) + edit.text + current.slice(edit.end)
  return current
}

function nonLayoutUtilities(source) {
  const tree = ts.createSourceFile('utils.ts', source, ts.ScriptTarget.Latest, true)
  const printer = ts.createPrinter({ removeComments: true })
  return tree.statements
    .filter((node) => !layoutNames.has(variableName(node)) && !isKernelImport(node))
    .map((node) => printer.printNode(ts.EmitHint.Unspecified, node, tree))
    .join('\n')
}

async function files(directory) {
  const result = []
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const file = resolve(directory, item.name)
    result.push(...(item.isDirectory() ? await files(file) : [file]))
  }
  return result.sort()
}

function describeProp(prop) {
  const result = { types: (Array.isArray(prop.type) ? prop.type : [prop.type]).map((type) => type?.name) }
  if (Object.hasOwn(prop, 'default'))
    result.default = typeof prop.default === 'function' && prop.type !== Function ? prop.default() : prop.default
  if (prop.required !== undefined) result.required = prop.required
  if (prop.validator) result.validator = prop.validator.toString()
  return result
}

async function runtimeContract(format) {
  const entry = resolve(snapshot, format === 'esm' ? 'es/table/index.mjs' : 'lib/table/index.js')
  const api =
    format === 'esm' ? await import(pathToFileURL(entry).href) : createRequire(resolve(snapshot, 'package.json'))(entry)
  const component = api.default
  const vue = require('vue')
  const renderer = require('@vue/server-renderer')
  const app = vue.createSSRApp(component, {
    pagination: false,
    extraColumn: true,
    columns: [
      { title: 'Group', children: [{ title: 'Name', dataIndex: 'name', width: 120, fixed: 'left' }] },
      { title: 'Score', dataIndex: 'score', minWidth: 80 },
    ],
    data: [{ key: 'a', name: 'Alpha', score: 2 }],
  })
  app.config.idPrefix = 'table-baseline'
  const html = await renderer.renderToString(app)
  return {
    exports: Object.keys(api).sort(),
    name: component.name,
    props: Object.fromEntries(Object.entries(api.tableProps).map(([key, value]) => [key, describeProp(value)])),
    emits: Object.keys(component.emits).sort(),
    methods: Object.fromEntries(Object.entries(component.methods).map(([key, value]) => [key, value.length])),
    subcomponents: ['Thead', 'Tbody', 'Tr', 'Th', 'Td', 'Column'].map((name) => ({
      name,
      componentName: component[name].name,
    })),
    hasInstall: typeof component.install === 'function',
    html,
    ...(args.includes('--orchestration-contract')
      ? { orchestration: await captureTableOrchestration(component, require) }
      : {}),
  }
}

async function bundle(name, contents) {
  const consumer = resolve(snapshot, 'consumer')
  await mkdir(consumer, { recursive: true })
  const entry = resolve(consumer, `${name}.mjs`)
  // Resolve the actual package's public exports, including its style entry.
  await mkdir(resolve(consumer, 'node_modules/@cedar-design'), { recursive: true })
  await symlink(snapshot, resolve(consumer, 'node_modules/@cedar-design/ui-vue')).catch((error) => {
    if (error.code !== 'EEXIST') throw error
  })
  await writeFile(entry, contents)
  const result = await build({
    root: consumer,
    configFile: false,
    logLevel: 'warn',
    define: { 'process.env.NODE_ENV': JSON.stringify('production') },
    build: {
      write: false,
      copyPublicDir: false,
      minify: 'esbuild',
      lib: { entry, formats: ['es'], fileName: 'consumer' },
      rollupOptions: { external: ['vue', '@vue/shared'] },
    },
  })
  const outputs = Array.isArray(result) ? result.flatMap((item) => item.output) : result.output
  const code = outputs
    .filter((item) => item.type === 'chunk')
    .map((item) => item.code)
    .join('\n')
  const css = outputs
    .filter((item) => item.type === 'asset' && item.fileName.endsWith('.css'))
    .map((item) => item.source)
    .join('\n')
  assert.ok(code.length > 0)
  assert.ok(css.length > 0)
  const modules = [
    ...new Set(outputs.filter((item) => item.type === 'chunk').flatMap((item) => Object.keys(item.modules))),
  ]
    .map((file) =>
      file.replaceAll(snapshot, '<ui>').replaceAll(root, '<cedar>').replaceAll(dirname(root), '<workspace>'),
    )
    .sort()
  return { js: sizes(Buffer.from(code)), css: sizes(Buffer.from(css)), modules }
}

let succeeded = false
try {
  await mkdir(dirname(output), { recursive: true })
  await mkdir(output, { recursive: false })
  await mkdir(snapshot, { recursive: true })
  await cp(resolve(sourceUi, 'src'), resolve(snapshot, 'src'), {
    recursive: true,
    filter: (file) => !/(?:^|\/)(?:__tests__|__demos__|docs|example)(?:\/|$)/.test(relative(sourceUi, file)),
  })
  if (tableReference) {
    assert.ok(tableScope, 'A full Table reference requires --table-scope')
    const expected = JSON.parse(await readFile(resolve(tableReference, 'manifest.json'), 'utf8'))
    await rm(resolve(snapshot, 'src/table'), { recursive: true, force: true })
    for (const [file, digest] of Object.entries(expected)) {
      const source = await readFile(resolve(tableReference, `${file}.txt`))
      assert.equal(hash(source), digest, `Table reference changed: ${file}`)
      await mkdir(dirname(resolve(snapshot, 'src/table', file)), { recursive: true })
      await writeFile(resolve(snapshot, 'src/table', file), source)
    }
  }
  if (layoutReference) {
    // Rebuild the old layout against the same current components/styles. This
    // isolates concurrent fixes without changing any working-tree source.
    const expected = JSON.parse(await readFile(resolve(layoutReference, 'manifest.json'), 'utf8'))
    for (const file of ['hooks/use-columns-layout.ts', 'utils.ts']) {
      const source = await readFile(resolve(layoutReference, `${file}.txt`))
      assert.equal(hash(source), expected[file], `Original layout reference changed: ${file}`)
      const target = resolve(snapshot, 'src/table', file)
      await writeFile(
        target,
        file === 'utils.ts' ? originalFrozenFunctions(await readFile(target, 'utf8'), source.toString()) : source,
      )
    }
  }
  for (const file of ['package.json', 'tsconfig.json', 'tsconfig.unified-build.json'])
    await cp(resolve(sourceUi, file), resolve(snapshot, file))
  await cp(resolve(sourceUi, 'reset'), resolve(snapshot, 'reset'), { recursive: true })
  await symlink(resolve(ui, 'node_modules'), resolve(snapshot, 'node_modules'))
  await symlink(resolve(root, 'node_modules'), resolve(workspace, 'cedar-design-web/node_modules'))
  await symlink(resolve(dirname(root), 'design-ui'), resolve(workspace, 'design-ui'))
  // The release declaration transform discovers the same minimum Vue runtime.
  await buildLibrary({
    root: snapshot,
    name: manifest.name,
    globalName: 'Cedar',
    bundleName: 'cedar',
    external: ['vue', '@vue/shared', ...Object.keys(manifest.dependencies)],
    globals: { vue: 'Vue', '@vue/shared': 'VueShared' },
    tsconfig: 'tsconfig.unified-build.json',
  })
  const declarations = {}
  // Preserve emitted declarations as evidence, compare only the existing Table
  // surface, not newly introduced private modules or unrelated components.
  for (const file of await files(resolve(snapshot, 'types/table'))) {
    const name = relative(resolve(snapshot, 'types'), file)
    if (
      !/\.d\.ts$/.test(file) ||
      /\/(?:hooks|kernel|layout)\//.test(name) ||
      /\/(?:utils|context|header-association|column-direction)\.d\.ts$/.test(name)
    )
      continue
    const text = await readFile(file, 'utf8')
    const canonical = ts
      .createPrinter({ removeComments: true })
      .printFile(ts.createSourceFile(name, text, ts.ScriptTarget.Latest, true))
    declarations[name] = { sha256: hash(canonical), text }
  }
  const runtime = { esm: await runtimeContract('esm'), cjs: await runtimeContract('cjs') }
  assert.deepEqual(runtime.esm, runtime.cjs, 'ESM and CJS consumers must expose equivalent contracts and SSR markup')
  const style = `import '@cedar-design/ui-vue/table/style';\n`
  const bundles = {
    full: await bundle(
      'full',
      style + `export { default as Table, tableProps, defineTableConfig } from '@cedar-design/ui-vue/table';\n`,
    ),
    basicProps: await bundle(
      'basic-props',
      style +
        `import Table from '@cedar-design/ui-vue/table'; import { h } from 'vue'; export const render = () => h(Table, { pagination: false, columns: [{ dataIndex: 'name', title: 'Name' }], data: [] });\n`,
    ),
    frozenProps: await bundle(
      'frozen-props',
      style +
        `import Table from '@cedar-design/ui-vue/table'; import { h } from 'vue'; export const render = () => h(Table, { pagination: false, columns: [{ dataIndex: 'name', title: 'Name', fixed: 'left', width: 120 }], data: [] });\n`,
    ),
  }
  if (args.includes('--orchestration-contract')) {
    bundles.summaryProps = await bundle(
      'summary-props',
      style +
        `import Table from '@cedar-design/ui-vue/table'; import { h } from 'vue'; export const render = () => h(Table, { pagination: false, summary: true, columns: [{ dataIndex: 'name' }], data: [] });\n`,
    )
    bundles.virtualProps = await bundle(
      'virtual-props',
      style +
        `import Table from '@cedar-design/ui-vue/table'; import { h } from 'vue'; export const render = () => h(Table, { pagination: false, virtualListProps: { height: 100, estimatedSize: 30 }, columns: [{ dataIndex: 'name' }], data: [] });\n`,
    )
  }
  if (existsSync(resolve(snapshot, 'src/table/core/index.ts'))) {
    const base = `import '@cedar-design/ui-vue/table/core/style'; export { default as TableCore } from '@cedar-design/ui-vue/table/core';\n`
    bundles.core = await bundle('core', base)
    bundles.coreFrozen = await bundle(
      'core-frozen',
      `import '@cedar-design/ui-vue/table/core/style'; import TableCore from '@cedar-design/ui-vue/table/core'; import { h } from 'vue'; export const render = () => h(TableCore, { data: [], columns: [{ dataIndex: 'name', fixed: 'left', width: 100 }] });\n`,
    )
    bundles.coreFilterState = await bundle(
      'core-filter-state',
      base + `export { useTableFilters } from '@cedar-design/ui-vue/table/features/filter';\n`,
    )
    bundles.coreLocalFilter = await bundle(
      'core-local-filter',
      base +
        `export { useTableFilters } from '@cedar-design/ui-vue/table/features/filter'; export { filterTableData } from '@cedar-design/ui-vue/table/features/filter/client';\n`,
    )
    bundles.coreSortState = await bundle(
      'core-sort-state',
      base + `export { useTableSorting } from '@cedar-design/ui-vue/table/features/sort';\n`,
    )
    bundles.coreLocalSort = await bundle(
      'core-local-sort',
      base +
        `export { useTableSorting } from '@cedar-design/ui-vue/table/features/sort'; export { sortTableData } from '@cedar-design/ui-vue/table/features/sort/client';\n`,
    )
    for (const [name, value] of Object.entries(bundles).filter(([name]) => name.startsWith('core'))) {
      assert.doesNotMatch(
        value.modules.join('\n'),
        /\/es\/(?:trigger|checkbox|radio|pagination|menu|scrollbar|_components\/(?:virtual-list[^/]*|auto-tooltip))\//,
        `${name} retained desktop code/styles`,
      )
      assert.doesNotMatch(
        value.modules.join('\n'),
        /\/table\/(?:desktop\/|table\.(?:mjs|js)|table-th\.(?:mjs|js)|table-td\.(?:mjs|js))/,
        `${name} retained the complete renderer`,
      )
    }
    assert.doesNotMatch(bundles.core.modules.join('\n'), /\/table\/features\//, 'Core retained optional features')
    assert.doesNotMatch(
      bundles.coreFilterState.modules.join('\n'),
      /\/filter\/(?:client\/|compute\.)/,
      'Filter state retained client processing',
    )
    assert.doesNotMatch(
      bundles.coreSortState.modules.join('\n'),
      /\/sort\/(?:client\/|compute\.)/,
      'Sort state retained client processing',
    )
    assert.ok(
      bundles.core.js.gzip < bundles.full.js.gzip / 4,
      'Core must provide a substantial reduction from the complete entry',
    )
    const coreRuntime = {}
    for (const [format, entry] of [
      ['esm', 'es/table/core/index.mjs'],
      ['cjs', 'lib/table/core/index.js'],
    ]) {
      const api =
        format === 'esm'
          ? await import(pathToFileURL(resolve(snapshot, entry)).href)
          : createRequire(resolve(snapshot, 'package.json'))(resolve(snapshot, entry))
      const app = require('vue').createSSRApp(api.default, {
        columns: [{ dataIndex: 'name', title: 'Name', fixed: 'left', width: 100 }],
        data: [{ key: 'a', name: 'Core Alpha' }],
      })
      app.config.idPrefix = 'table-core-baseline'
      coreRuntime[format] = {
        exports: Object.keys(api).sort(),
        html: await require('@vue/server-renderer').renderToString(app),
      }
      assert.ok(coreRuntime[format].html.includes('Core Alpha'))
    }
    assert.deepEqual(coreRuntime.esm, coreRuntime.cjs)
    await json(resolve(output, 'core-runtime.json'), coreRuntime)
    await verifyTableCoreConsumers({
      snapshot,
      require,
      ts,
      build,
      output,
      browser: args.includes('--browser-fixture'),
    })
  }
  if (args.includes('--orchestration-browser')) {
    assert.ok(
      args.includes('--orchestration-contract'),
      'The orchestration browser fixture requires the orchestration contract',
    )
    await buildTableOrchestrationBrowser({ snapshot, require, build, output })
  }
  const sources = {}
  for (const file of await files(resolve(snapshot, 'src/table')))
    sources[relative(resolve(snapshot, 'src'), file)] = hash(await readFile(file))
  const context = []
  for (const file of await files(resolve(snapshot, 'src'))) {
    const name = relative(resolve(snapshot, 'src'), file)
    if (
      !/\.(?:ts|tsx|vue|less|css)$/.test(file) ||
      (tableScope && name.startsWith('table/')) ||
      /^table\/kernel\//.test(name) ||
      name === 'table/hooks/use-columns-layout.ts'
    )
      continue
    const source = await readFile(file)
    context.push([name, hash(name === 'table/utils.ts' ? nonLayoutUtilities(source.toString()) : source)])
  }
  const report = {
    environment: {
      node: process.version,
      vite: require('vite/package.json').version,
      typescript: require('typescript/package.json').version,
      vueContentMapper: JSON.parse(
        await readFile(resolve(root, 'packages/ui/node_modules/@vue/content-mapper/package.json'), 'utf8'),
      ).version,
      vue: require('vue/package.json').version,
      lockfile: hash(await readFile(resolve(root, 'pnpm-lock.yaml'))),
      buildCore: hash(await readFile(resolve(dirname(root), 'design-ui/packages/ui-build/src/index.mjs'))),
    },
    external: ['vue', '@vue/shared'],
    note: 'Production package consumers with Vue/@vue/shared external. full/basicProps/frozenProps use the complete Table and table/style. Optional core fixtures use the explicit Core and core/style entries; state and client algorithms are measured separately. These bytes do not establish device performance.',
    sources,
    contextSha256: hash(JSON.stringify(context)),
    contextInputs: Object.fromEntries(context),
    compatibilityScope: tableScope ? 'table' : 'layout',
    layoutReference: Boolean(layoutReference),
    bundles,
  }
  await json(resolve(output, 'runtime.json'), runtime)
  await json(resolve(output, 'declarations.json'), declarations)
  await json(resolve(output, 'report.json'), report)
  if (before) {
    const previous = Object.fromEntries(
      await Promise.all(
        ['report', 'runtime', 'declarations'].map(async (name) => [
          name,
          JSON.parse(await readFile(resolve(before, `${name}.json`), 'utf8')),
        ]),
      ),
    )
    assertTableLayoutContract({ report, runtime, declarations }, previous)
  }
  succeeded = true
  console.info(
    JSON.stringify(
      {
        output,
        comparedWith: before,
        bundles: Object.fromEntries(
          Object.entries(bundles).map(([key, value]) => [key, { js: value.js, css: value.css }]),
        ),
      },
      null,
      2,
    ),
  )
} finally {
  if (succeeded) await rm(scratch, { recursive: true, force: true })
  else console.error(`Incomplete baseline; isolated build retained for diagnosis: ${scratch}`)
}

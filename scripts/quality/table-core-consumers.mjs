import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

/** Consume emitted package exports, rather than aliases to working source. */
export async function verifyTableCoreConsumers({ snapshot, require, ts, build, output, browser }) {
  const consumer = resolve(snapshot, 'consumer')
  const source = resolve(consumer, 'public-api.ts')
  await writeFile(source, `
import { ref } from 'vue'
import Table, { type TableProps, type TableInstance } from '@cedar-design/ui-vue/table'
import TableCore, { type TableCoreProps, type TableCoreColumn, type TableCoreInstance } from '@cedar-design/ui-vue/table/core'
import '@cedar-design/ui-vue/table/core/style'
import { useTableFilters, type TableFilterColumn } from '@cedar-design/ui-vue/table/features/filter'
import { filterTableData } from '@cedar-design/ui-vue/table/features/filter/client'
import { useTableSorting } from '@cedar-design/ui-vue/table/features/sort'
import { sortTableData } from '@cedar-design/ui-vue/table/features/sort/client'
const legacy: TableProps = { pagination: false, rowSelection: { type: 'checkbox' }, columns: [] }
declare const legacyInstance: TableInstance
legacyInstance.clearFilters(); legacyInstance.clearSorters()
const columns = ref<TableFilterColumn[]>([{ dataIndex: 'status', filterable: { defaultFilteredValue: [] } }])
const filters = useTableFilters({ columns })
filters.setFilter('status', ['active']); filters.resetFilters('status'); filters.clearFilters()
const local = ref<import('@cedar-design/ui-vue/table').TableColumnData[]>([{ dataIndex: 'score', sortable: { sorter: true, sortDirections: ['ascend', 'descend'] } }])
const sorting = useTableSorting({ columns: local })
sorting.setSorter('score', 'ascend'); sorting.resetSorters(); sorting.clearSorters()
const rows = [{ key: 'a', score: 1 }]
const result = sortTableData(filterTableData(rows, filters.filters.value, local.value), sorting.sorter.value, local.value)
const row: (typeof rows)[number] = result[0]
const core: TableCoreProps = { columns: [{ dataIndex: 'score', fixed: 'left' }], data: result, tableLayout: 'auto' }
declare const coreInstance: TableCoreInstance
coreInstance.scrollTo({ left: 20, top: 10 })
// @ts-expect-error desktop configuration is not a Core prop
const desktopCore: TableCoreProps = { pagination: false }
// @ts-expect-error sort configuration is composed outside Core
const featureColumn: TableCoreColumn = { dataIndex: 'score', sortable: { sorter: true, sortDirections: ['ascend', 'descend'] } }
// @ts-expect-error sort directions remain strictly typed
sorting.setSorter('score', 'ascending')
void [Table, TableCore, legacy, core, row, desktopCore, featureColumn]
`)
  const program = ts.createProgram([source], {
    target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler, strict: true,
    skipLibCheck: true, noEmit: true, types: [], lib: ['lib.es2020.d.ts', 'lib.dom.d.ts'],
  })
  const diagnostics = ts.getPreEmitDiagnostics(program)
  assert.equal(diagnostics.length, 0, ts.formatDiagnosticsWithColorAndContext(diagnostics, {
    getCanonicalFileName: name => name, getCurrentDirectory: () => consumer, getNewLine: () => '\n',
  }))
  const cjs = require('node:module').createRequire(resolve(snapshot, 'package.json'))
  for (const [entry, name] of [['filter', 'useTableFilters'], ['filter/client', 'filterTableData'], ['sort', 'useTableSorting'], ['sort/client', 'sortTableData']]) {
    const esm = await import(pathToFileURL(resolve(snapshot, `es/table/features/${entry}/index.mjs`)))
    const common = cjs(resolve(snapshot, `lib/table/features/${entry}/index.js`))
    assert.deepEqual(Object.keys(esm).sort(), Object.keys(common).sort())
    assert.equal(typeof esm[name], 'function'); assert.equal(typeof common[name], 'function')
  }
  await writeFile(resolve(output, 'public-consumer.json'), JSON.stringify({ strictTypes: true, featureFormats: ['esm', 'cjs'], packageExports: true }, null, 2) + '\n')
  if (!browser) return
  const directory = resolve(output, 'browser')
  await mkdir(directory, { recursive: true })
  const coreApi = await import(pathToFileURL(resolve(snapshot, 'es/table/core/index.mjs')))
  const hydrateProps = { columns: [{ title: 'Hydrated', dataIndex: 'name', width: 150 }], data: [{ key: 'h', name: 'Hydration row' }] }
  const app = require('vue').createSSRApp(coreApi.default, hydrateProps)
  app.config.idPrefix = 'core-hydration'
  const html = await require('@vue/server-renderer').renderToString(app)
  const entry = resolve(consumer, 'browser.mjs')
  await writeFile(entry, `
import { createApp, createSSRApp, h, ref } from 'vue'
import Core from '@cedar-design/ui-vue/table/core'
import Table from '@cedar-design/ui-vue/table'
import '@cedar-design/ui-vue/table/core/style'
import '@cedar-design/ui-vue/table/style'
window.fixtureWarnings = []
const hydration = createSSRApp(Core, ${JSON.stringify(hydrateProps)})
hydration.config.idPrefix = 'core-hydration'
hydration.config.warnHandler = message => window.fixtureWarnings.push(message)
hydration.mount('#hydrate')
const app = createApp({ setup() {
 const dir = ref('ltr'), mode = ref('fixed'), narrow = ref(true)
 const data = ref(Array.from({length: 18}, (_, i) => ({key: i, name: 'Row '+i, a: 'Wide content '+i, b: i*2, c: 'End '+i})))
 const columns = [{title:'Identity', fixed:'left', children:[{title:'Name',dataIndex:'name',width:120,fixed:'left'}]}, {title:'Values',children:[{title:'A',dataIndex:'a',width:240},{title:'B',dataIndex:'b',width:200}]},{title:'End',dataIndex:'c',width:120,fixed:'right'}]
 return () => h('main', {}, [
 h('h1', {}, 'Table rendering regression'),
 h('button',{id:'direction',onClick:()=>dir.value=dir.value==='ltr'?'rtl':'ltr'},'Toggle direction'),
 h('button',{id:'layout',onClick:()=>mode.value=mode.value==='fixed'?'auto':'fixed'},'Toggle layout'),
 h('button',{id:'width',onClick:()=>narrow.value=!narrow.value},'Toggle width'),
 h('button',{id:'data',onClick:()=>data.value=[{key:'new',name:'Changed',a:'Replacement',b:7,c:'New'}]},'Replace data'),
 h('section',{id:'core-case',style:{width:narrow.value?'360px':'900px',maxWidth:'100%'}},[h(Core,{columns,data:data.value,dir:dir.value,tableLayout:mode.value,height:240,'aria-label':'Core regression'})]),
 h('h2',{},'Existing Table'),h(Table,{columns,data:data.value,pagination:false,height:220}),
 ])
}})
app.config.warnHandler = message => window.fixtureWarnings.push(message)
app.mount('#app')
`)
  await build({ root: consumer, configFile: false, logLevel: 'warn', define: { 'process.env.NODE_ENV': JSON.stringify('production') },
    build: { outDir: directory, emptyOutDir: false, copyPublicDir: false, minify: 'esbuild', lib: { entry, formats: ['es'], fileName: () => 'fixture.mjs' }, rollupOptions: { output: { assetFileNames: 'fixture.[ext]' } } } })
  await writeFile(resolve(directory, 'index.html'), `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="fixture.css"><style>body{margin:16px;font-family:system-ui}button{margin:4px}section{margin-top:16px}</style></head><body><div id="app"></div><div id="hydrate">${html}</div><script type="module" src="fixture.mjs"></script></body></html>`)
}

import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

/** Optional real-browser harness; its bundled Vue is excluded from size fixtures. */
export async function buildTableOrchestrationBrowser({ snapshot, require, build, output }) {
  const consumer = resolve(snapshot, 'consumer')
  const directory = resolve(output, 'browser')
  await mkdir(directory, { recursive: true })
  const api = await import(pathToFileURL(resolve(snapshot, 'es/table/index.mjs')))
  const hydrationProps = {
    columns: [{ dataIndex: 'name', title: 'Name' }, { dataIndex: 'amount', title: 'Amount' }],
    data: [{ key: 'a', name: 'Alpha', amount: 2 }, { key: 'b', name: 'Beta', amount: 3 }],
    pagination: false, summary: true, virtualListProps: { height: 120, estimatedSize: 35 },
  }
  const ssr = require('vue').createSSRApp(api.default, hydrationProps)
  ssr.config.idPrefix = 'orchestration-hydration'
  const html = await require('@vue/server-renderer').renderToString(ssr)
  const entry = resolve(consumer, 'orchestration-browser.mjs')
  await writeFile(entry, `
import { createApp, createSSRApp, h, ref } from 'vue'
import Table from '@cedar-design/ui-vue/table'
import '@cedar-design/ui-vue/table/style'
window.fixtureWarnings = []
const hydrated = createSSRApp(Table, ${JSON.stringify(hydrationProps)})
hydrated.config.idPrefix = 'orchestration-hydration'
hydrated.config.warnHandler = message => window.fixtureWarnings.push(message)
hydrated.mount('#hydrate')
const app = createApp({setup() {
 const page = ref(1), direction = ref('ltr')
 const rows = Array.from({length: 100}, (_, i) => ({key:i,name:'Row '+i,amount:i,note:'Value '+i}))
 const data = ref(rows)
 const columns = [{title:'Group',children:[{dataIndex:'name',title:'Name',width:140,fixed:'left'},{dataIndex:'amount',title:'Amount',width:220}]},{dataIndex:'note',title:'Note',width:240}]
 const summary = ({data}) => [{key:'total',name:'Total',amount:data.reduce((sum,row)=>sum+row.amount,0),note:'Summary'}]
 return () => h('main',{},[
 h('h1',{},'Summary and virtual regression'),
 h('button',{id:'page',onClick:()=>page.value=page.value===1?2:1},'Next page'),
 h('button',{id:'direction',onClick:()=>direction.value=direction.value==='ltr'?'rtl':'ltr'},'Toggle direction'),
 h('button',{id:'data',onClick:()=>data.value=[{key:'new',name:'Changed',amount:7,note:'New'}]},'Replace data'),
 h('section',{id:'paged',style:{width:'360px',maxWidth:'100%'}},[h('h2',{},'Paged summary'),h(Table,{columns,data:data.value,summary,height:180,dir:direction.value,stickyPagination:false,pagination:{modelValue:page.value,pageSize:5,responsive:false}})]),
 h('section',{id:'virtual',style:{width:'360px',maxWidth:'100%'}},[h('h2',{},'Virtual summary'),h(Table,{columns,data:data.value,summary,pagination:false,dir:direction.value,virtualListProps:{height:180,estimatedSize:35,buffer:0}})]),
 ])
}})
app.config.warnHandler = message => window.fixtureWarnings.push(message)
app.mount('#app')
`)
  await build({ root: consumer, configFile: false, logLevel: 'warn', define: { 'process.env.NODE_ENV': JSON.stringify('production') },
    build: { outDir: directory, emptyOutDir: false, copyPublicDir: false, minify: 'esbuild', lib: { entry, formats: ['es'], fileName: () => 'fixture.mjs' }, rollupOptions: { output: { assetFileNames: 'fixture.[ext]' } } } })
  await writeFile(resolve(directory, 'index.html'), `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="fixture.css"><style>body{font-family:system-ui;margin:16px}button{margin:4px}section{margin-block:16px}</style></head><body><div id="app"></div><div id="hydrate">${html}</div><script type="module" src="fixture.mjs"></script></body></html>`)
}

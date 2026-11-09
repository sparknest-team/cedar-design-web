import assert from 'node:assert/strict'
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { createServer, jsx, vue } from '../../maple-design-mobile/packages/maple-cli/test-utils/browser-vite.mjs'

const results = {}
const browser = await chromium.launch({ headless: true })
try {
  for (const [repo, pkg, prefix, globalAttribute] of [
    ['cedar-design-web', 'cedar-ui', 'c', 'cedar-theme'],
    ['maple-design-mobile', 'maple-ui', 'mp', 'maple-theme'],
  ]) {
    const root = fileURLToPath(new URL(`../../${repo}/packages/${pkg}/`, import.meta.url))
    const fixture = `<!doctype html><html><body><div id="app"></div><div id="other"></div><script type="module">
import {createApp,h,ref,nextTick} from 'vue'
import ThemeProvider from '/src/theme-provider/index.ts'
import Trigger from '/src/trigger/trigger.tsx'
import '/src/style/index.less'
import '/src/trigger/style/index.ts'
const theme=ref({'--${prefix}-color-scheme':'dark','--${prefix}-color-bg-2':'#123456'})
const pane=(id)=>h('div',{id,style:{background:'var(--${prefix}-color-bg-2)',color:'var(--${prefix}-color-text-1)'}},id)
const popup=(id)=>h(Trigger,{open:true,animationName:'',duration:0},{default:()=>h('button',id),content:()=>pane(id)})
const app=createApp({render:()=>h(ThemeProvider,{theme:theme.value,styleVars:{'--${prefix}-custom':'teal'}},()=>[
  pane('root'),popup('root-popup'),h(ThemeProvider,{theme:'light'},()=>[pane('nested'),popup('nested-popup')])
])}).mount('#app')
const other=createApp({render:()=>h(ThemeProvider,{theme:'light'},()=>pane('other-root'))}).mount('#other')
window.themeFixture={theme,nextTick,app,other}
</script></body></html>`
    const server = await createServer({
      root, configFile: false, optimizeDeps: { entries: [], include: ['vue'] },
      plugins: [vue(), jsx(), { name: 'unified-theme-fixture', configureServer(s) {
        s.middlewares.use('/__theme-provider', async (_request, response) => {
          response.setHeader('Content-Type', 'text/html')
          response.end(await server.transformIndexHtml('/__theme-provider.html', fixture))
        })
      } }], server: { host: '127.0.0.1', port: 0, watch: { ignored: ['**/*'] } },
    })
    const page = await browser.newPage()
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    try {
      await server.listen()
      await page.goto(`http://127.0.0.1:${server.httpServer.address().port}/__theme-provider`)
      await page.waitForFunction(() => document.getElementById('nested-popup'))
      const sample = () => page.evaluate(({prefix,globalAttribute}) => ({
        documentTheme: document.documentElement.getAttribute(globalAttribute),
        colors: Object.fromEntries(['root','nested','root-popup','nested-popup','other-root'].map(id => [id,getComputedStyle(document.getElementById(id)).backgroundColor])),
        inheritedOverride: getComputedStyle(document.getElementById('nested-popup')).getPropertyValue(`--${prefix}-custom`).trim(),
      }), {prefix,globalAttribute})
      const initial = await sample()
      assert.equal(initial.documentTheme, null)
      assert.equal(initial.colors.root, 'rgb(18, 52, 86)')
      assert.equal(initial.colors['root-popup'], initial.colors.root)
      assert.equal(initial.colors.nested, 'rgb(255, 255, 255)')
      assert.equal(initial.colors['nested-popup'], initial.colors.nested)
      assert.equal(initial.colors['other-root'], initial.colors.nested)
      assert.equal(initial.inheritedOverride, 'teal')
      await page.evaluate(async () => { window.themeFixture.theme.value='light'; await window.themeFixture.nextTick() })
      const updated = await sample()
      assert.equal(updated.colors.root, 'rgb(255, 255, 255)')
      assert.equal(updated.colors['root-popup'], updated.colors.root)
      assert.deepEqual(errors, [])
      results[repo] = { initial, updated, pageErrors: errors }
    } finally { await page.close(); await server.close() }
  }
} finally { await browser.close() }
await writeFile('/tmp/theme-provider-browser-results.json', JSON.stringify(results,null,2))
console.log(JSON.stringify(results,null,2))

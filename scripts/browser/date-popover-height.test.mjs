import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { after, before, test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const require = createRequire(new URL('../../packages/ui/package.json', import.meta.url))
const { createServer } = await import(new URL('./dist/node/index.js', 'file://' + require.resolve('vite/package.json')).href)
const { default: vue } = await import(require.resolve('@vitejs/plugin-vue'))
const { default: jsx } = await import(require.resolve('@vitejs/plugin-vue-jsx'))
const root = fileURLToPath(new URL('../../packages/ui/', import.meta.url))
let server, browser
const fixture = `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><div id="app"></div><script type="module">
import { createApp, h } from 'vue'
import DateField from '/src/date/index.ts'
import '/src/date/picker/style/index.ts'
createApp({render:()=>h(DateField,{editMode:'direct',defaultValue:'2026-08-15',valueFormat:'YYYY-MM-DD',disableConfirm:false})}).mount('#app')
</script></body></html>`
before(async () => {
  server = await createServer({ root, configFile: false, plugins: [vue(), jsx(), {
    name: 'date-height-fixture', configureServer(s) {
      s.middlewares.use('/__date-height', async (_req, res) => {
        res.setHeader('Content-Type', 'text/html')
        res.end(await server.transformIndexHtml('/__date-height.html', fixture))
      })
    },
  }], server: { host: '127.0.0.1', port: 0, watch: { ignored: ['**/*'] } } })
  await server.listen()
  browser = await chromium.launch({ headless: true })
})
after(async () => { await browser?.close(); await server?.close() })
for (const viewport of [{ width: 390, height: 844 }, { width: 1280, height: 800 }, { width: 844, height: 320 }]) {
  test(`date popover fits ${viewport.width}x${viewport.height}`, async () => {
    const page = await browser.newPage({ viewport, reducedMotion: 'reduce' })
    try {
      await page.goto(`http://127.0.0.1:${server.httpServer.address().port}/__date-height`)
      await page.locator('input').first().click()
      await page.locator('.c-date-panel-actions').waitFor()
      const measure = () => page.locator('.c-date-field-popover .c-date-panel__main').evaluate(main => {
        const content = main.firstElementChild
        return { overflow: content.scrollHeight - content.clientHeight, top: main.getBoundingClientRect().top,
          bottom: main.querySelector('.c-date-panel-actions').getBoundingClientRect().bottom }
      })
      await page.waitForFunction(() => !document.getAnimations().some(a => a.playState === 'running'))
      const geometry = await measure()
      if (viewport.height >= 800) assert.ok(geometry.overflow <= 1, JSON.stringify(geometry))
      assert.ok(geometry.top >= 0 && geometry.bottom <= viewport.height, JSON.stringify(geometry))
      await page.locator('.c-date-panel-actions button').last().click()
      await page.locator('.c-date-field-popover').waitFor({ state: 'hidden' })
    } finally { await page.close() }
  })
}

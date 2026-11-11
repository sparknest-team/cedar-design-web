import { strict as assert } from 'node:assert'
import { createRequire } from 'node:module'
import { createHash } from 'node:crypto'
import { mkdir, mkdtemp, readFile, rm, stat, symlink, writeFile } from 'node:fs/promises'
import { tmpdir, loadavg, cpus } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { verifySourceUpdates } from './docs-source-update-smoke.mjs'
import { verifySchedulerExamples } from './docs-scheduler-smoke.mjs'

const root = fileURLToPath(new URL('../../', import.meta.url))
const ui = resolve(root, 'packages/ui')
const requireUi = createRequire(join(ui, 'package.json'))
const { loadUserConfig, transformUserConfigToPlugin, watchPageFiles, watchUserConfigFile } = await import(requireUi.resolve('@vuepress/cli'))
const core = await import(requireUi.resolve('@vuepress/core'))
const { createDevApp } = core
const component = process.env.CEDAR_PERF_PAGE || 'button'
assert.ok(['button', 'table', 'scheduler'].includes(component))
const folder = await mkdtemp(join(tmpdir(), `cedar-browser-perf-${component}-`))
const output = process.env.CEDAR_PERF_OUTPUT || join(folder, 'results.json')
const port = Number(process.env.CEDAR_PERF_PORT || 19991)
const origin = `http://127.0.0.1:${port}`
const result = { benchmarkVersion: 'cli-equivalent-v2', component, hostLoadAtStart: loadavg(), node: process.version, coldCache: true, browserHttpCache: 'disabled by external-request routing; repeat navigation measures warmed Vite server', serverSourceRequests: [], errors: [], failedRequests: [] }
const cpuSnapshot = () => cpus().reduce((sum, cpu) => ({ idle: sum.idle + cpu.times.idle, total: sum.total + Object.values(cpu.times).reduce((a, b) => a + b, 0) }), { idle: 0, total: 0 })
let previousCpu = cpuSnapshot()
result.hostSamples = []
const hostMonitor = setInterval(() => {
  const current = cpuSnapshot()
  result.hostSamples.push({ time: performance.now(), load: loadavg(), busyPercent: 100 * (1 - (current.idle - previousCpu.idle) / (current.total - previousCpu.total)) })
  previousCpu = current
}, 1000)
const transformSamples = []
const demos = []
const markdownFile = join(ui, 'src', component, 'README.md')
for (const match of (await readFile(markdownFile, 'utf8')).matchAll(/^<demo\b[^>]*src="([^"]+\.vue)"[^>]*>/gm)) {
  const file = resolve(dirname(markdownFile), match[1])
  demos.push({ file: match[1], bytes: (await stat(file)).size })
}
const largestIndex = demos.reduce((largest, demo, index) => demo.bytes > demos[largest].bytes ? index : largest, 0)
let closeServer, browser
const watchers = []
try {
  await mkdir(join(folder, 'vite-root'), { recursive: true })
  // A root outside the workspace still needs the same package resolution.
  await symlink(join(ui, 'node_modules'), join(folder, 'vite-root', 'node_modules'))
  process.chdir(ui)
  // Hope resolves the source directory from argv[3] when its config is loaded.
  // Do not pass "dev": the normal dev lock protects the user's existing .temp.
  process.argv[3] = 'docs'
  process.env.NODE_ENV ??= 'development'
  const started = performance.now()
  const { userConfig, userConfigDependencies } = await loadUserConfig(resolve('docs/.vuepress/config.ts'))
  result.configMs = performance.now() - started
  const app = createDevApp({ ...userConfig, source: resolve('docs'), temp: join(folder, 'temp'), cache: join(folder, 'cache'), host: '127.0.0.1', port })
  // Match VuePress CLI: app options alone do not register the conventional
  // custom client entry or user plugin hooks.
  app.use(transformUserConfigToPlugin(userConfig, resolve('docs')))
  app.use({ name: 'cedar-browser-perf-isolation', extendsBundlerOptions(options) {
    if (process.env.CEDAR_PERF_BASELINE_STYLES === '1') {
      options.viteOptions.plugins = options.viteOptions.plugins.filter(plugin => plugin.name !== 'cedar:theme-styles')
    }
    if (process.env.CEDAR_PERF_BASELINE_CLIENT === '1') {
      options.viteOptions.plugins = options.viteOptions.plugins.filter(plugin => plugin.name !== 'cedar:theme-client')
    }
    if (process.env.CEDAR_PERF_BASELINE_DIR) {
      options.viteOptions.plugins = options.viteOptions.plugins.filter(plugin => plugin.name !== 'cedar:style-import-facades')
      const themeClient = options.viteOptions.plugins.find(plugin => plugin.name === 'cedar:theme-client')
      if (themeClient?.api) themeClient.api.preserveOptimizedImports = false
      const baseline = new Map([
        [join(ui, 'src/ripple/index.ts'), 'ripple.ts'],
        [join(ui, 'docs/.vuepress/client.ts'), 'client.ts'],
        [join(ui, 'src/scheduler/Scheduler.vue'), 'Scheduler.vue'],
        [join(ui, 'src/scheduler/components/SchedulerMonthView.vue'), 'SchedulerMonthView.vue'],
      ])
      // Compile saved pre-change sources through the same client and pipeline.
      options.viteOptions.plugins.unshift({ name: 'cedar-perf-baseline-source', enforce: 'pre', async load(id) {
        const file = baseline.get(id)
        if (!file) return
        const code = await readFile(join(process.env.CEDAR_PERF_BASELINE_DIR, file), 'utf8')
        ;(result.baselineSources ??= {})[file] = createHash('sha256').update(code).digest('hex')
        return code
      } })
    }
    options.viteOptions.root = join(folder, 'vite-root')
    options.viteOptions.cacheDir = join(folder, 'vite-cache')
    options.viteOptions.server ??= {}
    options.viteOptions.server.fs = { ...options.viteOptions.server.fs, allow: [dirname(root), folder] }
    options.viteOptions.plugins.push({ name: 'cedar-browser-perf-source-timing', enforce: 'pre', configResolved(config) {
      if (process.env.CEDAR_PERF_VITE_PROFILE !== '1') return
      for (const plugin of config.plugins) {
        const hook = plugin.transform
        const original = typeof hook === 'function' ? hook : hook?.handler
        if (!original) continue
        const wrapped = async function (...args) {
          const started = performance.now()
          try { return await original.apply(this, args) }
          finally { transformSamples.push({ plugin: plugin.name, id: args[1], start: started, ms: performance.now() - started }) }
        }
        plugin.transform = typeof hook === 'function' ? wrapped : { ...hook, handler: wrapped }
      }
    }, configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.includes('__demo-sources/')) {
          const start = performance.now()
          const url = req.url
          res.once('finish', () => result.serverSourceRequests.push({ url, durationMs: performance.now() - start, status: res.statusCode }))
        }
        next()
      })
    } })
  } })
  const register = app.pluginApi.registerHooks
  if (process.env.CEDAR_PERF_PROFILE === '1') {
    result.hooks = []
    app.pluginApi.registerHooks = () => {
      register()
      for (const name of ['extendsMarkdown', 'onInitialized', 'onPrepared']) {
        for (const item of app.pluginApi.hooks[name].items) {
          const original = item.hook
          item.hook = async (...args) => {
            const start = performance.now()
            const value = await original(...args)
            result.hooks.push({ hook: name, plugin: item.pluginName, ms: performance.now() - start })
            return value
          }
        }
      }
    }
  }
  let phase = performance.now()
  await app.init()
  result.initMs = performance.now() - phase
  phase = performance.now()
  await app.prepare()
  const measuredPage = app.pages.find(page => page.path === `/components/${component}/`)
  result.pageContentHash = createHash('sha256').update(measuredPage.contentRendered).digest('hex')
  const clientConfigs = await readFile(app.dir.temp('internal/clientConfigs.js'), 'utf8')
  assert.ok(clientConfigs.includes(resolve('docs/.vuepress/client.ts')), 'real site custom client must be registered')
  result.customClientRegistered = true
  result.prepareMs = performance.now() - phase
  result.preparedMs = performance.now() - started
  result.pages = app.pages.length
  closeServer = await app.dev()
  const restart = async () => { result.configurationChangedDuringRun = true }
  watchers.push(...watchPageFiles(app))
  watchers.push(...watchUserConfigFile({ userConfigPath: resolve('docs/.vuepress/config.ts'), userConfigDependencies, restart }))
  await app.pluginApi.hooks.onWatched.process(app, watchers, restart)
  result.serverReadyMs = performance.now() - started
  console.log('SERVER_READY', component, Math.round(result.serverReadyMs))
  browser = await chromium.launch()
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  // Exclude unreachable corporate images/fonts from local compilation timings.
  await context.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort())
  await context.addInitScript(() => {
    performance.setResourceTimingBufferSize(10000)
    window.__cedarLongTasks = []
    new PerformanceObserver(list => { for (const entry of list.getEntries()) window.__cedarLongTasks.push({ startTime: entry.startTime, duration: entry.duration }) }).observe({ type: 'longtask', buffered: true })
  })
  const page = await context.newPage()
  const networkEvents = []
  if (process.env.CEDAR_PERF_VITE_PROFILE === '1') {
    const network = await context.newCDPSession(page)
    await network.send('Network.enable')
    network.on('Network.requestWillBeSent', event => {
      if (event.request.url.startsWith(origin)) networkEvents.push({ id: event.requestId, url: event.request.url, time: event.timestamp, initiator: event.initiator })
    })
  }
  result.viteReloads = []
  page.on('websocket', socket => socket.on('framereceived', ({ payload }) => {
    try { const message = JSON.parse(String(payload)); if (message.type === 'full-reload') result.viteReloads.push(message) } catch {}
  }))
  page.on('pageerror', error => result.errors.push({ message: error.message, stack: error.stack }))
  page.on('response', response => { if (response.status() >= 400) result.failedRequests.push({ url: response.url(), status: response.status() }) })
  page.setDefaultTimeout(180000)
  const paint = () => page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve(performance.now())))))
  const ready = async () => {
    await page.locator(`.vmi-previewer-example .c-${component}`).first().waitFor({ state: 'visible' })
    await page.locator('[title="展开或收起源码"]').first().waitFor({ state: 'visible' })
    await page.getByRole('button', { name: '切换主题', exact: true }).waitFor({ state: 'visible' })
    if (component === 'scheduler') {
      await page.waitForFunction(expected => {
        const examples = [...document.querySelectorAll('.vmi-previewer-example')]
        return examples.length === expected && examples.every(el => el.children.length > 0)
      }, demos.length)
      result.allExamplesMounted = demos.length
    }
    // Playwright visibility ignores opacity. Include the theme's enter fade so
    // mounted examples cannot be counted while an ancestor is transparent.
    await page.waitForFunction(selector => {
      let el = document.querySelector(selector)
      if (!el) return false
      for (; el; el = el.parentElement) if (Number(getComputedStyle(el).opacity) < 0.99) return false
      return true
    }, `.vmi-previewer-example .c-${component}`)
    await paint()
  }
  const profiler = process.env.CEDAR_PERF_CPU === "1" ? await context.newCDPSession(page) : null
  if (profiler) { await profiler.send("Profiler.enable"); await profiler.send("Profiler.start") }
  let begin = performance.now()
  await page.goto(`${origin}/components/${component}/`, { waitUntil: 'domcontentloaded', timeout: 180000 })
  await ready()
  result.firstPageMs = performance.now() - begin
  result.hostSamplesAtFirstPage = result.hostSamples.length
  if (process.env.CEDAR_PERF_VITE_PROFILE === '1') {
    result.transforms = transformSamples.splice(0)
    result.network = networkEvents.slice()
  }
  if (profiler) { const { profile } = await profiler.send("Profiler.stop"); await writeFile(`${output}.cpuprofile`, JSON.stringify(profile)) }
  try { result.optimizedDependencies = Object.keys(JSON.parse(await readFile(join(folder, 'vite-cache/deps/_metadata.json'), 'utf8')).optimized) } catch {}
  result.beforeExpand = await page.evaluate(() => ({ resources: performance.getEntriesByType('resource').map(entry => ({ name: entry.name, startTime: entry.startTime, duration: entry.duration, bytes: entry.transferSize })), sourceRequests: performance.getEntriesByType('resource').filter(entry => entry.name.includes('__demo-sources/')).length, longTasks: window.__cedarLongTasks, navigation: performance.getEntriesByType('navigation')[0].toJSON() }))
  result.beforeExpand.serverSourceRequests = result.serverSourceRequests.length
  console.log('PAGE_READY', component, Math.round(result.firstPageMs), 'sourceRequests', result.beforeExpand.sourceRequests)
  result.sources = []
  for (const index of [...new Set([0, largestIndex])]) {
    const toggle = page.locator('[title="展开或收起源码"]').nth(index)
    const card = page.locator('.vmi-previewer').nth(index)
    await toggle.scrollIntoViewIfNeeded()
    const start = await toggle.evaluate(el => { const time = performance.now(); el.click(); return time })
    await card.locator('.vmi-previewer-sources pre').waitFor({ state: 'visible' })
    const end = await paint()
    const metrics = await page.evaluate(({ start, end }) => ({
      longTasks: window.__cedarLongTasks.filter(entry => entry.startTime >= start && entry.startTime <= end),
      resources: performance.getEntriesByType('resource').filter(entry => entry.name.includes('__demo-sources/') && entry.startTime >= start).map(entry => entry.toJSON()),
    }), { start, end })
    await toggle.evaluate(el => el.click())
    await card.locator('.vmi-previewer-sources').waitFor({ state: 'hidden' })
    const warmStart = await toggle.evaluate(el => { const time = performance.now(); el.click(); return time })
    await card.locator('.vmi-previewer-sources pre').waitFor({ state: 'visible' })
    const warmEnd = await paint()
    assert.equal(await card.locator('pre code').textContent(), await readFile(resolve(dirname(markdownFile), demos[index].file), 'utf8'))
    const sourceRequests = result.serverSourceRequests.length
    const palette = () => card.locator('pre').evaluate(el => ({ background: getComputedStyle(el).backgroundColor, token: getComputedStyle(el.querySelector('.token') || el.querySelector('span') || el).color }))
    const light = await palette()
    await page.evaluate(() => { document.documentElement.dataset.theme = 'dark' })
    await paint()
    const dark = await palette()
    assert.notEqual(light.background, dark.background)
    assert.notEqual(light.token, dark.token)
    assert.equal(result.serverSourceRequests.length, sourceRequests, 'theme changes must not request or recompute highlights')
    await page.evaluate(() => { document.documentElement.dataset.theme = 'light' })
    await paint()
    await toggle.evaluate(el => el.click())
    const sample = { index, ...demos[index], firstExpandMs: end - start, repeatExpandMs: warmEnd - warmStart, palettes: { light, dark }, ...metrics }
    result.sources.push(sample)
    console.log('SOURCE', JSON.stringify({ index, file: sample.file, bytes: sample.bytes, firstExpandMs: sample.firstExpandMs, repeatExpandMs: sample.repeatExpandMs, longTasks: sample.longTasks }))
  }
  begin = performance.now()
  await page.reload({ waitUntil: 'domcontentloaded', timeout: 180000 })
  await ready()
  result.repeatPageMs = performance.now() - begin
  console.log('REPEAT_PAGE', component, Math.round(result.repeatPageMs))
  result.sourceTimings = result.serverSourceRequests.map(item => ({ ...item, durationMs: Math.round(item.durationMs * 10) / 10 }))
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }))
  await paint()
  await page.screenshot({ animations: "disabled", path: `${output}.png`, fullPage: false })
  if (process.env.CEDAR_PERF_INTERACTIONS === '1' && component === 'scheduler') result.interactions = await verifySchedulerExamples(page)
  if (process.env.CEDAR_PERF_HMR === '1') result.hmr = await verifySourceUpdates({ page, app, folder, origin, core })
} catch (error) {
  result.failure = error.stack || String(error)
  console.error(error)
  process.exitCode = 1
} finally {
  clearInterval(hostMonitor)
  result.hostLoadAtEnd = loadavg()
  await browser?.close()
  await Promise.all(watchers.map(watcher => watcher.close()))
  await closeServer?.()
  await writeFile(output, JSON.stringify(result, null, 2))
  console.log('RESULT', output)
  // Keep output and screenshot; temp and caches are isolated to this run.
  if (!output.startsWith(folder)) await rm(folder, { recursive: true, force: true })
}

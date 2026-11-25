import assert from 'node:assert/strict'
import { mkdir, mkdtemp, readdir, readFile, rm } from 'node:fs/promises'
import { createServer } from 'node:http'
import { tmpdir } from 'node:os'
import { dirname, extname, resolve, sep } from 'node:path'
import { after, before, describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { navigateWithDiagnostics } from '../../../design-ui/browser/navigation.mjs'
import { copyProductionSnapshot } from '../../../design-ui/browser/snapshot.mjs'

const root = fileURLToPath(new URL('../../', import.meta.url))
const ui = resolve(root, 'packages/ui')
const themes = [
  { value: 'lightTheme', label: '默认亮色', dark: false },
  { value: 'darkTheme', label: '默认暗色', dark: true },
]
const components = ['button', 'input', 'select', 'tabs', 'switch', 'checkbox', 'dialog', 'scheduler', 'upload', 'image']
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.css': 'text/css; charset=utf-8',
  '.wasm': 'application/wasm',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
}
const normalize = (text) => text.replace(/\r\n/g, '\n').trimEnd()
const darkColor = (color) => {
  const channels = color
    .match(/[\d.]+/g)
    ?.slice(0, 3)
    .map(Number)
  assert.equal(channels?.length, 3, `expected an opaque RGB color: ${color}`)
  assert.ok(!color.startsWith('rgba') || Number(color.match(/[\d.]+/g)[3]) === 1, `transparent surface: ${color}`)
  return channels.reduce((sum, value) => sum + value, 0) < 384
}

async function readDemos(component) {
  const markdown = resolve(ui, 'src', component, 'README.md')
  const text = await readFile(markdown, 'utf8')
  // Only real block demos: Markdown link-definition comments can contain a
  // quoted <demo> which VuePress intentionally does not render.
  return [...text.matchAll(/^<demo\b[^>]*\bsrc="([^"]+\.vue)"/gm)].map((match) => resolve(dirname(markdown), match[1]))
}

async function themeState(page, theme) {
  await page.waitForFunction(({ value, dark }) => {
    const html = document.documentElement
    return html.dataset.cedarDocsTheme === value && html.dataset.theme === (dark ? 'dark' : 'light')
  }, theme)
  await page.evaluate(() =>
    Promise.all(
      document
        .getAnimations()
        .filter((animation) => animation.effect?.getComputedTiming().iterations !== Infinity)
        .map((animation) => animation.finished.catch(() => {})),
    ),
  )
  const state = await page.evaluate(() => {
    const example = document.querySelector('.vmi-previewer-example')
    const card = example.closest('.vmi-previewer')
    const source = card.querySelector('.vmi-previewer-sources pre')
    const html = getComputedStyle(document.documentElement)
    return {
      theme: document.documentElement.dataset.cedarDocsTheme,
      stored: localStorage.getItem('CEDAR_DOCS_THEME'),
      pageBackground: getComputedStyle(document.body).backgroundColor,
      demoBackground: getComputedStyle(example).backgroundColor,
      cardBackground: getComputedStyle(card).backgroundColor,
      demoToken: html.getPropertyValue('--c-color-bg-1').trim(),
      codeBackground: source && getComputedStyle(source).backgroundColor,
      codeColors: source && [
        ...new Set([...source.querySelectorAll('span')].map((span) => getComputedStyle(span).color)),
      ],
      viewport: innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      examples: [...document.querySelectorAll('.vmi-previewer-example')].map((element) => ({
        background: getComputedStyle(element).backgroundColor,
        width: element.getBoundingClientRect().width,
      })),
    }
  })
  assert.equal(state.stored, theme.value)
  assert.equal(state.documentWidth, state.viewport, 'documentation must not overflow the desktop viewport')
  for (const field of ['pageBackground', 'demoBackground', 'cardBackground', 'codeBackground']) {
    assert.equal(darkColor(state[field]), theme.dark, `${field} must follow ${theme.label}: ${state[field]}`)
  }
  assert.ok(state.codeColors.length >= 3, 'expanded Vue source retains syntax highlighting')
  for (const example of state.examples) {
    assert.equal(darkColor(example.background), theme.dark, 'every demo card follows the theme')
    assert.ok(example.width > 0 && example.width <= state.viewport, 'demo cards remain within the viewport')
  }
  return state
}

async function sourceState(page, component) {
  // SSR markup can be visible before Vue has attached the toggle listener.
  await page.waitForFunction(() => document.getElementById('app')?.__vue_app__)
  const first = page.locator('.vmi-previewer').first()
  const toggle = first.locator('[title="展开或收起源码"]')
  // An expanded panel may still be fetching its content-addressed source.
  // Test the panel state, not the asynchronously inserted <pre> element.
  if (!(await first.locator('.vmi-previewer-sources').isVisible())) await toggle.click()
  const source = first.locator('.vmi-previewer-sources pre').first()
  await source.waitFor({ state: 'visible' })
  assert.equal(
    normalize(await source.textContent()),
    normalize(await readFile((await readDemos(component))[0], 'utf8')),
    `${component}: displayed source must exactly match the demo file (not a normalized approximation)`,
  )
}

async function interact(page, component) {
  const demo = page.locator('.vmi-previewer-example').first()
  if (component === 'input') {
    const input = demo.locator('.c-input input').first()
    await input.fill('Production demo QA')
    assert.equal(await input.inputValue(), 'Production demo QA')
    await input.focus()
    await page.keyboard.press('ControlOrMeta+A')
    await page.keyboard.press('Backspace')
    assert.equal(await input.inputValue(), '')
  } else if (component === 'tabs') {
    await demo.getByRole('tab', { name: '详情', exact: true }).click()
    assert.equal(await demo.getByRole('tab', { name: '详情', exact: true }).getAttribute('aria-selected'), 'true')
    assert.equal(await demo.getByRole('tabpanel').filter({ visible: true }).innerText(), '详情内容')
    await demo.getByRole('tab', { name: '设置', exact: true }).focus()
    await page.keyboard.press('Home')
    assert.equal(await demo.getByRole('tab', { name: '概览', exact: true }).getAttribute('aria-selected'), 'true')
  } else if (component === 'select') {
    await demo.getByRole('combobox').click()
    const option = page.getByRole('option', { name: 'Beijing', exact: true })
    await option.click()
    assert.match(await demo.innerText(), /Beijing/)
    await option.waitFor({ state: 'hidden' })
    await demo.getByRole('combobox').click()
    await page.keyboard.press('Escape')
    await page.getByRole('option', { name: 'Shanghai', exact: true }).waitFor({ state: 'hidden' })
  } else if (component === 'switch') {
    const control = demo.getByRole('switch', {
      name: 'Enable notifications',
      exact: true,
    })
    assert.equal(await control.getAttribute('aria-checked'), 'false')
    await control.click()
    assert.equal(await control.getAttribute('aria-checked'), 'true')
    assert.equal(await demo.locator('output').innerText(), 'true')
    await control.press('Space')
    assert.equal(await control.getAttribute('aria-checked'), 'false')
    assert.equal(await demo.locator('output').innerText(), 'false')
  } else if (component === 'checkbox') {
    const control = demo.getByRole('checkbox')
    assert.equal(await control.isChecked(), false)
    // The native input is intentionally covered by the visual control. Click
    // its real label, then exercise the native keyboard path without force.
    await demo.getByText('Option 1', { exact: true }).click()
    assert.equal(await control.isChecked(), true)
    await control.press('Space')
    assert.equal(await control.isChecked(), false)
  } else if (component === 'dialog') {
    await demo.getByRole('button', { name: 'Open Dialog', exact: true }).click()
    // Dialog is teleported: query the real page, not only the demo subtree.
    const dialog = page.getByRole('dialog', {
      name: 'Dialog Title',
      exact: true,
    })
    await dialog.waitFor({ state: 'visible' })
    assert.match(await dialog.innerText(), /This is a basic component dialog/)
    await dialog.getByRole('button', { name: '取消', exact: true }).click()
    await dialog.waitFor({ state: 'hidden' })
    await demo.getByRole('button', { name: 'Open Dialog', exact: true }).click()
    await dialog.waitFor({ state: 'visible' })
    await dialog.getByRole('button', { name: '确定', exact: true }).click()
    await dialog.waitFor({ state: 'hidden' })
  } else if (component === 'scheduler') {
    const modes = demo.locator('.c-scheduler__mode-select').first().getByRole('combobox')
    await modes.click()
    await page.getByRole('option', { name: '月', exact: true }).click()
    await demo.locator('.c-scheduler__month').waitFor({ state: 'visible' })
    assert.match(await demo.locator('.c-scheduler__month').innerText(), /项目同步/)
    await modes.click()
    await page.getByRole('option', { name: '周', exact: true }).click()
    await demo.locator('.c-scheduler__time-grid').waitFor({ state: 'visible' })
    assert.match(await demo.locator('.c-scheduler__time-grid').innerText(), /项目同步/)
  } else if (component === 'upload') {
    await demo.locator('input[type="file"]').setInputFiles({
      name: 'production-demo.txt',
      mimeType: 'text/plain',
      buffer: Buffer.from('Cedar production upload regression'),
    })
    await demo.getByText('production-demo.txt', { exact: true }).waitFor()
    assert.match(await demo.innerText(), /production-demo\.txt/)
  } else if (component === 'image') {
    const image = demo.locator('img').first()
    await image.waitFor({ state: 'visible' })
    await image.evaluate((element) => element.decode())
    assert.equal(await image.evaluate((element) => element.naturalWidth > 0), true)
    await image.click()
    const preview = page.locator('[data-image-preview-stage]').filter({ visible: true })
    await preview.waitFor({ state: 'visible' })
    await preview.locator('[data-image-preview-image]').evaluate((element) => element.decode())
    await preview.getByRole('button', { name: '关闭图片预览', exact: true }).click()
    await preview.waitFor({ state: 'hidden' })
    const demos = await readDemos('image')
    const examples = page.locator('.vmi-previewer-example')
    const error = examples.nth(demos.findIndex((file) => file.endsWith('/error.vue')))
    await error.scrollIntoViewIfNeeded()
    await error.locator('.c-image__error').waitFor({ state: 'visible' })
    assert.equal(await error.locator('.error-slot').innerText(), '加载失败')
    const fallbackIndex = demos.findIndex((file) => file.endsWith('/lazy.vue'))
    const fallback = examples.nth(fallbackIndex).locator('img').last()
    await fallback.scrollIntoViewIfNeeded()
    await page.waitForFunction((index) => {
      const images = document.querySelectorAll('.vmi-previewer-example')[index].querySelectorAll('img')
      const element = images[images.length - 1]
      return element?.src.endsWith('/cat2.jpg') && element.complete && element.naturalWidth > 0
    }, fallbackIndex)
    assert.ok(
      (await fallback.getAttribute('src')).endsWith('/cat2.jpg'),
      'corrupt inline image falls back to the real local asset',
    )
  } else if (component === 'button') {
    const variants = page.locator('.vmi-previewer-example').nth(1)
    const originalHeight = await variants
      .locator('.c-button')
      .first()
      .evaluate((element) => element.getBoundingClientRect().height)
    await variants
      .getByRole('radiogroup', { name: 'Button variant', exact: true })
      .getByText('outline', { exact: true })
      .click()
    assert.equal(await variants.locator('.c-button--variant-outline').count(), 8)
    await variants
      .getByRole('radiogroup', { name: 'Button size', exact: true })
      .getByText('lg', { exact: true })
      .click()
    assert.equal(await variants.locator('.c-button--size-lg').count(), 8)
    assert.ok(
      (await variants
        .locator('.c-button')
        .first()
        .evaluate((element) => element.getBoundingClientRect().height)) > originalHeight,
      'changing Button size changes real geometry, not just a class',
    )
  }
}

// Match Maple's production-only strategy: copy immutable output, use a private
// loopback server and a real Chromium, and fail on every broken local asset.
describe('Cedar production documentation browser regression', { timeout: 600_000 }, () => {
  let browser, server, directory, origin
  before(
    async () => {
      await readFile(resolve(ui, 'dist/components/tabs/index.html')).catch(() => {
        throw new Error('Build the production docs first: pnpm build:doc')
      })
      directory = await mkdtemp(resolve(tmpdir(), 'cedar-docs-theme-'))
      await copyProductionSnapshot(resolve(ui, 'dist'), directory)
      server = createServer(async (request, response) => {
        try {
          const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
          const file = resolve(directory, `.${pathname.endsWith('/') ? `${pathname}index.html` : pathname}`)
          if (!file.startsWith(`${directory}${sep}`)) {
            response.writeHead(403).end()
            return
          }
          const body = await readFile(file)
          response.writeHead(200, {
            'content-type': contentTypes[extname(file)] ?? 'application/octet-stream',
          })
          response.end(body)
        } catch {
          response.writeHead(404).end()
        }
      })
      await new Promise((resolve, reject) => {
        server.once('error', reject)
        server.listen(0, '127.0.0.1', resolve)
      })
      origin = `http://127.0.0.1:${server.address().port}`
      browser = await chromium.launch()
    },
    { timeout: 120_000 },
  )

  after(async () => {
    await browser?.close()
    if (server?.listening) {
      server.closeAllConnections()
      await new Promise((resolve) => server.close(resolve))
    }
    if (directory) await rm(directory, { recursive: true, force: true })
  })

  it('keeps the skip link hidden until keyboard focus in both locales', async () => {
    for (const prefix of ['', '/en']) {
      const page = await browser.newPage()
      try {
        await page.goto(`${origin}${prefix}/guide/quickstart/`)
        await page.waitForFunction(() => document.documentElement.dataset.cedarDocsTheme)
        const link = page.locator('.vp-skip-link')
        const state = () =>
          link.evaluate((element) => {
            const { width, height } = element.getBoundingClientRect()
            return {
              width,
              height,
              clipped: getComputedStyle(element).clipPath === 'inset(50%)',
              focused: element === document.activeElement,
            }
          })
        const hidden = await state()
        assert.ok(hidden.clipped && hidden.width <= 1 && hidden.height <= 1)
        await page.keyboard.press('Tab')
        const shown = await state()
        assert.ok(shown.focused && !shown.clipped && shown.width > 1 && shown.height > 1)
        await page.keyboard.press('Enter')
        await page.waitForFunction(() => document.activeElement?.id === 'main-content')
        assert.deepEqual(await state(), hidden)
      } finally {
        await page.close()
      }
    }
  })

  it('every documented demo has an exact, content-addressed production source asset', async (t) => {
    const assets = new Set()
    const files = await readdir(resolve(directory, '__demo-sources'))
    const { createHash } = await import('node:crypto')
    for (const file of files) {
      const raw = await readFile(resolve(directory, '__demo-sources', file), 'utf8')
      const source = JSON.parse(raw)
      assert.equal(file, `${createHash('sha256').update(raw).digest('hex')}.json`)
      assert.match(source.highlightCode, /^<pre class="cedar-demo-code"><code>/)
      assert.match(source.highlightCode, /class="token /)
      assets.add(`${source.name}\0${source.rawCode}`)
    }
    let pages = 0,
      demos = 0
    for (const component of await readdir(resolve(ui, 'src'))) {
      const markdown = await readFile(resolve(ui, 'src', component, 'README.md'), 'utf8').catch(() => '')
      if (!/^permalink: \/components\//m.test(markdown)) continue
      const references = await readDemos(component)
      if (!references.length) continue
      pages++
      for (const file of references) {
        const raw = await readFile(file, 'utf8')
        assert.ok(
          assets.has(`${file.split(sep).at(-1)}\0${raw}`),
          `${component}: missing or stale production source ${file}`,
        )
        demos++
      }
    }
    assert.ok(pages >= 50, 'must audit the real component documentation, not a fixture subset')
    t.diagnostic(`${pages} component pages / ${demos} demo references / ${files.length} source assets matched`)
  })

  for (const width of [1280, 1440]) {
    for (const theme of themes) {
      it(
        `${width}px ${theme.label}: real menu, persistence, layouts, interactions and exact source`,
        { timeout: 120_000 },
        async (t) => {
          const context = await browser.newContext({
            viewport: { width, height: 900 },
            colorScheme: 'light',
          })
          try {
            await context.route('https://hm.baidu.com/**', (route) =>
              route.fulfill({ contentType: 'text/javascript', body: '' }),
            )
            const page = await context.newPage()
            page.setDefaultTimeout(10_000)
            const failures = []
            page.on('pageerror', (error) => failures.push(error.message))
            page.on('requestfailed', (request) => {
              if (request.url().startsWith(origin)) failures.push(`${request.url()}: ${request.failure()?.errorText}`)
            })
            page.on('response', (response) => {
              if (response.url().startsWith(origin) && response.status() >= 400)
                failures.push(`${response.status()}: ${response.url()}`)
            })
            await navigateWithDiagnostics(page, `${origin}/components/tabs/`)
            const menu = page.locator('details.docs-select').filter({
              has: page.locator('summary[aria-label="主题"]'),
            })
            const trigger = menu.locator('summary')
            await trigger.click()
            assert.equal(
              await menu.getByRole('button').count(),
              2,
              'Cedar exposes light and dark, no stale theme options',
            )
            const opposite = themes.find((option) => option.dark !== theme.dark)
            await menu
              .getByRole('button', {
                name: opposite.label,
                exact: true,
              })
              .click()
            await sourceState(page, 'tabs')
            const beforeSwitch = await themeState(page, opposite)
            await trigger.click()
            await menu.getByRole('button', { name: theme.label, exact: true }).click()
            await sourceState(page, 'tabs')
            const switched = await themeState(page, theme)
            assert.notEqual(
              switched.codeBackground,
              beforeSwitch.codeBackground,
              'already-expanded code updates without reload',
            )
            assert.notEqual(
              switched.demoBackground,
              beforeSwitch.demoBackground,
              'demo background updates without reload',
            )
            await page.reload()
            await sourceState(page, 'tabs')
            assert.deepEqual(await themeState(page, theme), switched, 'theme and source colors survive a full reload')
            await trigger.click()
            assert.equal(
              await menu
                .getByRole('button', {
                  name: theme.label,
                  exact: true,
                })
                .getAttribute('aria-pressed'),
              'true',
            )
            await trigger.click()

            for (const component of components) {
              await t.test(component, async () => {
                await navigateWithDiagnostics(page, `${origin}/components/${component}/`)
                const expected = await readDemos(component)
                await page.waitForFunction(
                  (count) => document.querySelectorAll('.vmi-previewer-example').length === count,
                  expected.length,
                )
                await page.locator('.vmi-previewer-example').first().waitFor({ state: 'visible' })
                await sourceState(page, component)
                await themeState(page, theme)
                await interact(page, component)
                assert.deepEqual(failures, [], `${component}: no script exceptions or failed local assets`)
                t.diagnostic(`${width}px ${theme.value} ${component}: source, theme, layout and interaction passed`)
                if (component === 'tabs' && process.env.DOCS_BROWSER_EVIDENCE_DIR) {
                  const output = resolve(process.env.DOCS_BROWSER_EVIDENCE_DIR)
                  await mkdir(output, { recursive: true })
                  await page.screenshot({
                    path: resolve(output, `cedar-${width}-${theme.value}.png`),
                  })
                }
              })
            }
          } finally {
            await context.close()
          }
        },
      )
    }
  }
})

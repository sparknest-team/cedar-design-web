import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

// Use a temporary demo/page rather than editing a developer's working files.
// This runs after performance samples, so it cannot warm their caches.
export async function verifySourceUpdates({ page, app, folder, origin, core }) {
  page.setDefaultTimeout(30000)
  const fixture = join(folder, 'hmr-fixture')
  await mkdir(fixture)
  const markdown = join(fixture, 'README.md')
  const demo = join(fixture, 'demo.vue')
  const values = join(fixture, 'values.ts')
  const firstDemo = '<script setup lang="ts">\nimport { value } from "./values"\n</script>\n<template><div class="perf-cache-value">{{ value }}</div></template>'
  const firstValues = 'export const value = "before"'
  await writeFile(demo, firstDemo)
  await writeFile(values, firstValues)
  await writeFile(markdown, '---\npermalink: /perf-cache/\n---\n# Cache probe\n\n<demo src="./demo.vue"></demo>')
  const fixturePage = await core.createPage(app, { filePath: markdown })
  app.pages.push(fixturePage)
  await core.preparePageComponent(app, fixturePage)
  await core.preparePageChunk(app, fixturePage)
  await core.prepareRoutes(app)
  await page.goto(`${origin}/perf-cache/`, { waitUntil: 'domcontentloaded' })
  await page.locator('.perf-cache-value').waitFor({ state: 'visible' })
  await page.locator('[title="展开或收起源码"]').evaluate(el => el.click())
  const code = page.locator('.vmi-previewer-sources pre code')
  await code.waitFor({ state: 'visible' })
  assert.equal(await code.textContent(), firstDemo)
  const lastUrl = () => page.evaluate(() => performance.getEntriesByType('resource').filter(entry => entry.name.includes('__demo-sources/')).at(-1).name)
  const beforeDemoUrl = await lastUrl()
  const changedDemo = firstDemo.replace('<template>', '<template><!-- source-v2 -->')
  let started = performance.now()
  await writeFile(demo, changedDemo)
  await page.waitForFunction(() => document.querySelector('.vmi-previewer-sources pre code')?.textContent.includes('source-v2'))
  const demoUpdateMs = performance.now() - started
  const changedDemoUrl = await lastUrl()
  assert.notEqual(changedDemoUrl, beforeDemoUrl)
  assert.equal((await (await page.request.get(changedDemoUrl)).json()).rawCode, changedDemo)
  await page.locator('.vmi-previewer-tabs-tab').filter({ hasText: 'values.ts' }).click()
  await page.waitForFunction(() => document.querySelector('.vmi-previewer-sources pre code')?.textContent.includes('"before"'))
  const beforeValuesUrl = await lastUrl()
  const changedValues = 'export const value = "after"'
  started = performance.now()
  await writeFile(values, changedValues)
  await page.waitForFunction(() => document.querySelector('.vmi-previewer-sources pre code')?.textContent.includes('"after"'))
  const importUpdateMs = performance.now() - started
  const changedValuesUrl = await lastUrl()
  assert.notEqual(changedValuesUrl, beforeValuesUrl)
  assert.equal((await (await page.request.get(changedValuesUrl)).json()).rawCode, changedValues)
  await page.waitForFunction(() => document.querySelector('.perf-cache-value')?.textContent === 'after')
  const result = { demoUpdateMs, importUpdateMs, sourceUrlChanged: true, importUrlChanged: true, rawCopyTextCurrent: true, liveDemoUpdated: true }
  console.log('HMR', JSON.stringify(result))
  return result
}

import assert from 'node:assert/strict'

// Run after all timings, using the actual basic demo and public UI controls.
export async function verifySchedulerExamples(page) {
  page.setDefaultTimeout(30000)
  const demo = page.locator('.vmi-previewer-example').first()
  const modes = demo.locator('.c-scheduler__mode-select').first().getByRole('combobox')
  await modes.click()
  await page.getByRole('option', { name: '月', exact: true }).click()
  await demo.locator('.c-scheduler__month').waitFor({ state: 'visible' })
  assert.match(await demo.innerText(), /首页设计评审/)
  await modes.click()
  await page.getByRole('option', { name: '周', exact: true }).click()
  await demo.locator('.c-scheduler__time-grid').waitFor({ state: 'visible' })
  const title = demo.locator('.c-scheduler__range-title')
  const before = await title.innerText()
  await demo.getByRole('button', { name: '下一页', exact: true }).click()
  await page.waitForFunction(before => document.querySelector('.vmi-previewer-example .c-scheduler__range-title')?.textContent !== before, before)
  await demo.getByRole('button', { name: '上一页', exact: true }).click()
  await page.waitForFunction(before => document.querySelector('.vmi-previewer-example .c-scheduler__range-title')?.textContent === before, before)
  assert.match(await demo.innerText(), /接口联调/)
  await demo.getByRole('button', { name: /首页设计评审/ }).first().click()
  const editor = page.getByRole('dialog', { name: '日程详情', exact: true })
  await editor.waitFor({ state: 'visible' })
  await editor.getByRole('textbox', { name: '标题', exact: true }).fill('冷启动回归日程')
  await editor.getByRole('button', { name: '保存', exact: true }).click()
  await editor.waitFor({ state: 'hidden' })
  await demo.getByRole('button', { name: /冷启动回归日程/ }).first().waitFor({ state: 'attached' })
  const palette = () => page.locator('.vp-navbar').evaluate(el => getComputedStyle(el).backgroundColor)
  const light = await palette()
  await page.getByRole('button', { name: '切换主题', exact: true }).click()
  await page.getByRole('menuitemradio', { name: '默认暗色', exact: true }).click()
  await page.waitForFunction(before => document.documentElement.dataset.theme === 'dark'
    && getComputedStyle(document.querySelector('.vp-navbar')).backgroundColor !== before, light)
  assert.notEqual(await palette(), light)
  await page.reload({ waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: '切换主题', exact: true }).waitFor({ state: 'visible' })
  await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark'
    && document.documentElement.dataset.cedarDocsTheme === 'darkTheme')
  await page.getByRole('button', { name: '切换主题', exact: true }).click()
  await page.getByRole('menuitemradio', { name: '默认亮色', exact: true }).click()
  const origin = new URL(page.url()).origin
  await page.goto(`${origin}/en/components/scheduler/`, { waitUntil: 'domcontentloaded' })
  await page.locator('.vmi-previewer-example').first().getByRole('button', { name: 'New event', exact: true }).waitFor({ state: 'visible' })
  await page.locator('.vp-sidebar').waitFor({ state: 'visible' })
  await page.goto(`${origin}/components/scheduler/`, { waitUntil: 'domcontentloaded' })
  await page.locator('.vmi-previewer-example').first().getByRole('button', { name: '新建日程', exact: true }).waitFor({ state: 'visible' })
  const result = { monthAndWeek: true, dateNavigation: true, editAndSave: true, themeMenu: true, themePersistenceAfterReload: true, englishRouteAndReturn: true }
  console.log('SCHEDULER_INTERACTIONS', JSON.stringify(result))
  return result
}

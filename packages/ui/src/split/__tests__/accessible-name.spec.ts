import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { afterEach, expect, test } from 'vitest'
import Split from '..'
import ConfigProvider from '../../config-provider'
import { addI18nMessages, useLocale } from '../../locale'
import enUS from '../../locale/lang/en-us'
import zhCN from '../../locale/lang/zh-cn'
const wrappers: ReturnType<typeof mount>[] = []
addI18nMessages({ 'en-US': enUS })
afterEach(() => { wrappers.splice(0).forEach(w => w.unmount()); useLocale('zh-CN') })
test('the default separator name follows global locale changes', async () => {
  const w = mount(Split); wrappers.push(w)
  expect(w.get('[role="separator"]').attributes('aria-label')).toBe('调整面板大小')
  useLocale('en-US'); await nextTick()
  expect(w.get('[role="separator"]').attributes('aria-label')).toBe('Resize panels')
})
test('a provider name stays local and a business label names the separator instead of the root', async () => {
  useLocale('en-US')
  const w = mount(ConfigProvider, { props: { locale: zhCN }, slots: { default: () => h(Split) } }); wrappers.push(w)
  expect(w.get('[role="separator"]').attributes('aria-label')).toBe('调整面板大小')
  const named = mount(Split, { props: { ariaLabel: 'Resize navigation pane' } }); wrappers.push(named)
  expect(named.get('[role="separator"]').attributes('aria-label')).toBe('Resize navigation pane')
  expect(named.attributes('aria-label')).toBeUndefined()
  await named.setProps({ ariaLabel: '   ' })
  expect(named.get('[role="separator"]').attributes('aria-label')).toBe('Resize panels')
})

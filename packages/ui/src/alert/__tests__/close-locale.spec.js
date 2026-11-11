import { h, ref, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, expect, test } from 'vitest'
import Alert from '..'
import Provider from '../../config-provider'
import zh from '../../locale/lang/zh-cn'
const owners = []
afterEach(() => owners.splice(0).forEach(w => w.unmount()))
test('default close control has localized text even with custom graphics', () => {
  const w = mount(Alert, { props: { closable: true }, slots: { 'close-icon': () => h('svg') } })
  owners.push(w)
  expect(w.get('[role=button]').attributes('aria-label')).toBe('关闭')
})
test('nearest locale controls the close name reactively and keyboard still closes once', async () => {
  const english = ref(false)
  const w = mount({ render: () => h(Provider, { locale: { ...zh, common: { ...zh.common, close: english.value ? 'Dismiss notice' : '关闭公告' } } }, { default: () => h(Alert, { closable: true }) }) })
  owners.push(w)
  expect(w.get('[role=button]').attributes('aria-label')).toBe('关闭公告')
  english.value = true
  await nextTick()
  expect(w.get('[role=button]').attributes('aria-label')).toBe('Dismiss notice')
  const alert = w.findComponent(Alert)
  await w.get('[role=button]').trigger('keydown', { key: 'Enter' })
  expect(alert.emitted('close')).toHaveLength(1)
})

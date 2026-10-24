import { h, nextTick, reactive } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { configProviderInjectionKey } from '../../config-provider/context'
import Tabs, { TabPane } from '..'

test('inherits reactive provider size and RTL with explicit overrides', async () => {
  const config = reactive({ size: 'lg', rtl: true })
  const wrapper = mount(Tabs, {
    global: { provide: { [configProviderInjectionKey]: config } },
    slots: { default: () => h(TabPane, { name: 'a', title: 'a' }) },
  })
  expect(wrapper.classes()).toContain('c-tabs--size-lg')
  expect(wrapper.attributes('dir')).toBe('rtl')
  config.size = 'sm'
  config.rtl = false
  await nextTick()
  expect(wrapper.classes()).toContain('c-tabs--size-sm')
  expect(wrapper.attributes('dir')).toBeUndefined()
  await wrapper.setProps({ size: 'xl', dir: 'rtl' })
  expect(wrapper.classes()).toContain('c-tabs--size-xl')
  expect(wrapper.attributes('dir')).toBe('rtl')
  wrapper.unmount()
})

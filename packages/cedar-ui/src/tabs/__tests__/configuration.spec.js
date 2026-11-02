import { h, nextTick, reactive } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import ConfigProvider from '../../config-provider'
import Tabs, { TabPane } from '..'

test('inherits reactive provider size and direction with native local overrides', async () => {
  const config = reactive({ size: 'lg', dir: 'rtl' })
  const wrapper = mount({ render: () => h(ConfigProvider, config, () => h(Tabs, { size: undefined }, () => h(TabPane, { name: 'a', title: 'a' }))) }, { attachTo: document.body })
  const tabs = wrapper.findComponent(Tabs)
  expect(tabs.classes()).toContain('c-tabs--size-lg')
  expect(wrapper.get('[dir]').attributes('dir')).toBe('rtl')
  config.size = 'sm'
  config.dir = 'ltr'
  await nextTick()
  expect(tabs.classes()).toContain('c-tabs--size-sm')
  expect(wrapper.get('[dir]').attributes('dir')).toBe('ltr')
  wrapper.unmount()
})

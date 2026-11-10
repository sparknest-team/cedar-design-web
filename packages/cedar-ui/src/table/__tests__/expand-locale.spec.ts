import { h, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import ConfigProvider from '../../config-provider'
import type { CedarLang } from '../../locale/types'
import en from '../../locale/lang/en-us'
import zh from '../../locale/lang/zh-cn'
import Table from '../table'

test('expand button follows locale and expanded state', async () => {
  const locale = ref<CedarLang>(en)
  const wrapper = mount({ render: () => h(ConfigProvider, { locale: locale.value }, () => h(Table, {
    pagination: false,
    columns: [{ title: 'Name', dataIndex: 'name' }],
    data: [{ key: 'parent', name: 'Parent', children: [{ key: 'child', name: 'Child' }] }],
  })) })
  try {
    const button = wrapper.get('button[aria-expanded]')
    expect(button.attributes('aria-label')).toBe('Expand row')
    await button.trigger('click')
    expect(button.attributes('aria-expanded')).toBe('true')
    expect(button.attributes('aria-label')).toBe('Collapse row')
    locale.value = zh
    await wrapper.vm.$nextTick()
    expect(button.attributes('aria-label')).toBe('收起行')
    await button.trigger('click')
    expect(button.attributes('aria-label')).toBe('展开行')
    locale.value = { ...en, table: { ...en.table, expandRow: undefined, collapseRow: undefined } }
    await wrapper.vm.$nextTick()
    expect(button.attributes('aria-label')).toBe('Expand')
    await button.trigger('click')
    expect(button.attributes('aria-label')).toBe('Collapse')
  } finally { wrapper.unmount() }
})

test('column resize handle follows locale and remains keyboard operable', async () => {
  const locale = ref<CedarLang>(en)
  const wrapper = mount({ render: () => h(ConfigProvider, { locale: locale.value }, () => h(Table, {
    pagination: false,
    columnResizable: true,
    tableLayoutFixed: true,
    columns: [{ title: 'Name', dataIndex: 'name', width: 100 }, { title: 'Age', dataIndex: 'age' }],
    data: [{ key: 'one', name: 'A', age: 1 }],
  })) })
  try {
    const handle = wrapper.get('[role="separator"]')
    expect(handle.attributes('aria-label')).toBe('Resize Name column')
    locale.value = zh
    await wrapper.vm.$nextTick()
    expect(handle.attributes('aria-label')).toBe('调整 Name 列宽')
    await handle.trigger('keydown', { key: 'Home' })
    expect(handle.attributes('aria-valuenow')).toBe('40')
    locale.value = { ...en, table: { ...en.table, resizeColumn: undefined } }
    await wrapper.vm.$nextTick()
    expect(handle.attributes('aria-label')).toBe('Resize Name column')
  } finally { wrapper.unmount() }
})

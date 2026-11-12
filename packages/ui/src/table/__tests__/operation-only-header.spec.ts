import { mount } from '@vue/test-utils'
import { createSSRApp, h, nextTick } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { expect, test } from 'vitest'
import Table from '../table'

const data = Array.from({ length: 30 }, (_, key) => ({ key }))

test.each([
  ['ordinary', {}],
  ['fixed', { height: 200 }],
  ['virtual', { height: 200, virtualListProps: { height: 200, estimatedSize: 40 } }],
] as const)('%s retains the selection header without data columns', async (_name, extra) => {
  const wrapper = mount(Table, { props: { columns: [], data, pagination: false, rowSelection: { type: 'checkbox', showCheckedAll: true }, ...extra } })
  try {
    const header = wrapper.find('thead:not([style*="absolute"]) input[type="checkbox"]')
    expect(header.exists()).toBe(true)
    const row = wrapper.find('tbody td')
    expect(row.exists()).toBe(true)
    if ('height' in extra) {
      const cell = row.element as HTMLTableCellElement
      const table = cell.closest('table')!
      const ids = cell.headers.split(' ').filter(Boolean)
      expect(ids).toHaveLength(1)
      expect(table.querySelector('thead th')?.id).toBe(ids[0])
    }
    await header.setValue(true)
    expect(wrapper.emitted('select-all') || wrapper.emitted('selectAll')).toBeTruthy()
  } finally { wrapper.unmount() }
})

test('updates operation-only headers when columns and selection are changed', async () => {
  const wrapper = mount(Table, { props: { columns: [{ title: 'Name', dataIndex: 'name' }], data, pagination: false, height: 200, rowSelection: { type: 'checkbox', showCheckedAll: true } } })
  try {
    await wrapper.get('thead:not([style*="absolute"]) input[type="checkbox"]').setValue(true)
    await wrapper.setProps({ columns: [] })
    const selectionHeader = wrapper.get('thead:not([style*="absolute"]) input[type="checkbox"]')
    expect((selectionHeader.element as HTMLInputElement).checked).toBe(true)
    const cell = wrapper.get('tbody td').element as HTMLTableCellElement
    expect(cell.closest('table')!.querySelector('thead th')?.id).toBe(cell.headers)
    await wrapper.setProps({ rowSelection: undefined })
    expect(wrapper.find('thead input[type="checkbox"]').exists()).toBe(false)
    expect(wrapper.find('thead th').exists()).toBe(false)
    await wrapper.setProps({ columns: [{ title: 'Name', dataIndex: 'name' }], rowSelection: { type: 'checkbox', showCheckedAll: true } })
    expect(wrapper.find('thead:not([style*="absolute"]) input[type="checkbox"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Name')
  } finally { wrapper.unmount() }
})


test('server-rendered operation-only table hydrates the selection header', async () => {
  const createApp = () => createSSRApp({ render: () => h(Table, { columns: [], data: data.slice(0, 2), pagination: false, height: 200, rowSelection: { type: 'checkbox', showCheckedAll: true } }) })
  const html = await renderToString(createApp())
  const container = document.createElement('div'); container.innerHTML = html; document.body.append(container)
  const header = container.querySelector('thead:not([style*="absolute"]) input[type="checkbox"]')
  expect(header).toBeTruthy()
  const app = createApp()
  try {
    app.mount(container); await nextTick()
    expect(container.querySelector('thead:not([style*="absolute"]) input[type="checkbox"]')).toBe(header)
    const cell = container.querySelector('tbody td') as HTMLTableCellElement
    expect(cell.closest('table')!.querySelector('thead th')?.id).toBe(cell.headers)
  } finally { app.unmount(); container.remove() }
})

test.each([
  ['radio', { rowSelection: { type: 'radio' as const, title: 'Select one' } }, ['selection-radio']],
  ['expand', { expandable: { title: 'Expand' } }, ['expand']],
  ['drag', { draggable: { type: 'handle' as const, title: 'Reorder' } }, ['drag-handle']],
  ['combined', { rowSelection: { type: 'checkbox' as const, showCheckedAll: true }, expandable: { title: 'Expand' }, draggable: { type: 'handle' as const, title: 'Reorder' } }, ['drag-handle', 'expand', 'selection-checkbox']],
] as const)('%s operation-only headers remain aligned in split tables', (_name, extra, names) => {
  const wrapper = mount(Table, { props: { columns: [], data: data.slice(0, 2), pagination: false, height: 200, ...extra } })
  try {
    const visible = wrapper.findAll('thead:not([style*="absolute"]) th')
    expect(visible.map(cell => cell.attributes('data-operation-key'))).toEqual(names)
    const cells = wrapper.findAll('tbody tr').at(0)!.findAll('td')
    expect(cells).toHaveLength(names.length)
    for (const cell of cells) {
      const element = cell.element as HTMLTableCellElement
      const ids = element.headers.split(' ').filter(Boolean)
      expect(ids).toHaveLength(1)
      expect(Array.from(element.closest('table')!.querySelectorAll('thead th')).some(header => header.id === ids[0])).toBe(true)
    }
  } finally { wrapper.unmount() }
})

test('an operation-only table respects showHeader=false', async () => {
  const wrapper = mount(Table, { props: { columns: [], data: data.slice(0, 2), pagination: false, height: 200, rowSelection: { type: 'checkbox', showCheckedAll: true }, showHeader: false } })
  try {
    expect(wrapper.find('thead').exists()).toBe(false)
    expect(wrapper.get('tbody td').attributes('headers')).toBeUndefined()
    await wrapper.setProps({ showHeader: true })
    expect(wrapper.find('thead:not([style*="absolute"]) input[type="checkbox"]').exists()).toBe(true)
  } finally { wrapper.unmount() }
})

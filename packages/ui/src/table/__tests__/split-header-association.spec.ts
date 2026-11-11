import { mount } from '@vue/test-utils'
import { createSSRApp, h, nextTick, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { expect, test, vi } from 'vitest'
import Table from '../table'

const columns = [{ title: 'Person', children: [{ title: 'Name', dataIndex: 'name' }, { title: 'Age', dataIndex: 'age' }] }]
const data = Array.from({ length: 30 }, (_, key) => ({ key, name: key === 0 ? 'Ada' : `Person ${key}`, age: key + 30 }))

test.each([
  ['fixed', { height: 200 }],
  ['virtual', { height: 200, virtualListProps: { height: 200, estimatedSize: 40 } }],
  ['summary', { height: 200, summary: true }],
])('%s table associates data cells with headers within the same table', (_name, extra) => {
  const wrapper = mount(Table, { props: { columns, data, pagination: false, ...extra } })
  try {
    const cell = wrapper.findAll('td').find(item => item.text() === 'Ada')!.element as HTMLTableCellElement
    const table = cell.closest('table')!
    const headers = cell.headers.split(/\s+/).filter(Boolean).map(id => Array.from(table.querySelectorAll('th')).find(header => header.id === id))
    expect(headers).toHaveLength(2)
    expect(headers.every(header => header?.tagName === 'TH')).toBe(true)
    expect(headers.map(header => header?.getAttribute('aria-labelledby')).every(Boolean)).toBe(true)
    if (extra.summary) {
      const summary = wrapper.get('tfoot').element.closest('table')!
      expect(summary.querySelectorAll('thead th')).toHaveLength(3)
    }
  } finally { wrapper.unmount() }
})

test('updates associations when columns or header visibility change', async () => {
  const wrapper = mount(Table, { props: { columns, data, pagination: false, height: 200 } })
  try {
    await wrapper.setProps({ columns: [{ title: 'Age', dataIndex: 'age' }] })
    await nextTick()
    const cell = wrapper.findAll('td').find(item => item.text() === '30')!.element as HTMLTableCellElement
    const table = cell.closest('table')!
    expect(cell.headers.split(/\s+/).filter(Boolean)).toHaveLength(1)
    expect(table.querySelectorAll('thead th')).toHaveLength(1)
    await wrapper.setProps({ showHeader: false })
    expect(cell.getAttribute('headers')).toBeNull()
    expect(table.querySelector('thead')).toBeNull()
  } finally { wrapper.unmount() }
})

test('merged cells include the headers of both data columns and preserve operation columns', () => {
  const wrapper = mount(Table, { props: {
    columns, data, pagination: false, height: 200,
    rowSelection: { type: 'checkbox', showCheckedAll: true },
    spanMethod: ({ rowIndex, columnIndex }: { rowIndex: number; columnIndex: number }) => rowIndex === 0 && columnIndex === 0 ? { colspan: 2 } : undefined,
  } })
  try {
    const cell = wrapper.findAll('td').find(item => item.text() === 'Ada')!.element as HTMLTableCellElement
    const table = cell.closest('table')!
    const ids = cell.headers.split(/\s+/).filter(Boolean)
    expect(ids).toHaveLength(3)
    expect(ids.every(id => Array.from(table.querySelectorAll('th')).some(header => header.id === id))).toBe(true)
    expect(table.querySelectorAll('thead th')).toHaveLength(4)
  } finally { wrapper.unmount() }
})

test('server-rendered tables hydrate with distinct valid header references', async () => {
  const createApp = () => createSSRApp({ render: () => h('div', [
    h(Table, { columns, data: data.slice(0, 1), pagination: false, height: 200 }),
    h(Table, { columns, data: data.slice(0, 1), pagination: false, height: 200 }),
  ]) })
  const html = await renderToString(createApp())
  const container = document.createElement('div')
  container.innerHTML = html
  document.body.append(container)
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const app = createApp()
  try {
    app.mount(container)
    await nextTick()
    const cells = Array.from(container.querySelectorAll('td')).filter(cell => cell.textContent?.trim() === 'Ada')
    expect(cells).toHaveLength(2)
    const allIds = Array.from(container.querySelectorAll('[id]'), element => element.id)
    expect(new Set(allIds).size).toBe(allIds.length)
    for (const cell of cells) {
      const table = cell.closest('table')!
      expect(cell.headers.split(/\s+/).filter(Boolean).every(id => Array.from(table.querySelectorAll('th')).some(header => header.id === id))).toBe(true)
    }
    expect(warn.mock.calls.some(args => String(args[0]).includes('Hydration'))).toBe(false)
  } finally { app.unmount(); container.remove(); warn.mockRestore() }
})

test('custom interactive title remains unique and updates the associated header', async () => {
  const title = ref('Original name')
  const clicks = vi.fn()
  const wrapper = mount({
    render: () => h(Table, {
      columns: [{ titleSlotName: 'customTitle', dataIndex: 'name' }],
      data: data.slice(0, 1), pagination: false, height: 200,
    }, { customTitle: () => h('button', { onClick: clicks }, title.value) }),
  })
  try {
    const cell = wrapper.findAll('td').find(item => item.text() === 'Ada')!.element as HTMLTableCellElement
    const semantic = Array.from(cell.closest('table')!.querySelectorAll('th')).find(header => header.id === cell.headers)!
    const source = wrapper.element.querySelector(`[id="${semantic.getAttribute('aria-labelledby')}"]`)!
    expect(source.textContent).toContain('Original name')
    expect(wrapper.findAll('button').filter(button => button.text() === 'Original name')).toHaveLength(1)
    await wrapper.findAll('button').find(button => button.text() === 'Original name')!.trigger('click')
    expect(clicks).toHaveBeenCalledTimes(1)
    title.value = 'Updated name'
    await nextTick()
    expect(source.textContent).toContain('Updated name')
  } finally { wrapper.unmount() }
})

test('custom table-header element keeps a valid source reference', () => {
  const wrapper = mount(Table, {
    props: { columns: [{ title: 'Name', dataIndex: 'name' }], data: data.slice(0, 1), pagination: false, height: 200 },
    slots: { th: () => h('th', { id: 'caller-header' }) },
  })
  try {
    const cell = wrapper.findAll('td').find(item => item.text() === 'Ada')!.element as HTMLTableCellElement
    const semantic = Array.from(cell.closest('table')!.querySelectorAll('th')).find(header => header.id === cell.headers)!
    const source = semantic.getAttribute('aria-labelledby')!
    expect(wrapper.element.querySelector('#caller-header')).not.toBeNull()
    expect(Array.from(wrapper.element.querySelectorAll('[id]')).some(element => element.id === source)).toBe(true)
  } finally { wrapper.unmount() }
})

test('ellipsis tooltip retains the semantic header label target', () => {
  const wrapper = mount(Table, { props: {
    columns: [{ title: 'Long name', dataIndex: 'name', ellipsis: true, tooltip: true }],
    data: data.slice(0, 1), pagination: false, height: 200,
  } })
  try {
    const cell = wrapper.findAll('td').find(item => item.text() === 'Ada')!.element as HTMLTableCellElement
    const semantic = Array.from(cell.closest('table')!.querySelectorAll('th')).find(header => header.id === cell.headers)!
    const sourceId = semantic.getAttribute('aria-labelledby')
    const source = Array.from(wrapper.element.querySelectorAll('[id]')).find(element => element.id === sourceId)
    expect(source?.textContent).toBe('Long name')
  } finally { wrapper.unmount() }
})

test('custom td headers take precedence over automatically generated headers', async () => {
  const customHeaders = ref<string | undefined>('business-header')
  const wrapper = mount({
    render: () => h(Table, {
      columns: [{ title: 'Name', dataIndex: 'name' }], data: data.slice(0, 1), pagination: false, height: 200,
    }, { td: () => h('td', { headers: customHeaders.value, 'data-custom-cell': 'yes' }) }),
  })
  try {
    const cell = wrapper.get('td[data-custom-cell]').element as HTMLTableCellElement
    expect(cell.headers).toBe('business-header')
    customHeaders.value = 'updated-header'
    await nextTick()
    expect(cell.headers).toBe('updated-header')
    customHeaders.value = ''
    await nextTick()
    expect(cell.getAttribute('headers')).toBe('')
    customHeaders.value = undefined
    await nextTick()
    expect(cell.headers).toMatch(/^c-table-header-.+-body-/)
  } finally { wrapper.unmount() }
})

test('semantic header preserves the custom th accessible name', () => {
  const wrapper = mount(Table, {
    props: { columns: [{ title: () => h('svg', { 'aria-hidden': 'true' }), dataIndex: 'name' }], data: data.slice(0, 1), pagination: false, height: 200 },
    slots: { th: () => h('th', { id: 'icon-heading', 'aria-label': 'Account' }) },
  })
  try {
    const cell = wrapper.findAll('td').find(item => item.text() === 'Ada')!.element as HTMLTableCellElement
    const semantic = Array.from(cell.closest('table')!.querySelectorAll('th')).find(header => header.id === cell.headers)!
    expect(semantic.getAttribute('aria-label')).toBe('Account')
    expect(wrapper.get('#icon-heading').attributes('aria-label')).toBe('Account')
  } finally { wrapper.unmount() }
})

test('semantic header follows dynamic custom th naming attributes', async () => {
  const label = ref('Account')
  const wrapper = mount({ render: () => h(Table, {
    columns: [{ title: 'Name', dataIndex: 'name' }], data: data.slice(0, 1), pagination: false, height: 200,
  }, { th: () => h('th', { 'aria-label': label.value }) }) })
  try {
    const cell = wrapper.findAll('td').find(item => item.text() === 'Ada')!.element as HTMLTableCellElement
    const header = () => Array.from(cell.closest('table')!.querySelectorAll('th')).find(node => node.id === cell.headers)!
    expect(header().getAttribute('aria-label')).toBe('Account')
    label.value = 'Customer'
    await nextTick()
    expect(header().getAttribute('aria-label')).toBe('Customer')
  } finally { wrapper.unmount() }
})

test('blank custom labelledby falls back to the explicit aria-label', () => {
  const wrapper = mount(Table, {
    props: { columns: [{ title: 'Name', dataIndex: 'name' }], data: data.slice(0, 1), pagination: false, height: 200 },
    slots: { th: () => h('th', { 'aria-labelledby': '  ', 'aria-label': 'Account' }) },
  })
  try {
    const cell = wrapper.findAll('td').find(item => item.text() === 'Ada')!.element as HTMLTableCellElement
    const header = Array.from(cell.closest('table')!.querySelectorAll('th')).find(node => node.id === cell.headers)!
    expect(header.getAttribute('aria-label')).toBe('Account')
    expect(header.hasAttribute('aria-labelledby')).toBe(false)
  } finally { wrapper.unmount() }
})

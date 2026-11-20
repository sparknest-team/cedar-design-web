import { flushPromises, mount } from '@vue/test-utils'
import { h, nextTick, toRaw } from 'vue'
import { afterEach, expect, test, vi } from 'vitest'
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import TableCore from '../core'

const mounted: ReturnType<typeof mount>[] = []
afterEach(() => { mounted.splice(0).forEach(wrapper => wrapper.unmount()); vi.restoreAllMocks() })
const mountCore = (options: any) => { const wrapper = mount(TableCore, options); mounted.push(wrapper as any); return wrapper }
const columns = [
  { title: 'Person', children: [{ title: 'Name', dataIndex: 'name', width: 100, fixed: 'left' as const }, { title: 'Age', dataIndex: 'age', minWidth: 80 }] },
  { title: 'Status', dataIndex: 'status', width: 90, fixed: 'right' as const },
]
const data = [{ key: 'a', name: 'Alpha', age: 20, status: 'active' }, { key: 'b', name: 'Beta', age: 30, status: 'pending' }]

test('native grouped rendering retains raw rows, frozen offsets and header associations', async () => {
  const wrapper = mountCore({ props: { columns, data } })
  await flushPromises()
  expect(wrapper.findAll('tbody tr')).toHaveLength(2)
  expect(wrapper.findAll('tbody td').map(cell => cell.text())).toEqual(['Alpha', '20', 'active', 'Beta', '30', 'pending'])
  expect(wrapper.find('th[data-column-key="name"]').attributes('style')).toContain('left: 0px')
  expect(wrapper.find('td[data-column-key="status"]').attributes('style')).toContain('right: 0px')
  const ids = new Set(wrapper.findAll('th[id]').map(header => header.attributes('id')))
  for (const cell of wrapper.findAll('td[headers]')) for (const id of cell.attributes('headers').split(' ')) expect(ids.has(id)).toBe(true)
  await wrapper.find('td').trigger('click')
  expect(toRaw(wrapper.emitted('cell-click')![0][0])).toBe(data[0])
  expect(toRaw(wrapper.emitted('row-click')![0][0])).toBe(data[0])
  expect(wrapper.find('[role="region"]').attributes('tabindex')).toBe('0')
})

test('header/cell/named slots, render callbacks and dynamic columns have explicit precedence', async () => {
  const wrapper = mountCore({ props: { columns: [{ title: 'Name', dataIndex: 'name', slotName: 'name', render: () => 'renderer' }], data },
    slots: { header: ({ column }: any) => `Header ${column.title}`, cell: ({ record }: any) => h('strong', record.name), name: () => 'named', footer: () => 'Footer' } })
  expect(wrapper.find('th').text()).toBe('Header Name')
  expect(wrapper.find('td').text()).toBe('Alpha')
  expect(wrapper.find('.c-table-core-footer').text()).toBe('Footer')
  await wrapper.setProps({ columns: [{ title: 'Age', dataIndex: 'age' }] })
  expect(wrapper.find('th').text()).toBe('Header Age')
  expect(wrapper.find('td').attributes('data-column-key')).toBe('age')
  expect(wrapper.find('td[data-column-key="name"]').exists()).toBe(false)
  const rendered = mountCore({ props: { columns: [{ dataIndex: 'name', render: ({ record }: any) => `Render ${record.name}`, slotName: 'name' }], data }, slots: { name: () => 'named' } })
  expect(rendered.find('td').text()).toBe('Render Alpha')
})

test('busy state keeps rows and empty/footer slots work without desktop dependencies', async () => {
  const wrapper = mountCore({ props: { columns, data, loading: true, height: 200, maxHeight: 300 }, attrs: { 'aria-label': 'Accounts' }, slots: { empty: () => 'Nothing here' } })
  expect(wrapper.attributes('aria-busy')).toBe('true')
  expect(wrapper.findAll('tbody tr')).toHaveLength(2)
  expect(wrapper.find('[role="region"]').attributes('aria-label')).toBe('Accounts')
  expect(wrapper.find('[role="region"]').attributes('style')).toContain('height: 200px')
  await wrapper.setProps({ data: [], loading: false })
  expect(wrapper.find('tbody').text()).toBe('Nothing here')
  expect(wrapper.attributes('aria-busy')).toBeUndefined()
})

test('auto layout uses measured widths while fixed layout distributes available space', async () => {
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(500)
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement) {
    return { width: this.getAttribute('data-column-key') === 'name' ? 170 : 80, height: this.tagName === 'TR' ? 25 : 20, x: 0, y: 0, top: 0, left: 0, bottom: 20, right: 100, toJSON() {} }
  })
  const wrapper = mountCore({ props: { columns: [{ dataIndex: 'name', width: 100, fixed: 'left' }, { dataIndex: 'age', minWidth: 80, fixed: 'left' }], data, tableLayout: 'auto' } })
  await flushPromises(); await nextTick()
  expect(wrapper.find('td[data-column-key="age"]').attributes('style')).toContain('left: 170px')
  expect(wrapper.findAll('col')).toHaveLength(0)
  expect(wrapper.find('td[data-column-key="name"]').attributes('style')).toContain('width: 100px')
  expect(wrapper.find('td[data-column-key="age"]').attributes('style')).toContain('min-width: 80px')
  await wrapper.setProps({ tableLayout: 'fixed' }); await flushPromises()
  expect(wrapper.findAll('col').map(column => column.attributes('width'))).toEqual(['100', '400'])
  expect(wrapper.find('td[data-column-key="age"]').attributes('style')).toContain('left: 100px')
})

test('RTL retains physical fixed sides and keyboard navigation ignores nested inputs', async () => {
  const wrapper = mountCore({ attrs: { dir: 'rtl' }, props: { columns, data } })
  await flushPromises()
  expect(wrapper.findAll('tbody tr')[0].findAll('td').map(cell => cell.attributes('data-column-key'))).toEqual(['status', 'age', 'name'])
  const viewport = wrapper.get('[role="region"]').element as HTMLElement
  Object.defineProperties(viewport, { scrollWidth: { value: 900, configurable: true }, clientWidth: { value: 300, configurable: true } })
  await wrapper.get('[role="region"]').trigger('keydown', { key: 'End' })
  expect(Math.abs(viewport.scrollLeft)).toBeGreaterThan(0)
  await wrapper.get('[role="region"]').trigger('keydown', { key: 'Home' })
  expect(Math.abs(viewport.scrollLeft)).toBe(0)
})

test('SSR and multiple instances generate independent header IDs', async () => {
  const html = await renderToString(createSSRApp({ render: () => h('main', [h(TableCore, { columns, data }), h(TableCore, { columns, data })]) }))
  const ids = Array.from(html.matchAll(/\bid="([^"]+)"/g), match => match[1])
  expect(new Set(ids).size).toBe(ids.length)
  expect(html).toContain('Alpha')
  expect(html).not.toContain('c-table-filters')
  expect(html).not.toContain('c-pagination')
})

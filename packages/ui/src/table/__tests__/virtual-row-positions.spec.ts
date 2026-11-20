import { flushPromises, mount } from '@vue/test-utils'
import { createSSRApp, defineComponent, h, nextTick, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { describe, expect, it, vi } from 'vitest'
import Table from '../table'

const data = Array.from({ length: 30 }, (_, key) => ({ key, name: `Row ${key}` }))
const columns = [{ title: 'Group', children: [{ title: 'Name', dataIndex: 'name' }] }]
const props = { columns, data, pagination: false as const, virtualListProps: { height: 100, estimatedSize: 30 } }

describe('virtual table row positions', () => {
  it('counts header rows and exposes positions on each rendered row', async () => {
    const wrapper = mount(Table, { props })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('32')
    expect(table.findAll('thead tr').map(row => row.attributes('aria-rowindex'))).toEqual(['1', '2'])
    const rows = table.findAll('tbody tr')
    expect(rows.length).toBeGreaterThan(0)
    expect(rows.map(row => Number(row.attributes('aria-rowindex')))).toEqual(rows.map((_, index) => index + 3))
    await wrapper.setProps({ showHeader: false })
    expect(table.attributes('aria-rowcount')).toBe('30')
    expect(table.find('tbody tr').attributes('aria-rowindex')).toBe('1')
    wrapper.unmount()
  })

  it('includes expanded slot details and updates later row positions', async () => {
    const wrapper = mount(Table, { props: { ...props, expandedKeys: [] }, slots: { 'expand-row': () => h('span', 'detail') } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('32')
    await wrapper.setProps({ expandedKeys: [0] })
    expect(table.attributes('aria-rowcount')).toBe('33')
    expect(table.findAll('tbody tr').slice(0, 3).map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4', '5'])
    await wrapper.setProps({ expandedKeys: [] })
    expect(table.attributes('aria-rowcount')).toBe('32')
    wrapper.unmount()
  })

  it('counts nested expanded tree rows without counting collapsed children', async () => {
    const tree = [
      { key: 'a', name: 'Parent', children: [{ key: 'b', name: 'Child', children: [{ key: 'c', name: 'Grandchild' }] }] },
      { key: 'd', name: 'Next' },
    ]
    const wrapper = mount(Table, { props: { ...props, data: tree, expandedKeys: ['a', 'b'] } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('6')
    expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4', '5', '6'])
    await wrapper.setProps({ expandedKeys: ['a'] })
    expect(table.attributes('aria-rowcount')).toBe('5')
    expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4', '5'])
    wrapper.unmount()
  })

  it('counts a mounted empty detail without shifting later rows', async () => {
    const wrapper = mount(Table, { props: { ...props, expandedKeys: [0], expandable: { expandedRowRender: () => null } } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('32')
    expect(table.findAll('tbody tr').slice(0, 2).map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4'])
    wrapper.unmount()
  })

  it('does not execute offscreen detail callbacks to calculate virtual row positions', async () => {
    const expandedRowRender = vi.fn(() => null)
    const rows = Array.from({ length: 200 }, (_, key) => ({ key, name: `Row ${key}` }))
    const wrapper = mount(Table, {
      props: { ...props, data: rows, expandedKeys: [199], expandable: { expandedRowRender } },
    })
    try {
      await flushPromises()
      const table = wrapper.get('.c-table-body table')
      expect(table.attributes('aria-rowcount')).toBe('-1')
      expect(table.find('tbody tr').attributes('aria-rowindex')).toBe('3')
      expect(table.text()).not.toContain('Row 199')
      expect(expandedRowRender).toHaveBeenCalled()
      expect(expandedRowRender).not.toHaveBeenCalledWith(expect.objectContaining({ key: 199 }))
    } finally { wrapper.unmount() }
  })

  it('does not execute an offscreen detail callback while rendering virtual rows on the server', async () => {
    const expandedRowRender = vi.fn(() => null)
    const rows = Array.from({ length: 200 }, (_, key) => ({ key, name: `Row ${key}` }))
    const html = await renderToString(createSSRApp({ render: () => h(Table, {
      ...props, data: rows, expandedKeys: [199], expandable: { expandedRowRender },
    }) }))
    expect(html).toContain('aria-rowcount="-1"')
    expect(html).toContain('aria-rowindex="3"')
    expect(html).not.toContain('Row 199')
    expect(expandedRowRender).not.toHaveBeenCalledWith(expect.objectContaining({ key: 199 }))
  })

  it('reuses each rendered middle detail for SSR content, positions and hydration', async () => {
    const detail = vi.fn(() => h('span', 'SSR detail'))
    const records = [{ key: 'a', name: 'First' }, { key: 'b', name: 'Middle', expand: detail }, { key: 'c', name: 'Last' }]
    const app = () => createSSRApp({ render: () => h(Table, { ...props, data: records, expandedKeys: ['b'] }) })
    const html = await renderToString(app())
    expect(html).toContain('aria-rowcount="6"')
    expect(html).toContain('aria-rowindex="6"')
    expect(html).toContain('SSR detail')
    expect(detail).toHaveBeenCalledTimes(1)
    const container = document.createElement('div')
    container.innerHTML = html
    const original = Array.from(container.querySelectorAll('.c-table-body tr'))
    const client = app()
    client.mount(container)
    try {
      await nextTick()
      const hydrated = Array.from(container.querySelectorAll('.c-table-body tr'))
      expect(hydrated).toHaveLength(original.length)
      expect(hydrated.every((row, index) => row === original[index])).toBe(true)
      expect(hydrated.map(row => row.getAttribute('aria-rowindex'))).toEqual(['1', '2', '3', '4', '5', '6'])
    } finally { client.unmount() }
  })

  it('indexes a final optional nested detail only when rendered and reacts to following siblings', async () => {
    const visible = ref(true)
    const parent = { key: 'a', name: 'Parent', children: [
      { key: 'b', name: 'Last', expand: () => visible.value ? 'Details' : null },
    ] }
    const wrapper = mount(Table, { props: { ...props, data: [parent], expandedKeys: ['a', 'b'] } })
    try {
      await flushPromises()
      const table = wrapper.get('.c-table-body table')
      const indices = () => table.findAll('tr').map(row => row.attributes('aria-rowindex'))
      expect(table.attributes('aria-rowcount')).toBe('5')
      expect(indices()).toEqual(['1', '2', '3', '4', '5'])
      visible.value = false
      await nextTick()
      expect(indices()).toEqual(['1', '2', '3', '4'])
      await wrapper.setProps({ data: [parent, { key: 'c', name: 'Sibling' }] })
      expect(table.attributes('aria-rowcount')).toBe('5')
      expect(indices()).toEqual(['1', '2', '3', '4', '5'])
      visible.value = true
      await nextTick()
      expect(table.attributes('aria-rowcount')).toBe('6')
      expect(indices()).toEqual(['1', '2', '3', '4', '5', '6'])
      await wrapper.setProps({ expandedKeys: ['a'] })
      expect(table.attributes('aria-rowcount')).toBe('5')
      expect(indices()).toEqual(['1', '2', '3', '4', '5'])
    } finally { wrapper.unmount() }
  })

  it('counts an expanded empty tree placeholder', async () => {
    const wrapper = mount(Table, { props: { ...props, data: [{ key: 'empty', name: 'Empty', children: [] }], showEmptyTree: true, expandedKeys: ['empty'] } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('4')
    expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4'])
    wrapper.unmount()
  })

  it('counts static expanded content and updates when it changes', async () => {
    const staticProps = { ...props, data: [{ key: 'a', name: 'One', expand: 'Details' }, { key: 'b', name: 'Two' }], expandedKeys: ['a'] }
    const html = await renderToString(createSSRApp({ render: () => h(Table, staticProps) }))
    expect(html).toContain('aria-rowcount="5"')
    expect(html).toContain('aria-rowindex="5"')
    const wrapper = mount(Table, { props: staticProps })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('5')
    expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4', '5'])
    await wrapper.setProps({ data: [{ key: 'a', name: 'One', expand: '' }, { key: 'b', name: 'Two' }] })
    expect(table.attributes('aria-rowcount')).toBe('4')
    expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4'])
    wrapper.unmount()
  })

  it('updates row positions when detail changes between a callback and static content', async () => {
    const records = (expand: string | (() => null)) => [{ key: 'a', name: 'One', expand }, { key: 'b', name: 'Two' }]
    const wrapper = mount(Table, { props: { ...props, data: records(() => null), expandedKeys: ['a'] } })
    try {
      await flushPromises()
      const table = wrapper.get('.c-table-body table')
      expect(table.attributes('aria-rowcount')).toBe('4')
      expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4'])
      await wrapper.setProps({ data: records('Details') })
      expect(table.attributes('aria-rowcount')).toBe('5')
      expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4', '5'])
      expect(table.text()).toContain('Details')
      await wrapper.setProps({ data: records(() => null) })
      expect(table.attributes('aria-rowcount')).toBe('4')
      expect(table.findAll('tbody tr').map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4'])
      expect(table.text()).not.toContain('Details')
    } finally { wrapper.unmount() }
  })

  it('exposes the same positions during server rendering', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(Table, props) }))
    expect(html).toContain('aria-rowcount="32"')
    expect(html).toContain('aria-rowindex="1"')
    expect(html).toContain('aria-rowindex="3"')
    const expanded = await renderToString(createSSRApp({ render: () => h(Table, {
      ...props, data: [{ key: 'a', name: 'Parent', children: [{ key: 'b', name: 'Child' }] }, { key: 'c', name: 'Last' }], expandedKeys: ['a'],
    }) }))
    expect(expanded).toContain('aria-rowcount="5"')
    expect(expanded).toContain('aria-rowindex="3"')
    expect(expanded).toContain('aria-rowindex="4"')
    expect(expanded).toContain('aria-rowindex="5"')
  })

  it('omits positions if visible records have duplicate keys', async () => {
    const wrapper = mount(Table, { props: { ...props, data: [{ key: 'a', name: 'One' }, { key: 'a', name: 'Two' }] } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBeUndefined()
    expect(table.findAll('tr').every(row => row.attributes('aria-rowindex') === undefined)).toBe(true)
    wrapper.unmount()
  })

  it('does not assume that a custom row or virtual data has the standard structure', async () => {
    const customRow = mount(Table, { props, slots: { tr: () => h('tr') } })
    await flushPromises()
    expect(customRow.get('.c-table-body table').attributes('aria-rowcount')).toBeUndefined()
    expect(customRow.findAll('.c-table-body tr').every(row => row.attributes('aria-rowindex') === undefined)).toBe(true)
    customRow.unmount()

    const customData = mount(Table, { props: { ...props, virtualListProps: { ...props.virtualListProps, data: [] } } })
    await flushPromises()
    expect(customData.get('.c-table-body table').attributes('aria-rowcount')).toBeUndefined()
    customData.unmount()
  })

  it('uses native row positions when the virtual threshold renders every row', async () => {
    const wrapper = mount(Table, { props: { ...props, virtualListProps: { ...props.virtualListProps, threshold: 30 } } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.findAll('tbody tr')).toHaveLength(30)
    expect(table.attributes('aria-rowcount')).toBeUndefined()
    expect(table.findAll('tr').every(row => row.attributes('aria-rowindex') === undefined)).toBe(true)
    await wrapper.setProps({ virtualListProps: { ...props.virtualListProps, threshold: 29 } })
    expect(table.attributes('aria-rowcount')).toBe('32')
    expect(table.find('tbody tr').attributes('aria-rowindex')).toBe('3')
    wrapper.unmount()
  })

  it('updates positions when the expanded-detail slot is added and removed', async () => {
    const show = ref(false)
    const stableProps = { ...props, expandedKeys: [0] }
    const Fixture = defineComponent({ setup: () => () => h(Table, stableProps, show.value ? { 'expand-row': () => h('span', 'detail') } : {}) })
    const wrapper = mount(Fixture)
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('32')
    show.value = true
    await nextTick()
    expect(table.attributes('aria-rowcount')).toBe('33')
    expect(table.findAll('tbody tr').slice(0, 3).map(row => row.attributes('aria-rowindex'))).toEqual(['3', '4', '5'])
    show.value = false
    await nextTick()
    expect(table.attributes('aria-rowcount')).toBe('32')
    wrapper.unmount()
  })

  it('removes and restores positions when a custom row slot is toggled', async () => {
    const custom = ref(false)
    const Fixture = defineComponent({ setup: () => () => h(Table, props, custom.value ? { tr: () => h('tr') } : {}) })
    const wrapper = mount(Fixture)
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.attributes('aria-rowcount')).toBe('32')
    custom.value = true
    await nextTick()
    expect(table.attributes('aria-rowcount')).toBeUndefined()
    expect(table.findAll('tr').every(row => row.attributes('aria-rowindex') === undefined)).toBe(true)
    custom.value = false
    await nextTick()
    expect(table.attributes('aria-rowcount')).toBe('32')
    expect(table.find('tbody tr').attributes('aria-rowindex')).toBe('3')
    wrapper.unmount()
  })

  it('tracks the displayed page and sorted order when data changes', async () => {
    const rows = Array.from({ length: 12 }, (_, key) => ({ key, score: key }))
    const sortedColumns = (sortOrder: 'ascend' | 'descend') => [{ title: 'Score', dataIndex: 'score', sortable: { sortOrder, sortDirections: ['ascend', 'descend'] } }]
    const wrapper = mount(Table, { props: { data: rows, columns: sortedColumns('ascend'), pagination: { modelValue: 2, pageSize: 4, responsive: false }, virtualListProps: { height: 200, estimatedSize: 30 } } })
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    const rendered = () => table.findAll('tbody tr').map(row => [row.text(), row.attributes('aria-rowindex')])
    expect(table.attributes('aria-rowcount')).toBe('5')
    expect(rendered()).toEqual([['4', '2'], ['5', '3'], ['6', '4'], ['7', '5']])
    await wrapper.setProps({ columns: sortedColumns('descend') })
    expect(rendered()).toEqual([['7', '2'], ['6', '3'], ['5', '4'], ['4', '5']])
    await wrapper.setProps({ pagination: { modelValue: 3, pageSize: 4, responsive: false } })
    expect(rendered()).toEqual([['3', '2'], ['2', '3'], ['1', '4'], ['0', '5']])
    await wrapper.setProps({ data: rows.slice(0, 10), pagination: { modelValue: 3, pageSize: 4, responsive: false } })
    expect(table.attributes('aria-rowcount')).toBe('3')
    expect(rendered()).toEqual([['1', '2'], ['0', '3']])
    wrapper.unmount()
  })
})

it('does not publish virtual row positions when a custom tbody inserts a row', async () => {
  const Body = defineComponent({
    setup(_, { slots }) {
      return () => h('tbody', [h('tr', { 'data-extra-row': '' }, [h('td', 'Extra')]), slots.default?.()])
    },
  })
  const wrapper = mount(Table, { props, slots: { tbody: () => h(Body) } })
  try {
    await flushPromises()
    const table = wrapper.get('.c-table-body table')
    expect(table.find('[data-extra-row]').exists()).toBe(true)
    expect(table.attributes('aria-rowcount')).toBeUndefined()
    expect(table.findAll('tr').every(row => row.attributes('aria-rowindex') === undefined)).toBe(true)
  } finally { wrapper.unmount() }
})

it('updates a virtual tbody slot while preserving row nodes and drafts', async () => {
  const enabled = ref(false)
  const marker = ref('one')
  const wrapper = mount({
    setup: () => () => h(Table, { ...props, columns: [{ title: 'Name', dataIndex: 'name', slotName: 'name' }] }, {
      ...(enabled.value ? { tbody: () => h('tbody', { 'data-marker': marker.value }) } : {}),
      name: () => h('input'),
    }),
  }, { attachTo: document.body })
  try {
    await flushPromises()
    const input = wrapper.get('tbody input').element as HTMLInputElement
    input.value = 'draft'
    input.focus()
    enabled.value = true
    await nextTick(); await flushPromises()
    expect(wrapper.get('tbody').attributes('data-marker')).toBe('one')
    expect(wrapper.get('tbody input').element).toBe(input)
    expect(input.value).toBe('draft')
    expect(document.activeElement).toBe(input)
    marker.value = 'two'
    await nextTick(); await flushPromises()
    expect(wrapper.get('tbody').attributes('data-marker')).toBe('two')
    expect(wrapper.get('tbody input').element).toBe(input)
    enabled.value = false
    await nextTick(); await flushPromises()
    expect(wrapper.get('tbody').attributes('data-marker')).toBeUndefined()
    expect(wrapper.get('tbody input').element).toBe(input)
  } finally { wrapper.unmount() }
})

it('renders and hydrates a custom virtual tbody without replacing rows', async () => {
  const createApp = () => createSSRApp({
    render: () => h(Table, props, { tbody: () => h('tbody', { 'data-custom-body': 'yes' }) }),
  })
  const html = await renderToString(createApp())
  const container = document.createElement('div')
  container.innerHTML = html
  document.body.append(container)
  const body = container.querySelector('tbody[data-custom-body]')
  expect(body).not.toBeNull()
  const row = body!.querySelector('tr')
  const warnings: string[] = []
  const app = createApp()
  app.config.warnHandler = message => warnings.push(message)
  try {
    app.mount(container)
    await nextTick()
    expect(container.querySelector('tbody[data-custom-body]')).toBe(body)
    expect(body!.querySelector('tr')).toBe(row)
    expect(warnings).toEqual([])
  } finally { app.unmount(); container.remove() }
})

it('does not invoke tbody when an explicit virtual list component overrides it', async () => {
  const tbody = vi.fn(() => h('tbody', { 'data-custom-body': '' }))
  const wrapper = mount(Table, {
    props: { ...props, virtualListProps: { ...props.virtualListProps, component: { list: 'table', content: 'tbody' } } },
    slots: { tbody },
  })
  try {
    await flushPromises()
    expect(wrapper.find('.c-table-body tbody').exists()).toBe(true)
    expect(wrapper.find('[data-custom-body]').exists()).toBe(false)
    expect(tbody).not.toHaveBeenCalled()
  } finally { wrapper.unmount() }
})

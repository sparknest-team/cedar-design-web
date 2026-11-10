import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Table from '../index'

describe('table extra column slots', () => {
  it.each([true, { dataIndex: 'actions' }])('renders custom header, cell and header actions with extraColumn=%s', (extraColumn) => {
    const wrapper = mount(Table, {
      props: { columns: [{ title: 'Name', dataIndex: 'name' }], data: [{ key: 'a', name: 'Ada' }], pagination: false, extraColumn },
      slots: {
        'extra-column-header': () => h('span', { 'data-extra-header': '' }, 'Settings'),
        'extra-column-cell': ({ record }: { record: { name: string } }) => h('span', { 'data-extra-cell': '' }, record.name),
        'header-cell-actions': ({ dataIndex }: { dataIndex: string }) => h('span', { 'data-action': '' }, dataIndex),
      },
    })
    try {
      expect(wrapper.get('[data-extra-header]').text()).toBe('Settings')
      expect(wrapper.get('[data-extra-cell]').text()).toBe('Ada')
      expect(wrapper.get('[data-action]').text()).toBe('name')
    } finally {
      wrapper.unmount()
    }
  })
  it('keeps the extra cell empty without a slot, even when the record has the reserved key', () => {
    const wrapper = mount(Table, {
      props: { columns: [{ title: 'Name', dataIndex: 'name' }], data: [{ key: 'a', name: 'Ada', __cedar_table_extra__: 'private' }], pagination: false, extraColumn: true },
    })
    try {
      expect(wrapper.get('td[data-column-key="__cedar_table_extra__"]').text()).toBe('')
    } finally {
      wrapper.unmount()
    }
  })

  it.each(['regular', 'extra-column-cell'])('keeps regular render precedence with a matching dataIndex and slot %s', (slotName) => {
    const wrapper = mount(Table, {
      props: { columns: [{ title: 'Action', dataIndex: 'actions', slotName, render: () => 'Rendered' }], data: [{ key: 'a', actions: 'value' }], pagination: false, extraColumn: { dataIndex: 'actions' } },
      slots: { regular: () => h('span', { 'data-regular-slot': '' }, 'Slot'), 'extra-column-cell': () => h('span', { 'data-extra-cell': '' }, 'Extra'), 'extra-column-header': () => h('span', { 'data-extra-header': '' }, 'Settings'), 'header-cell-actions': () => h('span', { 'data-action': '' }, 'Action menu') },
    })
    try {
      expect(wrapper.text()).toContain('Rendered')
      expect(wrapper.findAll('[data-extra-header]')).toHaveLength(1)
      expect(wrapper.findAll('[data-action]')).toHaveLength(1)
      expect(wrapper.find('[data-regular-slot]').exists()).toBe(false)
      expect(wrapper.get('[data-extra-cell]').text()).toBe('Extra')
    } finally {
      wrapper.unmount()
    }
  })

  it('updates the extra column and slot when its configuration changes', async () => {
    const wrapper = mount(Table, {
      props: { columns: [{ title: 'Name', dataIndex: 'name' }], data: [{ key: 'a', name: 'Ada' }], pagination: false, extraColumn: false },
      slots: { 'extra-column-cell': ({ record }: { record: { name: string } }) => h('span', { 'data-extra-cell': '' }, record.name) },
    })
    try {
      expect(wrapper.find('[data-extra-cell]').exists()).toBe(false)
      await wrapper.setProps({ extraColumn: true })
      expect(wrapper.get('td[data-column-key="__cedar_table_extra__"] [data-extra-cell]').text()).toBe('Ada')
      await wrapper.setProps({ extraColumn: { dataIndex: 'actions' } })
      expect(wrapper.get('td[data-column-key="actions"] [data-extra-cell]').text()).toBe('Ada')
      expect(wrapper.find('td[data-column-key="__cedar_table_extra__"]').exists()).toBe(false)
      await wrapper.setProps({ extraColumn: false })
      expect(wrapper.find('[data-extra-cell]').exists()).toBe(false)
    } finally {
      wrapper.unmount()
    }
  })

  it('uses the business column sorter when the extra column has the same dataIndex', () => {
    const rows = [{ key: 'a', score: 1 }, { key: 'b', score: 3 }, { key: 'c', score: 2 }]
    const wrapper = mount(Table, { props: { data: rows, pagination: false, extraColumn: { dataIndex: 'score' }, columns: [
      { title: 'Score', dataIndex: 'score', sortable: { defaultSortOrder: 'ascend', sorter: (a: { score: number }, b: { score: number }) => b.score - a.score } },
    ] } })
    try {
      expect(wrapper.findAll('tbody tr').map(row => row.findAll('td')[0].text())).toEqual(['3', '2', '1'])
    } finally { wrapper.unmount() }
  })
  it('uses the business column filter when the extra column has the same dataIndex', () => {
    const rows = [{ key: 'a', kind: 'x' }, { key: 'b', kind: 'y' }]
    const wrapper = mount(Table, { props: { data: rows, pagination: false, extraColumn: { dataIndex: 'kind' }, columns: [
      { title: 'Kind', dataIndex: 'kind', filterable: { defaultFilteredValue: ['x'], filter: (values: string[], row: { kind: string }) => values.includes(row.kind) } },
    ] } })
    try {
      expect(wrapper.findAll('tbody tr').map(row => row.findAll('td')[0].text())).toEqual(['x'])
    } finally { wrapper.unmount() }
  })

  it('associates the business and extra cells with their respective headers when keys match', () => {
    const wrapper = mount(Table, {
      props: { columns: [{ title: 'Score', dataIndex: 'score' }], data: [{ key: 'a', score: 2 }], pagination: false, height: 200, extraColumn: { dataIndex: 'score' } },
      slots: { 'extra-column-header': () => h('span', 'Settings'), 'extra-column-cell': () => h('span', 'Extra') },
    })
    try {
      const cells = wrapper.findAll('tbody td').map(cell => cell.element as HTMLTableCellElement)
      expect(cells).toHaveLength(2)
      const names = cells.map(cell => {
        const header = cell.closest('table')!.querySelector(`#${cell.headers}`)!
        const reference = header.getAttribute('aria-labelledby')!
        return wrapper.element.querySelector(`[id="${reference}"]`)?.textContent
      })
      expect(names).toEqual(['Score', 'Settings'])
    } finally { wrapper.unmount() }
  })

  it('preserves remote sorting and data order with a colliding extra column', () => {
    const rows = [{ key: 'a', score: 2 }, { key: 'b', score: 1 }]
    const wrapper = mount(Table, { props: { data: rows, pagination: false, extraColumn: { dataIndex: 'score' }, columns: [
      { title: 'Score', dataIndex: 'score', sortable: { defaultSortOrder: 'ascend', sorter: true } },
    ] } })
    try {
      expect(wrapper.findAll('tbody tr').map(row => row.findAll('td')[0].text())).toEqual(['2', '1'])
    } finally { wrapper.unmount() }
  })

  it('keeps the extra column width and sort semantics independent of a same-key business column', () => {
    const wrapper = mount(Table, { props: { data: [{ key: 'a', score: 1 }], pagination: false, extraColumn: { dataIndex: 'score' }, columns: [
      { title: 'Score', dataIndex: 'score', sortable: { defaultSortOrder: 'ascend', sortDirections: ['ascend'] } },
    ] } })
    try {
      expect(wrapper.findAll('col').map(col => col.attributes('width'))).toEqual(['80', '28'])
      expect(wrapper.findAll('thead th').map(th => th.attributes('aria-sort'))).toEqual(['ascending', undefined])
    } finally { wrapper.unmount() }
  })

  it('measures virtual-list columns separately when their data keys match', async () => {
    const original = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth')
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      get(this: HTMLElement) { return this.hasAttribute('data-column-layout-key') ? 37 : 101 },
    })
    const wrapper = mount(Table, { props: {
      columns: [{ title: 'Name', dataIndex: 'name' }], data: [{ key: 'a', name: 'Ada' }], pagination: false,
      height: 200, virtualListProps: { height: 200, estimatedSize: 40 }, extraColumn: { dataIndex: 'name' },
    } })
    try {
      await wrapper.vm.$nextTick()
      const cells = wrapper.findAll('tbody td')
      expect(cells).toHaveLength(2)
      expect(cells[0].attributes('style')).toContain('width: 101px')
      expect(cells[1].attributes('style')).toContain('width: 37px')
    } finally {
      wrapper.unmount()
      if (original) Object.defineProperty(HTMLElement.prototype, 'offsetWidth', original)
      else Reflect.deleteProperty(HTMLElement.prototype, 'offsetWidth')
    }
  })

})

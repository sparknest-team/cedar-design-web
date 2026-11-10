import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { expect, test } from 'vitest'
import Table from '../table'
import TableColumn from '../table-column'

const base = { dataIndex: 'name', title: 'title value', titleSlotName: 'heading', slotName: 'namedCell' }
const mountColumn = (column: Record<string, unknown>, slots = {}) => mount(Table, {
  props: { pagination: false, data: [{ key: '1', name: 'data value' }], columns: [column] }, slots,
})

test('named title slot precedes column title slot and title value', () => {
  const wrapper = mountColumn({ ...base, slots: { title: () => 'column title' } }, { heading: () => 'named title' })
  try { expect(wrapper.find('th').text()).toContain('named title') } finally { wrapper.unmount() }
})

test('column cell slot precedes render and named cell, then falls back to data', () => {
  const slots = { namedCell: () => 'named cell' }
  const column = { ...base, render: () => h('span', 'render cell'), slots: { cell: () => 'column cell' } }
  const wrapper = mountColumn(column, slots)
  try { expect(wrapper.find('tbody td').text()).toBe('column cell') } finally { wrapper.unmount() }
  const render = mountColumn({ ...base, render: column.render }, slots)
  try { expect(render.find('tbody td').text()).toBe('render cell') } finally { render.unmount() }
  const named = mountColumn(base, slots)
  try { expect(named.find('tbody td').text()).toBe('named cell') } finally { named.unmount() }
  const fallback = mountColumn(base)
  try { expect(fallback.find('tbody td').text()).toBe('data value') } finally { fallback.unmount() }
})

test('registered column components replace columns prop and their slots render', async () => {
  const wrapper = mount(Table, {
    props: { pagination: false, data: [{ key: '1', name: 'data value' }], columns: [{ title: 'prop title', dataIndex: 'name' }] },
    slots: { columns: () => h(TableColumn, { dataIndex: 'name', title: 'component title' }, {
      title: () => 'component title slot', cell: () => 'component cell slot',
    }) },
  })
  try {
    await wrapper.vm.$nextTick()
    expect(wrapper.find('th').text()).toContain('component title slot')
    expect(wrapper.find('tbody td').text()).toBe('component cell slot')
  } finally { wrapper.unmount() }
})

test('data-defined column slots accept single values', async () => {
  const wrapper = mount(Table, {
    attachTo: document.body,
    props: { pagination: false, data: [{ key: '1', name: 'Ada' }], columns: [{
      dataIndex: 'name', title: 'Fallback', filterable: { filter: () => true },
      slots: {
        title: () => 'Raw title',
        cell: () => h('strong', 'Raw cell'),
        'filter-icon': () => 'Raw icon',
        'filter-content': () => 'Raw filter',
      },
    }] },
  })
  try {
    expect(wrapper.get('th').text()).toContain('Raw title')
    expect(wrapper.get('td').text()).toContain('Raw cell')
    expect(wrapper.get('.c-table-filters').text()).toContain('Raw icon')
    await wrapper.get('.c-table-filters').trigger('click')
    expect(document.body.textContent).toContain('Raw filter')
  } finally { wrapper.unmount() }
})

test('an empty data-defined filter icon slot falls back to the configured icon', () => {
  const wrapper = mount(Table, { props: {
    pagination: false, data: [{ key: '1', name: 'Ada' }], columns: [{
      dataIndex: 'name', title: 'Name', filterable: { filter: () => true, icon: () => h('b', { class: 'fallback-icon' }, 'Fallback') },
      slots: { 'filter-icon': () => undefined },
    }],
  } })
  try { expect(wrapper.find('.fallback-icon').exists()).toBe(true) } finally { wrapper.unmount() }
})

test('empty data-defined title and cell slots render without error', () => {
  const wrapper = mount(Table, { props: {
    pagination: false, data: [{ key: '1', name: 'Ada' }], columns: [{
      dataIndex: 'name', title: 'Name', slots: { title: () => null, cell: () => undefined },
    }],
  } })
  try {
    expect(wrapper.get('th').text()).toBe('')
    expect(wrapper.get('td').text()).toBe('')
  } finally { wrapper.unmount() }
})

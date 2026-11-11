import { flushPromises, mount } from '@vue/test-utils'
import { h } from 'vue'
import { expect, test } from 'vitest'
import Table from '../table'

test.each([
  ['missing named slot falls back to renderContent', {}, 'fallback'],
  ['available named slot takes precedence', { custom: () => 'named' }, 'named'],
] as const)('%s', async (_label, slots, expected) => {
  const wrapper = mount(Table, {
    attachTo: document.body,
    props: { pagination: false, data: [{ key: 'a', name: 'Ada' }], columns: [{
      title: 'Name', dataIndex: 'name', filterable: {
        slotName: 'custom', renderContent: () => h('div', 'fallback'), filter: () => true,
      },
    }] }, slots,
  })
  try {
    await wrapper.get('.c-table-filters').trigger('click')
    await flushPromises()
    expect(document.body.textContent).toContain(expected)
  } finally { wrapper.unmount() }
})

test('missing named slot without a renderer falls back to built-in options', async () => {
  const wrapper = mount(Table, { attachTo: document.body, props: {
    pagination: false, data: [{ key: 'a', name: 'Ada' }], columns: [{
      title: 'Name', dataIndex: 'name', filterable: {
        slotName: 'missing', filters: [{ text: 'Ada option', value: 'Ada' }], filter: () => true,
      },
    }],
  } })
  try {
    await wrapper.get('.c-table-filters').trigger('click')
    await flushPromises()
    expect(document.querySelector('.c-table-filters-content')?.textContent).toContain('Ada option')
  } finally { wrapper.unmount() }
})

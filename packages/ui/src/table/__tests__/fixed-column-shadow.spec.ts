import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '../table'

test('an automatically frozen selection column owns the left shadow', async () => {
  const wrapper = mount(Table, {
    props: {
      columns: [
        { dataIndex: 'name', title: 'Name' },
        { dataIndex: 'action', title: 'Action', fixed: 'right' },
      ],
      data: [{ key: '1', name: 'A' }],
      pagination: false,
      rowSelection: { type: 'checkbox' },
    },
  })
  try {
    const container = wrapper.get('.c-table-container')
    expect(container.classes()).toContain('c-table-has-fixed-col-left')
    expect(container.classes()).toContain('c-table-has-fixed-col-right')
    expect(wrapper.get('tbody td').classes()).toContain('c-table-col-fixed-left-last')

    await wrapper.setProps({ rowSelection: undefined })
    expect(container.classes()).not.toContain('c-table-has-fixed-col-left')
    expect(container.classes()).toContain('c-table-has-fixed-col-right')
  } finally {
    wrapper.unmount()
  }
})

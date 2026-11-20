import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Table from '../table'
import Pagination from '../../pagination'

describe('Table optional total compatibility', () => {
  test.each([undefined, 1000])('derives local total or respects explicit remote total: %s', async (total) => {
    const wrapper = mount(Table, { props: {
      data: Array.from({ length: 30 }, (_, key) => ({ key })),
      columns: [{ dataIndex: 'key', title: 'Key' }],
      pagination: { pageSize: 10, responsive: false, ...(total === undefined ? {} : { total }) },
    } })
    try {
      await flushPromises()
      expect(wrapper.findComponent(Pagination).props('total')).toBe(total ?? 30)
      expect(wrapper.findAll('tbody tr')).toHaveLength(10)
    } finally {
      wrapper.unmount()
    }
  })
})

test.each(['ltr', 'rtl'])('aligns the pagination bar in the table direction (%s)', async (dir) => {
  const wrapper = mount(Table, { attrs: { dir }, props: { data: [{ key: 1 }], pagination: {} } })
  try {
    await flushPromises()
    const bar = () => wrapper.get('.c-table-pagination')
    expect(bar().attributes('dir')).toBe(dir)
    expect(bar().classes()).toContain('c-table-pagination-right')
    await wrapper.setProps({ pagination: { align: 'start' } })
    expect(bar().classes()).toContain('c-table-pagination-left')
    expect(wrapper.get('table').element.compareDocumentPosition(bar().element) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(wrapper.getComponent(Pagination).attributes('align')).toBeUndefined()
    await wrapper.setProps({ pagination: { align: 'end' } })
    expect(bar().classes()).toContain('c-table-pagination-right')
    await wrapper.setProps({ pagination: true })
    expect(bar().classes()).toContain('c-table-pagination-right')
  } finally {
    wrapper.unmount()
  }
})

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

import { h } from 'vue'
import { mount, flushPromises } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '..'
import Pagination from '../../pagination'
import Scrollbar from '../../scrollbar'
import type { TablePaginationScope } from '../types'
test('custom pagination replaces the widget while keeping the managed footer and pagination events', async () => {
  const owner = mount(Table, {
    props: { columns: [{ title: 'Name', dataIndex: 'name' }], data: Array.from({ length: 30 }, (_, key) => ({ key, name: `User ${key}` })), pagination: { pageSize: 10 }, stickyPagination: 0 },
    slots: { pagination: (pager: TablePaginationScope) => h('button', { 'data-next': true, onClick: () => pager.onChange(pager.page + 1) }, `${pager.page}/${pager.total}`) },
  })
  try {
    await flushPromises()
    expect(owner.findComponent(Pagination).exists()).toBe(false)
    expect(owner.find('.c-table-footer-sticky').exists()).toBe(true)
    const bodyScrollbar = owner.findAllComponents(Scrollbar).find(item => item.find('.c-table-body, .c-table-content').exists())
    expect(bodyScrollbar?.props('disableHorizontal')).toBe(true)
    expect(owner.props('height')).toBeUndefined()
    expect(owner.get('.c-table-body, .c-table-content').attributes('style') ?? '').not.toContain('max-height')
    expect(owner.get('[data-next]').text()).toBe('1/30')
    await owner.get('[data-next]').trigger('click')
    expect(owner.emitted('page-change')?.[0]).toEqual([2])
    expect(owner.get('[data-next]').text()).toBe('2/30')
    await owner.setProps({ pagination: false })
    expect(owner.find('[data-next]').exists()).toBe(false)
  } finally { owner.unmount() }
})

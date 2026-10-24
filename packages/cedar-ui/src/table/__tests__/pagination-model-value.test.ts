import { mount, flushPromises } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '../table'

test('Table forwards the unified Pagination model and default value', async () => {
  const wrapper = mount(Table, {
    props: {
      data: Array.from({ length: 30 }, (_, i) => ({ key: i, name: `Row ${i + 1}` })),
      columns: [{ dataIndex: 'name', title: 'Name' }],
      pagination: { defaultValue: 2, pageSize: 10, responsive: false },
    },
  })
  await flushPromises()
  expect(wrapper.find('tbody').text()).toContain('Row 11')
  expect(wrapper.find('[aria-current="page"]').text()).toBe('2')
  await wrapper.setProps({ pagination: { modelValue: 3, defaultValue: 1, pageSize: 10, responsive: false } })
  await flushPromises()
  expect(wrapper.find('tbody').text()).toContain('Row 21')
  expect(wrapper.find('[aria-current="page"]').text()).toBe('3')
  wrapper.unmount()
})

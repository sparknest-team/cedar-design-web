import { h, nextTick, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '..'

test('pagination can target a container rendered later in the same batch and then update', async () => {
  const current = ref(1)
  const data = Array.from({ length: 5 }, (_, key) => ({ key, name: `User ${key}` }))
  const owner = mount({
    render: () => h('div', [
      h(Table, { columns: [{ title: 'Name', dataIndex: 'name' }], data, pagination: { container: '#late-pagination-target', pageSize: 2, modelValue: current.value } }),
      h('div', { id: 'late-pagination-target' }),
    ]),
  }, { attachTo: document.body })
  try {
    await flushPromises()
    const pager = owner.element.querySelector('#late-pagination-target .c-pagination')
    expect(pager).toBeTruthy()
    expect(owner.text()).toContain('User 0')
    current.value = 2; await nextTick(); await flushPromises()
    expect(owner.element.querySelector('#late-pagination-target .c-pagination')).toBe(pager)
    expect(owner.text()).toContain('User 2')
  } finally { owner.unmount() }
})

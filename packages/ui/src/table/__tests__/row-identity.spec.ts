import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Table from '../index'

describe('table row identity', () => {
  it('preserves cell state when keyed records are reordered', async () => {
    const rows = [{ key: 'a', name: 'Ada' }, { key: 'b', name: 'Bob' }]
    const wrapper = mount(Table, {
      props: { columns: [{ title: 'Name', dataIndex: 'name', slotName: 'probe' }], data: rows, pagination: false },
      slots: { probe: ({ record }: { record: { key: string } }) => h('input', { 'data-key': record.key }) },
    })
    try {
      const input = wrapper.get('input[data-key="a"]').element as HTMLInputElement
      input.value = 'draft'
      await wrapper.setProps({ data: [rows[1], rows[0]] })
      const after = wrapper.get('input[data-key="a"]').element as HTMLInputElement
      expect(after).toBe(input)
      expect(after.value).toBe('draft')
    } finally {
      wrapper.unmount()
    }
  })
  it('keeps the expanded content with its row when records are reordered', async () => {
    const rows = [{ key: 'a', name: 'Ada' }, { key: 'b', name: 'Bob' }]
    const wrapper = mount(Table, {
      props: { columns: [{ title: 'Name', dataIndex: 'name' }], data: rows, pagination: false, expandedKeys: ['a'] },
      slots: { 'expand-row': ({ record }: { record: { key: string } }) => h('input', { 'data-expanded': record.key }) },
    })
    try {
      const input = wrapper.get('input[data-expanded="a"]').element as HTMLInputElement
      input.value = 'expanded draft'
      await wrapper.setProps({ data: [rows[1], rows[0]] })
      const after = wrapper.get('input[data-expanded="a"]').element as HTMLInputElement
      expect(after).toBe(input)
      expect(after.value).toBe('expanded draft')
    } finally {
      wrapper.unmount()
    }
  })
})

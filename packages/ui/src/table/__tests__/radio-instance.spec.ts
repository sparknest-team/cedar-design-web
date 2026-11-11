import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '../table'

const data = [{ key: 'a', name: 'A' }, { key: 'b', name: 'B' }]
const columns = [{ title: 'Name', dataIndex: 'name' }]

test('radio instance methods select one key and remove only the requested key', () => {
  const wrapper = mount(Table, { props: { data, columns, pagination: false, rowSelection: { type: 'radio' } } })
  try {
    wrapper.vm.select(['a', 'b'])
    expect(wrapper.emitted('update:selectedKeys')?.at(-1)).toEqual([['a']])
    wrapper.vm.select('b', false)
    expect(wrapper.emitted('update:selectedKeys')?.at(-1)).toEqual([['a']])
    wrapper.vm.select('a', false)
    expect(wrapper.emitted('update:selectedKeys')?.at(-1)).toEqual([[]])
    const count = wrapper.emitted('update:selectedKeys')?.length
    wrapper.vm.selectAll()
    wrapper.vm.select([])
    expect(wrapper.emitted('update:selectedKeys')?.length).toBe(count)
    expect(wrapper.emitted('update:selectedKeys')?.at(-1)).toEqual([[]])
  } finally { wrapper.unmount() }
})

test('selectAll(false) clears enabled current rows and preserves other pages', () => {
  const wrapper = mount(Table, { props: {
    data: [...data, { key: 'c', name: 'C' }], columns,
    pagination: { pageSize: 2 }, rowSelection: { type: 'radio' }, defaultSelectedKeys: ['c'],
  } })
  try {
    wrapper.vm.selectAll(false)
    expect(wrapper.emitted('update:selectedKeys')?.at(-1)).toEqual([['c']])
    wrapper.vm.select('a')
    wrapper.vm.selectAll(false)
    expect(wrapper.emitted('update:selectedKeys')?.at(-1)).toEqual([[]])
  } finally { wrapper.unmount() }
})

test('checkbox instance methods still support multiple selections', () => {
  const wrapper = mount(Table, { props: { data, columns, pagination: false, rowSelection: { type: 'checkbox' } } })
  try {
    wrapper.vm.select(['a', 'b'])
    expect(wrapper.emitted('update:selectedKeys')?.at(-1)).toEqual([['a', 'b']])
    wrapper.vm.select('a', false)
    expect(wrapper.emitted('update:selectedKeys')?.at(-1)).toEqual([['b']])
    wrapper.vm.selectAll()
    expect(wrapper.emitted('update:selectedKeys')?.at(-1)?.[0]).toEqual(expect.arrayContaining(['a', 'b']))
  } finally { wrapper.unmount() }
})

test('radio instance proposes selection without overriding controlled keys', async () => {
  const wrapper = mount(Table, { props: { data, columns, pagination: false, rowSelection: { type: 'radio' }, selectedKeys: ['b'] } })
  try {
    wrapper.vm.select(['a', 'b'])
    expect(wrapper.emitted('update:selectedKeys')?.at(-1)).toEqual([['a']])
    expect(wrapper.findAll('input[type=radio]').map(input => (input.element as HTMLInputElement).checked)).toEqual([false, true])
    await wrapper.setProps({ selectedKeys: ['a'] })
    expect(wrapper.findAll('input[type=radio]').map(input => (input.element as HTMLInputElement).checked)).toEqual([true, false])
  } finally { wrapper.unmount() }
})

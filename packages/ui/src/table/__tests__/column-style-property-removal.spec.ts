import { h, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '../table'
import TableColumn from '../table-column'

test('column style removes old properties when its object is replaced', async () => {
  const style = ref<Record<string, string>>({ color: 'red', backgroundColor: 'blue' })
  const wrapper = mount(Table, {
    props: { data: [{ key: 'a', name: 'Ada' }], pagination: false },
    slots: { columns: () => h(TableColumn, { dataIndex: 'name', title: 'Name', bodyCellStyle: style.value }) },
  })
  try {
    await flushPromises()
    const cell = wrapper.get('tbody td').element as HTMLElement
    expect(cell.style.backgroundColor).toBe('blue')
    style.value = { color: 'red' }
    await flushPromises()
    expect(cell.style.color).toBe('red')
    expect(cell.style.backgroundColor).toBe('')
  } finally {
    wrapper.unmount()
  }
})


test('column style callback reacts to a replacement closure', async () => {
  const create = (color: string) => () => ({ color })
  const style = ref(create('red'))
  const wrapper = mount(Table, {
    props: { data: [{ key: 'a', name: 'Ada' }], pagination: false },
    slots: { columns: () => h(TableColumn, { dataIndex: 'name', title: 'Name', bodyCellStyle: style.value }) },
  })
  try {
    await flushPromises()
    const cell = wrapper.get('tbody td').element as HTMLElement
    expect(cell.style.color).toBe('red')
    style.value = create('blue')
    await flushPromises()
    expect(cell.style.color).toBe('blue')
  } finally {
    wrapper.unmount()
  }
})

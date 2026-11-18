import { mount } from '@vue/test-utils'
import { h, nextTick, ref } from 'vue'
import { expect, test, vi } from 'vitest'
import Table from '..'

const columns = [{ title: 'Name', dataIndex: 'name' }]
const data = [{ key: 1, name: 'Alpha' }, { key: 2, name: 'Beta' }]
const settle = async () => { await nextTick(); await nextTick(); await nextTick() }

test('renders pagination when its selector is created later in the same mount', async () => {
  const wrapper = mount({
    render: () => h('main', [
      h(Table, { columns, data, pagination: { pageSize: 1, container: '#timing-late' } }, {
        'pagination-left': () => h('input', { 'data-draft': '' }),
      }),
      h('div', { id: 'timing-late' }),
    ]),
  }, { attachTo: document.body })
  try {
    await settle()
    expect(document.querySelector('#timing-late [data-draft]')).toBeTruthy()
    expect(document.querySelector('#timing-late .c-pagination')).toBeTruthy()
  } finally { wrapper.unmount() }
})

test('keeps the old pagination while a missing target is resolved and cancels stale requests', async () => {
  const initial = document.createElement('div')
  initial.id = 'timing-initial'
  document.body.append(initial)
  const target = ref('#timing-initial')
  const hasNew = ref(false)
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const wrapper = mount({
    render: () => h('main', [
      h(Table, { columns, data, pagination: { pageSize: 1, container: target.value } }, {
        'pagination-left': () => h('input', { 'data-draft': '' }),
      }),
      hasNew.value ? h('div', { id: 'timing-new' }) : null,
    ]),
  }, { attachTo: document.body })
  try {
    await settle()
    const input = initial.querySelector<HTMLInputElement>('[data-draft]')!
    expect(input).toBeTruthy()
    input.value = 'unsaved'
    hasNew.value = true
    target.value = '#timing-new'
    await settle()
    expect(document.querySelector('#timing-new [data-draft]')).toBe(input)
    expect(input.value).toBe('unsaved')
    target.value = '#timing-missing'
    await settle()
    expect(document.querySelector('#timing-new [data-draft]')).toBe(input)
    expect(warn).toHaveBeenCalledWith('[Table] Pagination target not found: #timing-missing')
    target.value = '#timing-other-missing'
    target.value = '#timing-initial'
    await settle()
    expect(initial.querySelector('[data-draft]')).toBe(input)
    expect(input.value).toBe('unsaved')
    expect(warn).not.toHaveBeenCalledWith('[Table] Pagination target not found: #timing-other-missing')
  } finally { wrapper.unmount(); initial.remove(); warn.mockRestore() }
})

test('cancels a pending target lookup when the table unmounts', async () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const wrapper = mount(Table, { props: { columns, data, pagination: { pageSize: 1, container: '#timing-unmounted' } }, attachTo: document.body })
  try {
    wrapper.unmount()
    await settle()
    expect(warn).not.toHaveBeenCalledWith('[Table] Pagination target not found: #timing-unmounted')
  } finally { wrapper.unmount(); warn.mockRestore() }
})

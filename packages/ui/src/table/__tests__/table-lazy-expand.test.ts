import { describe, expect, it, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import Table from '../table'

describe('Table lazy tree expand control', () => {
  it('has one native expand button and loads once while pending', async () => {
    let finish: (children: any[]) => void = () => {}
    const loadMore = vi.fn((_record, done) => { finish = done })
    const wrapper = mount(Table, {
      props: {
        columns: [{ title: 'Name', dataIndex: 'name' }],
        data: [{ key: '0', name: 'Parent' }],
        pagination: false,
        loadMore,
      },
    })
    await flushPromises()
    const button = wrapper.get('button[aria-expanded]')
    expect(button.attributes('aria-expanded')).toBe('false')
    expect(button.element.parentElement?.hasAttribute('role')).toBe(false)
    await button.trigger('click')
    expect(loadMore).toHaveBeenCalledTimes(1)
    expect(wrapper.emitted('expanded-change')).toEqual([[['0']]])
    await wrapper.get('.c-table-cell-inline-icon').trigger('click')
    expect(loadMore).toHaveBeenCalledTimes(1)
    finish([{ key: 'child', name: 'Loaded child', isLeaf: true }])
    await flushPromises()
    expect(wrapper.find('tbody').text()).toContain('Loaded child')
    const loaded = wrapper.get('button[aria-expanded]')
    expect(loaded.attributes('aria-expanded')).toBe('true')
    await loaded.trigger('click')
    await flushPromises()
    expect(wrapper.find('tbody').text()).not.toContain('Loaded child')
    expect(loadMore).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })
})

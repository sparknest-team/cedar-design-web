import { mount, flushPromises } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '..'
import Pagination from '../../pagination'
import StickyScrollbar from '../StickyScrollbar.vue'
test('internal and external pagination share state, events, row slicing and sticky footer', async () => {
 const target = document.createElement('div'); target.id = 'external-pager'; document.body.append(target)
 const owner = mount(Table, { props: { columns: [{ title: 'Name', dataIndex: 'name' }], data: Array.from({ length: 30 }, (_, key) => ({ key, name: `User ${key}` })), pagination: { pageSize: 10 }, stickyPagination: 0 }, attachTo: document.body })
 try {
  await flushPromises(); expect(owner.text()).toContain('User 0')
  owner.getComponent(Pagination).vm.$emit('change', 2); await flushPromises()
  expect(owner.emitted('page-change')).toEqual([[2]])
  expect(owner.text()).toContain('User 10'); expect(owner.text()).not.toContain('User 0')
  await owner.setProps({ pagination: { pageSize: 10, container: target } }); await flushPromises()
  expect(target.querySelector('.c-table-footer-sticky')).toBeTruthy()
  expect(target.querySelector('.c-pagination')).toBeTruthy()
  // The footer can be teleported: its visibility must still follow its Table.
  const table = owner.get('.c-table')
  await table.trigger('mouseenter')
  expect(owner.getComponent(StickyScrollbar).props('active')).toBe(true)
  await table.trigger('mouseleave')
  expect(owner.getComponent(StickyScrollbar).props('active')).toBe(false)
  const field = document.createElement('input')
  table.element.append(field)
  await table.trigger('focusin')
  expect(owner.getComponent(StickyScrollbar).props('active')).toBe(true)
  await table.trigger('focusout', { relatedTarget: field })
  expect(owner.getComponent(StickyScrollbar).props('active')).toBe(true)
  await table.trigger('focusout', { relatedTarget: null })
  expect(owner.getComponent(StickyScrollbar).props('active')).toBe(false)
  field.remove()
  expect(owner.getComponent(Pagination).props('modelValue')).toBe(2)
  owner.getComponent(Pagination).vm.$emit('change', 3); await flushPromises()
  expect(owner.text()).toContain('User 20')
  await owner.setProps({ pagination: { pageSize: 10 } }); await flushPromises()
  expect(target.childElementCount).toBe(0)
  expect(owner.getComponent(Pagination).props('modelValue')).toBe(3)
 } finally { owner.unmount(); target.remove() }
})

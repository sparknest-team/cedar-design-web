import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { expect, test } from 'vitest'
import Table from '..'

const columns = [{ title: 'Name', dataIndex: 'name', width: 1800 }]

test('keeps the empty content outside the scrolling body, including without a sticky header', async () => {
  const wrapper = mount(Table, { props: { columns, data: [], pagination: false, stickyHeader: false } })
  try {
    const panel = wrapper.get('.c-table-empty-body')
    expect(panel.get('.c-table-body').find('.c-empty').exists()).toBe(false)
    expect(panel.get('.c-table-empty-overlay .c-empty').exists()).toBe(true)
    const image = panel.get('.c-empty__image').element as HTMLElement
    for (const property of ['width', 'height', 'font-size']) {
      expect(image.style.getPropertyValue(property)).toBe('var(--c-table-empty-image-size)')
    }
    await wrapper.setProps({ data: [{ key: 'a', name: 'Ada' }] })
    expect(wrapper.find('.c-table-empty-body').exists()).toBe(false)
    expect(wrapper.text()).toContain('Ada')
    await wrapper.setProps({ data: [] })
    expect(wrapper.findAll('.c-table-empty-overlay')).toHaveLength(1)
  } finally { wrapper.unmount() }
})

test('keeps custom empty actions interactive outside the body', async () => {
  let clicks = 0
  const wrapper = mount(Table, {
    props: { columns, data: [], pagination: false, maxHeight: 120 },
    slots: { empty: () => h('button', { onClick: () => clicks++ }, 'Add record') },
  })
  try {
    expect(wrapper.get('.c-table-empty-body').attributes('style')).toContain('max-height: 120px')
    expect(wrapper.get('.c-table-body').find('button').exists()).toBe(false)
    await wrapper.get('.c-table-empty-overlay button').trigger('click')
    expect(clicks).toBe(1)
  } finally { wrapper.unmount() }
})

test.each([{ pagination: false }, { pagination: { pageSize: 10 } }, { pagination: { pageSize: 10 }, stickyPagination: 0 }])('empty wide table scrolls its header from the body with %o', async (options) => {
  const wrapper = mount(Table, { props: { columns, data: [], ...options, height: 120 } })
  try {
    const body = wrapper.get('.c-table-body')
    const header = wrapper.get('.c-table-header')
    for (const element of [body.element, header.element]) {
      Object.defineProperties(element, { clientWidth: { configurable: true, value: 400 }, scrollWidth: { configurable: true, value: 1800 } })
    }
    ;(body.element as HTMLElement).scrollLeft = 240
    await body.trigger('scroll')
    expect((header.element as HTMLElement).scrollLeft).toBe(240)
    const scrollbar = wrapper.findAllComponents({ name: 'CScrollbar' }).find(item => item.element === header.element.parentElement)
    expect(scrollbar?.props('hide')).toBe(true)
    await wrapper.setProps({ data: [{ key: 'a', name: 'Ada' }] })
    await wrapper.setProps({ data: [] })
    expect(wrapper.find('.c-table-empty-overlay').exists()).toBe(true)
  } finally { wrapper.unmount() }
})


test.each([{ pagination: false }, { pagination: { pageSize: 10 }, stickyPagination: 0 }])('reconciles header when the scroll body is replaced with %o', async (options) => {
  const wrapper = mount(Table, { props: { columns, data: [{ key: 'a', name: 'Ada' }], ...options, height: 120 } })
  const size = (element: Element) => Object.defineProperties(element, { clientWidth: { configurable: true, value: 400 }, scrollWidth: { configurable: true, value: 1800 } })
  try {
    const header = wrapper.get('.c-table-header').element as HTMLElement
    size(header)
    let body = wrapper.get('.c-table-body')
    size(body.element)
    ;(body.element as HTMLElement).scrollLeft = 240
    await body.trigger('scroll')
    expect(header.scrollLeft).toBe(240)
    await wrapper.setProps({ data: [] })
    body = wrapper.get('.c-table-body')
    size(body.element)
    expect(header.scrollLeft).toBe((body.element as HTMLElement).scrollLeft)
    ;(body.element as HTMLElement).scrollLeft = 180
    await body.trigger('scroll')
    expect(header.scrollLeft).toBe(180)
    await wrapper.setProps({ data: [{ key: 'a', name: 'Ada' }] })
    body = wrapper.get('.c-table-body')
    expect(header.scrollLeft).toBe((body.element as HTMLElement).scrollLeft)
  } finally { wrapper.unmount() }
})

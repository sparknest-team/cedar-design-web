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

import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Select from '..'
import SelectMenu from '../SelectMenu'

test('SelectMenu renders flat heading/option siblings for the group-title spacing consumers', () => {
  const wrapper = mount(Select, {
    props: { defaultOpen: true, options: [
      { isGroup: true, label: 'First group', options: [{ value: 'a', label: 'A' }] },
      { isGroup: true, label: 'Second group', options: [{ value: 'b', label: 'B' }] },
    ] },
    slots: { prefix: () => h('span', 'prefix') },
  })
  try {
    const menu = wrapper.findComponent(SelectMenu)
    const headings = menu.findAll('.c-select-group-title')
    expect(headings.map(node => node.text())).toEqual(['First group', 'Second group'])
    expect(headings[0].element.matches(':first-child')).toBe(true)
    expect(headings[1].element.matches(':first-child')).toBe(false)
    expect(headings[0].element.parentElement).toBe(headings[1].element.parentElement)
    expect(headings[0].element.nextElementSibling?.getAttribute('role')).toBe('option')
    expect(menu.find('.c-select-group').exists()).toBe(false)
  } finally {
    wrapper.unmount()
  }
})

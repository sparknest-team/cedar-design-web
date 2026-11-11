import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Select from '..'
import SelectMenu from '../SelectMenu'

test('SelectMenu groups titles and options with independent accessible labels', () => {
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
    const groups=menu.findAll('[role="group"]')
    expect(groups).toHaveLength(2)
    expect(groups[0].attributes('aria-labelledby')).toBe(headings[0].attributes('id'))
    expect(groups[1].attributes('aria-labelledby')).toBe(headings[1].attributes('id'))
    expect(groups[0].element.matches(':first-child')).toBe(true)
    expect(groups[1].element.matches(':first-child')).toBe(false)
    expect(groups[0].findAll('[role="option"]')).toHaveLength(1)

  } finally {
    wrapper.unmount()
  }
})

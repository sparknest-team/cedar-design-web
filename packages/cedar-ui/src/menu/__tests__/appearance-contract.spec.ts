import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Menu from '../Menu.vue'

test('size and elevation are applied to option and panel, including dynamic changes', async () => {
  const wrapper = mount(Menu, { props: { open: true, popupContainer: false, size: 'xs', elevation: false, options: [{ label: 'Alpha', value: 'a' }] }, slots: { default: () => h('button', 'Menu') } })
  try {
    await nextTick()
    expect(wrapper.get('[role=menuitem]').classes()).toContain('c-menu-option-size-xs')
    expect(wrapper.get('.c-menu').classes()).toContain('c-menu-no-elevation')
    await wrapper.setProps({ size: 'xl', elevation: 5 })
    expect(wrapper.get('[role=menuitem]').classes()).toContain('c-menu-option-size-xl')
    expect(wrapper.get('.c-menu').classes()).toContain('c-elevation--5')
    await wrapper.setProps({ elevation: true })
    expect(wrapper.get('.c-menu').classes()).not.toContain('c-menu-no-elevation')
    expect(wrapper.get('.c-menu').classes()).not.toContain('c-menu-custom-elevation')
  } finally { wrapper.unmount() }
})

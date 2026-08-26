import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Drawer, drawerProps } from '../index'

describe('Drawer', () => {
  test('render', async () => {
    const wrapper = mount(Drawer, { props: { open: true, renderToBody: false, title: 'Settings' } })
    await nextTick()
    const dialog = wrapper.get('[role="dialog"]')
    expect(Drawer.name).toBe('CDrawer')
    expect(drawerProps.closeButtonAriaLabel.default).toBe('Close drawer')
    expect(drawerProps.beforeOk).toBeTruthy()
    expect(drawerProps.beforeCancel).toBeTruthy()
    expect((drawerProps as Record<string, unknown>).onBeforeOk).toBeUndefined()
    expect((drawerProps as Record<string, unknown>).onBeforeCancel).toBeUndefined()
    expect(dialog.attributes('aria-modal')).toBe('true')
    expect(dialog.attributes('aria-label')).toBe('Settings')
    expect(wrapper.get('button[aria-label="Close drawer"]')).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

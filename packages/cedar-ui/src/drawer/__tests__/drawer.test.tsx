import { afterEach as unmountAfterEach } from 'vitest'
const mountedWrappers: any[] = []
unmountAfterEach(() => { for (const wrapper of mountedWrappers.splice(0)) wrapper.unmount() })
const mount = (...args: any[]) => {
  const wrapper = mountComponent(args[0], args[1])
  mountedWrappers.push(wrapper)
  return wrapper
}
import { nextTick } from 'vue'
import { mount as mountComponent } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Drawer, drawerProps } from '../index'

describe('Drawer', () => {
  test('render', async () => {
    const wrapper = mount(Drawer, { props: { open: true, popupContainer: false, title: 'Settings' } })
    await nextTick()
    const dialog = wrapper.get('[role="dialog"]')
    expect(Drawer.name).toBe('CDrawer')
    expect(drawerProps.closeButtonAriaLabel.default).toBe('Close drawer')
    expect(drawerProps.beforeConfirm).toBeTruthy()
    expect(drawerProps.beforeCancel).toBeTruthy()
    expect(drawerProps.cancelButton.default).toBe(true)
    expect(drawerProps).toHaveProperty('overlay')
    expect(drawerProps).toHaveProperty('overlayClosable')
    expect(drawerProps).not.toHaveProperty('mask')
    expect(drawerProps).not.toHaveProperty('maskClosable')
    expect(dialog.attributes('aria-modal')).toBe('true')
    expect(dialog.attributes('aria-label')).toBe('Settings')
    expect(wrapper.get('button[aria-label="Close drawer"]')).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Dialog, dialogProps } from '../index'

describe('Dialog', () => {
  test('render', async () => {
    const wrapper = mount(Dialog, { props: { open: true, popupContainer: false, title: 'Confirm deletion' } })
    await nextTick()
    const dialog = wrapper.get('[role="dialog"]')
    expect(Dialog.name).toBe('CDialog')
    expect(dialogProps.closeButtonAriaLabel.default).toBe('Close dialog')
    expect(dialog.attributes('aria-modal')).toBe('true')
    expect(dialog.attributes('aria-label')).toBe('Confirm deletion')
    expect(wrapper.get('button[aria-label="Close dialog"]')).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { _NotificationComponent, notificationProps } from '../index'

describe('Notification', () => {
  test('provides an accessible close control', async () => {
    const wrapper = mount(_NotificationComponent, { props: { closable: true, duration: 0 } })
    const close = wrapper.get('button[aria-label="Close notification"]')
    await close.trigger('click')

    expect(_NotificationComponent.name).toBe('CNotification')
    expect(notificationProps.duration.validator(0)).toBe(true)
    expect(wrapper.emitted('close')).toHaveLength(1)
  })
})

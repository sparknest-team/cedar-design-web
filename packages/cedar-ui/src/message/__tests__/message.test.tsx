import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { _MessageComponent, messageProps } from '../index'

describe('Message', () => {
  test('provides an accessible close control', async () => {
    const wrapper = mount(_MessageComponent, { props: { closable: true, duration: 0 } })
    await wrapper.get('button[aria-label="Close message"]').trigger('click')
    expect(_MessageComponent.name).toBe('CMessage')
    expect(messageProps.duration.validator(0)).toBe(true)
    expect(wrapper.emitted('close')).toHaveLength(1)
  })
})

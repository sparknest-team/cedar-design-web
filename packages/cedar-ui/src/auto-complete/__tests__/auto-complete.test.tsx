import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { AutoComplete } from '../index'
import Trigger from '../../trigger'

describe('AutoComplete', () => {
  test('keeps opening policy separate from filtering', async () => {
    const wrapper = mount(AutoComplete, {
      props: {
        modelValue: 'ap',
        options: ['Apple', 'Banana'],
        shouldOpen: () => false,
        triggerProps: { open: true },
      },
    })
    const trigger = wrapper.findComponent(Trigger)
    trigger.vm.$emit('update:open', true)
    await nextTick()
    expect(trigger.props('open')).toBe(false)
    await wrapper.setProps({ shouldOpen: () => true })
    expect(trigger.props('open')).toBe(true)
    await wrapper.setProps({ filterOption: () => false })
    expect(trigger.props('open')).toBe(false)
    await wrapper.setProps({ filterOption: false })
    expect(trigger.props('open')).toBe(true)
    await wrapper.setProps({ disabled: true })
    expect(trigger.props('open')).toBe(false)
    wrapper.unmount()
  })
  test('render', async () => {
    const wrapper = mount(AutoComplete)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

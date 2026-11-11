import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Trigger from '../../trigger'
import Select from '../../select'
import ColorPicker from '../../color-picker'

describe('Trigger consumer request routing', () => {
  test('a controlled Select reports a rejected update only once', async () => {
    const wrapper = mount(Select, { props: { open: false, options: [{ label: 'One', value: 1 }], popupContainer: false } })
    try {
      const trigger = wrapper.findComponent(Trigger)
      trigger.vm.$emit('update:open', true)
      trigger.vm.$emit('open-change', true)
      await nextTick()
      expect(wrapper.emitted('update:open')).toEqual([[true]])
      expect(wrapper.emitted('open-change')).toEqual([[true]])
      expect(wrapper.findComponent(Trigger).props('open')).toBe(false)
    } finally { wrapper.unmount() }
  })
  test('ColorPicker emits one notification for one Trigger request', async () => {
    const wrapper = mount(ColorPicker, { props: { hideTrigger: false }, slots: { default: () => h('button', 'color') } })
    try {
      const trigger = wrapper.findComponent(Trigger)
      trigger.vm.$emit('update:open', true)
      trigger.vm.$emit('open-change', true)
      await nextTick()
      expect(wrapper.emitted('open-change')).toHaveLength(1)
      expect(wrapper.emitted('open-change')[0][0]).toBe(true)
    } finally { wrapper.unmount() }
  })
})

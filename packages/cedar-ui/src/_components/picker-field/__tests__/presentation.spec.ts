import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Trigger from '../../../trigger'
import TemporalTrigger from '../presentation/TemporalTrigger.vue'

describe('desktop temporal trigger presentation', () => {
  it('preserves positioning and forwards only open requests', async () => {
    const wrapper = shallowMount(TemporalTrigger, {
      attrs: { open: true, disabled: false, placement: 'top-start', popupContainer: 'body' },
    })
    const trigger = wrapper.findComponent(Trigger)
    expect(trigger.props('open')).toBe(true)
    expect(trigger.props('placement')).toBe('top-start')
    expect(trigger.props('popupContainer')).toBe('body')
    expect(trigger.props('trigger')).toBe('click')
    expect(trigger.props('closeOnClickReference')).toBe(false)
    expect(trigger.props('preventFocus')).toBe(true)
    trigger.vm.$emit('open-change', false)
    expect(wrapper.emitted('open-change')).toEqual([[false]])
    expect(trigger.props('open')).toBe(true)
    await wrapper.setProps({ open: false })
    expect(trigger.props('open')).toBe(false)
    wrapper.unmount()
  })
})


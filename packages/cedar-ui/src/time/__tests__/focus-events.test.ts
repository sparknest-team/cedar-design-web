import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Time from '../Time.vue'
import TimeRange from '../../time-range/TimeRange.vue'

describe('Cedar public time focus events', () => {
  it('forwards single field focus/blur once, including readonly focus', async () => {
    const wrapper = mount(Time, { props: { readonly: true } })
    const input = wrapper.get('input')
    await input.trigger('focus')
    await input.trigger('focus')
    await input.trigger('blur')
    expect(wrapper.emitted('focus')).toEqual([[]])
    expect(wrapper.emitted('blur')).toEqual([[]])
    wrapper.unmount()
  })
  it('treats the range as one focus boundary', async () => {
    const wrapper = mount(TimeRange)
    const [start, end] = wrapper.findAll('input')
    await start.trigger('focus')
    await start.trigger('blur', { relatedTarget: end.element })
    await end.trigger('focus', { relatedTarget: start.element })
    expect(wrapper.emitted('blur')).toBeUndefined()
    await end.trigger('blur')
    expect(wrapper.emitted('focus')).toEqual([[]])
    expect(wrapper.emitted('blur')).toEqual([[]])
    wrapper.unmount()
  })
})


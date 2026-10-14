import { mount } from '@vue/test-utils'
import { expect, it, vi } from 'vitest'
import Ripple from '../index'
const Wrapper = {
  directives: { Ripple },
  data: () => ({ disabled: false }),
  template: '<div v-ripple="{ disabled }" />',
}
it('cancels pending work and keyboard listeners on unmount', () => {
  vi.useFakeTimers()
  const wrapper = mount(Wrapper, { attachTo: document.body })
  const element = wrapper.element
  const baseline = vi.getTimerCount()
  const state = element._ripple
  try {
    element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    expect(vi.getTimerCount()).toBeGreaterThan(baseline)
    wrapper.unmount()
    expect(state.timers.size).toBe(0)
    expect(element._ripple).toBeUndefined()
    expect(vi.getTimerCount()).toBe(baseline)
    element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    vi.runAllTimers()
    expect(element.querySelector('.c-ripple')).toBeNull()
  } finally { vi.useRealTimers() }
})
it('disabling cancels a pending ripple', async () => {
  vi.useFakeTimers()
  const wrapper = mount(Wrapper, { attachTo: document.body })
  try {
    wrapper.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    await wrapper.setData({ disabled: true })
    vi.runAllTimers()
    expect(wrapper.find('.c-ripple').exists()).toBe(false)
  } finally { wrapper.unmount(); vi.useRealTimers() }
})
it('isolates keyboard state between instances', () => {
  vi.useFakeTimers()
  const first = mount(Wrapper, { attachTo: document.body })
  const second = mount(Wrapper, { attachTo: document.body })
  try {
    for (const wrapper of [first, second]) wrapper.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    vi.advanceTimersByTime(60)
    expect(first.find('.c-ripple').exists()).toBe(true)
    expect(second.find('.c-ripple').exists()).toBe(true)
  } finally { first.unmount(); second.unmount(); vi.useRealTimers() }
})

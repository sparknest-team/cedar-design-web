import { createApp, defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import Ripple from '../index'

const Wrapper = defineComponent({
  directives: { Ripple },
  props: { disabled: Boolean },
  template: '<button v-ripple="{ disabled }">Ripple</button>',
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

describe('Ripple', () => {
  test('installs as a general-purpose directive', () => {
    const app = createApp({})
    app.use(Ripple)
    expect(app.directive('ripple')).toBe(Ripple)
  })

  test('supports keyboard feedback and disabled state', async () => {
    vi.useFakeTimers()
    vi.spyOn(performance, 'now').mockImplementation(() => Date.now())
    const wrapper = mount(Wrapper, { attachTo: document.body })
    await wrapper.trigger('keydown', { key: 'Enter' })
    vi.advanceTimersByTime(60)
    await Promise.resolve()
    expect(wrapper.find('.c-ripple').exists()).toBe(true)
    await wrapper.trigger('keyup', { key: 'Enter' })
    vi.advanceTimersByTime(600)
    await Promise.resolve()
    expect(wrapper.find('.c-ripple').exists()).toBe(false)

    await wrapper.setProps({ disabled: true })
    await wrapper.trigger('keydown', { key: 'Enter' })
    vi.advanceTimersByTime(60)
    await Promise.resolve()
    expect(wrapper.find('.c-ripple').exists()).toBe(false)
    wrapper.unmount()
  })
})

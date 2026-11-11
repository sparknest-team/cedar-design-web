import { computed, h, provide, reactive } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Slider from '..'
import { formItemInjectionKey } from '../../form/context'

describe('Slider Form integration', () => {
  function create(props = {}) {
    const state = reactive({ disabled: false, readonly: false, error: false })
    const handlers = { onChange: vi.fn(), onFocus: vi.fn(), onBlur: vi.fn() }
    const context = reactive({
      get disabled() { return state.disabled }, get readonly() { return state.readonly }, get error() { return state.error },
      size: 'md', feedback: undefined, eventHandlers: computed(() => handlers), updateValidateState: vi.fn(),
    })
    const wrapper = mount({ setup() {
      provide(formItemInjectionKey, context)
      return () => h(Slider, { defaultValue: 20, ...props })
    } })
    return { wrapper, state, handlers }
  }
  test('inherits and reacts to readonly disabled and error', async () => {
    const { wrapper, state, handlers } = create()
    const thumb = wrapper.get('[role="slider"]')
    state.readonly = true
    await wrapper.vm.$nextTick()
    await thumb.trigger('keydown', { key: 'ArrowRight' })
    expect(handlers.onChange).not.toHaveBeenCalled()
    expect(thumb.attributes('aria-readonly')).toBe('true')
    state.readonly = false; state.disabled = true; state.error = true
    await wrapper.vm.$nextTick()
    expect(thumb.attributes('tabindex')).toBeUndefined()
    expect(thumb.attributes('aria-invalid')).toBe('true')
    state.disabled = false
    await wrapper.vm.$nextTick()
    await thumb.trigger('keydown', { key: 'ArrowRight' })
    expect(handlers.onChange).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })
  test('internal InputNumber validates and reports focus only once', async () => {
    const { wrapper, handlers, state } = create({ showInput: true, step: 5 })
    const input = wrapper.get('input')
    await input.trigger('focus')
    expect(handlers.onFocus).toHaveBeenCalledTimes(1)
    await input.setValue('42')
    await input.trigger('keydown', { key: 'Enter' })
    expect(handlers.onChange).toHaveBeenCalledTimes(1)
    expect(wrapper.get('[role="slider"]').attributes('aria-valuenow')).toBe('40')
    await input.trigger('blur')
    expect(handlers.onBlur).toHaveBeenCalledTimes(1)
    state.disabled = true
    state.error = true
    await wrapper.vm.$nextTick()
    expect(input.element.disabled).toBe(true)
    expect(input.attributes('aria-invalid')).toBe('true')
    wrapper.unmount()
  })
})

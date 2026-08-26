import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, test, expect, vi } from 'vitest'
import { DatePicker } from '../index'

describe('DatePicker', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  test('marks today deterministically and exposes keyboard-selectable cells', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2025, 0, 15, 12))
    const wrapper = mount(DatePicker)
    await nextTick()

    const today = wrapper.find('.c-picker-cell-today')
    expect(today.exists()).toBe(true)
    expect(today.text()).toBe('15')
    expect(today.attributes('role')).toBe('button')
    expect(today.attributes('tabindex')).toBe('0')
    expect(wrapper.findAll('[role="button"]').length).toBeGreaterThan(28)
  })
})

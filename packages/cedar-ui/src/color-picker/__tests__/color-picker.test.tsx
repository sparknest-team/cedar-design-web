import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { ColorPicker, colorPickerProps } from '../index'

describe('ColorPicker', () => {
  test('provides keyboard-operable color controls', async () => {
    const wrapper = mount(ColorPicker, { props: { defaultValue: '#ff0000', showPreset: true } })
    expect(ColorPicker.name).toBe('CColorPicker')
    expect(colorPickerProps.size.validator('md')).toBe(true)
    expect(wrapper.get('[role="application"]').attributes('tabindex')).toBe('0')
    expect(wrapper.findAll('[role="slider"]')).toHaveLength(2)
    expect(wrapper.find('button[aria-label^="Select color"]').exists()).toBe(true)
  })
})

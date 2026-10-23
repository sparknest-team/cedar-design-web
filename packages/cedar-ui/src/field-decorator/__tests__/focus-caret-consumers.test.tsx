import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Input from '../../input'
import Textarea from '../../textarea'
import InputNumber from '../../input-number'

describe('FieldDecorator focus/caret consumer DOM (not native painting)', () => {
  for (const [name, component, control] of [
    ['input', Input, 'input.c-input__inner'],
    ['textarea', Textarea, 'textarea.c-textarea__inner'],
    ['input-number', InputNumber, 'input.c-input-number__input'],
  ] as const) {
    test.each(['outline', 'filled', 'standard'] as const)(name + ' %s keeps real focus and state targets', async (variant) => {
      const wrapper = mount(component, { props: { variant, clearable: true, error: true } })
      try {
        const field = wrapper.get('.c-field-decorator')
        const native = wrapper.get(control)
        expect(field.classes()).toContain('c-field-decorator--variant-' + variant)
        expect(field.classes()).toContain('c-field-decorator--error')
        expect(field.get('.c-field-decorator__middle').element.contains(native.element)).toBe(true)
        expect(field.find('.c-field-decorator__border-state').exists()).toBe(true)
        await native.trigger('focus')
        expect(field.classes()).toContain('c-field-decorator--focus')
        await native.trigger('blur')
        expect(field.classes()).not.toContain('c-field-decorator--focus')
        await wrapper.setProps({ readonly: true })
        expect(native.attributes('readonly')).toBeDefined()
        expect(native.attributes('disabled')).toBeUndefined()
        await native.trigger('focus')
        expect(field.classes()).toContain('c-field-decorator--focus')
        await wrapper.setProps({ disabled: true })
        expect(native.attributes('disabled')).toBeDefined()
        expect(field.classes()).toContain('c-field-decorator--disabled')
        expect(field.find('.c-field-decorator__clear-btn').exists()).toBe(false)
      } finally {
        wrapper.unmount()
      }
    })
  }
})

import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { describe, expect, test, vi } from 'vitest'
import { Select } from '../index'
import { formItemInjectionKey } from '../../form/context'

const options = [{ value: 1, label: '设备' }, { value: 2, label: '设备' }]

describe('Select field integration', () => {
  test('removes only the requested same-label option', async () => {
    const wrapper = mount(Select, { props: { multiple: true, modelValue: [1, 2], options } })
    await wrapper.findAll('.c-tag__close-btn')[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toEqual([[ [1] ]])
    expect(wrapper.emitted('remove')).toEqual([[2]])
    wrapper.unmount()
  })

  test('forwards searching through the field without committing a selected value', async () => {
    const wrapper = mount(Select, { props: { filterable: true, options } })
    await wrapper.get('input').setValue('设备')
    expect(wrapper.emitted('update:inputValue')).toEqual([['设备']])
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    wrapper.unmount()
  })

  test('inherits form state and dispatches focus and blur once', async () => {
    const onFocus = vi.fn()
    const onBlur = vi.fn()
    const wrapper = mount(Select, {
      props: { options, modelValue: 1, clearable: true },
      global: { provide: {
        [formItemInjectionKey as symbol]: {
          size: 'lg', disabled: true, readonly: true, error: true,
          eventHandlers: { onFocus, onBlur },
        },
      } },
    })
    expect(wrapper.get('input').attributes('disabled')).toBeDefined()
    expect(wrapper.find('.c-field-decorator--size-lg').exists()).toBe(true)
    expect(wrapper.find('.c-field-decorator--error').exists()).toBe(true)
    expect(wrapper.find('.c-field-decorator__clear-btn').exists()).toBe(false)
    await wrapper.setProps({ disabled: false })
    expect(wrapper.get('input').attributes('disabled')).toBeUndefined()
    await wrapper.get('input').trigger('focus')
    await wrapper.get('input').trigger('blur')
    await nextTick()
    expect(onFocus).toHaveBeenCalledTimes(1)
    expect(onBlur).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })
})

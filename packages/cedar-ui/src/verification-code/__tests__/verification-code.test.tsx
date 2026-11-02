import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { describe, expect, test } from 'vitest'
import { VerificationCode } from '../index'

describe('VerificationCode', () => {
  test('renders an accessible group with the configured length', () => {
    const wrapper = mount(VerificationCode, {
      props: { length: 4, ariaLabel: 'Security code' },
    })
    const inputs = wrapper.findAll('input')

    expect(wrapper.get('[role=group]').attributes()).toMatchObject({
      role: 'group',
      'aria-label': 'Security code',
    })
    expect(inputs).toHaveLength(4)
    expect(wrapper.findAll('.c-field-decorator--size-md')).toHaveLength(4)
    expect(inputs[0].attributes()).toMatchObject({
      'aria-label': 'Security code 1/4',
      autocomplete: 'one-time-code',
    })
  })

  test('emits finish after the final character', async () => {
    const wrapper = mount(VerificationCode, {
      props: { length: 2, defaultValue: '1' },
    })

    await wrapper.findAll('input')[1].setValue('2')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['12'])
    expect(wrapper.emitted('finish')?.at(-1)).toEqual(['12'])
  })

  test('keeps an entered character visible in uncontrolled mode', async () => {
    const wrapper = mount(VerificationCode, { props: { length: 2 } })
    const firstInput = wrapper.findAll('input')[0]

    await firstInput.setValue('1')
    await nextTick()

    expect(firstInput.element.value).toBe('1')
    expect(wrapper.find('.c-field-decorator__clear-btn').exists()).toBe(false)
  })

  test('selects an existing character so it can be replaced', async () => {
    const wrapper = mount(VerificationCode, {
      props: {
        length: 2,
        modelValue: '12',
        'onUpdate:modelValue': (value: string) => wrapper.setProps({ modelValue: value }),
      },
      attachTo: document.body,
    })
    const firstInput = wrapper.findAll('input')[0]

    await firstInput.trigger('focus')
    await nextTick()

    expect(firstInput.element.selectionStart).toBe(0)
    expect(firstInput.element.selectionEnd).toBe(1)

    await firstInput.setValue('9')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['92'])

    wrapper.unmount()
  })
})

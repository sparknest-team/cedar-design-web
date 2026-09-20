import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import { Input, InputPassword } from '../index'

describe('Input', () => {
  test('render', async () => {
    const wrapper = mount(Input)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('uses outlined and controlled/uncontrolled value defaults', () => {
    const wrapper = mount(Input, { props: { defaultValue: 'seed' } })

    expect(wrapper.get('input').attributes()).toMatchObject({
      type: 'text',
      value: 'seed',
    })
    expect(wrapper.find('.c-field-decorator--variant-outlined').exists()).toBe(true)
    expect(wrapper.find('[role="button"]').exists()).toBe(false)
  })

  test('normalizes number input and forwards native attributes', () => {
    const wrapper = mount(Input, {
      props: {
        type: 'number',
        inputAttrs: { 'aria-label': 'Amount', 'data-testid': 'amount', maxlength: 1 },
      },
    })

    expect(wrapper.get('input').attributes()).toMatchObject({
      type: 'text',
      inputmode: 'decimal',
      'aria-label': 'Amount',
      'data-testid': 'amount',
    })
    expect(wrapper.get('input').attributes('maxlength')).toBeUndefined()
  })

  test('emits committed change once on blur', async () => {
    const onChange = vi.fn()
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        onChange,
        'onUpdate:modelValue': (value: string) => wrapper.setProps({ modelValue: value }),
      },
    })
    const input = wrapper.get('input')

    await input.trigger('focus')
    ;(input.element as HTMLInputElement).value = 'a'
    await input.trigger('input')
    expect(onChange).not.toHaveBeenCalled()
    await input.trigger('blur')
    await input.trigger('blur')

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith('a', expect.any(Event))
  })

  test('supports accessible keyboard clearing', async () => {
    const onInput = vi.fn()
    const onChange = vi.fn()
    const onClear = vi.fn()
    const wrapper = mount(Input, {
      props: {
        modelValue: 'query',
        clearable: true,
        onInput,
        onChange,
        onClear,
        'onUpdate:modelValue': (value: string) => wrapper.setProps({ modelValue: value }),
      },
    })
    const clear = wrapper.get('[role="button"]')

    expect(clear.attributes()).toMatchObject({
      'aria-label': '清空',
      tabindex: '0',
    })
    await clear.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
    expect(wrapper.emitted('clear')).toHaveLength(1)
    expect(onInput).not.toHaveBeenCalled()
    expect(onChange).not.toHaveBeenCalled()
    expect(onClear).toHaveBeenCalledTimes(1)
    expect(onClear).toHaveBeenCalledWith(expect.any(Event))
  })

  test('does not expose clearing while readonly', () => {
    const wrapper = mount(Input, {
      props: { modelValue: 'fixed', readonly: true },
    })

    expect(wrapper.get('input').attributes('readonly')).toBeDefined()
    expect(wrapper.find('[role="button"]').exists()).toBe(false)
  })

  test('keeps passwords hidden by default and exposes an accessible toggle', async () => {
    const wrapper = mount(InputPassword)
    const input = wrapper.get('input')
    const toggle = wrapper.get('[role="button"]')

    expect(input.attributes('type')).toBe('password')
    expect(toggle.attributes()).toMatchObject({
      'aria-label': '显示密码',
      'aria-pressed': 'false',
      tabindex: '0',
    })

    await toggle.trigger('keydown', { key: 'Enter' })
    expect(input.attributes('type')).toBe('text')
    expect(wrapper.emitted('update:visibility')?.[0]).toEqual([true])
  })
})

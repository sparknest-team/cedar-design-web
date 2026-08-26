import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Input, InputPassword } from '../index'

describe('Input', () => {
  test('render', async () => {
    const wrapper = mount(Input)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('supports accessible keyboard clearing', async () => {
    const wrapper = mount(Input, { props: { modelValue: 'query' } })
    const clear = wrapper.get('[role="button"]')

    expect(clear.attributes()).toMatchObject({ 'aria-label': '清空', tabindex: '0' })
    await clear.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
    expect(wrapper.emitted('clear')).toHaveLength(1)
  })

  test('does not expose clearing while readonly', () => {
    const wrapper = mount(Input, { props: { modelValue: 'fixed', readonly: true } })

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

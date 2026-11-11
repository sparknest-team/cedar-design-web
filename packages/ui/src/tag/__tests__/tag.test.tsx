import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Tag } from '../index'

describe('Tag', () => {
  test('render', async () => {
    const wrapper = mount(Tag)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('supports keyboard interaction when checkable', async () => {
    const wrapper = mount(Tag, {
      props: { checkable: true, defaultValue: false },
      slots: { default: 'Filter' },
    })

    expect(wrapper.find('.c-tag').attributes()).toMatchObject({ role: 'checkbox', 'aria-checked': 'false', tabindex: '0' })
    await wrapper.find('.c-tag').trigger('keydown', { key: ' ' })
    expect(wrapper.find('.c-tag').attributes('aria-checked')).toBe('true')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  test('loading disables close and check interactions', async () => {
    const wrapper = mount(Tag, {
      props: { loading: true, closable: true, checkable: true, defaultValue: false },
    })

    expect(wrapper.find('.c-tag__close-btn').exists()).toBe(false)
    await wrapper.find('.c-tag').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  test('supports round and custom text color', () => {
    const wrapper = mount(Tag, { props: { round: true, color: '#f00', textColor: '#fff' } })

    expect(wrapper.find('.c-tag').classes()).toContain('c-tag--round')
    expect((wrapper.find('.c-tag').element as HTMLElement).style.color).toBe('rgb(255, 255, 255)')
  })
})

import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { nextTick } from 'vue'
import Segmented from '../index'

describe('Segmented', () => {
  test('renders options and selects default value', () => {
    const wrapper = mount(Segmented, {
      props: {
        options: ['a', 'b', 'c'],
        defaultValue: 'b',
      },
    })

    expect(wrapper.findAll('.c-segmented__item')).toHaveLength(3)
    expect(wrapper.find('.c-segmented__item--selected').text()).toBe('b')
  })

  test('emits update and change on select', async () => {
    const wrapper = mount(Segmented, {
      props: {
        options: [
          { label: 'One', value: 1 },
          { label: 'Two', value: 2 },
        ],
        modelValue: 1,
      },
    })

    await wrapper.findAll('input')[1].setValue(true)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
    expect(wrapper.emitted('change')?.[0]?.[0]).toBe(2)
  })

  test('supports block and disabled modifiers', async () => {
    const wrapper = mount(Segmented, {
      props: {
        options: ['x', 'y'],
        block: true,
        disabled: true,
      },
    })

    expect(wrapper.classes()).toContain('c-segmented--block')
    expect(wrapper.classes()).toContain('c-segmented--disabled')
    expect(wrapper.attributes('aria-disabled')).toBe('true')

    await wrapper.setProps({ disabled: false })
    await nextTick()
    expect(wrapper.classes()).not.toContain('c-segmented--disabled')
  })
})


test('changing orientation preserves the selected option', async () => {
  const wrapper = mount(Segmented, { props: { options: ['a', 'b'], defaultValue: 'b' } })
  try {
    await wrapper.setProps({ orientation: 'vertical' })
    expect(wrapper.classes()).toContain('c-segmented--direction-vertical')
    expect(wrapper.find('input:checked').element.value).toBe('b')
    await wrapper.setProps({ orientation: 'horizontal' })
    expect(wrapper.classes()).toContain('c-segmented--direction-horizontal')
    expect(wrapper.find('input:checked').element.value).toBe('b')
    expect(wrapper.emitted('change')).toBeUndefined()
  } finally {
    wrapper.unmount()
  }
})

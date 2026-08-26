import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Rate } from '../index'

describe('Rate', () => {
  test('supports slider keyboard semantics', async () => {
    const wrapper = mount(Rate, { props: { modelValue: 2, count: 5 } })

    expect(wrapper.attributes()).toMatchObject({
      role: 'slider',
      tabindex: '0',
      'aria-valuemin': '0',
      'aria-valuemax': '5',
      'aria-valuenow': '2',
    })
    await wrapper.trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([3])
  })
})

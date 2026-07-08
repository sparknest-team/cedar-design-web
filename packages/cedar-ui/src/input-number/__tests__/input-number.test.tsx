import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { InputNumber } from '../index'

describe('InputNumber', () => {
  test('render', async () => {
    const wrapper = mount(InputNumber)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Slider } from '../index'

describe('Slider', () => {
  test('render', async () => {
    const wrapper = mount(Slider)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

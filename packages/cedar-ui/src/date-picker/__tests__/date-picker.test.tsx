import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { DatePicker } from '../index'

describe('DatePicker', () => {
  test('render', async () => {
    const wrapper = mount(DatePicker)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

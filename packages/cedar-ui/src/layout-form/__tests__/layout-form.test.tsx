import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { LayoutForm } from '../index'

describe('LayoutForm', () => {
  test('render', async () => {
    const wrapper = mount(LayoutForm)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

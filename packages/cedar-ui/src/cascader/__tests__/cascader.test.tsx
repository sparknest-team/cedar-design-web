import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Cascader } from '../index'

describe('Cascader', () => {
  test('render', async () => {
    const wrapper = mount(Cascader)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

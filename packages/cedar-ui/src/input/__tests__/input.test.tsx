import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Input } from '../index'

describe('Input', () => {
  test('render', async () => {
    const wrapper = mount(Input)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

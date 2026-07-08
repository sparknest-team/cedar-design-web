import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Spin } from '../index'

describe('Spin', () => {
  test('render', async () => {
    const wrapper = mount(Spin)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

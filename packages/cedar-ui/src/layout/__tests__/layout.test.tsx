import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Layout } from '../index'

describe('Layout', () => {
  test('render', async () => {
    const wrapper = mount(Layout)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

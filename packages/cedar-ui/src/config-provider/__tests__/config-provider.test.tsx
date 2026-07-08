import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { ConfigProvider } from '../index'

describe('ConfigProvider', () => {
  test('render', async () => {
    const wrapper = mount(ConfigProvider)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

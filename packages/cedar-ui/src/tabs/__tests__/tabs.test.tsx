import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Tabs } from '../index'

describe('Tabs', () => {
  test('render', async () => {
    const wrapper = mount(Tabs)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

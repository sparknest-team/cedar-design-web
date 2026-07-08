import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Menu } from '../index'

describe('Menu', () => {
  test('render', async () => {
    const wrapper = mount(Menu)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

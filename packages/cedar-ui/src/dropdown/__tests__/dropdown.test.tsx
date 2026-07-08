import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Dropdown } from '../index'

describe('Dropdown', () => {
  test('render', async () => {
    const wrapper = mount(Dropdown)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

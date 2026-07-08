import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Popover } from '../index'

describe('Popover', () => {
  test('render', async () => {
    const wrapper = mount(Popover)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Tooltip } from '../index'

describe('Tooltip', () => {
  test('render', async () => {
    const wrapper = mount(Tooltip)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

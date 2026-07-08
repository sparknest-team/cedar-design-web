import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { TreeSelect } from '../index'

describe('TreeSelect', () => {
  test('render', async () => {
    const wrapper = mount(TreeSelect)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

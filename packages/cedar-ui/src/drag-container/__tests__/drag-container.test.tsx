import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { DragContainer } from '../index'

describe('DragContainer', () => {
  test('render', async () => {
    const wrapper = mount(DragContainer)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

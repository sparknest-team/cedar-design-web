import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Tag } from '../index'

describe('Tag', () => {
  test('render', async () => {
    const wrapper = mount(Tag)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

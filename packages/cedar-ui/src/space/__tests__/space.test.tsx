import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Space } from '../index'

describe('Space', () => {
  test('render', async () => {
    const wrapper = mount(Space)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

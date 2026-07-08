import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Empty } from '../index'

describe('Empty', () => {
  test('render', async () => {
    const wrapper = mount(Empty)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Steps } from '../index'

describe('Steps', () => {
  test('render', async () => {
    const wrapper = mount(Steps)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

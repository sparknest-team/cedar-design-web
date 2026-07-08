import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Message } from '../index'

describe('Message', () => {
  test('render', async () => {
    const wrapper = mount(Message)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

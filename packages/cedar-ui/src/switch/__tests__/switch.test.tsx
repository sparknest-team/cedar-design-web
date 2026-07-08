import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Switch } from '../index'

describe('Switch', () => {
  test('render', async () => {
    const wrapper = mount(Switch)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

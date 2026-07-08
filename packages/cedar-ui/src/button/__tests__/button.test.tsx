import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Button } from '../index'

describe('Button', () => {
  test('render', async () => {
    const wrapper = mount(Button)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

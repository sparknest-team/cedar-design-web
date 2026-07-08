import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Textarea } from '../index'

describe('Textarea', () => {
  test('render', async () => {
    const wrapper = mount(Textarea)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

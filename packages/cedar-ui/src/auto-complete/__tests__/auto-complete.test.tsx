import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { AutoComplete } from '../index'

describe('AutoComplete', () => {
  test('render', async () => {
    const wrapper = mount(AutoComplete)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

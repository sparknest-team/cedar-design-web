import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Search } from '../index'

describe('Search', () => {
  test('render', async () => {
    const wrapper = mount(Search)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

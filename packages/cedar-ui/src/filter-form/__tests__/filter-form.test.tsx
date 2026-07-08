import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { FilterForm } from '../index'

describe('FilterForm', () => {
  test('render', async () => {
    const wrapper = mount(FilterForm)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

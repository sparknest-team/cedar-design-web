import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Pagination } from '../index'

describe('Pagination', () => {
  test('render', async () => {
    const wrapper = mount(Pagination)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

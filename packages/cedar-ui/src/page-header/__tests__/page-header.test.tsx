import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { PageHeader } from '../index'

describe('Pagination', () => {
  test('render', async () => {
    const wrapper = mount(PageHeader)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

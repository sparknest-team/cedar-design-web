import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Pagination } from '../index'

describe('Pagination', () => {
  test('render', async () => {
    const wrapper = mount(Pagination, { props: { total: 0 } })
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

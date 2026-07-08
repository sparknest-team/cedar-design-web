import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Ellipsis } from '../index'

describe('Ellipsis', () => {
  test('render', async () => {
    const wrapper = mount(Ellipsis)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

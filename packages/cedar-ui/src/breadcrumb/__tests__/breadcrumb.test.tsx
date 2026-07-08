import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Breadcrumb } from '../index'

describe('Breadcrumb', () => {
  test('render', async () => {
    const wrapper = mount(Breadcrumb)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

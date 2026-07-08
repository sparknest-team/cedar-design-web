import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Divider } from '../index'

describe('Divider', () => {
  test('render', async () => {
    const wrapper = mount(Divider)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

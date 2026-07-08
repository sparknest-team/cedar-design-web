import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Drawer } from '../index'

describe('Drawer', () => {
  test('render', async () => {
    const wrapper = mount(Drawer)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

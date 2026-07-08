import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Modal } from '../index'

describe('Modal', () => {
  test('render', async () => {
    const wrapper = mount(Modal)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

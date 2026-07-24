import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Dialog } from '../index'

describe('Dialog', () => {
  test('render', async () => {
    const wrapper = mount(Dialog)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

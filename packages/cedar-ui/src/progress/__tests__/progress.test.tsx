import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Progress } from '../index'

describe('Progress', () => {
  test('render', async () => {
    const wrapper = mount(Progress)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

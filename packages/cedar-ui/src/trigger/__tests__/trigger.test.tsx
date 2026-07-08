import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Trigger } from '../index'

describe('Trigger', () => {
  test('render', async () => {
    const wrapper = mount(Trigger)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

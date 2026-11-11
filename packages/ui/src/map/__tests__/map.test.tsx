import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Map } from '../index'

describe('Map', () => {
  test('render', async () => {
    const wrapper = mount(Map, { props: { modelValue: {} } })
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

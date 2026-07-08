import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Checkbox } from '../index'

describe('Checkbox', () => {
  test('render', async () => {
    const wrapper = mount(Checkbox)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

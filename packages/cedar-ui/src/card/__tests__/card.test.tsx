import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Card } from '../index'

describe('Card', () => {
  test('render', async () => {
    const wrapper = mount(Card)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

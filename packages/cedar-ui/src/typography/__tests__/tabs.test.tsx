import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Typography } from '../index'

describe('Typography', () => {
  test('render', async () => {
    const wrapper = mount(Typography)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Grid } from '../index'

describe('Grid', () => {
  test('render', async () => {
    const wrapper = mount(Grid)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

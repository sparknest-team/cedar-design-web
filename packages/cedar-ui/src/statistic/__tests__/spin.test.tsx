import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import Statistic from '../index'

describe('Spin', () => {
  test('render', async () => {
    const wrapper = mount(Statistic)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

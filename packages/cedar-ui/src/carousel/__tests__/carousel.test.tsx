import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Carousel } from '../index'

describe('Carousel', () => {
  test('render', async () => {
    const wrapper = mount(Carousel)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

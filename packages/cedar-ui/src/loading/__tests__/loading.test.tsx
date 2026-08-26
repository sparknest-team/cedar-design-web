import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import Loading from '../loading.vue'

describe('Loading', () => {
  test('render', async () => {
    const wrapper = mount(Loading)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

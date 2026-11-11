import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import TimePicker from '../TimePicker.vue'

describe('TimePicker', () => {
  test('render', async () => {
    const wrapper = mount(TimePicker)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

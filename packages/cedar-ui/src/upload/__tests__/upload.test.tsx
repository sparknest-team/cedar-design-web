import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Upload } from '../index'

describe('Upload', () => {
  test('render', async () => {
    const wrapper = mount(Upload)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

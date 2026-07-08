import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { PeopleSelect } from '../index'

describe('PeopleSelect', () => {
  test('render', async () => {
    const wrapper = mount(PeopleSelect)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

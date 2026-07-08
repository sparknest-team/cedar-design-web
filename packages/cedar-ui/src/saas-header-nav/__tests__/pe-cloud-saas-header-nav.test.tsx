import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { SaasHeaderNav } from '../index'

describe('SaasHeaderNav', () => {
  test('render', async () => {
    const wrapper = mount(SaasHeaderNav)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

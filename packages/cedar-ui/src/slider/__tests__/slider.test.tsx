import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Slider } from '../index'

describe('Slider', () => {
  test('public drag lifecycle emits once with the final value', () => {
    const wrapper = mount(Slider, { props: { defaultValue: 20 } })
    const vm = wrapper.vm as any
    vm.handleMoveStart()
    vm.handleMoveStart()
    vm.handleEndChange(40)
    vm.handleMoveEnd()
    vm.handleMoveEnd()
    expect(wrapper.emitted('start')).toEqual([[]])
    expect(wrapper.emitted('change')).toEqual([[40]])
    expect(wrapper.emitted('end')).toEqual([[40]])
    wrapper.unmount()
  })
  test('render', async () => {
    const wrapper = mount(Slider)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

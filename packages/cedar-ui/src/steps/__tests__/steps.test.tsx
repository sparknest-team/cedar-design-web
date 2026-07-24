import { nextTick, h, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import Steps, { Step } from '../index'

describe('Steps', () => {
  test('render', async () => {
    const wrapper = mount(Steps)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('current status derivation', async () => {
    const wrapper = mount({
      setup() {
        return () =>
          h(Steps, { current: 2 }, () => [
            h(Step, null, () => 'A'),
            h(Step, null, () => 'B'),
            h(Step, null, () => 'C'),
          ])
      },
    })
    await nextTick()
    const items = wrapper.findAll('.c-steps-item')
    expect(items[0].classes()).toContain('c-steps-item-finish')
    expect(items[1].classes()).toContain('c-steps-item-process')
    expect(items[1].classes()).toContain('c-steps-item-active')
    expect(items[2].classes()).toContain('c-steps-item-wait')
  })

  test('changeable triggers onChange', async () => {
    const onChange = vi.fn()
    const current = ref(1)
    const wrapper = mount({
      setup() {
        return () =>
          h(
            Steps,
            {
              changeable: true,
              current: current.value,
              'onUpdate:current': (v: number) => {
                current.value = v
              },
              onChange,
            },
            () => [h(Step, null, () => 'A'), h(Step, null, () => 'B')],
          )
      },
    })
    await nextTick()
    await wrapper.findAll('.c-steps-item')[1].trigger('click')
    expect(onChange).toHaveBeenCalled()
    expect(onChange.mock.calls[0][0]).toBe(2)
  })

  test('status error on current step', async () => {
    const wrapper = mount({
      setup() {
        return () =>
          h(Steps, { current: 2, status: 'error' }, () => [
            h(Step, null, () => 'A'),
            h(Step, null, () => 'B'),
          ])
      },
    })
    await nextTick()
    expect(wrapper.findAll('.c-steps-item')[1].classes()).toContain('c-steps-item-error')
  })
})

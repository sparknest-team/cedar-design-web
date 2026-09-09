import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Progress } from '../index'

describe('Progress', () => {
  test('circle and segmented geometry use percentages, not ratios', () => {
    const circle = mount(Progress, { props: { mode: 'circle', percent: 12.5 } })
    const bar = circle.get('circle[class$="__bar"]').element as SVGElement
    expect(Number(bar.style.strokeDashoffset) / Number(bar.style.strokeDasharray)).toBeCloseTo(.875)
    circle.unmount()
    const steps = mount(Progress, { props: { steps: 4, percent: 50 } })
    expect(steps.get('[role="progressbar"]').attributes('aria-valuenow')).toBe('50')
    steps.unmount()
  })

  test('render', async () => {
    const wrapper = mount(Progress)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('uses the documented zero-to-100 accessibility range', () => {
    const wrapper = mount(Progress, { props: { percent: 75 } })
    const progressbar = wrapper.get('[role="progressbar"]')

    expect(progressbar.attributes()).toMatchObject({
      'aria-valuemin': '0',
      'aria-valuemax': '100',
      'aria-valuenow': '75',
    })
  })
})

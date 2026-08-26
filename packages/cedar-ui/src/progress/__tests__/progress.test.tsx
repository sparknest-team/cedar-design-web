import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Progress } from '../index'

describe('Progress', () => {
  test('render', async () => {
    const wrapper = mount(Progress)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('uses the documented zero-to-one accessibility range', () => {
    const wrapper = mount(Progress, { props: { percent: 0.75 } })
    const progressbar = wrapper.get('[role="progressbar"]')

    expect(progressbar.attributes()).toMatchObject({
      'aria-valuemin': '0',
      'aria-valuemax': '1',
      'aria-valuenow': '0.75',
    })
  })
})

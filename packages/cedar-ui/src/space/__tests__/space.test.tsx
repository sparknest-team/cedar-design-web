import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Space } from '../index'

describe('Space', () => {
  test('render', async () => {
    const wrapper = mount(Space)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('column default align is stretch', async () => {
    const wrapper = mount(Space, {
      props: { direction: 'column' },
    })
    await nextTick()
    expect(wrapper.find('.c-space').attributes('style')).toContain('align-items: stretch')
  })

  test('row default align is center', async () => {
    const wrapper = mount(Space, {
      props: { direction: 'row' },
    })
    await nextTick()
    expect(wrapper.find('.c-space').attributes('style')).toContain('align-items: center')
  })
})

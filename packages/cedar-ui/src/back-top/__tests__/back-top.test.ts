import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { BackTop, backTopProps } from '../index'

describe('BackTop', () => {
  test('renders a native keyboard target', async () => {
    const wrapper = mount(BackTop, {
      props: { visibleHeight: 0, ariaLabel: '返回顶部', popupContainer: false },
    })
    await nextTick()
    expect(BackTop.name).toBe('CBackTop')
    expect(backTopProps.duration.default).toBe(200)
    expect(wrapper.get('button').attributes('type')).toBe('button')
    expect(wrapper.get('button').attributes('aria-label')).toBe('返回顶部')
    wrapper.unmount()
  })
})

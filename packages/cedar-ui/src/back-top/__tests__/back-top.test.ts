import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { BackTop, backTopProps } from '../index'

describe('BackTop', () => {
  test('renders an accessible keyboard target', async () => {
    const wrapper = mount(BackTop, {
      props: { visibleHeight: 0, ariaLabel: '返回顶部' },
      attachTo: document.body,
    })
    window.dispatchEvent(new Event('scroll'))
    await new Promise((resolve) => setTimeout(resolve, 20))
    await nextTick()

    const trigger = wrapper.get('[role="button"]')
    expect(BackTop.name).toBe('CBackTop')
    expect(backTopProps.duration.default).toBe(200)
    expect(trigger.attributes('tabindex')).toBe('0')
    expect(trigger.attributes('aria-label')).toBe('返回顶部')
    wrapper.unmount()
  })
})

import { Comment, Fragment, createSSRApp, h, nextTick, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Component from '..'
import { createNamespace } from '../../_utils/global-config'
const { n } = createNamespace('icon')

describe('icon copied implementation contract', () => {
  it('renders on the server without starting browser work', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(Component) }))
    expect(html).toContain(n())
  })

  it('cancels stale name transitions and never shares state', async () => {
    vi.useFakeTimers()
    const options = { props: { name: 'one', transition: 100 }, global: { components: {
      IconOne: { render: () => h('svg', { 'data-icon': 'one' }) },
      IconTwo: { render: () => h('svg', { 'data-icon': 'two' }) },
      IconThree: { render: () => h('svg', { 'data-icon': 'three' }) },
    } } }
    const a = mount(Component, options), b = mount(Component, options)
    await a.setProps({ name: 'two' })
    vi.advanceTimersByTime(50)
    await a.setProps({ name: 'three' })
    vi.advanceTimersByTime(60); await nextTick()
    expect(a.find('svg').attributes('data-icon')).toBe('one')
    vi.advanceTimersByTime(40); await nextTick()
    expect(a.find('svg').attributes('data-icon')).toBe('three')
    expect(b.find('svg').attributes('data-icon')).toBe('one')
    await a.setProps({ name: 'two' })
    a.unmount(); b.unmount()
    expect(vi.getTimerCount()).toBe(0)
    vi.useRealTimers()
  })

})

import { h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { mount, type VueWrapper } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Sider from '../Sider.vue'

describe('sider responsive environment contract', () => {
  const originalMatchMedia = window.matchMedia
  let width = 1000
  let wrappers: VueWrapper[] = []
  let queries: Map<string, { matches: boolean; listeners: Set<(event: { matches: boolean }) => void> }>
  const matches = (query: string) => {
    const min = /min-width:\s*(\d+)px/.exec(query)
    const max = /max-width:\s*(\d+)px/.exec(query)
    return (!min || width >= Number(min[1])) && (!max || width <= Number(max[1]))
  }
  const resize = (nextWidth: number) => {
    width = nextWidth
    for (const [query, state] of queries) {
      const next = matches(query)
      if (next !== state.matches) {
        state.matches = next
        for (const callback of [...state.listeners]) callback({ matches: next })
      }
    }
  }
  const countListeners = () => [...queries.values()].reduce((total, state) => total + state.listeners.size, 0)
  const render = (props: Record<string, unknown>) => {
    const wrapper = mount(Sider, { props })
    wrappers.push(wrapper)
    return wrapper
  }
  beforeEach(() => {
    width = 1000
    wrappers = []
    queries = new Map()
    window.matchMedia = vi.fn((query: string) => {
      const state = { matches: matches(query), listeners: new Set<(event: { matches: boolean }) => void>() }
      queries.set(query, state)
      return { media: query, get matches() { return state.matches }, addEventListener: (_type: string, callback: (event: { matches: boolean }) => void) => state.listeners.add(callback), removeEventListener: (_type: string, callback: (event: { matches: boolean }) => void) => state.listeners.delete(callback) } as unknown as MediaQueryList
    })
  })
  afterEach(() => {
    wrappers.forEach(wrapper => wrapper.unmount())
    window.matchMedia = originalMatchMedia
  })
  it('immediately re-evaluates changed breakpoints and releases a removed subscription', async () => {
    const wrapper = render({ breakpoint: 'md' })
    expect(wrapper.element.style.width).toBe('200px')
    await wrapper.setProps({ breakpoint: 'xl' })
    expect(wrapper.element.style.width).toBe('48px')
    await wrapper.setProps({ breakpoint: 'sm' })
    expect(wrapper.element.style.width).toBe('200px')
    await wrapper.setProps({ breakpoint: undefined })
    expect(countListeners()).toBe(0)
    resize(400)
    expect(wrapper.element.style.width).toBe('200px')
  })
  it('uses narrow-screen collapse for xs as well as larger breakpoints', async () => {
    const wrapper = render({ breakpoint: 'xs' })
    expect(wrapper.element.style.width).toBe('200px')
    resize(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.element.style.width).toBe('48px')
    resize(576)
    await wrapper.vm.$nextTick()
    expect(wrapper.element.style.width).toBe('200px')
  })
  it('notifies the environment even when controlled collapsed already equals the target', async () => {
    const wrapper = render({ breakpoint: 'md', collapsed: true })
    expect(wrapper.emitted('breakpoint')).toEqual([[false]])
    resize(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('breakpoint')).toEqual([[false], [true]])
    expect(wrapper.emitted('update:collapsed')).toEqual([[false]])
    expect(wrapper.element.style.width).toBe('48px')
  })
  it('keeps shared subscriptions isolated when only one sider changes its breakpoint', async () => {
    const first = render({ breakpoint: 'md' })
    const second = render({ breakpoint: 'xl' })
    const secondEvents = second.emitted('breakpoint')?.length
    await first.setProps({ breakpoint: 'lg' })
    expect(first.emitted('breakpoint')).toEqual([[false], [false]])
    expect(second.emitted('breakpoint')?.length).toBe(secondEvents)
    expect(countListeners()).toBe(6)
    await first.setProps({ breakpoint: undefined })
    expect(countListeners()).toBe(6)
    await second.setProps({ breakpoint: undefined })
    expect(countListeners()).toBe(0)
  })
  it('does not subscribe or collapse on the server', async () => {
    const html = await renderToString(h(Sider, { breakpoint: 'xl' }))
    expect(html).toContain('width:200px')
    expect(queries.size).toBe(0)
  })
})

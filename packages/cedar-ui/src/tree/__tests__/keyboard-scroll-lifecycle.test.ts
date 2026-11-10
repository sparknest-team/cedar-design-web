import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Tree from '../Tree.vue'

test('keyboard scrolling follows the latest focused node and stops after blur or unmount', async () => {
  const original = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollIntoView')
  const scroll = vi.fn(function (this: Element) { return this.textContent })
  Object.defineProperty(Element.prototype, 'scrollIntoView', { configurable: true, value: scroll })
  const wrapper = mount(Tree, { attachTo: document.body, props: {
    animation: false,
    data: [{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' }, { value: 'c', label: 'Gamma' }],
  } })
  let mounted = true
  try {
    await flushPromises()
    const root = wrapper.get('[role=tree]').element as HTMLElement
    root.focus()
    await flushPromises()
    scroll.mockClear()
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    await flushPromises()
    expect(scroll).toHaveBeenCalledTimes(1)
    expect((scroll.mock.instances[0] as Element).textContent).toContain('Gamma')
    scroll.mockClear()
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }))
    root.blur()
    await flushPromises()
    expect(scroll).not.toHaveBeenCalled()
    root.focus()
    await flushPromises()
    scroll.mockClear()
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    wrapper.unmount()
    mounted = false
    await flushPromises()
    expect(scroll).not.toHaveBeenCalled()
  } finally {
    if (mounted) wrapper.unmount()
    if (original) Object.defineProperty(Element.prototype, 'scrollIntoView', original)
    else Reflect.deleteProperty(Element.prototype, 'scrollIntoView')
  }
})

test('tree ignores composition keyCode without navigating', async () => {
  const wrapper = mount(Tree, { attachTo: document.body, props: { animation: false, data: [{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' }] } })
  try {
    const root = wrapper.get('[role=tree]').element as HTMLElement
    root.focus()
    await flushPromises()
    const before = root.getAttribute('aria-activedescendant')
    const composition = new KeyboardEvent('keydown', { key: 'ArrowDown', keyCode: 229, bubbles: true, cancelable: true })
    root.dispatchEvent(composition)
    await flushPromises()
    expect(composition.defaultPrevented).toBe(false)
    expect(root.getAttribute('aria-activedescendant')).toBe(before)
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }))
    await flushPromises()
    expect(root.getAttribute('aria-activedescendant')).not.toBe(before)
  } finally { wrapper.unmount() }
})

test('active descendant follows virtual mode changes and removal of the focused node', async () => {
  const data = [{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' }]
  const wrapper = mount(Tree, { attachTo: document.body, props: { animation: false, data } })
  try {
    const root = wrapper.get('[role=tree]').element as HTMLElement
    const active = () => document.getElementById(root.getAttribute('aria-activedescendant') || '')
    root.focus()
    await flushPromises()
    expect(active()?.textContent).toContain('Alpha')
    await wrapper.setProps({ virtualListProps: { height: 120, fixedSize: true, estimatedSize: 32, buffer: 1 } })
    await flushPromises()
    expect(active()?.textContent).toContain('Alpha')
    await wrapper.setProps({ data: [data[1]] })
    await flushPromises()
    expect(active()?.textContent).toContain('Beta')
    await wrapper.setProps({ virtualListProps: undefined })
    await flushPromises()
    expect(active()?.textContent).toContain('Beta')
  } finally { wrapper.unmount() }
})

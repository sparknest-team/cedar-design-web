import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import EditContent from '../EditContent.vue'
import Operations from '../Operations.vue'
import measure from '../utils/measure'

afterEach(() => vi.restoreAllMocks())

describe('typography measurement and editing accessibility', () => {
  test('measurement tree is inert and removed after measuring', () => {
    const origin = document.createElement('div')
    document.body.appendChild(origin)
    let measured: HTMLElement | undefined
    const append = document.body.appendChild.bind(document.body)
    vi.spyOn(document.body, 'appendChild').mockImplementation((node) => {
      if (node instanceof HTMLElement && node.hasAttribute('inert')) measured = node
      return append(node)
    })
    const offset = vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockImplementation(function (this: HTMLElement) {
      if (this === measured) {
        expect(this.getAttribute('aria-hidden')).toBe('true')
        expect(this.hasAttribute('inert')).toBe(true)
        expect(this.querySelector('button')).not.toBeNull()
      }
      return 0
    })
    measure(origin, { rows: 1, suffix: '', ellipsisStr: '...' } as any, h('button', 'copy'), 'content')
    expect(measured).toBeDefined()
    expect(measured!.isConnected).toBe(false)
    offset.mockRestore()
    origin.remove()
  })

  test('removes measurement tree even when computing style fails', () => {
    const origin = document.createElement('div')
    document.body.appendChild(origin)
    const before = document.body.childElementCount
    vi.spyOn(origin.ownerDocument.defaultView!, 'getComputedStyle').mockImplementation(() => { throw new Error('style failed') })
    expect(() => measure(origin, {} as any, [], 'text')).toThrow('style failed')
    expect(document.body.childElementCount).toBe(before)
    origin.remove()
  })

  test('IME confirmation does not end editing and enter followed by blur ends once', async () => {
    const wrapper = mount(EditContent, { props: { text: 'text' }, attachTo: document.body })
    const input = wrapper.get('input').element
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true }))
    expect(wrapper.emitted('end')).toBeUndefined()
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    input.dispatchEvent(new FocusEvent('blur', { bubbles: false }))
    await nextTick()
    expect(wrapper.emitted('end')).toHaveLength(1)
    wrapper.unmount()
  })

  test('disabled operation buttons expose native disabled state', () => {
    const wrapper = mount(Operations, { props: { editable: true, copyable: true, expandable: true, isEllipsis: true, disabled: true } })
    const buttons = wrapper.findAll('button')
    expect(buttons).toHaveLength(3)
    for (const button of buttons) expect((button.element as HTMLButtonElement).disabled).toBe(true)
    wrapper.unmount()
  })
})

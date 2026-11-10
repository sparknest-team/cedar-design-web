import { defineComponent, h, nextTick, withDirectives } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Tooltip, { vTooltip } from '..'

const Fixture = defineComponent({
  render: () => h('div', [
    h(Tooltip, { content: 'Main', defaultOpen: true }, { default: () => h('button', 'Main') }),
    withDirectives(h('button', { id: 'a' }, 'A'), [[vTooltip, 'Alpha']]),
    withDirectives(h('button', { id: 'b' }, 'B'), [[vTooltip, 'Beta']]),
  ]),
})

test('directive instances use unique descriptions and Escape closes the active tooltip', async () => {
  const owner = mount(Fixture, { attachTo: document.body })
  try {
    await owner.get('#a').trigger('focusin')
    await flushPromises()
    await owner.get('#b').trigger('mouseenter')
    await flushPromises()
    const a = owner.get('#a').attributes('aria-describedby')!
    const b = owner.get('#b').attributes('aria-describedby')!
    expect(a).not.toBe(b)
    expect(document.getElementById(a)?.textContent).toBe('Alpha')
    expect(document.getElementById(b)?.textContent).toBe('Beta')
    const ids = Array.from(document.querySelectorAll('[id]'), node => node.id)
    expect(ids.filter(id => id === a)).toHaveLength(1)
    expect(ids.filter(id => id === b)).toHaveLength(1)
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await flushPromises()
    expect(document.getElementById(b)).toBeNull()
    expect(document.getElementById(a)?.textContent).toBe('Alpha')
  } finally { owner.unmount(); await nextTick() }
})

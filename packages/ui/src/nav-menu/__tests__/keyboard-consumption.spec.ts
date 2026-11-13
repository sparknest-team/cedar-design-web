import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { expect, test } from 'vitest'
import NavMenu, { NavMenuItem } from '..'

for (const mode of ['prevented', 'composing', 'legacy-ime'] as const) {
  test(`does not open on ${mode} ArrowDown`, async () => {
    const wrapper = mount(NavMenuItem, { attachTo: document.body, props: {
      label: 'Choose', popupContainer: false, options: [{ key: 'a', label: 'Alpha' }],
      ...(mode === 'prevented' ? { onKeydown: (event: KeyboardEvent) => event.preventDefault() } : {}),
    } })
    try {
      const button = wrapper.get('[data-nav-item]')
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true, isComposing: mode === 'composing', ...(mode === 'legacy-ime' ? { keyCode: 229 } : {}) })
      button.element.dispatchEvent(event); await nextTick()
      expect(wrapper.emitted('update:open')).toBeUndefined()
      expect(button.attributes('aria-expanded')).toBe('false')
    } finally { wrapper.unmount() }
  })
}

test('normal ArrowDown still requests opening', async () => {
  const wrapper = mount(NavMenuItem, { attachTo: document.body, props: { label: 'Choose', popupContainer: false, options: [{ key: 'a', label: 'Alpha' }] } })
  try { await wrapper.get('[data-nav-item]').trigger('keydown', { key: 'ArrowDown' }); expect(wrapper.emitted('update:open')).toEqual([[true]]) } finally { wrapper.unmount() }
})

test('once listener may cancel the first key without blocking a later key', async () => {
  let calls = 0
  const wrapper = mount(NavMenuItem, { attachTo: document.body, props: {
    label: 'Choose', popupContainer: false, options: [{ key: 'a', label: 'Alpha' }],
    onKeydownOnce: (event: KeyboardEvent) => { calls++; event.preventDefault() },
  } })
  try {
    const button = wrapper.get('[data-nav-item]')
    await button.trigger('keydown', { key: 'ArrowDown' })
    expect(calls).toBe(1); expect(wrapper.emitted('update:open')).toBeUndefined()
    await button.trigger('keydown', { key: 'ArrowDown' })
    expect(calls).toBe(1); expect(wrapper.emitted('update:open')).toEqual([[true]])
  } finally { wrapper.unmount() }
})

for (const mode of ['prevented', 'composing', 'legacy-ime', 'normal'] as const) {
  test(`parent navigation respects ${mode} ArrowRight`, async () => {
    const wrapper = mount(NavMenu, { attachTo: document.body, props: { mode: 'horizontal', popupContainer: false }, slots: { default: () => [
      h(NavMenuItem, { label: 'First', 'data-first': '', ...(mode === 'prevented' ? { onKeydown: (event: KeyboardEvent) => event.preventDefault() } : {}) }),
      h(NavMenuItem, { label: 'Second', 'data-second': '' }),
    ] } })
    try {
      const first = wrapper.get('[data-first]').element as HTMLElement, second = wrapper.get('[data-second]').element as HTMLElement
      first.focus(); expect(document.activeElement).toBe(first)
      first.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true, isComposing: mode === 'composing', ...(mode === 'legacy-ime' ? { keyCode: 229 } : {}) }))
      await nextTick()
      expect(document.activeElement).toBe(mode === 'normal' ? second : first)
    } finally { wrapper.unmount() }
  })
}

for (const mode of ['prevented', 'composing', 'legacy-ime', 'normal'] as const) {
  test(`panel Escape respects ${mode}`, async () => {
    const wrapper = mount(NavMenuItem, { attachTo: document.body, props: { label: 'Choose', popupContainer: false, defaultOpen: true }, slots: {
      content: () => h('input', { onKeydown: (event: KeyboardEvent) => { if (mode === 'prevented') event.preventDefault() } }),
    } })
    try {
      await nextTick()
      const input = wrapper.get('input').element
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true, isComposing: mode === 'composing', ...(mode === 'legacy-ime' ? { keyCode: 229 } : {}) }))
      await nextTick()
      expect(wrapper.emitted('update:open')).toEqual(mode === 'normal' ? [[false]] : undefined)
    } finally { wrapper.unmount() }
  })
}

for (const mode of ['composing', 'legacy-ime', 'normal'] as const) {
  test(`option node respects ${mode} Enter`, async () => {
    const wrapper = mount(NavMenu, { attachTo: document.body, props: { options: [{ key: 'a', label: 'Alpha' }], popupContainer: false } })
    try {
      const node = wrapper.get('[data-nav-item]').element
      node.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true, isComposing: mode === 'composing', ...(mode === 'legacy-ime' ? { keyCode: 229 } : {}) }))
      await nextTick()
      expect(wrapper.emitted('select')?.length ?? 0).toBe(mode === 'normal' ? 1 : 0)
    } finally { wrapper.unmount() }
  })
}

for (const mode of ['composing', 'legacy-ime', 'normal'] as const) {
  test(`nested panel respects ${mode} Escape`, async () => {
    const wrapper = mount(NavMenu, { attachTo: document.body, props: { mode: 'horizontal', popupContainer: false, options: [{ key: 'parent', label: 'Parent', children: [{ key: 'child', label: 'Child' }] }] } })
    try {
      await wrapper.get('[data-nav-item]').trigger('keydown', { key: 'ArrowDown' })
      await nextTick()
      const parent = wrapper.get('[data-nav-item]')
      const panel = wrapper.get('[data-nav-panel]')
      panel.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true, isComposing: mode === 'composing', ...(mode === 'legacy-ime' ? { keyCode: 229 } : {}) }))
      await nextTick()
      expect(parent.attributes('aria-expanded')).toBe(mode === 'normal' ? 'false' : 'true')
    } finally { wrapper.unmount() }
  })
}

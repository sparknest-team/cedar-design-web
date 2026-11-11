import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import ColorPicker from '..'

test.each([false, true])('openedClass follows the controlled state for a custom trigger (initially open: %s)', async initial => {
  const wrapper = mount(ColorPicker, {
    attachTo: document.body,
    props: { hideTrigger: false, triggerProps: { open: initial, openedClass: 'color-trigger-open' } },
    slots: { default: () => h('button', { type: 'button', class: 'own-trigger' }, 'Choose color') },
  })
  try {
    const button = () => wrapper.get('button.own-trigger')
    expect(button().classes().includes('color-trigger-open')).toBe(initial)
    await wrapper.setProps({ triggerProps: { open: !initial, openedClass: 'color-trigger-open' } })
    expect(button().classes().includes('color-trigger-open')).toBe(!initial)
    expect(button().classes()).toContain('own-trigger')
  } finally { wrapper.unmount() }
})

test.each([false, true])('SSR preserves the custom trigger class for the initial open state (%s)', async open => {
  const html = await renderToString(createSSRApp({
    render: () => h(ColorPicker, { hideTrigger: false, triggerProps: { open, openedClass: 'color-trigger-open' } }, {
      default: () => h('button', { type: 'button', class: 'own-trigger' }, 'Choose color'),
    }),
  }))
  const button = html.match(/<button[^>]*class="([^"]*\bown-trigger\b[^"]*)"[^>]*>/)?.[1]
  expect(button).toBeDefined()
  expect(button?.split(/\s+/).includes('color-trigger-open')).toBe(open)
})

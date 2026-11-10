import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { expect, test } from 'vitest'
import Calendar from '..'

test('date focus moves across months without selecting, then Enter selects', async () => {
  const w = mount(Calendar, { attachTo: document.body, props: { modelValue: new Date(2026, 8, 30) } })
  try {
    expect(w.findAll('[data-calendar-cell][tabindex="0"]')).toHaveLength(1)
    const start = w.get('[data-calendar-cell][tabindex="0"]')
    ;(start.element as HTMLElement).focus()
    await start.trigger('keydown', { key: 'ArrowRight' })
    await nextTick()
    expect(document.activeElement?.getAttribute('data-calendar-cell')).toBe('2026-10-01')
    expect(w.emitted('update:modelValue')).toBeUndefined()
    ;(document.activeElement as HTMLElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }))
    expect((w.emitted('update:modelValue')?.[0]?.[0] as Date).getDate()).toBe(1)
  } finally { w.unmount() }
})

test('year panel offers one keyboard entry and respects disabled selection', async () => {
  const w = mount(Calendar, { attachTo: document.body, props: { modelValue: new Date(2026, 8, 16), mode: 'year', panel: true, allowSelect: false } })
  try {
    expect(w.findAll('[data-calendar-cell][tabindex="0"]')).toHaveLength(1)
    const start = w.get('[data-calendar-cell][tabindex="0"]')
    expect(start.attributes('aria-disabled')).toBe('true')
    ;(start.element as HTMLElement).focus()
    await start.trigger('keydown', { key: 'ArrowRight' })
    await nextTick()
    expect(document.activeElement?.getAttribute('data-calendar-cell')).toBe('2026-10')
    ;(document.activeElement as HTMLElement).dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true }))
    expect(w.emitted('update:modelValue')).toBeUndefined()
  } finally { w.unmount() }
})

test('year view has one tab stop despite repeated dates, and respects RTL', async () => {
  const host = document.createElement('div')
  host.dir = 'rtl'
  document.body.append(host)
  const w = mount(Calendar, { attachTo: host, props: { modelValue: new Date(2026, 8, 16), mode: 'year' } })
  try {
    expect(w.findAll('[data-calendar-cell][tabindex="0"]')).toHaveLength(1)
    const start = w.get('[data-calendar-cell][tabindex="0"]')
    ;(start.element as HTMLElement).focus()
    await start.trigger('keydown', { key: 'ArrowRight' })
    await nextTick()
    expect(document.activeElement?.getAttribute('data-calendar-cell')).toBe('2026-09-15')
    expect(w.emitted('update:modelValue')).toBeUndefined()
  } finally { w.unmount(); host.remove() }
})

test('keyboard events from custom slot controls are not intercepted', async () => {
  const w = mount(Calendar, { attachTo: document.body, props: { modelValue: new Date(2026, 8, 16) }, slots: { default: () => h('button', 'custom') } })
  try {
    const button = w.get('[data-calendar-cell][tabindex="0"] button')
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true })
    button.element.dispatchEvent(event)
    expect(event.defaultPrevented).toBe(false)
  } finally { w.unmount() }
})

test('calendar leaves composing and previously prevented keys untouched', async () => {
  const w = mount(Calendar, { attachTo: document.body, props: { modelValue: new Date(2026, 8, 16) } })
  try {
    const cell = w.get('[data-calendar-cell][tabindex="0"]').element as HTMLElement
    cell.focus()
    const composing = new KeyboardEvent('keydown', { key: 'ArrowRight', keyCode: 229, bubbles: true, cancelable: true })
    cell.dispatchEvent(composing)
    await nextTick()
    expect(composing.defaultPrevented).toBe(false)
    expect(document.activeElement).toBe(cell)
    const consumed = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true })
    consumed.preventDefault()
    cell.dispatchEvent(consumed)
    expect(w.emitted('update:modelValue')).toBeUndefined()
    cell.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }))
    expect(w.emitted('update:modelValue')).toHaveLength(1)
  } finally { w.unmount() }
})

test('calendar does not select on an already prevented Enter', () => {
  const w = mount(Calendar, { props: { modelValue: new Date(2026, 8, 16) } })
  try {
    const cell = w.get('[data-calendar-cell][tabindex="0"]').element
    const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true })
    event.preventDefault()
    cell.dispatchEvent(event)
    expect(w.emitted('update:modelValue')).toBeUndefined()
  } finally { w.unmount() }
})

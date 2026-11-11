import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Calendar from '..'

test('page navigation uses named native buttons in both modes', async () => {
  const w = mount(Calendar, { props: { modelValue: new Date(2026, 8, 16) } })
  try {
    const previous = w.get('button[aria-label="上一月"]')
    expect(previous.attributes('type')).toBe('button')
    await previous.trigger('click')
    expect(w.emitted('panel-change')).toHaveLength(1)
    await w.setProps({ mode: 'year' })
    expect(w.find('button[aria-label="上一年"]').exists()).toBe(true)
    expect(w.find('button[aria-label="下一年"]').exists()).toBe(true)
  } finally { w.unmount() }
})

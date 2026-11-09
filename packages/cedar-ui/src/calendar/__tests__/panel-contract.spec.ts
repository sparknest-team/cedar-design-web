import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Calendar from '..'

test('compact year panel uses month choices and reacts to width and panel changes', async () => {
  const w = mount(Calendar, { props: { modelValue: new Date(2026, 8, 16), mode: 'year', panel: true, panelWidth: 300 } })
  try {
    expect(w.attributes('style')).toContain('width: 300px')
    expect(w.findAll('.c-calendar-month-with-days')).toHaveLength(0)
    expect(w.findAll('.c-calendar-year .c-calendar-date')).toHaveLength(12)
    await w.setProps({ panelWidth: 340 })
    expect(w.attributes('style')).toContain('width: 340px')
    await w.setProps({ panel: false })
    expect(w.findAll('.c-calendar-month-with-days')).toHaveLength(12)
  } finally { w.unmount() }
})

test('panel Today is an actionable selection and respects allowSelect', async () => {
  const w = mount(Calendar, { props: { panel: true, panelTodayBtn: true, allowSelect: false } })
  try {
    const today = w.get('.c-calendar-footer-btn-wrapper button')
    expect(today.attributes('disabled')).toBeDefined()
    await today.trigger('click'); expect(w.emitted('change')).toBeUndefined()
    await w.setProps({ allowSelect: true })
    await today.trigger('click'); expect(w.emitted('change')).toHaveLength(1)
  } finally { w.unmount() }
})

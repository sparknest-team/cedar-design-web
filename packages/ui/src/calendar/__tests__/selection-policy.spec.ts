import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Calendar from '..'

test.each([false, true])('allowSelect=%s governs day cells and the today action', async allowSelect => {
  const w = mount(Calendar, { props: { modelValue: new Date(2026, 8, 16), allowSelect }, slots: { default: ({ date }: { date: number }) => `day-${date}` } })
  try {
    const day = w.findAll('.c-calendar-cell-in-view').find(n => n.text().includes('day-17'))!
    await day.get('.c-calendar-date').trigger('click')
    expect(w.emitted('change')?.length ?? 0).toBe(allowSelect ? 1 : 0)
    const today = w.findAll('button').find(n => n.text().includes('今天'))!
    expect(today.attributes('disabled') !== undefined).toBe(!allowSelect)
    await today.trigger('click')
    expect(w.emitted('change')?.length ?? 0).toBe(allowSelect ? 2 : 0)
  } finally { w.unmount() }
})

test('year view blocks selection while page navigation remains available', async () => {
  const w = mount(Calendar, { props: { modelValue: new Date(2026, 8, 16), mode: 'year', allowSelect: false } })
  try {
    await w.findAll('.c-calendar-date')[0].trigger('click')
    expect(w.emitted('change')).toBeUndefined()
    await w.findAll('.c-calendar-header-icon')[1].trigger('click')
    expect(w.emitted('panel-change')).toHaveLength(1)
    expect(w.emitted('update:modelValue')).toBeUndefined()
  } finally { w.unmount() }
})

test('uncontrolled selection resumes after allowSelect is enabled', async () => {
  const w = mount(Calendar, { props: { defaultValue: new Date(2026, 8, 16), allowSelect: false }, slots: { default: ({ date }: { date: number }) => `day-${date}` } })
  try {
    const day = () => w.findAll('.c-calendar-cell-in-view').find(n => n.text().includes('day-17'))!.get('.c-calendar-date')
    await day().trigger('click')
    expect(w.emitted('change')).toBeUndefined()
    await w.setProps({ allowSelect: true })
    await day().trigger('click')
    expect(w.emitted('change')).toHaveLength(1)
  } finally { w.unmount() }
})

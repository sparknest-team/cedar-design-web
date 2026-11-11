import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { h, ref } from 'vue'
import Calendar from '..'
import ConfigProvider from '../../config-provider'
import enUS from '../../locale/lang/en-us'
import zhCN from '../../locale/lang/zh-cn'

test('week header and day grid follow dynamic week settings', async () => {
  const w = mount(Calendar, { props: { modelValue: new Date(2026, 8, 16), dayStartOfWeek: 0, isWeek: false } })
  try {
    const weekdays = () => w.findAll('.c-calendar-week-list-item').map(n => n.text())
    const before = weekdays()
    const firstDate = () => w.get('.c-calendar-cell:not(.c-calendar-cell-week) .c-calendar-date-value').text()
    expect(firstDate()).toBe('30')
    await w.setProps({ dayStartOfWeek: 1, isWeek: true })
    expect(weekdays()).toHaveLength(8)
    expect(weekdays()[1]).toBe(before[1])
    expect(weekdays()[7]).toBe(before[0])
    expect(firstDate()).toBe('31')
    expect(w.findAll('.c-calendar-cell-week')).toHaveLength(6)
  } finally { w.unmount() }
})

test('mode labels and heading follow the active locale', async () => {
  const locale = ref(zhCN)
  const w = mount({ render: () => h(ConfigProvider, { locale: locale.value }, () => h(Calendar, { modelValue: new Date(2026, 8, 16) })) })
  try {
    const heading = w.get('.c-calendar-header-value').text()
    const choices = w.get('.c-calendar-header-right').text()
    locale.value = enUS; await flushPromises()
    expect(w.get('.c-calendar-header-value').text()).not.toBe(heading)
    expect(w.get('.c-calendar-header-right').text()).not.toBe(choices)
  } finally { w.unmount() }
})

test('controlled mode reports requests and updates header and available modes', async () => {
  const w = mount(Calendar, { props: { modelValue: new Date(2026, 8, 16), mode: 'month' } })
  try {
    const year = w.findAll('input[type="radio"]').find(n => (n.element as HTMLInputElement).value === 'year')!
    await year.trigger('click')
    expect(w.emitted('update:mode')?.[0]).toEqual(['year'])
    await w.setProps({ mode: 'year', modes: ['year'] })
    expect(w.get('.c-calendar-header-value').text()).not.toContain('09')
    expect(w.findAll('input[type="radio"]')).toHaveLength(1)
  } finally { w.unmount() }
})

test('a rejected controlled mode proposal is not cached as the uncontrolled value', async () => {
  const w = mount(Calendar, { props: { mode: 'month', defaultMode: 'month' } })
  try {
    const year = w.findAll('input[type="radio"]').find(n => (n.element as HTMLInputElement).value === 'year')!
    await year.trigger('click')
    expect(w.emitted('update:mode')?.[0]).toEqual(['year'])
    await w.setProps({ mode: undefined })
    expect(w.classes()).toContain('c-calendar-mode-month')
  } finally { w.unmount() }
})

test('external model changes locate the selected date without interfering with browsing', async () => {
  const w = mount(Calendar, { props: { modelValue: new Date(2026, 8, 16) } })
  try {
    await w.get('button[aria-label="下一月"]').trigger('click')
    expect(w.get('.c-calendar-header-value').text()).toContain('10')
    await w.setProps({ modelValue: new Date(2026, 8, 16) })
    expect(w.get('.c-calendar-header-value').text()).toContain('10')
    const events = w.emitted('panel-change')?.length
    await w.setProps({ modelValue: new Date(2027, 1, 3) })
    expect(w.get('.c-calendar-header-value').text()).toContain('2027')
    expect(w.get('[data-calendar-cell="2027-02-03"][data-calendar-current]').element.closest('.c-calendar-cell')?.classList.contains('c-calendar-cell-selected')).toBe(true)
    expect(w.emitted('panel-change')?.length).toBe(events)
  } finally { w.unmount() }
})

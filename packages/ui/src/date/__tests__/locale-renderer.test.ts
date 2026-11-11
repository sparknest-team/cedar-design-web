import dayjs from 'dayjs'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import DatePicker from '../DatePicker.vue'
import { methods } from '../../_utils/date'
import { useLocale } from '../../locale'

const wrappers: ReturnType<typeof mount>[] = []
afterEach(() => { wrappers.splice(0).forEach(wrapper => wrapper.unmount()); useLocale('zh-CN') })
describe('date renderer locale isolation', () => {
  it('isolates two week starts through update and unmount without mutating host Dayjs', async () => {
    useLocale('zh-CN')
    const host = dayjs.locale()
    const base = dayjs.Ls['zh-cn']
    const baseWeekStart = base.weekStart
    const sunday = mount(DatePicker, { props: { type: 'week', modelValue: '2021-01-03', pickerValue: '2021-01-01', dayStartOfWeek: 0 } })
    const monday = mount(DatePicker, { props: { type: 'week', modelValue: '2021-01-03', pickerValue: '2021-01-01', dayStartOfWeek: 1 } })
    wrappers.push(sunday, monday)
    const week = (wrapper: typeof sunday) => wrapper.findAll('.c-picker-row-week').find(row =>
      row.findAll('.c-picker-cell-in-view .c-picker-date-value').some(cell => cell.text() === '3'))!.find('.c-picker-cell-week').text()
    expect(week(sunday)).toBe('1')
    expect(week(monday)).toBe('53')
    await monday.setProps({ dayStartOfWeek: 2 })
    expect(week(sunday)).toBe('1')
    expect(week(monday)).toBe('1')
    monday.unmount()
    wrappers.pop()
    expect(week(sunday)).toBe('1')
    expect(dayjs.locale()).toBe(host)
    expect(dayjs.Ls['zh-cn']).toBe(base)
    expect(base.weekStart).toBe(baseWeekStart)
    expect(sunday.emitted('update:modelValue')).toBeUndefined()
  })
  it('does not equate weeks with the same number in different years', () => {
    expect(methods.isSameWeek(dayjs('2025-01-05'), dayjs('2026-01-04'), 0)).toBe(false)
    expect(methods.isSameWeek(dayjs('2025-01-05'), dayjs('2025-01-11'), 0)).toBe(true)
  })
})

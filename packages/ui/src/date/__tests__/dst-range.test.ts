import { expect, it } from 'vitest'
import { fromCalendarValue } from '../calendar-value'
import { dateTimeDisabledRules } from '../date-time-rules'
import { normalizeDateRange } from '../normalize-date-range'

it('retains second-fold instants and Date precision on untouched endpoints', () => {
  const options = { timeZone: 'America/New_York', showTime: true, valueFormat: 'Date' }
  const first = new Date('2026-11-01T06:30:00.123Z')
  const value = fromCalendarValue(['2026-11-01 01:30:00', '2026-11-02 02:30:00'], options, [first, new Date('2026-11-01T07:30:00Z')])
  expect(value).toEqual([first, new Date('2026-11-02T07:30:00Z')])
  expect((value as Date[])[0]).not.toBe(first)
})
it('orders fold ranges by actual instants and swaps civil dates using the correct offset', () => {
  const options = { timeZone: 'America/New_York', showTime: true, valueFormat: 'timestamp' }
  const first = Date.parse('2026-11-01T05:45:00Z'), second = Date.parse('2026-11-01T06:15:00Z')
  expect(normalizeDateRange([second, first], options)).toEqual([first, second])
  expect(normalizeDateRange([Date.parse('2026-03-09T05:30:00Z'), Date.parse('2026-03-07T08:30:00Z')], { ...options, exchangeTime: false })).toEqual([Date.parse('2026-03-07T06:30:00Z'), Date.parse('2026-03-09T07:30:00Z')])
})
it('does not disable an entire hour when only the first thirty minutes are skipped', () => {
  const rules = dateTimeDisabledRules(new Date('2026-10-03T16:00:00Z'), { timeZone: 'Australia/Lord_Howe', showTime: true })
  expect(rules.disabledHours?.()).not.toContain(2)
  expect(rules.disabledMinutes?.(2)).toContain(29)
  expect(rules.disabledMinutes?.(2)).not.toContain(30)
})

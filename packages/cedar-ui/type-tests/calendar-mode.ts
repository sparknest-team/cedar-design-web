import { h } from 'vue'
import Calendar from '../src/calendar'
import type { CalendarEmits, CalendarSlots } from '../src'

h(Calendar, { mode: 'month', 'onUpdate:mode': (value: 'month' | 'year') => value })
// @ts-expect-error unsupported calendar display mode
h(Calendar, { mode: 'week' })

const selected: CalendarEmits['change'] = [new Date()]
const slots: CalendarSlots = { default: ({ year, month, date }) => `${year}-${month}-${date}`, header: ({ year }) => `${year}` }
void [selected, slots]
// @ts-expect-error calendar selection payload is a Date
const invalid: CalendarEmits['change'] = ['2026-01-01']
void invalid

import type { TimeInstance, TimeRangeInstance } from '@cedar-design/ui'
type TimeChange = Parameters<NonNullable<TimeInstance['$props']['onChange']>>[0]
type RangeChange = Parameters<NonNullable<TimeRangeInstance['$props']['onChange']>>[0]
export const empty: TimeChange = null
export const epoch: TimeChange = 0
export const date: TimeChange = new Date()
export const emptyRange: RangeChange = null
export const dates: RangeChange = [new Date(), 0]

import type { TimeEmits, TimeRangeEmits, TimeSlots, TimeRangeSlots } from '@cedar-design/ui'
import type { TimeEmits as SubEmits, TimeSlots as SubSlots } from '@cedar-design/ui/time'
import type { TimeRangeEmits as SubRangeEmits } from '@cedar-design/ui/time-range'
export const change: TimeEmits['change'] = [null, undefined]
export const rangeChange: TimeRangeEmits['change'] = [null, undefined]
export const normal: TimeEmits['select'] = ['09:30', new Date()]
export const partial: TimeRangeEmits['select'] = [['09:30', undefined], [new Date(), undefined]]
export const subChange: SubEmits['change'] = change
export const subRange: SubRangeEmits['change'] = rangeChange
export const slots: TimeSlots = { read: ({ value, text }) => text + String(value), 'suffix-icon': ({ focus, popupOpen }) => String(focus || popupOpen), 'clear-icon': ({ clear }) => { clear(); return '' } }
export const subSlots: SubSlots = slots
export const rangeSlots: TimeRangeSlots = { read: ({ value, text }) => text + String(value), separator: () => 'to' }
// @ts-expect-error Explicit clear is not a normal select notification.
export const invalidSelect: TimeEmits['select'] = [null, undefined]

export const desktopTrigger: TimeSlots = { default: () => 'custom trigger' }
// @ts-expect-error Time has no forwarded loading-icon field slot.
export const invalidLoading: TimeSlots = { 'loading-icon': () => 'unsupported' }

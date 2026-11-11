import type { InjectionKey } from 'vue'
import type { Dayjs } from 'dayjs'

export interface CalendarKeyboard {
  cell: (time: Dayjs, unit: 'day' | 'month', current?: boolean) => Record<string, unknown>
}

export const calendarKeyboardKey: InjectionKey<CalendarKeyboard> = Symbol('calendarKeyboard')

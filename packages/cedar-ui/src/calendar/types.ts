import type { VNodeChild } from 'vue'

export interface CalendarEmits {
  'update:modelValue': [date: Date]
  'update:mode': [mode: 'month' | 'year']
  change: [date: Date]
  'panel-change': [date: Date]
}

export interface CalendarSlots {
  default?(props: { year: number; month: number; date: number }): VNodeChild
  header?(props: { year: number; month: number }): VNodeChild
}

import type { Dayjs } from 'dayjs'
import type { TimeDisabledRules } from '../time-rules'

// 支持：Date ｜ 字符串 ｜ 时间戳
export type { TimeValue } from '../time-value'

export interface BasePanelProps extends TimeDisabledRules {
  min?: string
  max?: string
  disableConfirm: boolean
  use12Hours: boolean
  step?: { hour?: number; minute?: number; second?: number }
  hideDisabledOptions: boolean
}

export interface PanelProps extends Omit<BasePanelProps, 'disableConfirm'> {
  value?: Dayjs
  defaultValue?: Dayjs
  format?: string
  visible: boolean
  hideFooter: boolean
  confirmDisabled?: boolean
  isRange: boolean
  disabled: boolean
}

export interface RangePanelProps extends Omit<PanelProps, 'value'> {
  value?: Array<Dayjs | undefined>
}

export type { TimePickerProps } from './props'

export interface TimeListItem {
  value: number | string
  label: string
  disabled?: boolean
  selected?: boolean
}

export type TimeList = TimeListItem[]

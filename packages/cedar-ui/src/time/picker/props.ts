import type { ExtractPublicPropTypes, PropType } from 'vue'
import type { TimeValue } from '../time-value'
import type { TimeStep, TimeDisabledRules } from '../time-rules'

/** Inclusive 24-hour clock bounds, independent of display format. */
const panelProps = {
  /** 最早可选时间，HH:mm 或 HH:mm:ss，包含端点。 */
  min: String,
  /** 最晚可选时间，HH:mm 或 HH:mm:ss，包含端点。 */
  max: String,
  disabled: Boolean,
  readonly: Boolean,
  format: String,
  use12Hours: Boolean,
  step: Object as PropType<TimeStep>,
  disabledHours: Function as PropType<TimeDisabledRules['disabledHours']>,
  disabledMinutes: Function as PropType<TimeDisabledRules['disabledMinutes']>,
  disabledSeconds: Function as PropType<TimeDisabledRules['disabledSeconds']>,
  hideDisabledOptions: Boolean,
  disableConfirm: Boolean,
  showNextDay: Boolean,
}

export const timePickerProps = {
  ...panelProps,
  type: { type: String as PropType<'time' | 'time-range'>, default: 'time' },
  modelValue: [String, Number, Date, Array] as PropType<TimeValue | TimeValue[]>,
  defaultValue: [String, Number, Date, Array] as PropType<TimeValue | TimeValue[]>,
}

export const timeRangePickerProps = {
  ...panelProps,
  modelValue: Array as PropType<TimeValue[]>,
  defaultValue: Array as PropType<TimeValue[]>,
}

export type TimePickerProps = ExtractPublicPropTypes<typeof timePickerProps>
export type TimeRangePickerProps = ExtractPublicPropTypes<typeof timeRangePickerProps>

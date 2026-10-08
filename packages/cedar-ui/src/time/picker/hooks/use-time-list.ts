import { clockHour, unitSequence } from '../../../_utils/picker-data'
import { isClockOutsideBounds } from '../../time-rules'
// 生成时分秒的列数据，用于展示选项

import { toRefs, computed, ComputedRef } from 'vue'
import { padStart } from '../../../_utils/pad'
import { PanelProps, TimeList } from '../types'
import { getColumnsFromFormat } from '../utils'

interface TimeListProps
  extends Pick<
    PanelProps,
    'format' | 'step' | 'min' | 'max' | 'use12Hours' | 'disabledHours' | 'disabledMinutes' | 'disabledSeconds' | 'hideDisabledOptions'
  > {
  format: string
  selectedHour: number | undefined
  selectedMinute: number | undefined
  selectedSecond: number | undefined
  selectedAmpm: string
  disabled?: boolean
}

export default function useTimeList(props: TimeListProps): {
  hours: ComputedRef<TimeList>
  minutes: ComputedRef<TimeList>
  seconds: ComputedRef<TimeList>
  ampmList: ComputedRef<TimeList>
} {
  const {
    format,
    step,
    use12Hours,
    hideDisabledOptions,
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    selectedHour,
    selectedMinute,
    selectedSecond,
    selectedAmpm,
    disabled,
  } = toRefs(props)

  const actualHour = (hour: number) =>
    clockHour(hour, use12Hours.value ? (selectedAmpm.value === 'pm' ? 'pm' : 'am') : undefined)
  const selectedClockHour = computed(() =>
    selectedHour.value === undefined ? undefined : actualHour(selectedHour.value),
  )
  const outside = (hour: number, minute = 0, second = 0, unit: 'hour' | 'minute' | 'second' = 'second') =>
    isClockOutsideBounds({ hour, minute, second }, props.min, props.max, unit)

  // 小时：显示 1–12，禁用回调始终使用 0–23。
  const hours = computed(() => {
    const { hour: hourStep = 1 } = step?.value || {}
    const disabledList = disabledHours?.value?.() || []
    const isDisabled = (hour: number) => disabledList.includes(actualHour(hour)) || outside(actualHour(hour), 0, 0, 'hour')
    let list = unitSequence(24, hourStep)
    if (use12Hours.value) {
      list = list.filter((hour) => selectedAmpm.value === 'pm' ? hour >= 12 : hour < 12)
        .map((hour) => hour % 12 || 12)
    }
    if (hideDisabledOptions.value) {
      list = list.filter((h) => !isDisabled(h))
    }
    return list.map((h) => ({
      label: padStart(h, 2, '0'),
      value: h,
      selected: selectedHour.value === h,
      disabled: disabled?.value || isDisabled(h),
    }))
  })

  // 分钟
  const minutes = computed(() => {
    const { minute: minuteStep = 1 } = step?.value || {}
    const disabledList = disabledMinutes?.value?.(selectedClockHour.value) || []
    const isDisabled = (minute: number) => disabledList.includes(minute) ||
      (selectedClockHour.value !== undefined && outside(selectedClockHour.value, minute, 0, 'minute'))
    let list = unitSequence(60, minuteStep)
    if (hideDisabledOptions.value) {
      list = list.filter((m) => !isDisabled(m))
    }
    return list.map((m) => ({
      label: padStart(m, 2, '0'),
      value: m,
      selected: selectedMinute.value === m,
      disabled: disabled?.value || isDisabled(m),
    }))
  })

  // 秒
  const seconds = computed(() => {
    const { second: secondStep = 1 } = step?.value || {}
    const disabledList = disabledSeconds?.value?.(selectedClockHour.value, selectedMinute.value) || []
    const isDisabled = (second: number) => disabledList.includes(second) ||
      (selectedClockHour.value !== undefined && selectedMinute.value !== undefined &&
        outside(selectedClockHour.value, selectedMinute.value, second))
    let list = unitSequence(60, secondStep)
    if (hideDisabledOptions.value) {
      list = list.filter((s) => !isDisabled(s))
    }
    return list.map((s) => ({
      label: padStart(s, 2, '0'),
      value: s,
      selected: selectedSecond.value === s,
      disabled: disabled?.value || isDisabled(s),
    }))
  })

  // ampm
  const AMPM = ['am', 'pm']
  const ampmList = computed(() => {
    const isUpperCase = getColumnsFromFormat(format.value).list.includes('A')
    return AMPM.map((a) => ({
      label: isUpperCase ? a.toUpperCase() : a,
      value: a,
      selected: selectedAmpm.value === a,
      disabled: disabled?.value,
    }))
  })

  return {
    hours,
    minutes,
    seconds,
    ampmList,
  }
}

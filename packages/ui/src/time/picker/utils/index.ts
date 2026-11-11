import { clockSeconds, isOvernight } from '../../../_utils/picker-data'
import type { Dayjs } from 'dayjs'
import { dayjs } from '../../../_utils/date'
import { isArray, isUndefined, isDayjs } from '../../../_utils/is'
import { TimePickerProps } from '../types'
import { isClockDisabled } from '../../time-rules'

export { getTimeFormatColumns as getColumnsFromFormat } from '../../time-format'

const scrollTasks = new WeakMap<HTMLElement, () => void>()

export function scrollTo(element: HTMLElement, to: number, duration: number) {
  scrollTasks.get(element)?.()
  const view = element.ownerDocument.defaultView
  let active = true
  let frame: { id?: number } | undefined
  const current = () => active && scrollTasks.get(element) === cancel
  const cancel = () => {
    active = false
    if (frame?.id !== undefined) view?.cancelAnimationFrame(frame.id)
    frame = undefined
    if (scrollTasks.get(element) === cancel) scrollTasks.delete(element)
  }
  scrollTasks.set(element, cancel)
  const reduced = () => view?.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
  const finish = () => {
    if (!current()) return
    element.scrollTop = to
    if (current()) cancel()
  }
  if (!view || !Number.isFinite(duration) || duration <= 0 || reduced()) {
    finish()
    return cancel
  }

  let startedAt: number | undefined
  let from = 0
  const schedule = () => {
    if (!current()) return
    const ticket: { id?: number } = {}
    frame = ticket
    ticket.id = view.requestAnimationFrame((time) => {
      if (!current() || frame !== ticket) return
      frame = undefined
      const shouldReduce = reduced()
      if (!current()) return
      if (shouldReduce) { finish(); return }
      if (startedAt === undefined) {
        startedAt = time
        from = element.scrollTop
      }
      if (!current()) return
      const progress = Math.min(1, Math.max(0, (time - startedAt) / duration))
      element.scrollTop = from + (to - from) * progress
      if (!current()) return
      if (progress === 1) cancel()
      else schedule()
    })
    if (!current()) view.cancelAnimationFrame(ticket.id)
  }
  schedule()
  return cancel
}

export function getFormattedValue(time: Dayjs, format: string): string
export function getFormattedValue(time: Dayjs | undefined, format: string): string | undefined
export function getFormattedValue(
  time: Array<Dayjs | undefined> | undefined,
  format: string,
): Array<string | undefined> | undefined
export function getFormattedValue(
  time: Dayjs | Array<Dayjs | undefined> | undefined,
  format: string,
): string | Array<string | undefined> | undefined {
  const formatValue = (time: any): any => {
    if (isArray(time)) {
      return time.map((t) => formatValue(t))
    }

    if (isUndefined(time)) return undefined

    return time.format(format)
  }

  return formatValue(time)
}

export function isValidRangeValue(value: any): value is undefined | Dayjs[] {
  if (isUndefined(value)) return true
  if (!isArray(value)) return false
  return value.length === 0 || (value.length === 2 && isDayjs(value[0]) && isDayjs(value[1]))
}

/** True when both sides are Dayjs and end clock time is earlier than start (overnight). */
export function isTimeRangeNextDay(start?: Dayjs, end?: Dayjs): boolean {
  if (!start || !end || !isDayjs(start) || !isDayjs(end)) {
    return false
  }
  return isOvernight(clockSeconds(start.hour(), start.minute(), start.second()), clockSeconds(end.hour(), end.minute(), end.second()))
}

export function isValidInputValue(time: string, format: string): boolean {
  if (!time) return false

  return typeof time === 'string' && dayjs(time, format).format(format) === time
}

export function isDisabledTime(
  value: Dayjs | undefined,
  {
    disabledHours,
    disabledMinutes,
    disabledSeconds,
  }: {
    disabledHours: TimePickerProps['disabledHours']
    disabledMinutes: TimePickerProps['disabledMinutes']
    disabledSeconds: TimePickerProps['disabledSeconds']
  },
) {
  if (!value) return false

  const hour = value.hour()
  const minute = value.minute()
  const second = value.second()

  return isClockDisabled(
    { hour, minute, second },
    { hours: disabledHours, minutes: disabledMinutes, seconds: disabledSeconds },
  )
}

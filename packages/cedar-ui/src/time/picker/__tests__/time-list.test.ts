import { reactive } from 'vue'
import { describe, expect, it, vi } from 'vitest'
import useTimeList from '../hooks/use-time-list'

describe('12-hour disabled columns', () => {
  it('reacts to inclusive second bounds and hides only disabled choices', () => {
    const props = reactive({
      format: 'hh:mm:ss a', use12Hours: true, hideDisabledOptions: false,
      selectedHour: 1, selectedMinute: 30, selectedSecond: 38, selectedAmpm: 'pm',
      min: '13:30:38', max: '13:31:02',
    })
    const list = useTimeList(props)
    expect(list.hours.value.find((item) => item.value === 1)?.disabled).toBe(false)
    expect(list.hours.value.find((item) => item.value === 2)?.disabled).toBe(true)
    expect(list.minutes.value.find((item) => item.value === 29)?.disabled).toBe(true)
    expect(list.seconds.value.find((item) => item.value === 37)?.disabled).toBe(true)
    expect(list.seconds.value.find((item) => item.value === 38)?.disabled).toBe(false)
    props.hideDisabledOptions = true
    expect(list.hours.value.map((item) => item.value)).toEqual([1])
    expect(list.minutes.value.map((item) => item.value)).toEqual([30, 31])
    props.selectedMinute = 31
    expect(list.seconds.value.map((item) => item.value)).toEqual([0, 1, 2])
    props.selectedAmpm = 'am'
    expect(list.hours.value).toHaveLength(0)
  })
  it('anchors hour steps at midnight in both AM and PM', () => {
    const props = reactive({
      format: 'hh:mm a', use12Hours: true, hideDisabledOptions: false,
      selectedHour: 3, selectedMinute: 0, selectedSecond: 0, selectedAmpm: 'pm',
      step: { hour: 5 },
    })
    const list = useTimeList(props)
    expect(list.hours.value.map((item) => item.value)).toEqual([3, 8])
    props.selectedAmpm = 'am'
    expect(list.hours.value.map((item) => item.value)).toEqual([12, 5, 10])
  })
  it('uses real hours and reacts to period changes', () => {
    const minutes = vi.fn(() => [20])
    const seconds = vi.fn(() => [30])
    const props = reactive({
      format: 'hh:mm:ss a', use12Hours: true, hideDisabledOptions: false,
      selectedHour: 1, selectedMinute: 20, selectedSecond: 30, selectedAmpm: 'pm',
      disabledHours: () => [0, 13], disabledMinutes: minutes, disabledSeconds: seconds,
    })
    const list = useTimeList(props)
    expect(list.hours.value.find((item) => item.value === 1)?.disabled).toBe(true)
    expect(list.minutes.value.find((item) => item.value === 20)?.disabled).toBe(true)
    expect(minutes).toHaveBeenLastCalledWith(13)
    expect(list.seconds.value.find((item) => item.value === 30)?.disabled).toBe(true)
    expect(seconds).toHaveBeenLastCalledWith(13, 20)
    props.selectedAmpm = 'am'
    props.selectedHour = 12
    expect(list.hours.value.find((item) => item.value === 12)?.disabled).toBe(true)
    expect(list.minutes.value.length).toBe(60)
    expect(minutes).toHaveBeenLastCalledWith(0)
    props.hideDisabledOptions = true
    expect(list.hours.value.some((item) => item.value === 12)).toBe(false)
    props.selectedAmpm = 'pm'
    expect(list.hours.value.some((item) => item.value === 12)).toBe(true)
    expect(list.hours.value.some((item) => item.value === 1)).toBe(false)
  })
})

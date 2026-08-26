import { describe, expect, test } from 'vitest'
import { TimeRange, timeRangeProps } from '../index'

describe('TimeRange', () => {
  test('exposes a validated contract', () => {
    expect(TimeRange.name).toBe('CTimeRange')
    expect(timeRangeProps.size.validator('lg')).toBe(true)
    expect(timeRangeProps.size.validator('invalid' as never)).toBe(false)
  })
})

import { describe, expect, test } from 'vitest'
import { DateRange, dateRangeProps } from '../index'

describe('DateRange', () => {
  test('exposes a validated contract', () => {
    expect(DateRange.name).toBe('CDateRange')
    expect(dateRangeProps.type.validator('week')).toBe(true)
    expect(dateRangeProps.type.validator('invalid' as never)).toBe(false)
  })
})

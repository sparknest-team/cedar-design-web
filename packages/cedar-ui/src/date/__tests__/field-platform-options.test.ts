import { describe, expect, it } from 'vitest'
import { dateProps } from '../props'
import { dateRangeProps } from '../../date-range/props'

describe('desktop date field presentation boundaries', () => {
  it('does not expose no-op mobile view options', () => {
    expect(dateProps).not.toHaveProperty('pickerProps')
    expect(dateRangeProps).not.toHaveProperty('pickerProps')
    expect(dateRangeProps).not.toHaveProperty('datePickerProps')
    expect(dateProps).toHaveProperty('datePickerProps')
    expect(dateRangeProps).toHaveProperty('dateRangePickerProps')
    expect(dateProps).toHaveProperty('timePickerProps')
    expect(dateRangeProps).toHaveProperty('timePickerProps')
  })
})

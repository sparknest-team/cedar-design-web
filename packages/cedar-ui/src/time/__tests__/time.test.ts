import { describe, expect, test } from 'vitest'
import { Time, timeProps } from '../index'

describe('Time', () => {
  test('exposes a validated contract', () => {
    expect(Time.name).toBe('CTime')
    expect(timeProps.size.validator('sm')).toBe(true)
    expect(timeProps.size.validator('invalid' as never)).toBe(false)
  })
})

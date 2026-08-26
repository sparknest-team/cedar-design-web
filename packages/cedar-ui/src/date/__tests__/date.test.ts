import { describe, expect, test } from 'vitest'
import { Date, dateProps } from '../index'

describe('Date', () => {
  test('exposes a validated contract', () => {
    expect(Date.name).toBe('CDate')
    expect(dateProps.type.validator('quarter')).toBe(true)
    expect(dateProps.type.validator('invalid' as never)).toBe(false)
  })
})

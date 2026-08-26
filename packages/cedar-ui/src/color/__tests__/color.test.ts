import { describe, expect, test } from 'vitest'
import { Color, colorProps } from '../index'

describe('Color', () => {
  test('exposes a validated contract', () => {
    expect(Color.name).toBe('CColor')
    expect(colorProps.size.validator('md')).toBe(true)
    expect(colorProps.size.validator('invalid' as never)).toBe(false)
  })
})

import { describe, expect, test } from 'vitest'
import Themes from '../index'

describe('built-in themes', () => {
  test('exposes two theme families with light and dark modes', () => {
    expect(Object.keys(Themes)).toEqual(['default', 'maple'])
    expect(Object.keys(Themes.default)).toEqual(['light', 'dark'])
    expect(Object.keys(Themes.maple)).toEqual(['light', 'dark'])
  })

  test('uses distinct default and maple brand colors', () => {
    expect(Themes.default.light['--c-primary-6']).toBe('0, 190, 190')
    expect(Themes.default.dark['--c-primary-6']).toBe('41, 203, 197')
    expect(Themes.maple.light['--c-primary-6']).toBe('194, 65, 12')
    expect(Themes.maple.dark['--c-primary-6']).toBe('251, 146, 60')
  })
})

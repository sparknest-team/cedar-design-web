import { expect, it } from 'vitest'
import * as Config from '../index'

it('delegates all theme ownership to ThemeProvider without old aliases', () => {
  expect(Config.configProviderProps).not.toHaveProperty('theme')
  expect(Config).not.toHaveProperty('cedarThemes')
})

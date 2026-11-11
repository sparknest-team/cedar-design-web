import { afterEach, expect, test } from 'vitest'
import { addI18nMessages, cedarEnUS, cedarZhCN, getLocale, useLocale } from '..'

afterEach(() => useLocale('zh-CN'))

test('public language packs can be registered and selected', () => {
  expect(cedarZhCN.locale).toBe('zh-CN')
  expect(cedarEnUS.locale).toBe('en-US')
  addI18nMessages({ 'en-US': cedarEnUS })
  useLocale('en-US')
  expect(getLocale()).toBe('en-US')
})

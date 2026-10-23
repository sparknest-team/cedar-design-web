import { mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import { nextTick } from 'vue'
import Header from '../picker/panels/Header.vue'
import { addI18nMessages, getLocale, useLocale } from '../../locale'
import enUS from '../../locale/lang/en-us'

const originalLocale = getLocale()
afterEach(() => useLocale(originalLocale))

test('header navigation names react to locale and match the panel unit', async () => {
  addI18nMessages({ 'en-US': enUS })
  useLocale('zh-CN')
  const next = vi.fn()
  const owner = mount(Header, { props: { prefixCls: 'c-picker', title: '2025', onPrev: vi.fn(), onNext: next } })
  expect(owner.find('[aria-label="下一月"]').exists()).toBe(true)
  useLocale('en-US')
  await nextTick()
  await owner.get('[aria-label="Next month"]').trigger('click')
  expect(next).toHaveBeenCalledTimes(1)
  await owner.setProps({ mode: 'month' })
  expect(owner.find('[aria-label="Next year"]').exists()).toBe(true)
  await owner.setProps({ mode: 'year' })
  expect(owner.find('[aria-label="Next years"]').exists()).toBe(true)
  owner.unmount()
})

test('placeholder arrows are disabled and excluded from keyboard/accessibility navigation', async () => {
  const next = vi.fn()
  const owner = mount(Header, { props: { prefixCls: 'c-picker', title: '2025', onNext: next } })
  const hidden = owner.findAll('.c-picker-header-icon-hidden')
  expect(hidden).toHaveLength(3)
  for (const button of hidden) {
    expect(button.element.disabled).toBe(true)
    expect(button.attributes('aria-hidden')).toBe('true')
    expect(button.attributes('tabindex')).toBe('-1')
    await button.trigger('click')
  }
  expect(next).not.toHaveBeenCalled()
  const visible = owner.get('button:not(.c-picker-header-icon-hidden)')
  expect(visible.element.disabled).toBe(false)
  expect(visible.attributes('aria-hidden')).toBe('false')
  await visible.trigger('click')
  expect(next).toHaveBeenCalledTimes(1)
  owner.unmount()
})

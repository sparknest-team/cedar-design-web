import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import DatePicker from '../DatePicker.vue'
import DateRangePicker from '../../date-range/DateRangePicker.vue'
import { dateMonthLabel } from '../date-labels'
import { addI18nMessages, useLocale } from '../../locale'
import enUS from '../../locale/lang/en-us'
const setLocale = (lang: string) => { addI18nMessages({ 'en-US': enUS }); useLocale(lang) }

afterEach(() => setLocale('zh-CN'))
describe('date month labels', () => {
  it('selects short by default and full only when disabled', () => {
    expect(dateMonthLabel(undefined, 'Jan', 'January')).toBe('Jan')
    expect(dateMonthLabel(true, 'Jan', 'January')).toBe('Jan')
    expect(dateMonthLabel(false, 'Jan', 'January')).toBe('January')
  })
  it.each([DatePicker, DateRangePicker])('reactively changes month labels without selecting a date', async (component) => {
    setLocale('en-US')
    const wrapper = mount(component, { props: {
      type: 'month', pickerValue: '2025-01', disableConfirm: false, 
    } })
    expect(wrapper.text()).toContain('Jan')
    expect(wrapper.text()).not.toContain('January')
    await wrapper.setProps({ abbreviation: false })
    expect(wrapper.text()).toContain('January')
      expect(wrapper.find('.c-date-panel-actions').text()).toContain('Ok')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    await wrapper.setProps({ abbreviation: true })
    expect(wrapper.text()).not.toContain('January')
    setLocale('zh-CN')
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).not.toContain('Jan')
      expect(wrapper.find('.c-date-panel-actions').text()).toContain('确定')
    wrapper.unmount()
  })
})

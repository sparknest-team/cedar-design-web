import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import MonthView from '../components/SchedulerMonthView.vue'
import { schedulerMessages } from '../locale'

test('month labels retain native formatting and update immediately with the locale', async () => {
  const day = new Date(2026, 9, 24)
  const wrapper = mount(MonthView, {
    props: { days: [day], date: day, weekdayCount: 1, locale: 'zh-CN', locked: false,
      disabled: false, selectionMode: false, selectedKeys: [], monthLimit: 3,
      events: [], previewTime: '', messages: schedulerMessages['zh-CN'] },
  })
  try {
    for (const locale of ['zh-CN', 'en-US', 'fr-FR', 'zh-CN']) {
      await wrapper.setProps({ locale })
      expect(wrapper.get('.c-scheduler__month-heading').text()).toBe(day.toLocaleDateString(locale, { weekday: 'short' }))
      expect(wrapper.get('.c-scheduler__month-date').attributes('aria-label')).toContain(day.toLocaleDateString(locale, {
        month: 'short', day: 'numeric', weekday: 'short',
      }))
    }
  } finally { wrapper.unmount() }
})

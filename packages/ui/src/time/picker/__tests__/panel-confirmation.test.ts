import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { dayjs } from '../../../_utils/date'
import TimePicker from '../TimePicker.vue'
import Panel from '../Panel.vue'

describe('Cedar panel confirmation baseline', () => {
  it('exposes extra and custom actions and confirms unchanged values', async () => {
    const wrapper = mount(TimePicker, {
      props: { modelValue: '09:00', format: 'HH:mm' },
      slots: {
        extra: () => h('span', { 'data-extra': '' }, '说明'),
        actions: ({ confirm, canConfirm }) => h('button', { 'data-confirm': '', disabled: !canConfirm, onClick: confirm }, '提交'),
      },
    })
    expect(wrapper.find('[data-extra]').text()).toBe('说明')
    await wrapper.find('[data-confirm]').trigger('click')
    expect(wrapper.emitted('confirm')?.[0][0]).toBe('09:00')
    expect(wrapper.emitted('change')).toBeUndefined()
    expect(wrapper.emitted('open-change')).toBeUndefined()
    wrapper.unmount()
  })
  it.each([false, true])('separates selection and commit, disableConfirm=%s', async (disableConfirm) => {
    const wrapper = mount(TimePicker, { props: { format: 'HH:mm', disableConfirm, defaultValue: '09:00' } })
    const value = dayjs('10:30', 'HH:mm')
    wrapper.findComponent(Panel).vm.$emit('select', value)
    await nextTick()
    expect(wrapper.emitted('select')).toHaveLength(1)
    if (!disableConfirm) {
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      wrapper.findComponent(Panel).vm.$emit('confirm', value)
    }
    expect(wrapper.emitted('update:modelValue')).toEqual([['10:30']])
    await nextTick()
    wrapper.findComponent(Panel).vm.$emit('confirm', value)
    expect(wrapper.emitted('change')).toHaveLength(1)
    wrapper.unmount()
  })
  it('filters disabled values only when requested', async () => {
    const wrapper = mount(TimePicker, { props: { format: 'HH:mm', disabledHours: () => [9] } })
    expect(wrapper.findAll('[aria-label="Hours"] [aria-disabled="true"]').length).toBeGreaterThan(0)
    await wrapper.setProps({ hideDisabledOptions: true })
    expect(wrapper.findAll('[aria-label="Hours"] [aria-disabled="true"]')).toHaveLength(0)
    wrapper.unmount()
  })
})

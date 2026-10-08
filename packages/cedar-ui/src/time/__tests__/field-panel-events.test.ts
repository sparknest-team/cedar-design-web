import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TimeRange from '../../time-range/TimeRange.vue'
import TimePicker from '../picker/TimePicker.vue'
import TimeRangePicker from '../picker/TimeRangePicker.vue'
import Time from '../Time.vue'

describe('desktop field presentation event boundary', () => {
  it.each([
    [Time, TimePicker, '10:30'],
    [TimeRange, TimeRangePicker, ['10:30', '18:00']],
  ] as const)('does not treat the select date payload as a commit flag', async (Field, Panel, value) => {
    const wrapper = mount(Field, { props: { defaultOpen: true, format: 'HH:mm' } })
    const panel = wrapper.findComponent(Panel)
    const dates = Array.isArray(value) ? [new Date(), new Date()] : new Date()
    panel.vm.$emit('select', value, dates)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('select')).toHaveLength(1)
    expect(wrapper.emitted('change')).toBeUndefined()
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    panel.vm.$emit('confirm', value, dates)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('update:modelValue')).toEqual([[value]])
    expect(wrapper.emitted('change')).toHaveLength(1)
    wrapper.unmount()
  })
})

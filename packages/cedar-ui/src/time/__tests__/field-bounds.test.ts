import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Time from '../Time.vue'
import TimeRange from '../../time-range/TimeRange.vue'
import TimePicker from '../picker/TimePicker.vue'
import TimeRangePicker from '../picker/TimeRangePicker.vue'

describe('Cedar field bounds', () => {
  it('validates typed values and forwards bounds to the panel', async () => {
    const wrapper = mount(Time, { props: { defaultOpen: true, format: 'HH:mm', min: '10:00', max: '11:00' } })
    expect(wrapper.findComponent(TimePicker).props('min')).toBe('10:00')
    await wrapper.get('input').setValue('09:59')
    await wrapper.get('input').trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('change')).toBeUndefined()
    await wrapper.get('input').setValue('11:00')
    await wrapper.get('input').trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('change')?.[0][0]).toBe('11:00')
    wrapper.unmount()
  })
  it('validates both range endpoints and forwards changing bounds', async () => {
    const wrapper = mount(TimeRange, { props: { defaultOpen: true, format: 'HH:mm', modelValue: ['10:00', '11:00'], min: '10:00', max: '11:00' } })
    expect(wrapper.findComponent(TimeRangePicker).props('max')).toBe('11:00')
    await wrapper.setProps({ max: '10:30' })
    expect(wrapper.findComponent(TimeRangePicker).props('max')).toBe('10:30')
    const inputs = wrapper.findAll('input')
    await inputs[1].setValue('11:01')
    await inputs[1].trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('change')).toBeUndefined()
    await inputs[1].setValue('10:30')
    await inputs[1].trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('change')?.[0][0]).toEqual(['10:00', '10:30'])
    wrapper.unmount()
  })
})

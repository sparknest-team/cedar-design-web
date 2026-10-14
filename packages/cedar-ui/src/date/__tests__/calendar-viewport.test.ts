import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import DatePicker from '../DatePicker.vue'

describe('calendar controlled viewport adapter', () => {
  it('restores rejected viewport and accepts a later prop update', async () => {
    const wrapper = mount(DatePicker, { props: { modelValue: '2025-01-15', pickerValue: '2025-01-01' } })
    await nextTick()
    const header = wrapper.find('[class$="-header"]')
    const original = header.text()
    await header.findAll('button')[1].trigger('click')
    await nextTick()
    expect(wrapper.emitted('update:pickerValue')?.[0]).toEqual(['2024-12-01'])
    expect(header.text()).toBe(original)
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    await wrapper.setProps({ pickerValue: '2024-12-01' })
    expect(header.text()).not.toBe(original)
    wrapper.unmount()
  })
  it('previews another month without emitting navigation or selection', async () => {
    const wrapper = mount(DatePicker, { props: { modelValue: '2025-01-15', pickerValue: '2025-01-01', shortcuts: [{ label: 'next', value: '2025-02-01' }] } })
    await nextTick()
    const title = () => wrapper.find('[class$="-header-title"]').text()
    const original = title()
    await wrapper.find('.c-date-shortcuts button').trigger('mouseenter')
    expect(title()).not.toBe(original)
    expect(wrapper.emitted('update:pickerValue')).toBeUndefined()
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    await wrapper.find('.c-date-shortcuts button').trigger('mouseleave')
    expect(title()).toBe(original)
    wrapper.unmount()
  })
})

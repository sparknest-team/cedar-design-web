import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PickerField from '../../_components/picker-field/PickerField.vue'
import { formItemInjectionKey } from '../../form/context'
import TimeRange from '../../time-range/TimeRange.vue'
import Trigger from '../../trigger'
import Panel from '../picker/TimePicker.vue'
import Time from '../Time.vue'

describe('Cedar temporal field presentation', () => {
  it('routes popup configuration explicitly and keeps attrs on the field', () => {
    const wrapper = mount(Time, {
      props: {
        defaultOpen: true,
        popupContainer: false,
        inputEditable: false,
        timePickerProps: { class: 'time-panel-custom' },
        popupProps: {
          placement: 'top-start',
          popupContainer: 'body',
          open: false,
          disabled: true,
          trigger: 'hover',
        } as never,
      },
      attrs: { 'aria-label': 'Clock', 'data-field': 'clock', title: 'Field title' },
    })
    expect(wrapper.findComponent(Trigger).props()).toMatchObject({
      open: true,
      popupContainer: false,
      placement: 'top-start',
      disabled: false,
      trigger: 'click',
    })
    expect(wrapper.findComponent(PickerField).props('editable')).toBe(false)
    expect(wrapper.get('input').attributes('aria-label')).toBe('Clock')
    expect(wrapper.findComponent(Panel).attributes('data-field')).toBeUndefined()
    expect(wrapper.findComponent(Panel).classes()).toContain('time-panel-custom')
    wrapper.unmount()
  })
  it('passes appearance to the field decorator and honors outer labels', async () => {
    const wrapper = mount(Time, {
      props: { hint: true, line: false, textColor: 'red', focusColor: 'blue', blurColor: 'gray', error: true },
    })
    expect(wrapper.findComponent(PickerField).props()).toMatchObject({
      hint: true,
      line: false,
      textColor: 'red',
      focusColor: 'blue',
      blurColor: 'gray',
      error: true,
    })
    await wrapper.setProps({ hint: false, error: false })
    expect(wrapper.findComponent(PickerField).props('hint')).toBe(false)
    expect(wrapper.findComponent(PickerField).props('error')).toBe(false)
    wrapper.unmount()
    const labelled = mount(Time, {
      props: { hint: true },
      global: {
        provide: { [formItemInjectionKey as symbol]: { hasOuterLabel: true } },
      },
    })
    expect(labelled.findComponent(PickerField).props('hint')).toBe(false)
    labelled.unmount()
  })
  it('allows an empty range separator', () => {
    const wrapper = mount(TimeRange, { props: { separator: '' } })
    expect(wrapper.findComponent(PickerField).props('separator')).toBe('')
    wrapper.unmount()
  })
  it('does not let nested configuration replace the model or validation rules', () => {
    const wrapper = mount(Time, {
      props: {
        defaultOpen: true,
        modelValue: '10:00',
        format: 'HH:mm',
        timePickerProps: { modelValue: '23:00', min: '22:00', readonly: true, format: 'HH' } as never,
      },
    })
    expect(wrapper.findComponent(Panel).props()).toMatchObject({
      modelValue: '10:00',
      format: 'HH:mm',
      readonly: false,
      min: undefined,
    })
    wrapper.unmount()
  })
})

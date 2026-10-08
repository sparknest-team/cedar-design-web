import { reactive } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import useTimeFormat from '../hooks/use-time-format'
import Panel from '../Panel.vue'
import RangePanel from '../RangePanel.vue'
import TimePicker from '../TimePicker.vue'
import Time from '../../Time.vue'
import { dayjs } from '../../../_utils/date'

describe('time format integration', () => {
  it('does not resurrect defaultValue after an invalid controlled model', async () => {
    const wrapper = mount(TimePicker, { props: { modelValue: '10:00:00', defaultValue: '09:00:00' } })
    try {
      await wrapper.setProps({ modelValue: '25:00:00' })
      expect(wrapper.findComponent(Panel).props('value')).toBeUndefined()
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    } finally { wrapper.unmount() }
  })

  it('tracks props that were absent when the hook was created', () => {
    const props = reactive<{ format?: string; use12Hours?: boolean }>({})
    const state = useTimeFormat(props)
    expect(state.format.value).toBe('HH:mm:ss')
    props.use12Hours = true
    expect(state.format.value).toBe('hh:mm:ss a')
    props.format = '[seconds AM] HH:mm'
    expect(state.columns.value).toEqual(['H', 'm'])
    props.use12Hours = false
    expect(state.use12Hours.value).toBe(false)
  })

  it('resolves the same default in standalone, range and nested panels', () => {
    for (const component of [Panel, RangePanel, TimePicker]) {
      const wrapper = mount(component as any, { props: { use12Hours: true } })
      try {
        const panel = component === Panel ? wrapper : wrapper.findComponent(Panel)
        expect(panel.vm.$.setupState.columns).toEqual(['h', 'm', 's', 'a'])
      } finally {
        wrapper.unmount()
      }
    }
  })

  it('does not create second or period columns from literal text', () => {
    const wrapper = mount(Panel, { props: { format: '[seconds AM] HH:mm', visible: true } })
    try {
      expect(wrapper.findAll('[aria-label="Seconds"]')).toHaveLength(0)
      expect(wrapper.findAll('[aria-label="AM/PM"]')).toHaveLength(0)
      expect(wrapper.findAll('[aria-label="Hours"]')).toHaveLength(1)
      expect(wrapper.findAll('[aria-label="Minutes"]')).toHaveLength(1)
    } finally { wrapper.unmount() }
  })

  it('returns the resolved twelve-hour format from standalone panels', () => {
    const wrapper = mount(TimePicker, { props: { use12Hours: true } })
    try {
      wrapper.findComponent(Panel).vm.$emit('confirm', dayjs('13:30:00', 'HH:mm:ss'))
      expect(wrapper.emitted('update:modelValue')).toEqual([['01:30:00 pm']])
    } finally { wrapper.unmount() }
  })

  it('uses the same fallback for field display and panel format', () => {
    const wrapper = mount(Time, { props: { modelValue: '01:30:00 pm', use12Hours: true, format: '[text]' } })
    try {
      expect(wrapper.find('input').element.value).toBe('01:30:00 pm')
    } finally { wrapper.unmount() }
  })
})

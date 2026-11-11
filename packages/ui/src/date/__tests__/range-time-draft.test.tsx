import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import dayjs from 'dayjs'
import { describe, expect, it } from 'vitest'
import DateRangePicker from '../../date-range/DateRangePicker.vue'
import RangePanel from '../picker/DateRangePickerPanel.vue'

describe('date range embedded time draft', () => {
  it.each(['start', 'end'] as const)('forwards %s time selection to the outer confirmation owner', async (side) => {
    const value = ['2024-02-29 23:59:59', '2024-03-01 00:00:00']
    const candidate = side === 'start' ? '2024-02-29 23:59:58' : '2024-03-01 00:00:01'
    const expected = [...value]
    expected[side === 'start' ? 0 : 1] = candidate
    const wrapper = mount(DateRangePicker, {
      props: { modelValue: value, showTime: true, disableConfirm: false },
    })
    try {
      wrapper.getComponent(RangePanel).vm.$emit('time-picker-select', dayjs(candidate), side)
      await nextTick()
      expect(wrapper.emitted('select')?.at(-1)?.[0]).toEqual(expected)
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      const confirm = wrapper.findAll('button').find(button => ['确认', '确定', 'Confirm', 'OK'].includes(button.text()))
      expect(confirm).toBeDefined()
      await confirm!.trigger('click')
      expect(wrapper.emitted('update:modelValue')?.at(-1)?.[0]).toEqual(expected)
      expect(wrapper.emitted('confirm')).toHaveLength(1)
    } finally {
      wrapper.unmount()
    }
  })
})

import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TimePanel from '../../time/picker/Panel.vue'
import DatePicker from '../DatePicker.vue'

describe('date nested time renderer', () => {
  it('owns precision and rules while allowing display sampling', async () => {
    const wrapper = mount(DatePicker, {
      props: {
        modelValue: '2025-01-05 09:00',
        showTime: true,
        format: 'YYYY-MM-DD HH:mm',
        valueFormat: 'YYYY-MM-DD HH:mm',
        timePickerProps: {
          use12Hours: true,
          step: { minute: 15 },
          format: 'ss',
          disabledHours: () => [],
          min: '22:00',
        } as any,
        disabledTime: () => ({ disabledHours: () => [23] }),
      },
    })
    const time = () => wrapper.findComponent(TimePanel)
    expect(time().props()).toMatchObject({ format: 'HH:mm', use12Hours: true, step: { minute: 15 }, hideFooter: true })
    expect(time().props('disabledHours')()).toEqual([23])
    expect(time().props('min')).toBeUndefined()
    await wrapper.setProps({
      format: 'YYYY-MM-DD HH:mm:ss',
      timePickerProps: { use12Hours: false, step: { minute: 5 } },
    })
    expect(time().props()).toMatchObject({ format: 'HH:mm:ss', use12Hours: false, step: { minute: 5 } })
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    wrapper.unmount()
  })
})

import { mount } from '@vue/test-utils'
import { defineComponent, nextTick } from 'vue'
import { describe, expect, test } from 'vitest'
import { DateRange, dateRangeProps } from '../index'

describe('DateRange', () => {
  test('exposes a validated contract', () => {
    expect(DateRange.name).toBe('CDateRange')
    expect(dateRangeProps.type.validator('week')).toBe(true)
    expect(dateRangeProps.type.validator('invalid' as never)).toBe(false)
  })
  test('confirms a changed end date with endpoint rules', async () => {
    const Surface = defineComponent({ template: '<div><slot /><slot name="content" /></div>' })
    const wrapper = mount(DateRange, {
      props: {
        modelValue: ['2026/09/10', '2026/09/15'],
        defaultOpen: true,
        valueFormat: 'YYYY/MM/DD',
        format: 'DD-MM-YYYY',
        min: '2026/09/01',
        max: '2026/09/30',
        disabledDate: (date: Date, side: string) => side === 'end' && date.getDay() === 0,
      },
      global: { stubs: { TemporalTrigger: Surface } },
    })
    await nextTick()
    const dates = wrapper.findAll('[role="button"]')
    const start10 = dates.filter((date) => date.text() === '10')[0]!
    const end16 = dates.filter((date) => date.text() === '16')[0]!
    await end16.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    await start10.trigger('click')
    await nextTick()
    expect(wrapper.emitted('select')?.at(-1)?.[0]).toEqual(['2026/09/10', '2026/09/16'])
    const confirm = wrapper.findAll('button').find((button) => button.text() === '确定')!
    await confirm.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.at(-1)?.[0]).toEqual(['2026/09/10', '2026/09/16'])
    wrapper.unmount()
  })
})

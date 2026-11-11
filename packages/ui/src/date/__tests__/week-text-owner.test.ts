import { defineComponent } from 'vue'
import { shallowMount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import DateField from '../DateField.vue'
import type { DateFieldProps, DateFieldState } from '../field-state'
import { useLocale } from '../../locale'

const Content = defineComponent({ props: ['state'], template: '<div />' })
const wrappers: ReturnType<typeof shallowMount>[] = []
afterEach(() => { wrappers.splice(0).forEach(wrapper => wrapper.unmount()); useLocale('zh-CN') })

function mountField(fieldProps: DateFieldProps, range = false) {
  const wrapper = shallowMount(DateField, { props: { fieldProps, range }, global: { stubs: { DateFieldContent: Content } } })
  wrappers.push(wrapper)
  return { wrapper, state: wrapper.getComponent(Content).props('state') as DateFieldState }
}
describe('week text owner submission', () => {
  it('commits the localized week anchor with the standard model and event payload', () => {
    useLocale('zh-CN')
    const { wrapper, state } = mountField({ type: 'week', datePickerProps: { dayStartOfWeek: 1 } })
    state.commitText(['2020-53周'])
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['2020-12-28'])
    expect(wrapper.emitted('change')?.[0]).toEqual(['2020-12-28', new Date(2020, 11, 28), '2020-53周'])
  })
  it('does not bypass disabled dates, readonly state, or nonexistent week validation', () => {
    useLocale('zh-CN')
    for (const extra of [{ disabledDate: () => true }, { readonly: true }, { disabled: true }]) {
      const { wrapper, state } = mountField({ type: 'week', ...extra })
      state.commitText(['2021-1周'])
      expect(wrapper.emitted('select')).toBeUndefined()
      expect(wrapper.emitted('change')).toBeUndefined()
    }
    const { wrapper, state } = mountField({ type: 'week' })
    state.commitText(['2021-54周'])
    expect(wrapper.emitted('change')).toBeUndefined()
  })
  it('strictly validates week ranges without silently reordering endpoints', () => {
    useLocale('zh-CN')
    const { wrapper, state } = mountField({ type: 'week', dateRangePickerProps: { dayStartOfWeek: 1 } }, true)
    state.commitText(['2021-2周', '2021-1周'])
    expect(wrapper.emitted('change')).toBeUndefined()
    state.commitText(['2020-53周', '2021-1周'])
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['2020-12-28', '2021-01-04']])
  })
  it('preserves quarter serialization through the owner', () => {
    const { wrapper, state } = mountField({ type: 'quarter' })
    state.commitText(['2025-Q5'])
    expect(wrapper.emitted('change')).toBeUndefined()
    state.commitText(['2025-Q2'])
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['2025-04'])
  })
})

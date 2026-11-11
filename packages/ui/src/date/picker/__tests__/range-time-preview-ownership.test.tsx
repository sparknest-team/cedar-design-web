import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { expect, test, vi } from 'vitest'
import Picker from '../DateRangePicker.vue'
import { dayjs } from '../../../_utils/date'

test.each([false, true])('time selection keeps old preview cleanup retired with disableConfirm=%s', async (disableConfirm) => {
  vi.useFakeTimers()
  let unmount = () => {}
  try {
    const wrapper = mount(Picker, {
      props: { defaultOpen: true, defaultValue: ['2025-01-01', '2025-01-02'], showTime: true, disableConfirm, previewShortcut: true },
      global: { stubs: { RangePickerPanel: true } },
    })
    unmount = () => wrapper.unmount()
    await nextTick()
    const vm = wrapper.vm as any
    const timer = vi.spyOn(globalThis, 'setTimeout')
    const clear = vi.spyOn(globalThis, 'clearTimeout')
    vm.rangePanelProps.onShortcutMouseEnter([dayjs('2025-02-05'), dayjs('2025-02-06')])
    vm.rangePanelProps.onShortcutMouseLeave()
    const taskIndex = timer.mock.calls.findIndex(([, delay]) => delay === 100)
    const old = timer.mock.calls[taskIndex]?.[0]
    if (typeof old !== 'function') throw new Error('expected owned100ms preview timer')
    vm.rangePanelProps.onTimePickerSelect(dayjs('2025-01-01 12:00'), 'start')
    await nextTick()
    const current = vm.panelValue.map((date: any) => date?.format('YYYY-MM-DD HH:mm'))
    const notifications = JSON.stringify(wrapper.emitted())
    expect(wrapper.emitted('select')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')?.length ?? 0, 'preserve confirmation policy').toBe(disableConfirm ? 1 : 0)
    expect(clear, 'cancel the original preview handle, not unrelated application timers').toHaveBeenCalledWith(timer.mock.results[taskIndex].value)
    old()
    old()
    await nextTick()
    expect(vm.panelValue.map((date: any) => date?.format('YYYY-MM-DD HH:mm'))).toEqual(current)
    expect(JSON.stringify(wrapper.emitted())).toBe(notifications)
  } finally {
    unmount()
    vi.restoreAllMocks()
    vi.useRealTimers()
  }
})

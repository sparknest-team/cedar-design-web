import { computed, defineComponent, h, nextTick, provide } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Picker from '../DateRangePicker.vue'
import Body from '../panels/Body.vue'
import { rangePreviewKey } from '../hooks/range-preview'
import { dayjs } from '../../../_utils/date'

test('real date Body renders the preview selectors consumed by range Tokens', () => {
  const first = dayjs('2026-01-05')
  const wrapper = mount(defineComponent({
    setup() {
      provide(rangePreviewKey, computed(() => true))
      return () => h(Body, {
        prefixCls: 'c-picker',
        rows: [[{ label: '5', value: first }, { label: '6', value: first.add(1, 'day') }]],
        rangeValues: [first, first.add(1, 'day')],
        isSameTime: (a: any, b: any) => a.isSame(b, 'day'),
      })
    },
  }))
  try {
    expect(wrapper.get('.c-picker-cell-hover-range-start .c-picker-date-value').text()).toBe('5')
    expect(wrapper.get('.c-picker-cell-hover-range-end .c-picker-date-value').text()).toBe('6')
    expect(wrapper.find('.c-picker-cell-range-start').exists()).toBe(false)
  } finally {
    wrapper.unmount()
  }
})

test('disabled real range body clears the partial preview and retires the original shortcut task', async () => {
  vi.useFakeTimers()
  const Panel = defineComponent({
    inheritAttrs: false,
    setup: () => () => h(Body, {
      prefixCls: 'c-picker',
      rows: [[{ label: 'blocked', value: dayjs('2026-01-08') }]],
      disabledDate: () => true,
      isSameTime: (a: any, b: any) => a.isSame(b, 'day'),
    }),
  })
  const wrapper = mount(Picker, {
    props: { defaultOpen: true, previewShortcut: true, defaultValue: ['2026-01-01', '2026-01-02'] },
    global: { stubs: { RangePickerPanel: Panel } },
  })
  try {
    await nextTick()
    const vm = wrapper.vm as any
    vm.rangePanelProps.onCellClick(dayjs('2026-01-05'))
    vm.rangePanelProps.onShortcutMouseEnter([dayjs('2026-02-05'), dayjs('2026-02-06')])
    const timer = vi.spyOn(globalThis, 'setTimeout')
    const clear = vi.spyOn(globalThis, 'clearTimeout')
    vm.rangePanelProps.onShortcutMouseLeave()
    const index = timer.mock.calls.findIndex(([, delay]) => delay === 100)
    const callback = timer.mock.calls[index]?.[0]
    if (typeof callback !== 'function') throw new Error('missing original 100ms task')
    await wrapper.get('[aria-disabled=true]').trigger('mouseenter')
    expect(clear).toHaveBeenCalledWith(timer.mock.results[index].value)
    const current = vm.panelValue.map((date: any) => date?.format('YYYY-MM-DD'))
    vm.inputValue = ['fresh', 'draft']
    const notifications = JSON.stringify(wrapper.emitted())
    callback()
    callback()
    await nextTick()
    expect(vm.panelValue.map((date: any) => date?.format('YYYY-MM-DD'))).toEqual(current)
    expect(vm.inputValue).toEqual(['fresh', 'draft'])
    expect(JSON.stringify(wrapper.emitted())).toBe(notifications)
  } finally {
    wrapper.unmount()
    vi.restoreAllMocks()
    vi.useRealTimers()
  }
})

import { defineComponent, h, nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import { addI18nMessages, cedarEnUS, getLocale, useLocale } from '../../../locale'
import { configProviderInjectionKey } from '../../../config-provider/context'
import { usePickerRangeLabels } from '../range-labels'

it('updates endpoint labels when the global locale and range kind change', async () => {
  const previous = getLocale()
  const kind = ref<'date' | 'time'>('date')
  addI18nMessages({ 'en-US': cedarEnUS })
  useLocale('zh-CN')
  const wrapper = mount(defineComponent({
    setup() {
      const labels = usePickerRangeLabels(() => kind.value)
      return () => h('div', labels.value.join('|'))
    },
  }))
  try {
    expect(wrapper.text()).toBe('开始|结束')
    useLocale('en-US')
    await nextTick()
    expect(wrapper.text()).toBe('Start|End')
    kind.value = 'time'
    await nextTick()
    expect(wrapper.text()).toBe('Start|End')
  } finally {
    wrapper.unmount()
    useLocale(previous)
  }
})

it('honors scoped endpoint text and falls back to kind-specific legacy labels', async () => {
  const kind = ref<'date' | 'time'>('date')
  const locale = reactive({
    ...cedarEnUS,
    fieldPresentation: { ...cedarEnUS.fieldPresentation, rangeStart: undefined, rangeEnd: 'Scoped end' },
    datePicker: { ...cedarEnUS.datePicker, rangePlaceholder: { date: ['Date from', 'Date to'], time: ['Time from', 'Time to'] } },
  })
  const wrapper = mount(defineComponent({
    setup() {
      const labels = usePickerRangeLabels(() => kind.value)
      return () => h('div', labels.value.join('|'))
    },
  }), { global: { provide: { [configProviderInjectionKey as symbol]: { locale, slots: {} } } } })
  try {
    expect(wrapper.text()).toBe('Date from|Scoped end')
    kind.value = 'time'
    await nextTick()
    expect(wrapper.text()).toBe('Time from|Scoped end')
    locale.fieldPresentation.rangeStart = 'Scoped start' as any
    await nextTick()
    expect(wrapper.text()).toBe('Scoped start|Scoped end')
  } finally {
    wrapper.unmount()
  }
})

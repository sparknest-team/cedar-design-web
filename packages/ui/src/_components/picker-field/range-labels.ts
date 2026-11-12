import { computed } from 'vue'
import { useI18n } from '../../locale'
import defaultLocale from '../../locale/lang/zh-cn'

export function usePickerRangeLabels(kind: () => 'date' | 'time') {
  const { i18nMessage } = useI18n()
  return computed(() => {
    const legacy = i18nMessage.value.datePicker?.rangePlaceholder?.[kind()] ?? defaultLocale.datePicker.rangePlaceholder[kind()]
    return [
      i18nMessage.value.fieldPresentation?.rangeStart ?? legacy[0],
      i18nMessage.value.fieldPresentation?.rangeEnd ?? legacy[1],
    ]
  })
}

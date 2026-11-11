import { computed } from 'vue'
import { useI18n } from '../locale'
export { IconLeft as BackIcon } from '@cedar-design/icons-vue/icon-left'

export function usePageHeaderBackLabel() {
  const { i18nMessage } = useI18n()
  return computed(() => i18nMessage.value.common.back ?? (i18nMessage.value.locale.startsWith('zh') ? '返回' : 'Back'))
}

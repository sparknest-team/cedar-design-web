import { computed } from 'vue'
import { useI18n } from '../locale'

// Field controls use the application's global / ConfigProvider locale.
export { useI18n as useFieldLocale }

export function useFieldClearLabel() {
  const { t } = useI18n()
  return computed(() => t('common.clear'))
}

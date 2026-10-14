import { computed } from 'vue'
import { useI18n } from '../../locale'
export function usePanelActionsLocale() {
  const { t } = useI18n()
  return { nowText: computed(() => t('datePicker.now')), confirmText: computed(() => t('datePicker.confirmButtonText')) }
}

import { computed } from 'vue'
import { useI18n } from '../locale'
export { IconClose } from '@cedar-design/icons-vue/icon-close'
export { IconInfoCircleFill } from '@cedar-design/icons-vue/icon-info-circle-fill'
export { IconCheckCircleFill } from '@cedar-design/icons-vue/icon-check-circle-fill'
export { IconExclamationCircleFill } from '@cedar-design/icons-vue/icon-exclamation-circle-fill'
export { IconCloseCircleFill } from '@cedar-design/icons-vue/icon-close-circle-fill'
export const transitionName = 'c-alert-leave'

export function useAlertLocale() {
  const { t } = useI18n()
  return computed(() => t('common.close'))
}

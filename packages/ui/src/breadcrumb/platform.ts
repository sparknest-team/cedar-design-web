export { IconMore } from '@cedar-design/icons-vue/icon-more'
export { IconDown } from '@cedar-design/icons-vue/icon-down'

import { computed } from 'vue'
import { useI18n } from '../locale'
export function useBreadcrumbDropdownLabel() {
  const { t } = useI18n()
  return computed(() => { const label = t('splitButton.moreActions'); return label === 'splitButton.moreActions' ? 'More actions' : label })
}

export function useBreadcrumbLabels() {
  const { t } = useI18n()
  const get = (key: string, fallback: string) => { const value = t(key); return value === key ? fallback : value }
  return { label: computed(() => get('breadcrumb.label', 'Breadcrumb')), ellipsis: computed(() => get('breadcrumb.ellipsis', 'Omitted breadcrumb items')) }
}

import { computed } from 'vue'
import { useI18n } from '../locale'

/** Read the existing global locale / ConfigProvider; no component-local dictionary. */
export function useSearchLocale() {
  const { t } = useI18n()
  return {
    searchText: computed(() => t('search.search')),
    cancelText: computed(() => t('search.cancel')),
    historyText: computed(() => t('search.history')),
  }
}

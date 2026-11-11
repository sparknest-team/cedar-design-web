import { computed } from 'vue'
import { useI18n } from '../../locale'

export function useFieldTexts() {
  const { t } = useI18n()
  return {
    input: computed(() => t('common.placeholderInput')),
    select: computed(() => t('common.placeholderSelect')),
    edit: computed(() => t('fieldPresentation.edit')),
    close: computed(() => t('fieldPresentation.close')),
    search: computed(() => t('fieldPresentation.search')),
    clear: computed(() => t('common.clear')),
    selectionCount: computed(() => t('fieldPresentation.selectionCount')),
    selectionRemove: computed(() => t('fieldPresentation.selectionRemove')),
    selectionBack: computed(() => t('fieldPresentation.selectionBack')),
    selectionEmpty: computed(() => t('fieldPresentation.selectionEmpty')),
    selected: computed(() => t('fieldPresentation.selected')),
    limit: computed(() => t('fieldPresentation.limit')),
  }
}

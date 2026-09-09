import { computed } from 'vue'
import { useI18n } from '../locale'
export { IconLeft as IconPrevious } from '@cedarjs/icons-vue/icon-left'
export { IconRight as IconNext } from '@cedarjs/icons-vue/icon-right'
export { IconMore } from '@cedarjs/icons-vue/icon-more'
export function usePaginationLocale() {
  const { t } = useI18n()
  return computed(() => ({
    navigation: t('pagination.navigation') ?? 'Pagination',
    previous: t('pagination.previous') ?? 'Previous page',
    next: t('pagination.next') ?? 'Next page',
    goto: t('pagination.goto'),
    perPage: t('pagination.countPerPage'),
    total: (n: number) => t('pagination.total', n),
    count: (n: number) => `${n} ${t('pagination.countPerPage')}`,
    page: (n: number) => `${t('pagination.goto')} ${n}`,
  }))
}

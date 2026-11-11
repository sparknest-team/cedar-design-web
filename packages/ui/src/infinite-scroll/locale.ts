import { useI18n } from '../locale'

export type InfiniteScrollLocaleKey = 'loading' | 'error' | 'finished'

export function useInfiniteScrollLocale() {
  const { t } = useI18n()
  return (key: InfiniteScrollLocaleKey) => t(`infiniteScroll.${key}`)
}

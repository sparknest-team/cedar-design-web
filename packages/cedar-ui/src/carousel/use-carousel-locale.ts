import { computed } from 'vue'
import { useI18n } from '../locale'
export function useCarouselLocale() {
  const { t } = useI18n()
  return computed(() => ({
    label: t('carousel.label'),
    previous: t('carousel.previous'),
    next: t('carousel.next'),
    slide: (index: number, total: number) => String(t('carousel.slide')).replace('{index}', String(index)).replace('{total}', String(total)),
    goto: (index: number) => String(t('carousel.goto')).replace('{index}', String(index)),
  }))
}

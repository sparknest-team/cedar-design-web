import { computed } from 'vue'
import { useI18n } from '../locale'
import { useSize } from '../_hooks/use-size'
import type { CardSize } from './props'

export function useCardSize(size: () => CardSize | undefined) {
  const { mergedSize } = useSize(computed(size))
  return computed<CardSize>(() => size() ?? (['xs', 'sm'].includes(mergedSize.value) ? 'sm' : 'md'))
}

export function useCardCloseLabel() {
  const { t } = useI18n()
  return computed(() => t('common.close'))
}

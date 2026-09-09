import { computed } from 'vue'
import { useSize } from '../_hooks/use-size'
import type { CardSize } from './props'

export function useCardSize(size: () => CardSize | undefined) {
  const { mergedSize } = useSize(computed(size))
  return computed<CardSize>(() => ['xs', 'sm'].includes(mergedSize.value) ? 'sm' : 'md')
}

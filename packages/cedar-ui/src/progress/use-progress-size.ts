import { computed } from 'vue'
import { useSize } from '../_hooks/use-size'
import type { ComponentSize } from '../_utils/constant'
import { progressSizeMap } from './size'
import type { ProgressSize } from './size'

export function useProgressSize(size: () => ProgressSize | undefined) {
  const preset = computed(() => typeof size() === 'string' && Object.hasOwn(progressSizeMap, size()!) ? size() as ComponentSize : undefined)
  const { mergedSize } = useSize(preset)
  return computed(() => size() ?? mergedSize.value)
}


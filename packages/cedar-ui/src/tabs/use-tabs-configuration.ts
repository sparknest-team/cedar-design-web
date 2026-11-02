import { type ComputedRef } from 'vue'
import { useSize } from '../_hooks/use-size'
import type { ComponentSize } from '../_utils/constant'

export function useTabsConfiguration(size: ComputedRef<ComponentSize | undefined>) {
  return { size: useSize(size).mergedSize }
}

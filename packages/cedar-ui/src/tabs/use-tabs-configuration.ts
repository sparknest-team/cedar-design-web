import { computed, inject, type ComputedRef } from 'vue'
import { useSize } from '../_hooks/use-size'
import { configProviderInjectionKey } from '../config-provider/context'
import type { ComponentSize } from '../_utils/constant'

export function useTabsConfiguration(size: ComputedRef<ComponentSize | undefined>) {
  const config = inject(configProviderInjectionKey, undefined)
  return { size: useSize(size).mergedSize, rtl: computed(() => config?.rtl ?? false) }
}

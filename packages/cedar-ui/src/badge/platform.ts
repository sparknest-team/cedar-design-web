import { computed, inject } from 'vue'
import { configProviderInjectionKey } from '../config-provider/context'

// Only the platform configuration source differs; rendering is copied unchanged.
export function useBadgeDirection() {
  const config = inject(configProviderInjectionKey, undefined)
  return computed(() => config?.rtl ? 'rtl' as const : undefined)
}

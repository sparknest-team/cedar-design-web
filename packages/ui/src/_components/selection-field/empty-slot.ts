import { computed, inject } from 'vue'
import { configProviderInjectionKey } from '../../config-provider/context'
/** Resolve the current provider slot; local slots take precedence. */
export function useEmptySlot() {
  const config = inject(configProviderInjectionKey, undefined)
  return computed(() => config?.slots.empty)
}

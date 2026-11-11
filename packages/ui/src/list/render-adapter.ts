import { computed, inject } from 'vue'
import { configProviderInjectionKey } from '../config-provider/context'
export { default as Scrollbar } from '../scrollbar'
export function useListEmpty() {
  const config = inject(configProviderInjectionKey, undefined)
  return computed(() => config?.slots.empty ? () => config.slots.empty?.({ component: 'list' }) : undefined)
}

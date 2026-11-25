import { computed, inject } from 'vue'
import { configProviderInjectionKey } from '../config-provider/context'
import Empty from '../empty/Empty.vue'

export { default as Scrollbar } from '../scrollbar/Scrollbar.vue'
export function useListEmpty() {
  const config = inject(configProviderInjectionKey, undefined)
  return computed(() => (config?.slots.empty ? () => config.slots.empty?.({ component: 'list' }) : Empty))
}

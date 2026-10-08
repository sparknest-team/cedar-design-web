import { inject } from 'vue'
import { configProviderInjectionKey } from '../../config-provider/context'
/** Resolve the library's existing global empty slot; local slots take precedence. */
export function useEmptySlot() { return inject(configProviderInjectionKey, undefined)?.slots.empty }

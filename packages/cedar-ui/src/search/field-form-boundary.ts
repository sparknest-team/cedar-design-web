import { inject, provide } from 'vue'
import { formItemInjectionKey } from '../form/context'

/** The field selector changes Search's criterion, not a second Form value. */
export function useSearchFieldBoundary() {
  const context = inject(formItemInjectionKey, undefined)
  if (context) provide(formItemInjectionKey, Object.create(context, { eventHandlers: { value: {} } }))
}

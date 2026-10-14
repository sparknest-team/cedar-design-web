import { inject, provide } from 'vue'
import { formItemInjectionKey } from '../form/context'
export function useSliderInputForm() {
  const parent = inject(formItemInjectionKey, undefined)
  if (parent) provide(formItemInjectionKey, Object.assign(Object.create(parent), { eventHandlers: {} }))
}


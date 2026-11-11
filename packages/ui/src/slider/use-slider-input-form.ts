import { inject, provide } from 'vue'
import { formItemInjectionKey } from '../form/context'
export function useSliderInputForm() {
  const parent = inject(formItemInjectionKey, undefined)
  if (parent) {
    // Define an own property without assigning through the reactive parent's readonly computed ref.
    const child = Object.create(parent)
    Object.defineProperty(child, 'eventHandlers', { value: {}, enumerable: true })
    provide(formItemInjectionKey, child)
  }
}


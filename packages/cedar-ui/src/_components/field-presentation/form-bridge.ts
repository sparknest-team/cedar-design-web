import { inject, provide } from 'vue'
import { isolateFormItemLabel } from '../../form/label-context'
import { useFormItem } from '../../_hooks/use-form-item'
import { formItemInjectionKey } from '../../form/context'

export const usePresentationForm = useFormItem
export function isolateEditorForm() {
  isolateFormItemLabel()
  const parent = inject(formItemInjectionKey, undefined)
  if (parent)
    provide(
      formItemInjectionKey,
      new Proxy(parent, {
        get(target, key) {
          if (key === 'eventHandlers') return {}
          if (key === 'hasOuterLabel' || key === 'error') return false
          if (key === 'feedback') return undefined
          return Reflect.get(target, key)
        },
      }),
    )
}

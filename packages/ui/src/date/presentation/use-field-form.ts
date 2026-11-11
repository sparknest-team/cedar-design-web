import { computed } from 'vue'
import { useFormItem } from '../../_hooks/use-form-item'
import { useSize } from '../../_hooks/use-size'
import type { DateFieldProps } from '../field-state'

export function useDateFieldForm(options: () => DateFieldProps) {
  const form = useFormItem({
    size: computed(() => options().size),
    disabled: computed(() => { const value = options().disabled; return Array.isArray(value) ? undefined : value }),
    readonly: computed(() => options().readonly),
    error: computed(() => options().error),
  })
  return {
    disabled: form.mergedDisabled,
    readonly: form.mergedReadonly,
    error: form.mergedError,
    size: useSize(form.mergedSize).mergedSize,
    hint: computed(() => !form.formItemCtx.hasOuterLabel && options().hint),
    feedback: form.feedback,
    events: form.eventHandlers,
  }
}

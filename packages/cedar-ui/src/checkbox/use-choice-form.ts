import { toRef } from 'vue'
import { useFormItem } from '../_hooks/use-form-item'

export function useChoiceForm(props: { disabled?: boolean; readonly?: boolean; error?: boolean }) {
  return useFormItem({
    disabled: toRef(props, 'disabled'),
    readonly: toRef(props, 'readonly'),
    error: toRef(props, 'error'),
  })
}

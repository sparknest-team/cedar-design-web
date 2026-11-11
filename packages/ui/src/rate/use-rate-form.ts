import { computed } from 'vue'
import { useFormItem } from '../_hooks/use-form-item'
import type { RateProps } from './props'

export function useRateForm(props: RateProps) {
  return useFormItem({ disabled: computed(() => props.disabled), readonly: computed(() => props.readonly) })
}

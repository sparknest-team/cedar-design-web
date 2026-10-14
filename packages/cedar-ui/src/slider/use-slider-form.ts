import { computed } from 'vue'
import { useFormItem } from '../_hooks/use-form-item'
import type { SliderProps } from './props'

export function useSliderForm(props: SliderProps) {
  return useFormItem({ disabled: computed(() => props.disabled), error: computed(() => props.error), readonly: computed(() => props.readonly) })
}


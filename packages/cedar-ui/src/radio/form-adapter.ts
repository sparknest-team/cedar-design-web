import { computed, toRef } from 'vue'
import { useFormItem } from '../_hooks/use-form-item'
import { useSize } from '../_hooks/use-size'
import type { ComponentSize } from '../_utils/constant'
export function useRadioForm(props: { size?: ComponentSize; disabled?: boolean; readonly?: boolean; error?: boolean }) {
  const state = useFormItem({
    size: toRef(props, 'size'), disabled: toRef(props, 'disabled'),
    readonly: toRef(props, 'readonly'), error: toRef(props, 'error'),
  })
  const { mergedSize } = useSize(state.mergedSize)
  return { ...state, mergedSize, eventHandlers: computed(() => state.eventHandlers.value ?? {}) }
}

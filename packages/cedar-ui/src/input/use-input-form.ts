import { computed, inject, toRef } from 'vue'
import { useFormItem } from '../_hooks/use-form-item'
import { useSize } from '../_hooks/use-size'
import { inputGroupKey } from './context'
import type { InputProps } from './props'

/** Connect field controls to Cedar's existing Form / ConfigProvider system. */
export function useInputForm(props: Readonly<Pick<InputProps, 'size' | 'disabled' | 'readonly' | 'error'>>) {
  const group = inject(inputGroupKey, undefined)
  const form = useFormItem({
    size: computed(() => props.size ?? group?.size.value),
    disabled: computed(() => props.disabled ?? group?.disabled.value),
    readonly: computed(() => props.readonly ?? group?.readonly.value),
    error: toRef(props, 'error'),
  })
  return {
    ...form,
    ...useSize(form.mergedSize),
    group,
    hasOuterLabel: computed(() => Boolean(form.formItemCtx.hasOuterLabel)),
  }
}

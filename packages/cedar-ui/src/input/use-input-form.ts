import { computed, inject, provide, toRef } from 'vue'
import { fieldControlFormEvents, fieldEditorBoundary } from '../_components/field-presentation/context'
import { useFormItem } from '../_hooks/use-form-item'
import { useSize } from '../_hooks/use-size'
import { inputGroupKey } from './context'
import type { InputProps } from './props'

/** Connect field controls to Cedar's existing Form / ConfigProvider system. */
export function useInputForm(
  props: Readonly<Pick<InputProps, 'size' | 'disabled' | 'readonly' | 'error'>>,
  options: { uninject?: boolean } = {},
) {
  const boundary = inject(fieldEditorBoundary, false)
  const ownFormEvents = inject(fieldControlFormEvents, undefined)
  const notifyForm = computed(() => !options.uninject && (!boundary || ownFormEvents?.value === true))
  provide(
    fieldControlFormEvents,
    computed(() => false),
  )
  const group = inject(inputGroupKey, undefined)
  const form = useFormItem({
    size: computed(() => props.size ?? group?.size.value),
    disabled: computed(() => props.disabled ?? group?.disabled.value),
    readonly: computed(() => props.readonly ?? group?.readonly.value),
    error: toRef(props, 'error'),
    uninject: options.uninject,
  })
  return {
    ...form,
    eventHandlers: computed(() => (notifyForm.value ? form.eventHandlers.value : {})),
    ...useSize(form.mergedSize),
    group,
    hasOuterLabel: computed(() => notifyForm.value && Boolean(form.formItemCtx.hasOuterLabel)),
  }
}

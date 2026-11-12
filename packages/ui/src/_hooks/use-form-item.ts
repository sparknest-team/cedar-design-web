import { computed, inject, Ref, toRef } from 'vue'
import { FormItemContext, formItemInjectionKey, formInjectionKey } from '../form/context'
import { ComponentSize } from '../_utils/constant'
import { resolveFormControlState } from '../_utils/form-control-context'

export const useFormItem = ({
  size,
  disabled,
  readonly,
  error,
  uninject,
}: {
  size?: Ref<ComponentSize | undefined>
  disabled?: Ref<boolean | undefined>
  readonly?: Ref<boolean | undefined>
  error?: Ref<boolean | undefined>
  // private
  uninject?: boolean
} = {}) => {
  const formItemCtx = (!uninject ? inject(formItemInjectionKey, undefined) : undefined) ?? ({} as FormItemContext)

  const form = !uninject ? inject(formInjectionKey, undefined) : undefined

  const mergedSize = computed(() => resolveFormControlState(size?.value, formItemCtx.size, form?.size, undefined))

  const mergedDisabled = computed(() => resolveFormControlState(disabled?.value, formItemCtx.disabled, form?.disabled, false))

  const mergedReadonly = computed(() => resolveFormControlState(readonly?.value, formItemCtx.readonly, form?.readonly, false))

  const mergedError = computed(() => resolveFormControlState(error?.value, formItemCtx.error, undefined, false))

  const feedback = toRef(formItemCtx, 'feedback')
  const eventHandlers = toRef(formItemCtx, 'eventHandlers')

  return {
    formItemCtx,
    mergedSize,
    mergedDisabled,
    mergedReadonly,
    mergedError,
    feedback,
    eventHandlers,
  }
}

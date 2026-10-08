import { computed, inject, Ref, toRef } from 'vue'
import { FormItemContext, formItemInjectionKey } from '../form/context'
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
  const formItemCtx = !uninject ? inject(formItemInjectionKey, {} as FormItemContext) : ({} as FormItemContext)

  const mergedSize = computed(() => resolveFormControlState(size?.value, formItemCtx.size, undefined, undefined))

  const mergedDisabled = computed(() => resolveFormControlState(disabled?.value, formItemCtx.disabled, undefined, false))

  const mergedReadonly = computed(() => resolveFormControlState(readonly?.value, formItemCtx.readonly, undefined, false))

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

import { computed, inject } from 'vue'
import { formInjectionKey } from '../form/context'
import { resolveFormControlState } from '../_utils/form-control-context'
import { useFormItem } from '../_hooks/use-form-item'
import { useSize } from '../_hooks/use-size'
import type { SwitchProps, SwitchSize } from './props'

export function useSwitchPlatform(props: Readonly<SwitchProps>) {
  const form = inject(formInjectionKey, undefined)
  const item = useFormItem({
    disabled: computed(() => props.disabled),
    readonly: computed(() => props.readonly),
  })
  const { mergedSize } = useSize(computed(() => props.size ?? item.mergedSize.value))
  return {
    size: computed<SwitchSize>(() => ['xs', 'sm'].includes(mergedSize.value) ? 'sm' : ['lg', 'xl'].includes(mergedSize.value) ? 'lg' : 'md'),
    disabled: computed(() => resolveFormControlState(props.disabled, item.formItemCtx.disabled, form?.disabled, false)),
    readonly: computed(() => resolveFormControlState(props.readonly, item.formItemCtx.readonly, form?.readonly, false)),
    error: computed(() => !!item.mergedError.value),
    notify: (type: 'onChange' | 'onFocus' | 'onBlur', event: Event) => item.eventHandlers.value?.[type]?.(event),
  }
}

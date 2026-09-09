import { computed } from 'vue'
import { useFormItem } from '../_hooks/use-form-item'
import { useSize } from '../_hooks/use-size'
import type { SwitchProps, SwitchSize } from './props'

export function useSwitchPlatform(props: Readonly<SwitchProps>) {
  const item = useFormItem()
  const { mergedSize } = useSize(computed(() => props.size ?? item.mergedSize.value))
  return {
    size: computed<SwitchSize>(() => ['xs', 'sm'].includes(mergedSize.value) ? 'sm' : ['lg', 'xl'].includes(mergedSize.value) ? 'lg' : 'md'),
    disabled: computed(() => !!(props.disabled || item.mergedDisabled.value)),
    readonly: computed(() => !!props.readonly),
    error: computed(() => !!item.mergedError.value),
    notify: (type: 'onChange' | 'onFocus' | 'onBlur', event: Event) => item.eventHandlers.value?.[type]?.(event),
  }
}

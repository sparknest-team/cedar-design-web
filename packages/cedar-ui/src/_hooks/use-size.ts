import { computed, inject, Ref } from 'vue'
import { ComponentSize } from '../_utils/constant'
import { configProviderInjectionKey } from '../config-provider/context'

export const useSize = (size?: Ref<ComponentSize | undefined>, { defaultValue = 'md' }: { defaultValue?: ComponentSize } = {}) => {
  const configProviderCtx = inject(configProviderInjectionKey, undefined)

  const mergedSize = computed(() => size?.value ?? configProviderCtx?.size ?? defaultValue)

  return {
    mergedSize,
  }
}

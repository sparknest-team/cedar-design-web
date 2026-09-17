import { computed, inject, type ComputedRef } from 'vue'
import { useSize } from '../_hooks/use-size'
import { configProviderInjectionKey } from '../config-provider/context'
export { createNamespace } from '../_utils/global-config'
export type { ComponentSize } from '../_utils/constant'
export type Orientation = 'horizontal' | 'vertical'
import type { ComponentSize } from '../_utils/constant'
export function useTabsPlatform(size: ComputedRef<ComponentSize | undefined>) {
  const config = inject(configProviderInjectionKey, undefined)
  return { size: useSize(size).mergedSize, rtl: computed(() => config?.rtl ?? false) }
}
export function providePanelVisibility(_active: ComputedRef<boolean>) {}

import type { ComputedRef, InjectionKey } from 'vue'

export const rangePreviewKey: InjectionKey<ComputedRef<boolean>> = Symbol('date-range-preview')

export const clearRangePreviewKey: InjectionKey<() => void> = Symbol('clear-date-range-preview')

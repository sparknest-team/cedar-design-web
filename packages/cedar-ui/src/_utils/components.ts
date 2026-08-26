import { type PropType, type ExtractPropTypes } from 'vue'
import { createNamespaceFn } from '@cedarjs/shared'

export type ExtractPublicPropTypes<P> = Partial<ExtractPropTypes<P>>

export function defineListenerProp<F>(fallback?: any) {
  return {
    type: [Function, Array] as PropType<F | F[]>,
    default: fallback,
  }
}

export const createNamespace = createNamespaceFn('c')
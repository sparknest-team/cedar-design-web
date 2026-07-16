import type { InjectionKey } from 'vue'
import type { PreviewGroupContext } from './types.unified'

export type { PreviewGroupContext }

export const PreviewGroupInjectionKey: InjectionKey<PreviewGroupContext> = Symbol('PreviewGroupInjectionKey')

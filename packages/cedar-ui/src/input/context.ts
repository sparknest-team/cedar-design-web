import { InjectionKey } from 'vue'
import { ComponentSize } from '../_utils/constant'

export interface GroupFieldContext {
  size: ComponentSize | undefined
  disabled: boolean
  variant: 'filled' | 'outlined' | 'standard' | undefined
}

export const fieldInjectionKey: InjectionKey<GroupFieldContext> = Symbol('CedarField')

import { InjectionKey } from 'vue'
import { Size } from '../_utils/constant'

export interface GroupFieldContext {
  size: Size | undefined
  disabled: boolean
  variant: 'outline' | 'default' | undefined
}

export const fieldInjectionKey: InjectionKey<GroupFieldContext> = Symbol('CedarField')

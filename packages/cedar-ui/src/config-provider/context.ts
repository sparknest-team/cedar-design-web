import { InjectionKey, Slots } from 'vue'
import { CedarLang } from '../locale/types'
import { ComponentSize } from '../_utils/constant'
import type { CedarTheme } from './props'

export interface ConfigProvider {
  slots: Slots
  prefixCls?: string
  locale?: CedarLang
  size?: ComponentSize
  updateAtScroll?: boolean
  scrollToClose?: boolean
  rtl?: boolean
  theme?: CedarTheme
}

export const configProviderInjectionKey: InjectionKey<ConfigProvider> = Symbol('CedarConfigProvider')

import { InjectionKey, Slots } from 'vue'
import { CedarLang } from '../locale/types'
import { Size } from '../_utils/constant'

export interface ConfigProvider {
  slots: Slots
  prefixCls?: string
  locale?: CedarLang
  size?: Size
  updateAtScroll?: boolean
  scrollToClose?: boolean
  exchangeTime?: boolean
  rtl?: boolean
}

export const configProviderInjectionKey: InjectionKey<ConfigProvider> = Symbol('CedarConfigProvider')

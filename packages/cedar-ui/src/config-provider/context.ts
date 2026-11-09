import type { ReadingDirection } from '@cedar-design/use'
import { InjectionKey, Slots } from 'vue'
import { CedarLang } from '../locale/types'
import { ComponentSize } from '../_utils/constant'

export interface ConfigProvider {
  slots: Slots
  prefixCls?: string
  locale?: CedarLang
  size?: ComponentSize
  updateAtScroll?: boolean
  scrollToClose?: boolean
  dir?: ReadingDirection
}

export const configProviderInjectionKey: InjectionKey<ConfigProvider> = Symbol('CedarConfigProvider')

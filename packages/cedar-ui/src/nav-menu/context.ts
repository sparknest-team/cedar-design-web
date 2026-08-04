import { InjectionKey, VNodeTypes } from 'vue'
import { InternalNavMenuProps, NavMenuData } from './types'

export const NavMenuInjectionKey: InjectionKey<NavMenuContext> = Symbol('NavMenuInjectionKey')

export type NavMenuContext = Readonly<
  Pick<
    InternalNavMenuProps,
    | 'mode'
    | 'theme'
    | 'levelIndent'
    | 'autoScrollIntoView'
    | 'scrollConfig'
    | 'inTrigger'
    | 'triggerProps'
    | 'tooltipProps'
    | 'popupMaxHeight'
  > & {
    selectedKeys: string[]
    openKeys: string[]
    prefixCls: string
    collapsed: boolean
    expandIconDown?: () => VNodeTypes
    expandIconRight?: () => VNodeTypes
    onSubMenuClick?: (key: string, level: number) => void
    onMenuItemClick?: (key: string) => void
  }
>

export const LevelInjectionKey: InjectionKey<LevelContext> = Symbol('LevelInjectionKey')

export type LevelContext = Readonly<{
  level: number
}>

export type NavMenuMapType = Map<string, string[]>

export const DataCollectorInjectionKey: InjectionKey<DataCollectorContext> = Symbol('DataCollectorInjectionKey')

export type DataCollectorContext = Readonly<{
  collectSubMenu: (key: string, children: NavMenuData, isReport?: boolean) => void
  removeSubMenu: (key: string) => void
  collectMenuItem: (key: string) => void
  removeMenuItem: (keys: string) => void
  reportMenuData: (data: NavMenuData) => void
}>

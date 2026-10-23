import type { CSSProperties, HTMLAttributes, VNodeChild } from 'vue'
export type { MenuFieldNames } from './selection'
import type { TriggerProps } from '../trigger'
export type { TriggerPlacement as MenuPosition, Reference as MenuReference } from '../trigger'
export type MenuSubmenuTrigger = 'click' | 'hover'
export type MenuStrategy = NonNullable<TriggerProps['strategy']>
export type { MenuProps } from './props'
export type MenuValue = string | number | boolean | Record<string, any> | undefined
export interface MenuRenderContext {
  option: MenuOptionData
  active: boolean
  level: number
}
export type MenuOptionLabelRender = (context: MenuRenderContext) => VNodeChild
export type MenuContent = VNodeChild | MenuOptionLabelRender
export type MenuOptionLabel = MenuContent
export interface MenuOptionData {
  type?: 'item' | 'group' | 'divider'
  label?: MenuOptionLabel
  icon?: MenuContent
  extra?: MenuContent
  value?: any
  disabled?: boolean
  show?: boolean
  ripple?: boolean
  children?: MenuOptionData[]
  props?: HTMLAttributes & { style?: CSSProperties }
  [key: string]: any
}

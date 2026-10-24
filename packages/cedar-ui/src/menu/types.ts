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
  /** Whether this exact option is active; never descendant selection, hover, focus or open. */
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

export interface MenuSlots {
  default?: () => VNodeChild
  content?: () => VNodeChild
  footer?: () => VNodeChild
  'option-label'?: (context: MenuRenderContext) => VNodeChild
  'option-icon'?: (context: MenuRenderContext) => VNodeChild
  'option-extra'?: (context: MenuRenderContext) => VNodeChild
}
export interface MenuOptionSlots {
  default?: (context: MenuRenderContext) => VNodeChild
  icon?: (context: MenuRenderContext) => VNodeChild
  suffix?: (context: MenuRenderContext) => VNodeChild
}

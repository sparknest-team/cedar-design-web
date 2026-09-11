import type { CSSProperties, HTMLAttributes, VNodeChild } from 'vue'
export type { DropdownMenuFieldNames } from './selection'
export type { DropdownMenuPosition } from './platform'
export type { DropdownMenuProps } from './props'
export type MenuValue = string | number | boolean | Record<string, any> | undefined
export interface DropdownMenuRenderContext {
  option: DropdownMenuOption
  active: boolean
  level: number
}
export type MenuOptionLabelRender = (context: DropdownMenuRenderContext) => VNodeChild
export type DropdownMenuContent = VNodeChild | MenuOptionLabelRender
export type MenuOptionLabel = DropdownMenuContent
export interface DropdownMenuOption {
  type?: 'item' | 'group' | 'divider'
  label?: MenuOptionLabel
  icon?: DropdownMenuContent
  extra?: DropdownMenuContent
  value?: any
  disabled?: boolean
  show?: boolean
  ripple?: boolean
  children?: DropdownMenuOption[]
  props?: HTMLAttributes & { style?: CSSProperties }
  [key: string]: any
}

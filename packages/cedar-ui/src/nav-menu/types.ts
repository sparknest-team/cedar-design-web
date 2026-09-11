import type { CSSProperties, HTMLAttributes, VNodeChild } from 'vue'
export type NavMenuKey = string | number
export type NavMenuMode = import('../_utils/constant').Direction
export type NavMenuTheme = 'light' | 'dark'
export interface NavMenuRenderContext { option: NavMenuOption; selected: boolean; expanded: boolean; active: boolean; level: number }
export type NavMenuContent = VNodeChild | ((context: NavMenuRenderContext) => VNodeChild)
export interface NavMenuOption {
  key?: NavMenuKey
  type?: 'item' | 'group' | 'divider'
  label?: NavMenuContent
  icon?: NavMenuContent
  extra?: NavMenuContent
  children?: NavMenuOption[]
  disabled?: boolean
  show?: boolean
  props?: HTMLAttributes & { style?: CSSProperties }
  [key: string]: unknown
}
export interface NavMenuFieldNames { key?: string; label?: string; children?: string; disabled?: string }
export interface NavMenuNode { key: NavMenuKey; option: NavMenuOption; children: NavMenuNode[]; parent?: NavMenuNode; level: number; disabled: boolean; type: 'item' | 'group' | 'divider' }
export type NavMenuProps = import('vue').ExtractPublicPropTypes<typeof import('./props').navMenuProps>

export interface NavMenuExposed {
  showOption(key?: NavMenuKey | null): void
  scrollTo(key?: NavMenuKey | null): Promise<void>
  resize(): void
  setCollapsed(value: boolean): void
  setActiveItem(value: NavMenuKey | null): void
}

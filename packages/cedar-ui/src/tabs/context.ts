import { InjectionKey } from 'vue'
import type { TabData, TabTriggerEvent, TabVariant, ScrollPosition } from './types'

export interface TabsContext {
  lazyLoad: boolean
  destroyOnHide: boolean
  activeKey: string | number
  addItem: (id: number, data: TabData) => void
  removeItem: (id: number) => void
  trigger: TabTriggerEvent
}

export interface TabsNavContext {
  tabs: TabData[]
  activeKey: string | number
  activeIndex: number
  vertical: boolean
  indicatorPosition: 'normal' | 'reverse'
  size: string
  variant: TabVariant
  editable: boolean
  animation: boolean
  showAddButton: boolean
  headerPadding: boolean
  scrollPosition: ScrollPosition
  onTabClick: (key: string | number, e: Event) => void
  onAdd: (ev: Event) => void
  onDelete: (key: string | number, ev: Event) => void
}

export const tabsInjectionKey: InjectionKey<TabsContext> = Symbol('ArcoTabs')
export const tabsNavInjectionKey: InjectionKey<TabsNavContext> = Symbol('ArcoTabsNav')

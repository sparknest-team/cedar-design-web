import type { Slots } from 'vue'

export type TabVariant = 'line' | 'card' | 'outline' | 'plain' | 'capsule' | 'enclosed'

export interface TabData {
  key: string | number
  title?: string
  disabled?: boolean
  closable?: boolean
  itemVertical?: boolean
  slots: Slots
}

export type TabTriggerEvent = 'click' | 'hover'

export type ScrollPosition = 'start' | 'end' | 'center' | 'auto' | number

import type { CSSProperties } from 'vue'
import type { TriggerEvent } from '../_utils/constant'
import type { ClassName } from '../_utils/types'

export type PopoverTrigger = TriggerEvent | 'manual'

export const POPOVER_PLACEMENTS = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
] as const

export type PopoverPlacement = (typeof POPOVER_PLACEMENTS)[number]

export interface PopoverProps {
  popupVisible?: boolean
  defaultPopupVisible?: boolean
  title?: string
  content?: string
  trigger?: PopoverTrigger | PopoverTrigger[]
  disabled?: boolean
  placement?: PopoverPlacement
  contentClass?: ClassName
  contentStyle?: CSSProperties
  arrowClass?: ClassName
  arrowStyle?: CSSProperties
  popupContainer?: string | HTMLElement
  closeOnKeyEscape?: boolean
  onPopupVisibleChange?: (visible: boolean) => void
  'onUpdate:popupVisible'?: (visible: boolean) => void
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onClickOutside?: (event: Event) => void
}

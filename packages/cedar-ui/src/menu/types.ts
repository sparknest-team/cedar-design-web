import { TriggerEvent } from '../_utils/constant'

export type MenuPosition = 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'
export type MenuValue = string | number | Record<string, any> | undefined

export interface MenuProps {
  modelValue?: MenuValue
  open?: boolean
  defaultOpen?: boolean
  trigger?: TriggerEvent | TriggerEvent[]
  placement?: MenuPosition
  popupContainer?: string | HTMLElement
  popupMaxHeight?: boolean | number
  hideOnSelect?: boolean
  autoFitPopupWidth?: boolean
  disabled?: boolean
  alignPoint?: boolean
}

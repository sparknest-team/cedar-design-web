import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { TriggerEvent } from '../_utils/constant'
import { TRIGGER_EVENTS } from '../_utils/constant'
import type { ClassName } from '../_utils/types'
import type { PopoverPlacement, PopoverTrigger } from './types'
import { POPOVER_PLACEMENTS } from './types'

const popoverTriggers = [...TRIGGER_EVENTS, 'manual'] as const

export const popoverProps = {
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  title: String,
  content: String,
  trigger: {
    type: [String, Array] as PropType<PopoverTrigger | PopoverTrigger[]>,
    default: 'hover',
    validator: (value: PopoverTrigger | PopoverTrigger[]) => ([] as PopoverTrigger[]).concat(value).every((item) => popoverTriggers.includes(item)),
  },
  disabled: Boolean,
  placement: { type: String as PropType<PopoverPlacement>, default: 'top', validator: (value: PopoverPlacement) => POPOVER_PLACEMENTS.includes(value) },
  contentClass: [String, Array, Object] as PropType<ClassName>,
  contentStyle: Object as PropType<CSSProperties>,
  arrowClass: [String, Array, Object] as PropType<ClassName>,
  arrowStyle: Object as PropType<CSSProperties>,
  popupContainer: [String, Object] as PropType<string | HTMLElement>,
  escToClose: { type: Boolean, default: true },
} 

export type PopoverProps = Partial<ExtractPropTypes<typeof popoverProps>>
export type { TriggerEvent }

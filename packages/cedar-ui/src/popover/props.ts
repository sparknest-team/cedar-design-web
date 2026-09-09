import { triggerProps } from '../trigger/props'
import { popupContainerProp } from '../_utils/popup-container'
import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { TriggerEvent } from '../_utils/constant'
import { TRIGGER_EVENTS } from '../_utils/constant'
import type { ClassName } from '../_utils/types'
import type { PopoverPlacement, PopoverTrigger } from './types'
import { POPOVER_PLACEMENTS } from './types'

const popoverTriggers = TRIGGER_EVENTS

export const popoverProps = {
  ...triggerProps,
  showArrow: { type: Boolean, default: true },
  popupOffset: { type: Number, default: 10 },
  animationName: { type: String, default: 'zoom-in-fade-out' },
  autoFitTransformOrigin: { type: Boolean, default: true },
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
  cover: Boolean,
  placement: { type: String as PropType<PopoverPlacement>, default: 'top', validator: (value: PopoverPlacement) => POPOVER_PLACEMENTS.includes(value) },
  contentClass: [String, Array, Object] as PropType<ClassName>,
  contentStyle: Object as PropType<CSSProperties>,
  arrowClass: [String, Array, Object] as PropType<ClassName>,
  arrowStyle: Object as PropType<CSSProperties>,
  popupContainer: popupContainerProp,
  escToClose: { type: Boolean, default: true },
} 

export type PopoverProps = import("vue").ExtractPublicPropTypes<typeof popoverProps>
export type { TriggerEvent }

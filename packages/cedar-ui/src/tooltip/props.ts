import { triggerProps } from '../trigger/props'
import { popupContainerProp } from '../_utils/popup-container'
import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { TriggerPosition } from '../_utils/constant'
import { TRIGGER_POSITIONS } from '../_utils/constant'
import type { ClassName } from '../_utils/types'

export const tooltipProps = {
  ...triggerProps,
  showArrow: { type: Boolean, default: true },
  popupOffset: { type: Number, default: 10 },
  animationName: { type: String, default: 'zoom-in-fade-out' },
  autoFitTransformOrigin: { type: Boolean, default: true },
  status: { type: String as PropType<TooltipStatus>, default: 'default' },
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  content: String,
  placement: { type: String as PropType<TriggerPosition>, default: 'top', validator: (value: TriggerPosition) => TRIGGER_POSITIONS.includes(value) },
  xs: Boolean,
  backgroundColor: String,
  color: String,
  textColor: String,
  contentClass: [String, Array, Object] as PropType<ClassName>,
  contentStyle: Object as PropType<CSSProperties>,
  arrowClass: [String, Array, Object] as PropType<ClassName>,
  arrowStyle: Object as PropType<CSSProperties>,
  popupContainer: popupContainerProp,
} 

export type TooltipProps = import("vue").ExtractPublicPropTypes<typeof tooltipProps>
export type TooltipStatus = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

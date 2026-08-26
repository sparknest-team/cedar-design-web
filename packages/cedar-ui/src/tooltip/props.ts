import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { TriggerPosition } from '../_utils/constant'
import { TRIGGER_POSITIONS } from '../_utils/constant'
import type { ClassName } from '../_utils/types'

export const tooltipProps = {
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  content: String,
  placement: { type: String as PropType<TriggerPosition>, default: 'top', validator: (value: TriggerPosition) => TRIGGER_POSITIONS.includes(value) },
  xs: Boolean,
  backgroundColor: String,
  contentClass: [String, Array, Object] as PropType<ClassName>,
  contentStyle: Object as PropType<CSSProperties>,
  arrowClass: [String, Array, Object] as PropType<ClassName>,
  arrowStyle: Object as PropType<CSSProperties>,
  popupContainer: [String, Object] as PropType<string | HTMLElement>,
} 

export type TooltipProps = Partial<ExtractPropTypes<typeof tooltipProps>>

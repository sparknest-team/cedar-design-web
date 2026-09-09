import type { ExtractPropTypes, PropType } from 'vue'
import { popupContainerProp } from '../_utils/popup-container'

export const backTopProps = {
  popupContainer: popupContainerProp,
  visibleHeight: {
    type: Number,
    default: 200,
    validator: (value: number) => value >= 0,
  },
  targetContainer: [String, Object] as PropType<string | HTMLElement>,
  easing: {
    type: String,
    default: 'quartOut',
  },
  duration: {
    type: Number,
    default: 200,
    validator: (value: number) => value >= 0,
  },
  ariaLabel: {
    type: String,
    default: 'Back to top',
  },
} 

export type BackTopProps = import("vue").ExtractPublicPropTypes<typeof backTopProps>

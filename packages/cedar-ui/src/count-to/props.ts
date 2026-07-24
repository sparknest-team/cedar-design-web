import type { ExtractPropTypes, PropType } from 'vue'
import { defineListenerProp } from '../_utils/components'

export const countToProps = {
  from: {
    type: [String, Number],
    default: 0,
  },
  to: {
    type: [String, Number],
    default: 0,
  },
  duration: {
    type: [String, Number],
    default: 2000,
  },
  precision: {
    type: [String, Number],
    default: 0,
  },
  autoStart: {
    type: Boolean,
    default: true,
  },
  timingFunction: {
    type: Function as PropType<(v: number) => number>,
  },
  onEnd: defineListenerProp<() => void>(),
}

export type CountToProps = ExtractPropTypes<typeof countToProps>

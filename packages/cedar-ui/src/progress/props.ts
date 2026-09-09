import type { ExtractPropTypes, PropType } from 'vue'
import { semanticStatuses } from '../_utils/constant'
import type { ComponentSize, SemanticStatus } from '../_utils/constant'
import type { ProgressSize } from './size'
export type { ProgressSize } from './size'

export const progressModes = ['line', 'circle'] as const

export type ProgressMode = (typeof progressModes)[number]
export type ProgressColor = string | Record<string, string>

export const progressProps = {
  mode: {
    type: String as PropType<ProgressMode>,
    default: 'line',
    validator: (value: unknown): value is ProgressMode =>
      progressModes.includes(value as ProgressMode),
  },
  size: [Number, String] as PropType<ProgressSize>,
  percent: { type: [Number, String], default: 0 },
  steps: { type: Number, default: 0 },
  animation: { type: Boolean, default: false },
  strokeWidth: [Number, String],
  color: [String, Object] as PropType<ProgressColor>,
  trackColor: String,
  bufferColor: [String, Object] as PropType<ProgressColor>,
  showText: { type: Boolean, default: true },
  status: {
    type: String as PropType<SemanticStatus>,
    default: 'default',
    validator: (value: unknown): value is SemanticStatus =>
      semanticStatuses.includes(value as SemanticStatus),
  },
  indeterminate: { type: Boolean, default: false },
} 

export type ProgressProps = import("vue").ExtractPublicPropTypes<typeof progressProps>

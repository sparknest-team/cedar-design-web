import type { Component, ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '../_utils/constant'

export type ProgressGroupOrientation = 'horizontal' | 'vertical'
export type ProgressGroupMode = 'line' | 'circle'

export interface ProgressGroupItem {
  label?: string
  value?: number
  color?: string
  icon?: Component
  slot?: string
  class?: string
  tip?: string
}

export const progressGroupProps = {
  mode: { type: String as PropType<ProgressGroupMode>, default: 'line' },
  items: { type: Array as PropType<ProgressGroupItem[]>, default: () => [] },
  max: { type: Number, default: 100 },
  status: { type: Boolean, default: false },
  size: { type: String as PropType<ComponentSize>, default: 'md' },
  color: String,
  circleSize: { type: [Number, String], default: 120 },
  strokeWidth: { type: Number, default: 8 },
  tooltip: { type: Boolean, default: true },
  orientation: {
    type: String as PropType<ProgressGroupOrientation>,
    default: 'horizontal',
  },
}

export type ProgressGroupProps = ExtractPropTypes<typeof progressGroupProps>

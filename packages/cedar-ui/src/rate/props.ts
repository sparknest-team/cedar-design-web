import type { ExtractPropTypes, PropType } from 'vue'

export type RateColor = string | Record<string, string>

export const rateProps = {
  /** 单个图标尺寸；number / 数值字符串按 px，字符串支持 CSS 长度 */
  size: [Number, String],
  count: {
    type: Number,
    default: 5,
    validator: (value: unknown) => Number.isInteger(value) && Number(value) > 0,
  },
  modelValue: { type: Number, default: undefined },
  defaultValue: { type: Number, default: 0 },
  allowHalf: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  grading: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  color: [String, Object] as PropType<RateColor>,
} 

export type RateProps = import("vue").ExtractPublicPropTypes<typeof rateProps>

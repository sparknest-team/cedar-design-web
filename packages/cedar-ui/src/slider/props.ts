import type { ExtractPropTypes, PropType } from 'vue'
import type { Direction } from '../_utils/constant'
import { DIRECTIONS } from '../_utils/constant'

export type SliderValue = number | [number, number]
export type SliderTooltipFormatter = (value: number) => string | number

export const sliderProps = {
  modelValue: [Number, Array] as PropType<SliderValue>,
  defaultValue: {
    type: [Number, Array] as PropType<SliderValue>,
    default: 0,
  },
  step: {
    type: Number,
    default: 1,
    validator: (value: number) => value > 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  marks: Object as PropType<Record<number, string>>,
  max: {
    type: Number,
    default: 100,
  },
  orientation: {
    type: String as PropType<Direction>,
    default: 'horizontal',
    validator: (value: Direction) => DIRECTIONS.includes(value),
  },
  disabled: Boolean,
  showTicks: Boolean,
  showInput: Boolean,
  range: Boolean,
  formatTooltip: Function as PropType<SliderTooltipFormatter>,
  showTooltip: {
    type: Boolean,
    default: true,
  },
} 

export type SliderProps = import("vue").ExtractPublicPropTypes<typeof sliderProps>

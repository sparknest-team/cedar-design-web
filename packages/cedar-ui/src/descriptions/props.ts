import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize, TextAlign } from '../_utils/constant'
import { componentSizes } from '../_utils/constant'
import type { ResponsiveValue } from '../grid'
import type { DescData, DescLayout } from './types'

export type DescriptionsAlign = TextAlign | { label?: TextAlign; value?: TextAlign }
export const isPositiveInteger = (value: unknown): value is number => typeof value === 'number' && Number.isInteger(value) && value > 0
const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

const layouts: DescLayout[] = ['horizontal', 'vertical', 'inline-horizontal', 'inline-vertical', 'inline-auto']

export const descriptionsProps = {
  data: { type: Array as PropType<DescData[]>, default: () => [], validator: (value: DescData[]) => value.every((item) => item && (item.span === undefined || isPositiveInteger(item.span))) },
  column: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
    default: 3,
    validator: (value: number | ResponsiveValue) => isPositiveInteger(value) || (value !== null && typeof value === 'object' && Object.entries(value).every(([key, v]) => breakpoints.includes(key) && (v === undefined || isPositiveInteger(v)))),
  },
  title: String,
  layout: { type: String as PropType<DescLayout>, default: 'horizontal', validator: (value: DescLayout) => layouts.includes(value) },
  align: { type: [String, Object] as PropType<DescriptionsAlign>, default: 'left' },
  size: { type: String as PropType<ComponentSize>, validator: (value: ComponentSize) => componentSizes.includes(value) },
  bordered: Boolean,
  labelStyle: Object as PropType<CSSProperties>,
  valueStyle: Object as PropType<CSSProperties>,
  tableLayout: { type: String as PropType<'auto' | 'fixed'>, default: 'auto', validator: (value: string) => ['auto', 'fixed'].includes(value) },
  ariaLabel: String,
} 

export const descriptionsItemProps = {
  span: { type: Number, default: 1, validator: isPositiveInteger },
  label: String,
} 

export type DescriptionsProps = import("vue").ExtractPublicPropTypes<typeof descriptionsProps>
export type DescriptionsItemProps = import("vue").ExtractPublicPropTypes<typeof descriptionsItemProps>

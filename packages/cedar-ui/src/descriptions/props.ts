import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize, TextAlign } from '../_utils/constant'
import { componentSizes } from '../_utils/constant'
import type { ResponsiveValue } from '../grid'
import type { DescData, DescLayout } from './types'

export type DescriptionsAlign = TextAlign | { label?: TextAlign; value?: TextAlign }
const layouts: DescLayout[] = ['horizontal', 'vertical', 'inline-horizontal', 'inline-vertical', 'inline-auto']

export const descriptionsProps = {
  data: { type: Array as PropType<DescData[]>, default: () => [] },
  column: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
    default: 3,
    validator: (value: number | ResponsiveValue) => typeof value !== 'number' || value > 0,
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
  span: { type: Number, default: 1, validator: (value: number) => value > 0 },
  label: String,
} 

export type DescriptionsProps = Partial<ExtractPropTypes<typeof descriptionsProps>>
export type DescriptionsItemProps = Partial<ExtractPropTypes<typeof descriptionsItemProps>>

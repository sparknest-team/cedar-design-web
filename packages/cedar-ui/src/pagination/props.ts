import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '../_utils/constant'
import { componentSizes } from '../_utils/constant'
import type { SelectProps } from '../select'

export const paginationProps = {
  total: {
    type: Number,
    required: true,
    validator: (value: number) => value >= 0,
  },
  current: Number,
  defaultCurrent: {
    type: Number,
    default: 1,
    validator: (value: number) => value >= 1,
  },
  pageSize: Number,
  defaultPageSize: {
    type: Number,
    default: 10,
    validator: (value: number) => value > 0,
  },
  disabled: Boolean,
  hideOnSinglePage: Boolean,
  simple: Boolean,
  showTotal: Boolean,
  showMore: Boolean,
  showJumper: Boolean,
  showPageSize: Boolean,
  pageSizeOptions: {
    type: Array as PropType<number[]>,
    default: () => [10, 20, 30, 40, 50],
    validator: (value: number[]) => value.length > 0 && value.every((item) => item > 0),
  },
  pageSizeProps: Object as PropType<SelectProps>,
  size: {
    type: String as PropType<ComponentSize>,
    validator: (value: ComponentSize) => componentSizes.includes(value),
  },
  pageItemStyle: Object as PropType<CSSProperties>,
  activePageItemStyle: Object as PropType<CSSProperties>,
  baseSize: {
    type: Number,
    default: 6,
    validator: (value: number) => value > 0,
  },
  bufferSize: {
    type: Number,
    default: 2,
    validator: (value: number) => value >= 0,
  },
  autoAdjust: {
    type: Boolean,
    default: true,
  },
} 

export type PaginationProps = Partial<ExtractPropTypes<typeof paginationProps>>

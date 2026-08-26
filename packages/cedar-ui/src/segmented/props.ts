import type { ExtractPropTypes, PropType, VNodeChild } from 'vue'
import { componentSizes, DIRECTIONS } from '../_utils/constant'
import type { ComponentSize, Direction } from '../_utils/constant'

export type SegmentedValue = string | number

export interface SegmentedOption {
  label?: string | (() => VNodeChild)
  value: SegmentedValue
  disabled?: boolean
  [key: PropertyKey]: unknown
}

export const segmentedProps = {
  /**
   * @zh 绑定值
   * @en Binding value
   */
  modelValue: {
    type: [String, Number] as PropType<SegmentedValue>,
    default: undefined,
  },
  /**
   * @zh 默认值（非受控）
   * @en Default value (uncontrolled)
   */
  defaultValue: {
    type: [String, Number] as PropType<SegmentedValue>,
    default: undefined,
  },
  /**
   * @zh 选项
   * @en Options
   */
  options: {
    type: Array as PropType<Array<SegmentedValue | SegmentedOption>>,
    default: () => [],
  },
  /**
   * @zh 尺寸
   * @en Size
   */
  size: {
    type: String as PropType<ComponentSize>,
    default: 'md',
    validator: (value: unknown): value is ComponentSize =>
      componentSizes.includes(value as ComponentSize),
  },
  /**
   * @zh 是否禁用
   * @en Whether disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 是否撑满父容器宽度
   * @en Fit parent width
   */
  block: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 排列方向
   * @en Direction
   */
  direction: {
    type: String as PropType<Direction>,
    default: 'horizontal',
    validator: (value: unknown): value is Direction => DIRECTIONS.includes(value as Direction),
  },
  /**
   * @zh 原生 name，用于表单与无障碍
   * @en Native name for form and a11y
   */
  name: String,
}

export type SegmentedProps = ExtractPropTypes<typeof segmentedProps>

import type { PropType, VNodeChild } from 'vue'
import { componentSizes, orientations } from '../_utils/constant'
import type { ComponentSize, Orientation } from '../_utils/constant'

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
    type: Array as PropType<ReadonlyArray<SegmentedValue | SegmentedOption>>,
    default: () => [],
  },
  /**
   * @zh 尺寸
   * @en Size
   */
  size: {
    type: String as PropType<ComponentSize>,
    default: undefined,
    validator: (value: unknown): value is ComponentSize =>
      componentSizes.includes(value as ComponentSize),
  },
  /**
   * @zh 是否禁用
   * @en Whether disabled
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @zh 只读；未设置时继承表单
   * @en Readonly; inherits the form when omitted
   */
  readonly: { type: Boolean, default: undefined },
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
   * @en Orientation
   */
  orientation: {
    type: String as PropType<Orientation>,
    default: 'horizontal',
    validator: (value: unknown): value is Orientation => orientations.includes(value as Orientation),
  },
  /**
   * @zh 原生 name，用于表单与无障碍
   * @en Native name for form and a11y
   */
  name: String,
}

export type SegmentedProps = import("vue").ExtractPublicPropTypes<typeof segmentedProps>

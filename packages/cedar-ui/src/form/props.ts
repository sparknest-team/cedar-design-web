import type { PropType } from 'vue'
import { readPrettyProp, fieldPresentationProp } from '../_components/field-presentation/context'
import type { ComponentSize } from '../_utils/constant'
import { formLayoutProps } from './layout-props'
import type { FormLayout } from './layout-props'
import type { FieldRule } from './types'

export type { FormLayout, FormLabelAlign } from './layout-props'

export const formProps = {
  /** 字段展示方式，未设置时继承上层。 */
  presentation: fieldPresentationProp,
  readPretty: readPrettyProp,
  ...formLayoutProps,
  /**
   * @zh 表单数据对象
   * @en Form data object
   */
  model: {
    type: Object,
    default: () => ({}),
  },
  /**
   * @zh 表单的布局方式，包括水平、垂直、多列
   * @en The layout of the form, including horizontal, vertical, and multi-column
   * @values 'horizontal', 'vertical', 'inline'
   */
  layout: {
    type: String as PropType<FormLayout>,
    default: 'horizontal',
  },
  /**
   * @zh 表单控件的尺寸
   * @en The size of the form
   * @values 'xs','sm','md','lg','xl'
   * @default-value 'md'
   */
  size: {
    type: String as PropType<ComponentSize>,
  },
  /**
   * @zh 是否禁用表单
   * @en Whether to disable the form
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @zh 是否将表单控件设为只读
   * @en Whether form controls are readonly
   */
  readonly: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @zh 表单项校验规则
   * @en Form item validation rules
   */
  rules: {
    type: Object as PropType<Record<string, FieldRule | FieldRule[]>>,
  },
  /**
   * @zh 表单 `id` 属性和字段容器 `id` 前缀
   * @en Form `id` attribute and field container `id` prefix
   */
  id: {
    type: String,
  },
  /**
   * @zh 验证失败后滚动到第一个（start）或最后一个（end）错误字段；不传则不滚动
   * @en Scroll to the first (start) or last (end) invalid field; omitted disables scrolling
   * @version 2.51.0
   */
  scrollToError: {
    type: String as PropType<'start' | 'end'>,
  },
  /** 错误滚动的顶部偏移，数字按 px；支持 px/rem/vw/vh */
  scrollToErrorOffsetY: { type: [Number, String], default: 0 },
}

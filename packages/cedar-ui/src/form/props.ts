import type { PropType } from 'vue'
import type { ComponentSize } from '../_utils/constant'
import type { FieldRule } from './types'

export const FORM_LAYOUTS = ['horizontal', 'vertical', 'inline'] as const
export type FormLayout = (typeof FORM_LAYOUTS)[number]
export const FORM_LABEL_ALIGNS = ['left', 'right'] as const
export type FormLabelAlign = (typeof FORM_LABEL_ALIGNS)[number]

export const formProps = {
    /**
     * @zh 表单数据对象
     * @en Form data object
     */
    model: {
      type: Object,
      required: true,
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
     * @defaultValue 'md'
     */
    size: {
      type: String as PropType<ComponentSize>,
    },
    /**
     * @zh 标签元素布局选项。参数同 `<col>` 组件一致
     * @en Label element layout options. The parameters are the same as the `<col>` component
     */
    labelColProps: {
      type: Object,
      default: () => ({ span: 5, offset: 0 }),
    },
    /**
     * @zh 表单控件布局选项。参数同 `<col>` 组件一致
     * @en Form control layout options. The parameters are the same as the `<col>` component
     */
    wrapperColProps: {
      type: Object,
      default: () => ({ span: 19, offset: 0 }),
    },
    labelColStyle: Object,
    wrapperColStyle: Object,
    /**
     * @zh 标签的对齐方向
     * @en Alignment direction of the label
     * @values 'left', 'right'
     */
    labelAlign: {
      type: String as PropType<FormLabelAlign>,
      default: 'right',
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
     * @zh 表单项校验规则
     * @en Form item validation rules
     */
    rules: {
      type: Object as PropType<Record<string, FieldRule | FieldRule[]>>,
    },
    /**
     * @zh 是否开启自动标签宽度，仅在 `layout="horizontal"` 下生效。
     * @en Whether to enable automatic label width, it only takes effect under `layout="horizontal"`.
     * @version 2.13.0
     */
    autoLabelWidth: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 表单 `id` 属性和表单控件 `id` 前缀
     * @en Form `id` attribute and form control `id` prefix
     */
    id: {
      type: String,
    },
    /**
     * @zh 验证失败后滚动到第一个错误字段
     * @en Scroll to the first error field after verification fails
     * @version 2.51.0
     */
    scrollToFirstError: {
      type: Boolean,
      default: false,
    },
  } 

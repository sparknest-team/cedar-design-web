import type { PropType } from 'vue'
import type { FieldRule } from '../form/types'
import type {
  FilterFormField,
  FilterFormFieldMap,
} from './types'

export type {
  FilterFormField,
  FilterFormFieldMap,
  FilterFormFieldRegistration,
} from './types'

export const filterFormProps = {
  /**
   * 表单值（v-model）
   */
  modelValue: {
    type: Object as PropType<Record<string, unknown>>,
    default: undefined,
  },
  /** 非受控初始表单值，仅创建时读取。 */
  defaultValue: { type: Object as PropType<Record<string, unknown>>, default: () => ({}) },
  /**
   * 筛选项 schema
   */
  fields: {
    type: Array as PropType<FilterFormField[]>,
    default: () => [],
  },
  /**
   * 字段组件注册表；可选，key 对应 `fields[].component` 的字符串值
   */
  fieldMap: {
    type: Object as PropType<FilterFormFieldMap>,
    default: () => ({}),
  },
  /**
   * 表单校验规则，透传 Form
   */
  rules: {
    type: Object as PropType<Record<string, FieldRule | FieldRule[]>>,
  },
  /**
   * 默认是否折叠多余筛选项（可用 v-model:collapsed）
   */
  collapsed: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否启用展开/收起（不依赖 actions 插槽是否存在）
   */
  collapsible: {
    type: Boolean,
    default: true,
  },
  /**
   * 响应式列数，透传 Grid
   */
  cols: {
    type: [Number, Object] as PropType<number | Record<string, number>>,
    default: () => ({ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 5 }),
  },
  /**
   * Grid 其余属性
   */
  gridProps: {
    type: Object as PropType<Record<string, unknown>>,
  },
  /**
   * change 事件防抖毫秒
   */
  changeDebounce: {
    type: Number,
    default: 500,
  },
}

export type FilterFormProps = import('../_utils/public-props').CompatiblePublicProps<typeof filterFormProps>

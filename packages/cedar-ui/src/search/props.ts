import type { ExtractPropTypes, PropType, StyleValue } from "vue";
import type { ButtonProps } from "../button";
import { componentSizes } from "../_utils/constant";
import type { ComponentSize } from "../_utils/constant";
import { formControlVariants } from "../_utils/form-control";
import type { FormControlVariant } from "../_utils/form-control";

export interface SearchField {
  value: string;
  label: string;
  placeholder?: string;
}

export const searchProps = {
  /** 搜索关键词 */
  modelValue: String,
  /** 默认搜索关键词（非受控状态） */
  defaultValue: { type: String, default: "" },
  /** 当前搜索字段 */
  modelField: String,
  /** 默认搜索字段（非受控状态） */
  defaultField: String,
  /** 字段搜索模式下的表单对象 */
  model: Object as PropType<Record<string, unknown>>,
  /** 搜索字段可选项 */
  fields: {
    type: Array as PropType<SearchField[]>,
    default: () => [],
  },
  /** 字段选择器样式 */
  selectStyle: {
    type: [String, Object, Array] as PropType<StyleValue>,
  },
  /** 受控的最近搜索记录 */
  recentSearches: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  /** 搜索记录最大数量 */
  maxSearchHistoryCount: {
    type: Number,
    default: 5,
  },
  /** 是否显示搜索按钮 */
  searchButton: { type: Boolean, default: false },
  /** 搜索按钮文字 */
  buttonText: String,
  /** 搜索按钮属性 */
  buttonProps: Object as PropType<ButtonProps>,
  /** 是否处于加载状态 */
  loading: { type: Boolean, default: false },
  /** 是否允许清空 */
  clearable: { type: Boolean, default: false },
  /** 是否禁用 */
  disabled: { type: Boolean, default: undefined },
  /** 是否只读 */
  readonly: { type: Boolean, default: false },
  /** 输入框风格 */
  variant: {
    type: String as PropType<FormControlVariant>,
    default: "outlined",
    validator: (value: unknown): value is FormControlVariant =>
      formControlVariants.includes(value as FormControlVariant),
  },
  /** 输入框大小 */
  size: {
    type: String as PropType<ComponentSize>,
    default: "md",
    validator: (value: unknown): value is ComponentSize =>
      componentSizes.includes(value as ComponentSize),
  },
  /** 输入框占位符 */
  placeholder: String,
};

export type SearchProps = ExtractPropTypes<typeof searchProps>;

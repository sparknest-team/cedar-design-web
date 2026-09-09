import type { ExtractPropTypes, InputHTMLAttributes, PropType } from "vue";
import { componentSizes } from "../_utils/constant";
import type { ComponentSize } from "../_utils/constant";
import { formControlVariants } from "../_utils/form-control";
import type {
  FormControlMaxLength,
  FormControlVariant,
  WordLength,
  WordSlice,
} from "../_utils/form-control";

export interface TextareaAutoSize {
  minRows?: number;
  maxRows?: number;
}

export type TextareaMaxLength = FormControlMaxLength;
export type { WordLength, WordSlice } from "../_utils/form-control";

export const textareaProps = {
  /** 绑定值 */
  modelValue: String,
  /** v-model 修饰符 */
  modelModifiers: {
    type: Object as PropType<{ trim?: boolean }>,
    default: () => ({}),
  },
  /** 非受控初始值 */
  defaultValue: { type: String, default: "" },
  /** 占位文字 */
  placeholder: String,
  /** 是否禁用 */
  disabled: { type: Boolean, default: undefined },
  /** 是否只读 */
  readonly: { type: Boolean, default: false },
  /** 外观变体 */
  variant: {
    type: String as PropType<FormControlVariant>,
    default: "outlined",
    validator: (value: unknown): value is FormControlVariant =>
      formControlVariants.includes(value as FormControlVariant),
  },
  /** 尺寸 */
  size: {
    type: String as PropType<ComponentSize>,
    default: "md",
    validator: (value: unknown): value is ComponentSize =>
      componentSizes.includes(value as ComponentSize),
  },
  /** 是否显示错误状态 */
  error: { type: Boolean, default: false },
  /** 最大输入长度 */
  maxLength: {
    type: [Number, Object] as PropType<FormControlMaxLength>,
    default: 0,
  },
  /** 是否显示字数统计 */
  showWordLimit: { type: Boolean, default: false },
  /** 是否允许清空 */
  clearable: { type: Boolean, default: false },
  /** 原生可见行数 */
  rows: [String, Number],
  /** 是否允许纵向拖动调整尺寸 */
  resize: { type: Boolean, default: true },
  /** 是否根据内容自动调整高度 */
  autoSize: {
    type: [Boolean, Object] as PropType<boolean | TextareaAutoSize>,
    default: false,
  },
  /** 字符长度计算方法 */
  wordLength: Function as PropType<WordLength>,
  /** 字符截取方法 */
  wordSlice: Function as PropType<WordSlice>,
  /** 无障碍标签 */
  ariaLabel: String,
  /** 是否自动聚焦 */
  autofocus: Boolean,
  /** 虚拟键盘回车键提示 */
  enterkeyhint: String as PropType<InputHTMLAttributes["enterKeyHint"]>,
  /** 透传给原生 textarea 的补充属性 */
  textareaAttrs: Object as PropType<Record<string, unknown>>,
};

export type TextareaProps = ExtractPropTypes<typeof textareaProps>;

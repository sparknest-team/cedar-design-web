import type { ExtractPropTypes, PropType } from "vue";
import { componentSizes } from "../_utils/constant";
import type { ComponentSize } from "../_utils/constant";

export const inputNumberModes = ["embed", "button", "input"] as const;
export const inputNumberModelEvents = ["change", "input"] as const;

export type InputNumberMode = (typeof inputNumberModes)[number];
export type InputNumberModelEvent = (typeof inputNumberModelEvents)[number];
export type InputNumberFormatter = (value: string) => string;
export type InputNumberParser = (value: string) => string;

export const inputNumberProps = {
  /** 绑定值 */
  modelValue: Number,
  /** 默认值，非受控模式下使用 */
  defaultValue: Number,
  /** 控制按钮布局模式 */
  mode: {
    type: String as PropType<InputNumberMode>,
    default: "embed",
    validator: (value: unknown): value is InputNumberMode =>
      inputNumberModes.includes(value as InputNumberMode),
  },
  /** 最多保留的小数位数 */
  precision: {
    type: Number,
    validator: (value: unknown) =>
      Number.isInteger(value) && Number(value) >= 0,
  },
  /** 增减步长 */
  step: {
    type: Number,
    default: 1,
    validator: (value: unknown) => Number(value) > 0,
  },
  /** 是否禁用 */
  disabled: { type: Boolean, default: false },
  /** 是否展示错误状态 */
  error: { type: Boolean, default: false },
  /** 最大值 */
  max: { type: Number, default: Infinity },
  /** 最小值 */
  min: { type: Number, default: -Infinity },
  /** 格式化输入框展示值 */
  formatter: Function as PropType<InputNumberFormatter>,
  /** 将展示值解析为数字文本 */
  parser: Function as PropType<InputNumberParser>,
  /** 输入框占位文本 */
  placeholder: String,
  /** 输入框尺寸 */
  size: {
    type: String as PropType<ComponentSize>,
    validator: (value: unknown): value is ComponentSize =>
      componentSizes.includes(value as ComponentSize),
  },
  /** 是否允许清空 */
  clearable: { type: Boolean, default: false },
  /** 触发 v-model 更新的时机 */
  modelEvent: {
    type: String as PropType<InputNumberModelEvent>,
    default: "change",
    validator: (value: unknown): value is InputNumberModelEvent =>
      inputNumberModelEvents.includes(value as InputNumberModelEvent),
  },
  /** 是否只读 */
  readonly: { type: Boolean, default: false },
  /** 传给原生 input 的补充属性 */
  inputAttrs: Object as PropType<Record<string, unknown>>,
};

export type InputNumberProps = import("vue").ExtractPublicPropTypes<typeof inputNumberProps>;

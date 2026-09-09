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
  modelValue: Number,
  defaultValue: Number,
  mode: {
    type: String as PropType<InputNumberMode>,
    default: "embed",
    validator: (value: unknown): value is InputNumberMode =>
      inputNumberModes.includes(value as InputNumberMode),
  },
  precision: {
    type: Number,
    validator: (value: unknown) =>
      Number.isInteger(value) && Number(value) >= 0,
  },
  step: {
    type: Number,
    default: 1,
    validator: (value: unknown) => Number(value) > 0,
  },
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  max: { type: Number, default: Infinity },
  min: { type: Number, default: -Infinity },
  formatter: Function as PropType<InputNumberFormatter>,
  parser: Function as PropType<InputNumberParser>,
  placeholder: String,
  size: {
    type: String as PropType<ComponentSize>,
    validator: (value: unknown): value is ComponentSize =>
      componentSizes.includes(value as ComponentSize),
  },
  clearable: { type: Boolean, default: false },
  modelEvent: {
    type: String as PropType<InputNumberModelEvent>,
    default: "change",
    validator: (value: unknown): value is InputNumberModelEvent =>
      inputNumberModelEvents.includes(value as InputNumberModelEvent),
  },
  readonly: { type: Boolean, default: false },
  inputAttrs: Object as PropType<Record<string, unknown>>,
};

export type InputNumberProps = import("vue").ExtractPublicPropTypes<typeof inputNumberProps>;

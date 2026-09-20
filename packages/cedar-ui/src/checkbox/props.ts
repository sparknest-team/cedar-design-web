import type { ExtractPropTypes, PropType } from "vue";
import type { Direction } from "../_utils/constant";
import type { CheckboxOption } from "./types";

export type CheckboxValue = string | number | boolean;

export const checkboxProps = {
  modelValue: {
    type: [Boolean, Array] as PropType<boolean | CheckboxValue[]>,
    default: undefined,
  },
  defaultChecked: { type: Boolean, default: false },
  value: [String, Number, Boolean] as PropType<CheckboxValue>,
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  indeterminate: { type: Boolean, default: false },
  uninjectGroupContext: { type: Boolean, default: false },
};

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<CheckboxValue[]>,
    default: undefined,
  },
  defaultValue: {
    type: Array as PropType<CheckboxValue[]>,
    default: () => [],
  },
  max: Number,
  options: Array as PropType<Array<CheckboxValue | CheckboxOption>>,
  direction: {
    type: String as PropType<Direction>,
    default: "horizontal",
  },
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
};

export type CheckboxProps = import("vue").ExtractPublicPropTypes<
  typeof checkboxProps
>;
export type CheckboxGroupProps = import("vue").ExtractPublicPropTypes<
  typeof checkboxGroupProps
>;

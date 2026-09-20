import type { ExtractPropTypes, PropType } from "vue";
import { componentSizes } from "../_utils/constant";
import type { ComponentSize, Direction } from "../_utils/constant";
import { RADIO_VARIANTS } from "./context";
import type { RadioVariant } from "./context";
import type { RadioOption } from "./types";

export type RadioValue = string | number | boolean;

export const radioProps = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioValue>,
    default: undefined,
  },
  defaultChecked: { type: Boolean, default: false },
  value: {
    type: [String, Number, Boolean] as PropType<RadioValue>,
    default: true,
  },
  variant: {
    type: String as PropType<RadioVariant>,
    default: "radio",
    validator: (value: unknown): value is RadioVariant =>
      RADIO_VARIANTS.includes(value as RadioVariant),
  },
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  uninjectGroupContext: { type: Boolean, default: false },
};

export const radioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioValue>,
    default: undefined,
  },
  defaultValue: {
    type: [String, Number, Boolean] as PropType<RadioValue>,
    default: "",
  },
  variant: radioProps.variant,
  size: {
    type: String as PropType<ComponentSize>,
    validator: (value: unknown): value is ComponentSize =>
      componentSizes.includes(value as ComponentSize),
  },
  options: Array as PropType<Array<RadioValue | RadioOption>>,
  direction: {
    type: String as PropType<Direction>,
    default: "horizontal",
  },
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
};

export type RadioProps = import("vue").ExtractPublicPropTypes<
  typeof radioProps
>;
export type RadioGroupProps = import("vue").ExtractPublicPropTypes<
  typeof radioGroupProps
>;

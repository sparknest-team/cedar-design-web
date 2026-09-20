import type { InjectionKey, Slots } from "vue";
import type { ComponentSize } from "../_utils/constant";

export const RADIO_VARIANTS = ["radio", "button"] as const;
export type RadioVariant = (typeof RADIO_VARIANTS)[number];

export interface RadioGroupContext {
  value: string | number | boolean;
  size: ComponentSize;
  variant: RadioVariant;
  disabled: boolean;
  error: boolean;
  slots: Slots;
  handleChange: (value: string | number | boolean, e: Event) => void;
}

export const radioGroupKey: InjectionKey<RadioGroupContext> =
  Symbol("RadioGroup");

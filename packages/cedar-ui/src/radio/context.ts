import type { RadioNavigation } from './use-radio-navigation'
import type { InjectionKey, Slots } from "vue";
import type { ComponentSize } from "../_utils/constant";

import type { RadioVariant } from './variant'
export { RADIO_VARIANTS } from './variant'
export type { RadioVariant } from './variant'

export interface RadioGroupContext {
  navigation: RadioNavigation;
  value: import("../checkbox/choice-value-props").RadioModel;
  size: ComponentSize;
  variant: RadioVariant;
  disabled: boolean;
  readonly: boolean;
  error: boolean;
  slots: Slots;
  handleChange: (value: string | number | boolean, e?: Event) => void;
}

export const radioGroupKey: InjectionKey<RadioGroupContext> =
  Symbol("RadioGroup");

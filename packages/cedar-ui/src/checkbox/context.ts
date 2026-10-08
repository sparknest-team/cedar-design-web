import type { RegisterChoice } from './use-checkbox-group-methods'
import type { InjectionKey, Slots } from "vue";

export interface CheckboxGroupContext {
  registerChoice: RegisterChoice;
  computedValue: Array<string | number | boolean>;
  disabled: boolean;
  readonly: boolean;
  error: boolean;
  isMaxed: boolean;
  slots: Slots;
  handleChange: (value: Array<string | number | boolean>, e?: Event) => void;
}

export const checkboxGroupKey: InjectionKey<CheckboxGroupContext> =
  Symbol("CedarCheckboxGroup");

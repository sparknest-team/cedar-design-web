import { checkboxValueProps } from '../checkbox/choice-value-props'
import type { ExtractPropTypes, PropType } from "vue";
import type { Direction } from "../_utils/constant";
import { choiceOptionsProps, checkboxGroupValueProps } from '../checkbox/choice-group-props'

export type CheckboxValue = import('../checkbox/choice-value-props').ChoiceValue;

export const checkboxProps = {
  ...checkboxValueProps,
  disabled: { type: Boolean, default: undefined },
  /** 是否只读；未设置时继承表单 */
  readonly: { type: Boolean, default: undefined },
  error: { type: Boolean, default: undefined },
  indeterminate: { type: Boolean, default: false },
  uninjectGroupContext: { type: Boolean, default: false },
};

export const checkboxGroupProps = {
  ...checkboxGroupValueProps,
  ...choiceOptionsProps,
  direction: {
    type: String as PropType<Direction>,
    default: "horizontal",
  },
  /** 是否禁用；未设置时继承表单 */
  disabled: { type: Boolean, default: undefined },
  /** 是否只读；未设置时继承表单 */
  readonly: { type: Boolean, default: undefined },
  error: { type: Boolean, default: undefined },
};

export type CheckboxProps = import("vue").ExtractPublicPropTypes<
  typeof checkboxProps
>;
export type CheckboxGroupProps = import("vue").ExtractPublicPropTypes<
  typeof checkboxGroupProps
>;

export interface CheckboxMethods {
  toggle(checked?: boolean): void
  focus(options?: FocusOptions): void
  blur(): void
}
export type { CheckboxModel } from '../checkbox/choice-value-props'

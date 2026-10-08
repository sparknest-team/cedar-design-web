import { radioVariantProp } from './variant'
import { radioValueProps } from '../checkbox/choice-value-props'
import type { ExtractPropTypes, PropType } from "vue";
import { componentSizes } from "../_utils/constant";
import type { ComponentSize, Direction } from "../_utils/constant";
import { choiceOptionsProps, radioGroupValueProps } from '../checkbox/choice-group-props'

export type RadioValue = import('../checkbox/choice-value-props').ChoiceValue;

export const radioProps = {
  ...radioValueProps,
  variant: radioVariantProp,
  /** 是否禁用；未设置时继承表单 */
  disabled: { type: Boolean, default: undefined },
  /** 是否只读；未设置时继承表单 */
  readonly: { type: Boolean, default: undefined },
  error: { type: Boolean, default: undefined },
  uninjectGroupContext: { type: Boolean, default: false },
};

export const radioGroupProps = {
  ariaLabel: { type: String, default: '' },
  ...radioGroupValueProps,
  ...choiceOptionsProps,
  variant: radioProps.variant,
  size: {
    type: String as PropType<ComponentSize>,
    validator: (value: unknown): value is ComponentSize =>
      componentSizes.includes(value as ComponentSize),
  },
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

export type RadioProps = import("vue").ExtractPublicPropTypes<
  typeof radioProps
>;
export type RadioGroupProps = import("vue").ExtractPublicPropTypes<
  typeof radioGroupProps
>;

export interface RadioMethods {
  select(): void
  focus(options?: FocusOptions): void
  blur(): void
}
export type { RadioModel } from '../checkbox/choice-value-props'

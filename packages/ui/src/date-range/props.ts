import { rangeInputAttrsProp } from '../_components/picker-field/props'
import { fieldLoadingProps } from '../field-decorator/props'
import { openTriggerTargetProp } from "../_components/picker-field/open-trigger";
import type { PropType } from "vue";
import { fieldPresentationProps } from "../_components/field-presentation/props";
import {
  popupContainerProp,
  type PopupContainer,
} from "../_utils/popup-container";
import { dateRangeValueProps, dateRuleProps } from "../date/core-props";
import type { DateTimePickerOptions } from "../date/time-picker-options";
import { fieldDecoratorProps } from "../field-decorator/props";
import type { DateRangePickerOptions } from "./picker-props";

export const dateRangeProps = {
  ...fieldLoadingProps,
  inputAttrs: rangeInputAttrsProp,
  openTriggerTarget: openTriggerTargetProp,
  ...fieldPresentationProps,
  ...dateRuleProps,
  ...dateRangeValueProps,

  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  disableConfirm: Boolean,
  popupContainer: popupContainerProp,
  popupProps: {
    type: Object as PropType<
      Record<string, unknown> & { popupContainer?: PopupContainer }
    >,
    default: () => ({}),
  },
  dateRangePickerProps: {
    type: Object as PropType<DateRangePickerOptions>,
    default: () => ({}),
  },
  timePickerProps: {
    type: Object as PropType<DateTimePickerOptions>,
    default: () => ({}),
  },
  inputEditable: { type: Boolean, default: true },
  disabled: {
    type: [Boolean, Array] as PropType<boolean | boolean[]>,
    default: undefined,
  },
  readonly: { type: Boolean, default: undefined },
  error: { type: Boolean, default: undefined },
  clearable: { type: Boolean, default: true },
  placeholder: [String, Array] as PropType<string | string[]>,
  separator: { type: String, default: " ~ " },
  size: fieldDecoratorProps.size,
  variant: { ...fieldDecoratorProps.variant, default: "filled" },
  hint: fieldDecoratorProps.hint,
  line: fieldDecoratorProps.line,
  textColor: fieldDecoratorProps.textColor,
  focusColor: fieldDecoratorProps.focusColor,
  blurColor: fieldDecoratorProps.blurColor,
};
export type DateRangeProps = import("vue").ExtractPublicPropTypes<
  typeof dateRangeProps
>;
export type DateRangeType = NonNullable<DateRangeProps["type"]>;

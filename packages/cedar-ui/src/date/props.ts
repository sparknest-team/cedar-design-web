import { fieldLoadingProps } from '../field-decorator/props'
import { openTriggerTargetProp } from "../_components/picker-field/open-trigger";
import type { PropType } from "vue";
import { fieldPresentationProps } from "../_components/field-presentation/props";
import {
  popupContainerProp,
  type PopupContainer,
} from "../_utils/popup-container";
import { dateRuleProps, dateSingleValueProps } from "../date/core-props";
import { fieldDecoratorProps } from "../field-decorator/props";
import type { DatePickerOptions } from "./picker-props";
import type { DateTimePickerOptions } from "./time-picker-options";

export const dateProps = {
  ...fieldLoadingProps,
  openTriggerTarget: openTriggerTargetProp,
  ...fieldPresentationProps,
  ...dateRuleProps,
  ...dateSingleValueProps,

  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  disableConfirm: Boolean,
  popupContainer: popupContainerProp,
  /** 可选的字段浮层展示配置，placement 默认 bottom-start；交给底层 Trigger 自动定位，可覆盖首选方位；不增加顶层 placement，不允许覆盖字段状态和规则 */
  popupProps: {
    type: Object as PropType<
      Record<string, unknown> & { popupContainer?: PopupContainer }
    >,
    default: () => ({}),
  },
  datePickerProps: {
    type: Object as PropType<DatePickerOptions>,
    default: () => ({}),
  },

  timePickerProps: {
    type: Object as PropType<DateTimePickerOptions>,
    default: () => ({}),
  },
  inputEditable: { type: Boolean, default: true },
  disabled: { type: Boolean, default: undefined },
  readonly: { type: Boolean, default: undefined },
  error: { type: Boolean, default: undefined },
  clearable: { type: Boolean, default: true },
  placeholder: String,
  separator: { type: String, default: ", " },
  size: fieldDecoratorProps.size,
  variant: { ...fieldDecoratorProps.variant, default: "filled" },
  hint: fieldDecoratorProps.hint,
  line: fieldDecoratorProps.line,
  textColor: fieldDecoratorProps.textColor,
  focusColor: fieldDecoratorProps.focusColor,
  blurColor: fieldDecoratorProps.blurColor,
};
export type DateProps = import("vue").ExtractPublicPropTypes<typeof dateProps>;
export type DateType = NonNullable<DateProps["type"]>;

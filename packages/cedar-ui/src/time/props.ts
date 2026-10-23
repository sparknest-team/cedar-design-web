import type { PropType, StyleValue } from 'vue'
import { fieldPresentationProps } from '../_components/field-presentation/props'
import type { ComponentSize } from '../_utils/constant'
import { componentSizes } from '../_utils/constant'
import type { FormControlVariant } from '../_utils/form-control'
import { formControlVariants } from '../_utils/form-control'
import { popupContainerProp } from '../_utils/popup-container'
import { fieldDecoratorProps } from '../field-decorator/props'
import type { TriggerProps } from '../trigger/props'
import type { TimePickerProps } from './picker/props'
import type { TimePanelPresentationProps, TimePopupPresentationProps } from './presentation-props'

/** Inclusive 24-hour clock bounds, independent of display format. */
export const timeProps = {
  ...fieldPresentationProps,
  /** 桌面字段允许键盘输入；移动端使用面板，不唤起软键盘。 */
  inputEditable: { type: Boolean, default: true },
  /** 本地浮层展示配置；展开状态与交互由字段管理。 */
  popupProps: {
    type: Object as PropType<TimePopupPresentationProps<Partial<TriggerProps>>>,
    default: () => ({}),
  },
  /** 浮动提示；有 Form 外置标签时不启用。 */
  hint: fieldDecoratorProps.hint,
  /** 是否显示边框或底线。 */
  line: fieldDecoratorProps.line,
  textColor: fieldDecoratorProps.textColor,
  focusColor: fieldDecoratorProps.focusColor,
  blurColor: fieldDecoratorProps.blurColor,
  /** 最早可选时间，HH:mm 或 HH:mm:ss，包含端点。 */
  min: String,
  /** 最晚可选时间，HH:mm 或 HH:mm:ss，包含端点。 */
  max: String,
  /** 隐藏禁用的时间选项。 */
  hideDisabledOptions: Boolean,
  popupContainer: popupContainerProp,
  modelValue: {
    type: [String, Number, Date] as PropType<string | number | Date>,
  },
  defaultValue: {
    type: [String, Number, Date] as PropType<string | number | Date>,
  },
  open: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  defaultOpen: Boolean,
  clearable: {
    type: Boolean,
    default: true,
  },
  disabled: { type: Boolean, default: undefined },
  readonly: { type: Boolean, default: undefined },
  size: {
    type: String as PropType<ComponentSize>,
    validator: (value: ComponentSize) => componentSizes.includes(value),
  },
  /**
   * @zh 输入框变体
   * @en Input variant
   * @values 'filled','outline','standard'
   * @default-value 'filled'
   */
  variant: {
    type: String as PropType<FormControlVariant>,
    default: 'filled',
    validator: (value: FormControlVariant) => formControlVariants.includes(value),
  },
  placeholder: String,
  format: String,
  use12Hours: Boolean,
  step: {
    type: Object as PropType<{
      hour?: number
      minute?: number
      second?: number
    }>,
  },
  disabledHours: {
    type: Function as PropType<() => number[]>,
  },
  disabledMinutes: {
    type: Function as PropType<(selectedHour?: number) => number[]>,
  },
  disabledSeconds: {
    type: Function as PropType<(selectedHour?: number, selectedMinute?: number) => number[]>,
  },
  disableConfirm: Boolean,
  error: { type: Boolean, default: undefined },
  timePickerProps: {
    type: Object as PropType<TimePanelPresentationProps<TimePickerProps & { class?: unknown; style?: StyleValue }>>,
    default: () => ({}),
  },
}

export type TimeProps = import('vue').ExtractPublicPropTypes<typeof timeProps>

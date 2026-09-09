import { popupContainerProp, type PopupContainer } from '../_utils/popup-container'
import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '../_utils/constant'
import { componentSizes } from '../_utils/constant'
import type { FormControlVariant } from '../_utils/form-control'
import { formControlVariants } from '../_utils/form-control'

export const timeRangeProps = {
  popupContainer: popupContainerProp,
    modelValue: {
      type: Array as PropType<Array<string | number | Date>>,
    },
    defaultValue: {
      type: Array as PropType<Array<string | number | Date>>,
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
    disabled: Boolean,
    readonly: Boolean,
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
    placeholder: {
      type: [String, Array] as PropType<string | string[]>,
    },
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
    error: Boolean,
    showNextDay: Boolean,
    timeRangePickerProps: {
      type: Object as PropType<Record<string, unknown> & { popupContainer?: PopupContainer }>,
      default: () => ({}),
    },
} 

export type TimeRangeProps = import("vue").ExtractPublicPropTypes<typeof timeRangeProps>

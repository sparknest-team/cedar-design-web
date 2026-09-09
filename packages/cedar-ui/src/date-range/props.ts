import { popupContainerProp, type PopupContainer } from '../_utils/popup-container'
import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '../_utils/constant'
import { componentSizes } from '../_utils/constant'
import type { FormControlVariant } from '../_utils/form-control'
import { formControlVariants } from '../_utils/form-control'
import type { CalendarValue, Mode, RangeDisabledDate } from '../date/picker/types'

const dateModes: Mode[] = ['date', 'year', 'quarter', 'month', 'week']

export const dateRangeProps = {
  popupContainer: popupContainerProp,
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
      type: Array as PropType<CalendarValue[]>,
    },
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: {
      type: Array as PropType<CalendarValue[]>,
    },
    /**
     * @zh 是否显示弹出框
     * @en Popup visibility
     */
    open: {
      type: Boolean as PropType<boolean | undefined>,
      default: undefined,
    },
    /**
     * @zh 弹出框默认是否可见
     * @en Default popup visibility
     */
    defaultOpen: Boolean,
    /**
     * @zh 是否允许清除
     * @en Whether to allow clear
     */
    clearable: Boolean,
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
      type: [Boolean, Array] as PropType<boolean | boolean[]>,
    },
    /**
     * @zh 是否只读
     * @en Whether readonly
     */
    readonly: Boolean,
    /**
     * @zh 输入框尺寸
     * @en Input size
     */
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
    /**
     * @zh 范围分隔符
     * @en Range separator
     */
    separator: String,
    /**
     * @zh 提示文案
     * @en Placeholder
     */
    placeholder: {
      type: Array as PropType<string[]>,
    },
    /**
     * @zh 不可选日期
     * @en Disabled date
     */
    disabledDate: {
      type: Function as PropType<RangeDisabledDate>,
    },
    /**
     * @zh 选择类型
     * @en Picker type
     */
    type: {
      type: String as PropType<Mode>,
      default: 'date',
      validator: (value: Mode) => dateModes.includes(value),
    },
    /**
     * @zh 展示日期的格式
     * @en Display format
     */
    format: String,
    /**
     * @zh 是否增加时间选择
     * @en Whether to show time
     */
    showTime: Boolean,
    /**
     * @zh 是否为错误状态
     * @en Error status
     */
    error: Boolean,
    /**
     * @zh 透传给 DateRangePicker 的其余属性
     * @en Extra props passed to DateRangePicker
     */
    dateRangePickerProps: {
      type: Object as PropType<Record<string, unknown> & { popupContainer?: PopupContainer }>,
      default: () => ({}),
    },
} 

export type DateRangeProps = import("vue").ExtractPublicPropTypes<typeof dateRangeProps>

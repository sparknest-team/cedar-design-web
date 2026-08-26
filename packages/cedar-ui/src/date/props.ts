import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '../_utils/constant'
import { componentSizes } from '../_utils/constant'
import type { FormControlVariant } from '../_utils/form-control'
import { formControlVariants } from '../_utils/form-control'
import type { CalendarValue, Mode } from '../date-picker/types'

const dateModes: Mode[] = ['date', 'year', 'quarter', 'month', 'week']

export const dateProps = {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
      type: [Object, String, Number] as PropType<CalendarValue>,
    },
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: {
      type: [Object, String, Number] as PropType<CalendarValue>,
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
    disabled: Boolean,
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
     * @values 'filled','outlined','standard'
     * @defaultValue 'filled'
     */
    variant: {
      type: String as PropType<FormControlVariant>,
      default: 'filled',
      validator: (value: FormControlVariant) => formControlVariants.includes(value),
    },
    /**
     * @zh 提示文案
     * @en Placeholder
     */
    placeholder: String,
    /**
     * @zh 不可选日期
     * @en Disabled date
     */
    disabledDate: {
      type: Function as PropType<(current?: Date) => boolean>,
    },
    /**
     * @zh 展示日期的格式
     * @en Display format
     */
    format: {
      type: [String, Function] as PropType<string | ((current: Date) => string)>,
    },
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
     * @zh 透传给 DatePicker 的其余属性
     * @en Extra props passed to DatePicker
     */
    datePickerProps: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({}),
    },
} 

export type DateProps = Partial<ExtractPropTypes<typeof dateProps>>

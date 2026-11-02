import { popupContainerProp } from '../../_utils/popup-container'
import type { ExtractPropTypes, PropType } from 'vue'
import type { TriggerProps } from '../../trigger'
import type { TimePickerProps } from '../../time/picker/types'
import type { ComponentSize } from '../../_utils/constant'
import { componentSizes } from '../../_utils/constant'
import type { FormControlVariant } from '../../_utils/form-control'
import { formControlVariants } from '../../_utils/form-control'
import type { DisabledTimeProps, FormatFunc, Mode, ShortcutType, WeekStart } from './types'

export const pickerProps = {
    disableConfirm: Boolean,
    /**
     * @zh 没有触发元素，只显示选择面板
     * @en There is no trigger element, only the selection panel is displayed
     * */
    /**
     * @zh 是否允许清除
     * @en Whether to allow clear
     * */
    clearable: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否为只读
     * @en Whether it is read-only
     * */
    readonly: {
      type: Boolean,
    },
    /**
     * @zh 是否为错误状态
     * @en Whether it is an error state
     */
    error: {
      type: Boolean,
    },
    /**
     * @zh 日期选择器的尺寸
     * @en The size of the date picker
     * @values 'xs','sm','md','lg','xl'
     * @default-value 'md'
     * */
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
     * @zh 预设时间范围快捷选择
     * @en Quick selection of preset time range
     */
    shortcuts: {
      type: Array as PropType<ShortcutType[]>,
      default: () => [],
    },
    /**
     * @zh 预设范围在面板上的位置，默认放在下方，侧边一般用于大量预设时间的场景
     * @en The position of the preset range on the panel, which is placed at the bottom by default, and the side is generally used for scenes with a large number of preset times
     * */
    shortcutsPosition: {
      type: String as PropType<'left' | 'bottom' | 'right'>,
      default: 'bottom',
    },
    /**
     * @zh 弹出的框的位置
     * @en The placement of the pop-up box
     */
    placement: {
      type: String as PropType<'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'>,
      default: 'bottom-start',
    },
    /**
     * @zh 控制弹出框的打开或者关闭状态
     * @en Control the open or closed state of the pop-up box
     */
    open: {
      type: Boolean,
      default: undefined,
    },
    /**
     * @zh 默认弹出框是打开或者关闭
     * @en The default pop-up box is open or closed
     */
    defaultOpen: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 可以传入 `Trigger` 组件的参数
     * @en You can pass in the parameters of the `Trigger` component
     */
    triggerProps: {
      type: Object as PropType<TriggerProps>,
    },
    /**
     * @zh 是否在隐藏的时候销毁DOM结构
     * @en Whether to destroy the DOM structure when hiding
     */
    unmountOnClose: {
      type: Boolean,
    },
    /**
     * @zh 提示文案
     * @en Prompt copy
     */
    placeholder: {
      type: String,
    },
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
      type: Boolean,
    },
    /**
     * @zh 不可选取的日期
     * @en Unselectable date
     */
    disabledDate: {
      type: Function as PropType<(current?: Date) => boolean>,
    },
    /**
     * @zh 不可选取的时间
     * @en Unselectable time
     */
    disabledTime: {
      type: Function as PropType<(current: Date) => DisabledTimeProps>,
    },
    /**
     * @zh 面板显示的日期
     * @en Date displayed on the panel
     * @v-model
     */
    pickerValue: {
      type: [Object, String, Number] as PropType<Date | string | number>,
    },
    /**
     * @zh 面板默认显示的日期
     * @en The date displayed on the panel by default
     */
    defaultPickerValue: {
      type: [Object, String, Number] as PropType<Date | string | number>,
    },
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for pop-up box
     */
    popupContainer: popupContainerProp,
    mode: {
      type: String as PropType<'date' | 'year' | 'quarter' | 'month' | 'week'>,
      default: 'date',
      validator: (value: string) => ['date', 'year', 'quarter', 'month', 'week'].includes(value),
    },
    format: {
      type: [String, Function] as PropType<string | FormatFunc>,
    },
    /**
     * @zh 值的格式，对 `value` `defaultValue` `pickerValue` `defaultPickerValue` 以及事件中的返回值生效，支持设置为时间戳，Date 和字符串（参考[字符串解析格式](#字符串解析格式)）。如果没有指定，将格式化为字符串，格式同 `format`。
     * @en The format of the value, valid for `value` `defaultValue` `pickerValue` `defaultPickerValue` and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format) ). If not specified, it will be formatted as a string, in the same format as `format`.
     */
    valueFormat: {
      type: String as PropType<'timestamp' | 'Date' | string>,
    },
    /**
     * @zh 是否要预览快捷选择的结果
     * @en Whether to preview the result of the shortcut
     */
    previewShortcut: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否显示确认按钮，`showTime = true` 的时候始终显示。
     * @en Whether to show the confirm button, always show when `showTime = true`.
     */
    showConfirmBtn: {
      type: Boolean,
    },
    showTime: {
      type: Boolean,
    },
    timePickerProps: {
      type: Object as PropType<Partial<TimePickerProps>>,
    },
    showNowButton: {
      type: Boolean,
      default: true,
    },
    dayStartOfWeek: {
      type: Number as PropType<WeekStart>,
      default: 0,
      validator: (value: number) => value >= 0 && value <= 6,
    },
    modelValue: {
      type: [Object, String, Number] as PropType<Date | string | number>,
    },
    defaultValue: {
      type: [Object, String, Number] as PropType<Date | string | number>,
    },
    /**
     * @zh 是否禁止键盘输入日期
     * @en Whether input is disabled with the keyboard.
     */
    disabledInput: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否启用缩写
     * @en Whether to enable abbreviation
     */
    abbreviation: {
      type: Boolean,
      default: true,
    },
} 

export const dateRangePickerProps = {
    disableConfirm: Boolean,
    /**
     * @zh 范围选择器的类型
     * @en Type of range selector
     * */
    mode: {
      type: String as PropType<'date' | 'year' | 'quarter' | 'month' | 'week'>,
      default: 'date',
      validator: (value: string) => ['date', 'year', 'quarter', 'month', 'week'].includes(value),
    },
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
      type: Array as PropType<(Date | string | number)[]>,
    },
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: {
      type: Array as PropType<(Date | string | number)[]>,
    },
    /**
     * @zh 默认面板显示的日期
     * @en The date displayed in the default panel
     * */
    pickerValue: {
      type: Array as PropType<(Date | string | number)[]>,
    },
    /**
     * @zh 面板显示的日期
     * @en Date displayed on the panel
     * */
    defaultPickerValue: {
      type: Array as PropType<(Date | string | number)[]>,
    },
    /**
     * @zh 是否禁用
     * @en Whether to disable
     * */
    disabled: {
      type: [Boolean, Array] as PropType<boolean | boolean[]>,
      default: false,
    },
    /**
     * @zh 每周的第一天开始于周几，0 - 周日，1 - 周一，以此类推。
     * @en The first day of the week starts on the day of the week, 0-Sunday, 1-Monday, and so on.
     * @type 0 | 1 | 2 | 3 | 4 | 5 | 6
     * @version 2-6 from 2.21.0
     */
    dayStartOfWeek: {
      type: Number as PropType<WeekStart>,
      default: 0,
      validator: (value: number) => value >= 0 && value <= 6,
    },
    /**
     * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
     * @en Display the format of the date, refer to [String Parsing Format](#string-parsing-format)
     * */
    format: {
      type: String,
    },
    /**
     * @zh 值的格式，对 `value` `defaultValue` `pickerValue` `defaultPickerValue` 以及事件中的返回值生效，支持设置为时间戳，Date 和字符串（参考[字符串解析格式](#字符串解析格式)）。如果没有指定，将格式化为字符串，格式同 `format`。
     * @en The format of the value, valid for `value` `defaultValue` `pickerValue` `defaultPickerValue` and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format) ). If not specified, it will be formatted as a string, in the same format as `format`.
     */
    valueFormat: {
      type: String as PropType<'timestamp' | 'Date' | string>,
    },
    /**
     * @zh 是否增加时间选择
     * @en Whether to increase time selection
     * */
    showTime: {
      type: Boolean,
    },
    /**
     * @zh 时间显示的参数，参考 [TimePickerProps](/vue/component/time-picker)
     * @en Time display parameters, refer to [TimePickerProps](/vue/component/time-picker)
     * */
    timePickerProps: {
      type: Object as PropType<Partial<TimePickerProps>>,
    },
    /**
     * @zh 提示文案
     * @en Prompt copy
     * */
    placeholder: {
      type: Array as PropType<string[]>,
    },
    /**
     * @zh 不可选的日期
     * @en Non-selectable date
     * */
    disabledDate: {
      type: Function as PropType<(current: Date, type: 'start' | 'end') => boolean>,
    },
    /**
     * @zh 不可选取的时间
     * @en Unselectable time
     * */
    disabledTime: {
      type: Function as PropType<(current: Date, type: 'start' | 'end') => DisabledTimeProps>,
    },
    /**
     * @zh 范围选择器输入框内的分割符号
     * @en The segmentation symbol in the input box of the range selector
     * */
    separator: {
      type: String,
    },
    /**
     * @zh 时间是否会交换，默认情况下时间会影响和参与开始和结束值的排序，如果要固定时间顺序，可将其关闭。
     * @en Whether the time will be exchanged, by default time will affect and participate in the ordering of start and end values, if you want to fix the time order, you can turn it off.
     * */
    exchangeTime: {
      type: Boolean,
      default: true,
    },
    popupContainer: popupContainerProp,
    clearable: {
      type: Boolean,
      default: true,
    },
    readonly: {
      type: Boolean,
    },
    error: {
      type: Boolean,
    },
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
    shortcuts: {
      type: Array as PropType<ShortcutType[]>,
      default: () => [],
    },
    shortcutsPosition: {
      type: String as PropType<'left' | 'bottom' | 'right'>,
      default: 'bottom',
    },
    placement: {
      type: String as PropType<'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'>,
      default: 'bottom-start',
    },
    open: {
      type: Boolean,
      default: undefined,
    },
    defaultOpen: {
      type: Boolean,
    },
    triggerProps: {
      type: Object as PropType<TriggerProps>,
    },
    unmountOnClose: {
      type: Boolean,
    },
    previewShortcut: {
      type: Boolean,
      default: true,
    },
    showConfirmBtn: {
      type: Boolean,
    },
    /**
     * @zh 是否禁止键盘输入日期
     * @en Whether input is disabled with the keyboard.
     */
    disabledInput: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否启用缩写
     * @en Whether to enable abbreviation
     */
    abbreviation: {
      type: Boolean,
      default: true,
    },
} 

export const datePickerProps = {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
      type: [Object, String, Number] as PropType<Date | string | number>,
    },
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: {
      type: [Object, String, Number] as PropType<Date | string | number>,
    },
    /**
     * @zh 选择器类型
     * @en Picker type
     */
    mode: {
      type: String as PropType<Mode>,
      default: 'date',
      validator: (value: string) => ['date', 'year', 'quarter', 'month', 'week'].includes(value),
    },
    /**
     * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
     * @en Display the format of the date, refer to [String Parsing Format](#string-parsing-format)
     */
    format: {
      type: [String, Function] as PropType<string | ((current: Date) => string)>,
    },
    /**
     * @zh 每周的第一天开始于周几，0 - 周日，1 - 周一，以此类推。
     * @en The first day of the week starts on the day of the week, 0-Sunday, 1-Monday, and so on.
     * @type 0 | 1 | 2 | 3 | 4 | 5 | 6
     */
    dayStartOfWeek: {
      type: Number as PropType<WeekStart>,
      default: 0,
      validator: (value: WeekStart) => value >= 0 && value <= 6,
    },
    /**
     * @zh 是否增加时间选择
     * @en Whether to increase time selection
     */
    showTime: {
      type: Boolean,
    },
    /**
     * @zh 时间显示的参数，参考 [TimePickerProps](/vue/component/time-picker)
     * @en Time display parameters, refer to [TimePickerProps](/vue/component/time-picker)
     */
    timePickerProps: {
      type: Object as PropType<Partial<TimePickerProps>>,
    },
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
      type: Boolean,
    },
    /**
     * @zh 不可选取的日期
     * @en Unselectable date
     */
    disabledDate: {
      type: Function as PropType<(current?: Date) => boolean>,
    },
    /**
     * @zh 不可选取的时间
     * @en Unselectable time
     */
    disabledTime: {
      type: Function as PropType<(current: Date) => DisabledTimeProps>,
    },
    /**
     * @zh 是否显示 `showTime` 时，选择当前时间的按钮
     * @en Whether to display the now button when showTime
     */
    showNowButton: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 没有触发元素，只显示选择面板（默认 true）
     * @en Panel only without trigger (default true)
     */
} 

export type DatePickerProps = import("vue").ExtractPublicPropTypes<typeof datePickerProps>
export type PickerProps = import("vue").ExtractPublicPropTypes<typeof pickerProps>
export type DateRangePickerProps = import("vue").ExtractPublicPropTypes<typeof dateRangePickerProps>

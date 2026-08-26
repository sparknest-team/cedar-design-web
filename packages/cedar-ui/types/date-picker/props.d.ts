import type { ExtractPropTypes, PropType } from 'vue';
import type { TriggerProps } from '../trigger';
import type { TimePickerProps } from '../time-picker/types';
import type { ComponentSize } from '../_utils/constant';
import type { FormControlVariant } from '../_utils/form-control';
import type { DisabledTimeProps, FormatFunc, Mode, ShortcutType, WeekStart } from './types';
export declare const pickerProps: {
    /**
     * @zh 国际化配置，用于覆盖locale中的 `datePicker` 字段
     * @en Internationalization configuration, used to cover the locale file in the `datePicker` field
     */
    locale: {
        type: PropType<Record<string, any>>;
    };
    /**
     * @zh 没有触发元素，只显示选择面板
     * @en There is no trigger element, only the selection panel is displayed
     * */
    hideTrigger: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否允许清除
     * @en Whether to allow clear
     * */
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否为只读
     * @en Whether it is read-only
     * */
    readonly: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否为错误状态
     * @en Whether it is an error state
     */
    error: {
        type: BooleanConstructor;
    };
    /**
     * @zh 日期选择器的尺寸
     * @en The size of the date picker
     * @values 'xs','sm','md','lg','xl'
     * @defaultValue 'md'
     * */
    size: {
        type: PropType<ComponentSize>;
        validator: (value: ComponentSize) => boolean;
    };
    /**
     * @zh 输入框变体
     * @en Input variant
     * @values 'filled','outlined','standard'
     * @defaultValue 'filled'
     */
    variant: {
        type: PropType<FormControlVariant>;
        default: string;
        validator: (value: FormControlVariant) => boolean;
    };
    /**
     * @zh 预设时间范围快捷选择
     * @en Quick selection of preset time range
     */
    shortcuts: {
        type: PropType<ShortcutType[]>;
        default: () => never[];
    };
    /**
     * @zh 预设范围在面板上的位置，默认放在下方，侧边一般用于大量预设时间的场景
     * @en The position of the preset range on the panel, which is placed at the bottom by default, and the side is generally used for scenes with a large number of preset times
     * */
    shortcutsPosition: {
        type: PropType<"left" | "bottom" | "right">;
        default: string;
    };
    /**
     * @zh 弹出的框的位置
     * @en The placement of the pop-up box
     */
    placement: {
        type: PropType<"top" | "tl" | "tr" | "bottom" | "bl" | "br">;
        default: string;
    };
    /**
     * @zh 控制弹出框的打开或者关闭状态
     * @en Control the open or closed state of the pop-up box
     */
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 默认弹出框是打开或者关闭
     * @en The default pop-up box is open or closed
     */
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 可以传入 `Trigger` 组件的参数
     * @en You can pass in the parameters of the `Trigger` component
     */
    triggerProps: {
        type: PropType<TriggerProps>;
    };
    /**
     * @zh 是否在隐藏的时候销毁DOM结构
     * @en Whether to destroy the DOM structure when hiding
     */
    unmountOnClose: {
        type: BooleanConstructor;
    };
    /**
     * @zh 提示文案
     * @en Prompt copy
     */
    placeholder: {
        type: StringConstructor;
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
    };
    /**
     * @zh 不可选取的日期
     * @en Unselectable date
     */
    disabledDate: {
        type: PropType<(current?: Date) => boolean>;
    };
    /**
     * @zh 不可选取的时间
     * @en Unselectable time
     */
    disabledTime: {
        type: PropType<(current: Date) => DisabledTimeProps>;
    };
    /**
     * @zh 面板显示的日期
     * @en Date displayed on the panel
     * @vModel
     */
    pickerValue: {
        type: PropType<Date | string | number>;
    };
    /**
     * @zh 面板默认显示的日期
     * @en The date displayed on the panel by default
     */
    defaultPickerValue: {
        type: PropType<Date | string | number>;
    };
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for pop-up box
     */
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    mode: {
        type: PropType<"date" | "year" | "quarter" | "month" | "week">;
        default: string;
        validator: (value: string) => boolean;
    };
    format: {
        type: PropType<string | FormatFunc>;
    };
    /**
     * @zh 值的格式，对 `value` `defaultValue` `pickerValue` `defaultPickerValue` 以及事件中的返回值生效，支持设置为时间戳，Date 和字符串（参考[字符串解析格式](#字符串解析格式)）。如果没有指定，将格式化为字符串，格式同 `format`。
     * @en The format of the value, valid for `value` `defaultValue` `pickerValue` `defaultPickerValue` and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format) ). If not specified, it will be formatted as a string, in the same format as `format`.
     * @version 2.16.0
     */
    valueFormat: {
        type: PropType<"timestamp" | "Date" | string>;
    };
    /**
     * @zh 是否要预览快捷选择的结果
     * @en Whether to preview the result of the shortcut
     * @version 2.28.0
     */
    previewShortcut: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否显示确认按钮，`showTime = true` 的时候始终显示。
     * @en Whether to show the confirm button, always show when `showTime = true`.
     * @version 2.29.0
     */
    showConfirmBtn: {
        type: BooleanConstructor;
    };
    showTime: {
        type: BooleanConstructor;
    };
    timePickerProps: {
        type: PropType<Partial<TimePickerProps>>;
    };
    showNowBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    dayStartOfWeek: {
        type: PropType<WeekStart>;
        default: number;
        validator: (value: number) => boolean;
    };
    modelValue: {
        type: PropType<Date | string | number>;
    };
    defaultValue: {
        type: PropType<Date | string | number>;
    };
    /**
     * @zh 是否禁止键盘输入日期
     * @en Whether input is disabled with the keyboard.
     * @version 2.43.0
     */
    disabledInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否启用缩写
     * @en Whether to enable abbreviation
     * @version 2.45.0
     */
    abbreviation: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const dateRangePickerProps: {
    /**
     * @zh 范围选择器的类型
     * @en Type of range selector
     * */
    mode: {
        type: PropType<"date" | "year" | "quarter" | "month" | "week">;
        default: string;
        validator: (value: string) => boolean;
    };
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
        type: PropType<(Date | string | number)[]>;
    };
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: {
        type: PropType<(Date | string | number)[]>;
    };
    /**
     * @zh 默认面板显示的日期
     * @en The date displayed in the default panel
     * */
    pickerValue: {
        type: PropType<(Date | string | number)[]>;
    };
    /**
     * @zh 面板显示的日期
     * @en Date displayed on the panel
     * */
    defaultPickerValue: {
        type: PropType<(Date | string | number)[]>;
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     * */
    disabled: {
        type: PropType<boolean | boolean[]>;
        default: boolean;
    };
    /**
     * @zh 每周的第一天开始于周几，0 - 周日，1 - 周一，以此类推。
     * @en The first day of the week starts on the day of the week, 0-Sunday, 1-Monday, and so on.
     * @type 0 | 1 | 2 | 3 | 4 | 5 | 6
     * @version 2-6 from 2.21.0
     */
    dayStartOfWeek: {
        type: PropType<WeekStart>;
        default: number;
        validator: (value: number) => boolean;
    };
    /**
     * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
     * @en Display the format of the date, refer to [String Parsing Format](#string-parsing-format)
     * */
    format: {
        type: StringConstructor;
    };
    /**
     * @zh 值的格式，对 `value` `defaultValue` `pickerValue` `defaultPickerValue` 以及事件中的返回值生效，支持设置为时间戳，Date 和字符串（参考[字符串解析格式](#字符串解析格式)）。如果没有指定，将格式化为字符串，格式同 `format`。
     * @en The format of the value, valid for `value` `defaultValue` `pickerValue` `defaultPickerValue` and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format) ). If not specified, it will be formatted as a string, in the same format as `format`.
     * @version 2.16.0
     */
    valueFormat: {
        type: PropType<"timestamp" | "Date" | string>;
    };
    /**
     * @zh 是否增加时间选择
     * @en Whether to increase time selection
     * */
    showTime: {
        type: BooleanConstructor;
    };
    /**
     * @zh 时间显示的参数，参考 [TimePickerProps](/vue/component/time-picker)
     * @en Time display parameters, refer to [TimePickerProps](/vue/component/time-picker)
     * */
    timePickerProps: {
        type: PropType<Partial<TimePickerProps>>;
    };
    /**
     * @zh 提示文案
     * @en Prompt copy
     * */
    placeholder: {
        type: PropType<string[]>;
    };
    /**
     * @zh 不可选的日期
     * @en Non-selectable date
     * */
    disabledDate: {
        type: PropType<(current: Date, type: "start" | "end") => boolean>;
    };
    /**
     * @zh 不可选取的时间
     * @en Unselectable time
     * */
    disabledTime: {
        type: PropType<(current: Date, type: "start" | "end") => DisabledTimeProps>;
    };
    /**
     * @zh 范围选择器输入框内的分割符号
     * @en The segmentation symbol in the input box of the range selector
     * */
    separator: {
        type: StringConstructor;
    };
    /**
     * @zh 时间是否会交换，默认情况下时间会影响和参与开始和结束值的排序，如果要固定时间顺序，可将其关闭。
     * @en Whether the time will be exchanged, by default time will affect and participate in the ordering of start and end values, if you want to fix the time order, you can turn it off.
     * @version 2.25.0
     * */
    exchangeTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    locale: {
        type: PropType<Record<string, any>>;
    };
    hideTrigger: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
    };
    error: {
        type: BooleanConstructor;
    };
    size: {
        type: PropType<ComponentSize>;
        validator: (value: ComponentSize) => boolean;
    };
    /**
     * @zh 输入框变体
     * @en Input variant
     * @values 'filled','outlined','standard'
     * @defaultValue 'filled'
     */
    variant: {
        type: PropType<FormControlVariant>;
        default: string;
        validator: (value: FormControlVariant) => boolean;
    };
    shortcuts: {
        type: PropType<ShortcutType[]>;
        default: () => never[];
    };
    shortcutsPosition: {
        type: PropType<"left" | "bottom" | "right">;
        default: string;
    };
    placement: {
        type: PropType<"top" | "tl" | "tr" | "bottom" | "bl" | "br">;
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
    };
    triggerProps: {
        type: PropType<TriggerProps>;
    };
    unmountOnClose: {
        type: BooleanConstructor;
    };
    previewShortcut: {
        type: BooleanConstructor;
        default: boolean;
    };
    showConfirmBtn: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否禁止键盘输入日期
     * @en Whether input is disabled with the keyboard.
     * @version 2.43.0
     */
    disabledInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否启用缩写
     * @en Whether to enable abbreviation
     */
    abbreviation: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const datePickerProps: {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
        type: PropType<Date | string | number>;
    };
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: {
        type: PropType<Date | string | number>;
    };
    /**
     * @zh 选择器类型
     * @en Picker type
     */
    mode: {
        type: PropType<Mode>;
        default: string;
        validator: (value: string) => boolean;
    };
    /**
     * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
     * @en Display the format of the date, refer to [String Parsing Format](#string-parsing-format)
     */
    format: {
        type: PropType<string | ((current: Date) => string)>;
    };
    /**
     * @zh 每周的第一天开始于周几，0 - 周日，1 - 周一，以此类推。
     * @en The first day of the week starts on the day of the week, 0-Sunday, 1-Monday, and so on.
     * @type 0 | 1 | 2 | 3 | 4 | 5 | 6
     */
    dayStartOfWeek: {
        type: PropType<WeekStart>;
        default: number;
        validator: (value: WeekStart) => boolean;
    };
    /**
     * @zh 是否增加时间选择
     * @en Whether to increase time selection
     */
    showTime: {
        type: BooleanConstructor;
    };
    /**
     * @zh 时间显示的参数，参考 [TimePickerProps](/vue/component/time-picker)
     * @en Time display parameters, refer to [TimePickerProps](/vue/component/time-picker)
     */
    timePickerProps: {
        type: PropType<Partial<TimePickerProps>>;
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
    };
    /**
     * @zh 不可选取的日期
     * @en Unselectable date
     */
    disabledDate: {
        type: PropType<(current?: Date) => boolean>;
    };
    /**
     * @zh 不可选取的时间
     * @en Unselectable time
     */
    disabledTime: {
        type: PropType<(current: Date) => DisabledTimeProps>;
    };
    /**
     * @zh 是否显示 `showTime` 时，选择当前时间的按钮
     * @en Whether to display the now button when showTime
     */
    showNowBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 没有触发元素，只显示选择面板（默认 true）
     * @en Panel only without trigger (default true)
     */
    hideTrigger: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type DatePickerProps = Partial<ExtractPropTypes<typeof datePickerProps>>;
export type PickerProps = Partial<ExtractPropTypes<typeof pickerProps>>;
export type DateRangePickerProps = Partial<ExtractPropTypes<typeof dateRangePickerProps>>;

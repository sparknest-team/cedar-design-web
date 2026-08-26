import type { ExtractPropTypes, PropType } from 'vue';
import type { TriggerProps } from '../trigger';
import type { ComponentSize } from '../_utils/constant';
import type { FormControlVariant } from '../_utils/form-control';
export declare const timePickerProps: {
    /**
     * @zh 选择器类型
     * @en Selector type
     */
    type: {
        type: PropType<"time" | "time-range">;
        default: string;
    };
    /**
     * @zh 绑定值
     * @en Value
     * */
    modelValue: {
        type: PropType<string | number | Date | Array<string | number | Date>>;
    };
    /**
     * @zh 默认值
     * @en Default value
     * */
    defaultValue: {
        type: PropType<string | number | Date | Array<string | number | Date>>;
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
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
     * @zh 是否为只读模式
     * @en Whether it is read-only mode
     * */
    readonly: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否为错误状态
     * @en Whether it is an error state
     * */
    error: {
        type: BooleanConstructor;
    };
    /**
     * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
     * @en Display the format of the date, refer to [String Parsing Format](#String Parsing Format)
     * */
    format: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 提示文案
     * @en Prompt copy
     * */
    placeholder: {
        type: PropType<string | string[]>;
    };
    /**
     * @zh 输入框尺寸
     * @en Input box size
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
     * @zh 弹出框的挂载容器
     * @en Mount container for pop-up box
     * */
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    /**
     * @zh 12 小时制
     * @en 12 hour clock
     * */
    use12Hours: {
        type: BooleanConstructor;
    };
    /**
     * @zh 设置 时 / 分 / 秒 的选择间隔
     * @en Set the hour/minute/second selection interval
     * */
    step: {
        type: PropType<{
            hour?: number;
            minute?: number;
            second?: number;
        }>;
    };
    /**
     * @zh 禁用的部分小时选项
     * @en Disabled partial hour options
     * */
    disabledHours: {
        type: PropType<() => number[]>;
    };
    /**
     * @zh 禁用的部分分钟选项
     * @en Disabled some minutes options
     * */
    disabledMinutes: {
        type: PropType<(selectedHour?: number) => number[]>;
    };
    /**
     * @zh 禁用的部分秒数选项
     * @en Disabled partial seconds option
     * */
    disabledSeconds: {
        type: PropType<(selectedHour?: number, selectedMinute?: number) => number[]>;
    };
    /**
     * @zh 隐藏禁止选择的选项
     * @en Hide prohibited options
     * */
    hideDisabledOptions: {
        type: BooleanConstructor;
    };
    /**
     * @zh 禁用确认步骤，开启后直接点选时间不需要点击确认按钮
     * @en Disable the confirmation step, click the time directly after opening, without clicking the confirmation button
     * */
    disableConfirm: {
        type: BooleanConstructor;
    };
    /**
     * @zh 弹出的位置
     * @en Pop-up placement
     * */
    placement: {
        type: PropType<"top" | "tl" | "tr" | "bottom" | "bl" | "br">;
        default: string;
    };
    /**
     * @zh 控制弹出框打开或者关闭
     * @en Control the pop-up box to open or close
     * @vModel
     */
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 弹出框默认打开或者关闭
     * @en The pop-up box is opened or closed by default
     * */
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 可以传入 `Trigger` 组件的参数
     * @en You can pass in the parameters of the `Trigger` component
     * */
    triggerProps: {
        type: PropType<TriggerProps>;
    };
    /**
     * @zh 是否在关闭后销毁 dom 结构
     * @en Whether to destroy the dom structure after closing
     * */
    unmountOnClose: {
        type: BooleanConstructor;
    };
    /**
     * @zh 没有触发元素，只显示选择面板（默认 true）
     * @en Panel only without trigger (default true)
     */
    hideTrigger: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 结束时间早于开始时间时，在字段与面板结束侧显示「次日」，并关闭确认时的起止交换
     * @en Show next-day marker when end is earlier than start, and skip range sort on confirm
     */
    showNextDay: {
        type: BooleanConstructor;
    };
};
export declare const timeRangePickerProps: {
    modelValue: {
        type: PropType<Array<string | number | Date>>;
    };
    defaultValue: {
        type: PropType<Array<string | number | Date>>;
    };
    open: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    defaultOpen: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    error: BooleanConstructor;
    format: StringConstructor;
    size: {
        type: PropType<ComponentSize>;
        validator: (value: ComponentSize) => boolean;
    };
    variant: {
        type: PropType<FormControlVariant>;
        default: string;
        validator: (value: FormControlVariant) => boolean;
    };
    placeholder: {
        type: PropType<string | string[]>;
    };
    use12Hours: BooleanConstructor;
    step: {
        type: PropType<{
            hour?: number;
            minute?: number;
            second?: number;
        }>;
    };
    disabledHours: {
        type: PropType<() => number[]>;
    };
    disabledMinutes: {
        type: PropType<(selectedHour?: number) => number[]>;
    };
    disabledSeconds: {
        type: PropType<(selectedHour?: number, selectedMinute?: number) => number[]>;
    };
    hideDisabledOptions: BooleanConstructor;
    disableConfirm: BooleanConstructor;
    placement: {
        type: PropType<"top" | "tl" | "tr" | "bottom" | "bl" | "br">;
    };
    triggerProps: {
        type: PropType<Record<string, unknown>>;
    };
    unmountOnClose: BooleanConstructor;
    hideTrigger: {
        type: BooleanConstructor;
        default: boolean;
    };
    showNextDay: BooleanConstructor;
};
export type TimePickerProps = Partial<ExtractPropTypes<typeof timePickerProps>>;
export type TimeRangePickerProps = Partial<ExtractPropTypes<typeof timeRangePickerProps>>;

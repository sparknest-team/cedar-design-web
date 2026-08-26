import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
import type { FormControlVariant } from '../_utils/form-control';
import type { CalendarValue, Mode } from '../date-picker/types';
export declare const dateProps: {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
        type: PropType<CalendarValue>;
    };
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: {
        type: PropType<CalendarValue>;
    };
    /**
     * @zh 选择类型
     * @en Picker type
     */
    type: {
        type: PropType<Mode>;
        default: string;
        validator: (value: Mode) => boolean;
    };
    /**
     * @zh 是否显示弹出框
     * @en Popup visibility
     */
    open: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    /**
     * @zh 弹出框默认是否可见
     * @en Default popup visibility
     */
    defaultOpen: BooleanConstructor;
    /**
     * @zh 是否允许清除
     * @en Whether to allow clear
     */
    clearable: BooleanConstructor;
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: BooleanConstructor;
    /**
     * @zh 是否只读
     * @en Whether readonly
     */
    readonly: BooleanConstructor;
    /**
     * @zh 输入框尺寸
     * @en Input size
     */
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
     * @zh 提示文案
     * @en Placeholder
     */
    placeholder: StringConstructor;
    /**
     * @zh 不可选日期
     * @en Disabled date
     */
    disabledDate: {
        type: PropType<(current?: Date) => boolean>;
    };
    /**
     * @zh 展示日期的格式
     * @en Display format
     */
    format: {
        type: PropType<string | ((current: Date) => string)>;
    };
    /**
     * @zh 是否增加时间选择
     * @en Whether to show time
     */
    showTime: BooleanConstructor;
    /**
     * @zh 是否为错误状态
     * @en Error status
     */
    error: BooleanConstructor;
    /**
     * @zh 透传给 DatePicker 的其余属性
     * @en Extra props passed to DatePicker
     */
    datePickerProps: {
        type: PropType<Record<string, unknown>>;
        default: () => {};
    };
};
export type DateProps = Partial<ExtractPropTypes<typeof dateProps>>;

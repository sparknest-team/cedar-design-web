import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
import type { FormControlVariant } from '../_utils/form-control';
export declare const timeRangeProps: {
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
    placeholder: {
        type: PropType<string | string[]>;
    };
    format: StringConstructor;
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
    disableConfirm: BooleanConstructor;
    error: BooleanConstructor;
    showNextDay: BooleanConstructor;
    timeRangePickerProps: {
        type: PropType<Record<string, unknown>>;
        default: () => {};
    };
};
export type TimeRangeProps = Partial<ExtractPropTypes<typeof timeRangeProps>>;

import type { ExtractPropTypes, PropType } from 'vue';
export type RateColor = string | Record<string, string>;
export declare const rateProps: {
    count: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
    };
    modelValue: {
        type: NumberConstructor;
        default: undefined;
    };
    defaultValue: {
        type: NumberConstructor;
        default: number;
    };
    allowHalf: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    grading: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: PropType<RateColor>;
};
export type RateProps = ExtractPropTypes<typeof rateProps>;

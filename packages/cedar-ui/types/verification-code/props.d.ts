import type { ExtractPropTypes, PropType, VNode } from 'vue';
import type { ComponentSize } from '../_utils/constant';
export type VerificationCodeSeparator = (index: number, character: string) => VNode;
export type VerificationCodeFormatter = (inputValue: string, index: number, value: string) => string | boolean;
export declare const verificationCodeProps: {
    modelValue: StringConstructor;
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    length: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
    };
    size: {
        type: PropType<ComponentSize>;
        default: string;
        validator: (value: unknown) => value is ComponentSize;
    };
    disabled: BooleanConstructor;
    masked: BooleanConstructor;
    readonly: BooleanConstructor;
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    separator: PropType<VerificationCodeSeparator>;
    formatter: PropType<VerificationCodeFormatter>;
    ariaLabel: StringConstructor;
};
export type VerificationCodeProps = ExtractPropTypes<typeof verificationCodeProps>;

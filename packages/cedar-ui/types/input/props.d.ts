import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
import type { FormControlMaxLength, FormControlVariant, WordLength, WordSlice } from '../_utils/form-control';
export declare const inputTypes: readonly ["text", "password"];
export type InputType = (typeof inputTypes)[number];
export declare const inputProps: {
    variant: {
        type: PropType<FormControlVariant>;
        validator: (value: unknown) => value is FormControlVariant;
    };
    modelValue: StringConstructor;
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<ComponentSize>;
        validator: (value: unknown) => value is ComponentSize;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: StringConstructor;
    maxLength: {
        type: PropType<FormControlMaxLength>;
        default: number;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    wordLength: PropType<WordLength>;
    wordSlice: PropType<WordSlice>;
    inputAttrs: PropType<Record<string, unknown>>;
    type: {
        type: PropType<InputType>;
        default: string;
        validator: (value: unknown) => value is InputType;
    };
};
export type InputProps = ExtractPropTypes<typeof inputProps>;
export declare const inputPasswordProps: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    visibility: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultVisibility: {
        type: BooleanConstructor;
        default: boolean;
    };
    visibilityToggle: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type InputPasswordProps = ExtractPropTypes<typeof inputPasswordProps>;

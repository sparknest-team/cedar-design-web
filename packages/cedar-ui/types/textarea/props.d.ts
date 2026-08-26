import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
import type { FormControlMaxLength, FormControlVariant, WordLength, WordSlice } from '../_utils/form-control';
export interface TextareaAutoSize {
    minRows?: number;
    maxRows?: number;
}
export declare const textareaProps: {
    modelValue: StringConstructor;
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: PropType<FormControlVariant>;
        validator: (value: unknown) => value is FormControlVariant;
    };
    size: {
        type: PropType<ComponentSize>;
        validator: (value: unknown) => value is ComponentSize;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: PropType<FormControlMaxLength>;
        default: number;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSize: {
        type: PropType<boolean | TextareaAutoSize>;
        default: boolean;
    };
    wordLength: PropType<WordLength>;
    wordSlice: PropType<WordSlice>;
    textareaAttrs: PropType<Record<string, unknown>>;
};
export type TextareaProps = ExtractPropTypes<typeof textareaProps>;

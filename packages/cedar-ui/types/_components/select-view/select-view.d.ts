import type { PropType } from 'vue';
import type { Data } from '../../_utils/types';
import { ComponentSize } from '../../_utils/constant';
import { SelectViewValue } from './interface';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<SelectViewValue[]>;
        required: true;
    };
    inputValue: StringConstructor;
    placeholder: StringConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "standard">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    opened: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<ComponentSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    creatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterable: {
        type: BooleanConstructor;
        default: (props: Data) => boolean;
    };
    maxTagCount: {
        type: NumberConstructor;
        default: number;
    };
    tagNowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    retainInputValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    inputRef: import("vue").ComputedRef<HTMLInputElement>;
    handleFocus: (ev: FocusEvent) => void;
    handleBlur: (ev: FocusEvent) => void;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "clear" | "blur" | "remove")[], "focus" | "clear" | "blur" | "remove", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<SelectViewValue[]>;
        required: true;
    };
    inputValue: StringConstructor;
    placeholder: StringConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "standard">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    opened: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<ComponentSize>;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    creatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterable: {
        type: BooleanConstructor;
        default: (props: Data) => boolean;
    };
    maxTagCount: {
        type: NumberConstructor;
        default: number;
    };
    tagNowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    retainInputValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onRemove?: ((...args: any[]) => any) | undefined;
}>, {
    error: boolean;
    disabled: boolean;
    multiple: boolean;
    variant: "filled" | "outlined" | "standard";
    clearable: boolean;
    loading: boolean;
    opened: boolean;
    retainInputValue: boolean;
    maxTagCount: number;
    tagNowrap: boolean;
    bordered: boolean;
    creatable: boolean;
    filterable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

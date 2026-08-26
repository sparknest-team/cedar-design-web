import { PropType } from 'vue';
import { ComponentSize } from '../../_utils/constant';
import { SelectViewValue } from '../select-view/interface';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: PropType<SelectViewValue>;
    inputValue: {
        type: StringConstructor;
        default: string;
    };
    enabledInput: BooleanConstructor;
    formatLabel: PropType<(data?: SelectViewValue) => string>;
    placeholder: StringConstructor;
    retainInputValue: BooleanConstructor;
    disabled: BooleanConstructor;
    baseCls: StringConstructor;
    size: PropType<ComponentSize>;
    variant: {
        type: PropType<"filled" | "outlined" | "standard">;
        default: string;
    };
    error: BooleanConstructor;
    focused: BooleanConstructor;
    uninjectFormItemContext: BooleanConstructor;
}>, {
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "blur" | "update:inputValue" | "inputValueChange")[], "focus" | "blur" | "update:inputValue" | "inputValueChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: PropType<SelectViewValue>;
    inputValue: {
        type: StringConstructor;
        default: string;
    };
    enabledInput: BooleanConstructor;
    formatLabel: PropType<(data?: SelectViewValue) => string>;
    placeholder: StringConstructor;
    retainInputValue: BooleanConstructor;
    disabled: BooleanConstructor;
    baseCls: StringConstructor;
    size: PropType<ComponentSize>;
    variant: {
        type: PropType<"filled" | "outlined" | "standard">;
        default: string;
    };
    error: BooleanConstructor;
    focused: BooleanConstructor;
    uninjectFormItemContext: BooleanConstructor;
}>> & Readonly<{
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:inputValue"?: ((...args: any[]) => any) | undefined;
    onInputValueChange?: ((...args: any[]) => any) | undefined;
}>, {
    error: boolean;
    disabled: boolean;
    variant: "filled" | "outlined" | "standard";
    focused: boolean;
    inputValue: string;
    enabledInput: boolean;
    retainInputValue: boolean;
    uninjectFormItemContext: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

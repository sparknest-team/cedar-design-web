import { InputTagFieldNames, TagData } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    baseCls: StringConstructor;
    modelValue: {
        type: import("vue").PropType<(string | number | TagData)[]>;
    };
    defaultValue: {
        type: import("vue").PropType<(string | number | TagData)[]>;
        default: () => never[];
    };
    inputValue: StringConstructor;
    defaultInputValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    variant: {
        type: import("vue").PropType<"filled" | "outlined" | "standard">;
        default: string;
        validator: (value: string) => boolean;
    };
    maxTagCount: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    retainInputValue: {
        type: import("vue").PropType<boolean | {
            create?: boolean;
            blur?: boolean;
        }>;
        default: boolean;
    };
    formatTag: {
        type: import("vue").PropType<(data: TagData) => string>;
    };
    uniqueValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    fieldNames: {
        type: import("vue").PropType<InputTagFieldNames>;
    };
    tagNowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    focused: BooleanConstructor;
    disabledInput: BooleanConstructor;
    uninjectFormItemContext: BooleanConstructor;
}>, {
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    /**
     * @zh 使输入框获取焦点
     * @en Make the input box focus
     * @public
     */
    focus(): void;
    /**
     * @zh 使输入框失去焦点
     * @en Make the input box lose focus
     * @public
     */
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: (string | number | TagData)[]) => true;
    'update:inputValue': (inputValue: string) => true;
    /**
     * @zh 值发生改变时触发
     * @en Triggered when the value changes
     * @param {(string | number | TagData)[]} value
     * @param {Event} ev
     */
    change: (value: (string | number | TagData)[], ev: Event) => true;
    /**
     * @zh 输入值发生改变时触发
     * @en Trigger when the input value changes
     * @param {string} inputValue
     * @param {Event} ev
     */
    inputValueChange: (inputValue: string, ev: Event) => true;
    /**
     * @zh 按下回车键时触发
     * @en Triggered when the enter key is pressed
     * @param {string} inputValue
     * @param {KeyboardEvent} ev
     */
    pressEnter: (inputValue: string, ev: KeyboardEvent) => true;
    /**
     * @zh 点击标签的删除按钮时触发
     * @en Triggered when the delete button of the label is clicked
     * @param {string | number} removed
     * @param {Event} ev
     */
    remove: (removed: string | number, ev: Event) => true;
    /**
     * @zh 点击清除按钮时触发
     * @en Triggered when the clear button is clicked
     * @param {MouseEvent} ev
     */
    clear: (ev: MouseEvent) => true;
    /**
     * @zh 输入框获取焦点时触发
     * @en Triggered when the input box gets focus
     * @param {FocusEvent} ev
     */
    focus: (ev: FocusEvent) => true;
    /**
     * @zh 输入框失去焦点时触发
     * @en Triggered when the input box loses focus
     * @param {FocusEvent} ev
     */
    blur: (ev: FocusEvent) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    baseCls: StringConstructor;
    modelValue: {
        type: import("vue").PropType<(string | number | TagData)[]>;
    };
    defaultValue: {
        type: import("vue").PropType<(string | number | TagData)[]>;
        default: () => never[];
    };
    inputValue: StringConstructor;
    defaultInputValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    variant: {
        type: import("vue").PropType<"filled" | "outlined" | "standard">;
        default: string;
        validator: (value: string) => boolean;
    };
    maxTagCount: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    retainInputValue: {
        type: import("vue").PropType<boolean | {
            create?: boolean;
            blur?: boolean;
        }>;
        default: boolean;
    };
    formatTag: {
        type: import("vue").PropType<(data: TagData) => string>;
    };
    uniqueValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    fieldNames: {
        type: import("vue").PropType<InputTagFieldNames>;
    };
    tagNowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    focused: BooleanConstructor;
    disabledInput: BooleanConstructor;
    uninjectFormItemContext: BooleanConstructor;
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: MouseEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: (string | number | TagData)[], ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: (string | number | TagData)[]) => any) | undefined;
    onPressEnter?: ((inputValue: string, ev: KeyboardEvent) => any) | undefined;
    onRemove?: ((removed: string | number, ev: Event) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((inputValue: string, ev: Event) => any) | undefined;
}>, {
    error: boolean;
    readonly: boolean;
    disabled: boolean;
    variant: "filled" | "outlined" | "standard";
    defaultValue: (string | number | TagData)[];
    clearable: boolean;
    focused: boolean;
    retainInputValue: boolean | {
        create?: boolean;
        blur?: boolean;
    };
    uninjectFormItemContext: boolean;
    defaultInputValue: string;
    maxTagCount: number;
    uniqueValue: boolean;
    tagNowrap: boolean;
    disabledInput: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

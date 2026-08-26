declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    variant: {
        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
        validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
    };
    modelValue: StringConstructor;
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
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
        type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
        default: number;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
    wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
    inputAttrs: import("vue").PropType<Record<string, unknown>>;
    type: {
        type: import("vue").PropType<import("./props").InputType>;
        default: string;
        validator: (value: unknown) => value is import("./props").InputType;
    };
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
    'update:modelValue': (value: string) => true;
    /**
     * @zh 用户输入时触发
     * @en Triggered when the user enters
     * @param {string} value
     * @param {Event} ev
     */
    input: (value: string, ev: Event) => true;
    /**
     * @zh 仅在输入框失焦或按下回车时触发
     * @en Only triggered when the input box is out of focus or when you press Enter
     * @param {string} value
     * @param {Event} ev
     */
    change: (value: string, ev: Event) => true;
    /**
     * @zh 用户按下回车时触发
     * @en Triggered when the user presses enter
     * @param {KeyboardEvent} ev
     */
    pressEnter: (ev: KeyboardEvent) => true;
    /**
     * @zh 用户点击清除按钮时触发
     * @en Triggered when the user clicks the clear button
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
    variant: {
        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
        validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
    };
    modelValue: StringConstructor;
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
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
        type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
        default: number;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
    wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
    inputAttrs: import("vue").PropType<Record<string, unknown>>;
    type: {
        type: import("vue").PropType<import("./props").InputType>;
        default: string;
        validator: (value: unknown) => value is import("./props").InputType;
    };
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: MouseEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: string, ev: Event) => any) | undefined;
    onInput?: ((value: string, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
}>, {
    error: boolean;
    readonly: boolean;
    type: "text" | "password";
    disabled: boolean;
    defaultValue: string;
    clearable: boolean;
    maxLength: import("../_utils/form-control").FormControlMaxLength;
    showWordLimit: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

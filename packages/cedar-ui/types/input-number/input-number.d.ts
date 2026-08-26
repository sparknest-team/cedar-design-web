declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: NumberConstructor;
    defaultValue: NumberConstructor;
    mode: {
        type: import("vue").PropType<import("./props").InputNumberMode>;
        default: string;
        validator: (value: unknown) => value is import("./props").InputNumberMode;
    };
    precision: {
        type: NumberConstructor;
        validator: (value: unknown) => boolean;
    };
    step: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    formatter: import("vue").PropType<import("./props").InputNumberFormatter>;
    parser: import("vue").PropType<import("./props").InputNumberParser>;
    placeholder: StringConstructor;
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelEvent: {
        type: import("vue").PropType<import("./props").InputNumberModelEvent>;
        default: string;
        validator: (value: unknown) => value is import("./props").InputNumberModelEvent;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputAttrs: import("vue").PropType<Record<string, unknown>>;
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
    "update:modelValue": (value: number | undefined) => true;
    /**
     * @zh 值发生改变时触发
     * @en Triggered when the value changes
     * @param { number | undefined } value
     * @param {Event} ev
     */
    change: (value: number | undefined, ev: Event) => true;
    /**
     * @zh 输入框获取焦点时触发
     * @en Triggered when the input gets focus
     * @param {FocusEvent} ev
     */
    focus: (ev: FocusEvent) => true;
    /**
     * @zh 输入框失去焦点时触发
     * @en Triggered when the input box loses focus
     * @param {FocusEvent} ev
     */
    blur: (ev: FocusEvent) => true;
    /**
     * @zh 用户点击清除按钮时触发
     * @en Triggered when the user clicks the clear button
     * @param {Event} ev
     * @version 2.23.0
     */
    clear: (ev: Event) => true;
    /**
     * @zh 输入时触发
     * @en Triggered on input
     * @param { number | undefined } value
     * @param {string} inputValue
     * @param {Event} ev
     * @version 2.27.0
     */
    input: (value: number | undefined, inputValue: string, ev: Event) => true;
    /**
     * @zh 按下键盘时触发
     * @en Triggered on keydown
     * @param {MouseEvent} ev
     * @version 2.56.0
     */
    keydown: (ev: KeyboardEvent) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: NumberConstructor;
    defaultValue: NumberConstructor;
    mode: {
        type: import("vue").PropType<import("./props").InputNumberMode>;
        default: string;
        validator: (value: unknown) => value is import("./props").InputNumberMode;
    };
    precision: {
        type: NumberConstructor;
        validator: (value: unknown) => boolean;
    };
    step: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    formatter: import("vue").PropType<import("./props").InputNumberFormatter>;
    parser: import("vue").PropType<import("./props").InputNumberParser>;
    placeholder: StringConstructor;
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelEvent: {
        type: import("vue").PropType<import("./props").InputNumberModelEvent>;
        default: string;
        validator: (value: unknown) => value is import("./props").InputNumberModelEvent;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputAttrs: import("vue").PropType<Record<string, unknown>>;
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: Event) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
    onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
    onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
}>, {
    error: boolean;
    readonly: boolean;
    mode: "input" | "button" | "embed";
    disabled: boolean;
    clearable: boolean;
    max: number;
    step: number;
    min: number;
    modelEvent: "change" | "input";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

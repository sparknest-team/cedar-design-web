declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    disabled: BooleanConstructor;
    masked: BooleanConstructor;
    readonly: BooleanConstructor;
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    separator: import("vue").PropType<import("./props").VerificationCodeSeparator>;
    formatter: import("vue").PropType<import("./props").VerificationCodeFormatter>;
    ariaLabel: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string) => true;
    /**
     * @zh 值发生改变时触发
     * @en Triggered when the value changes
     * @param { string } value
     */
    change: (value: string) => true;
    /**
     * @zh 填充完成时触发
     * @en Triggered when the filling is complete
     * @param { string } value
     */
    finish: (value: string) => true;
    /**
     * @zh 输入时触发
     * @en Triggered on input
     * @param { string } inputValue
     * @param { number } index
     * @param {Event} ev
     */
    input: (inputValue: string, index: number, ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    disabled: BooleanConstructor;
    masked: BooleanConstructor;
    readonly: BooleanConstructor;
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    separator: import("vue").PropType<import("./props").VerificationCodeSeparator>;
    formatter: import("vue").PropType<import("./props").VerificationCodeFormatter>;
    ariaLabel: StringConstructor;
}>> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    onInput?: ((inputValue: string, index: number, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onFinish?: ((value: string) => any) | undefined;
}>, {
    error: boolean;
    readonly: boolean;
    size: "xs" | "sm" | "md" | "lg" | "xl";
    length: number;
    disabled: boolean;
    defaultValue: string;
    masked: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

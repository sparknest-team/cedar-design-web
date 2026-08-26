declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    color: import("vue").PropType<import("./props").RateColor>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: number) => true;
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @property {number} value
     */
    change: (value: number) => true;
    /**
     * @zh 鼠标移动到数值上时触发
     * @en Triggered when the mouse moves over the value
     * @property {number} value
     */
    hoverChange: (value: number) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    color: import("vue").PropType<import("./props").RateColor>;
}>> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onHoverChange?: ((value: number) => any) | undefined;
}>, {
    readonly: boolean;
    disabled: boolean;
    defaultValue: number;
    modelValue: number;
    clearable: boolean;
    count: number;
    allowHalf: boolean;
    grading: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

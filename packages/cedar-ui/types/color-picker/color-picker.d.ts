declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    defaultValue: {
        type: StringConstructor;
    };
    format: {
        type: import("vue").PropType<"hex" | "rgb">;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    showHistory: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPreset: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledAlpha: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideTrigger: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerProps: {
        type: import("vue").PropType<Partial<import("..").TriggerProps>>;
    };
    historyColors: {
        type: import("vue").PropType<string[]>;
    };
    presetColors: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string) => true;
    /**
     * @zh 颜色值改变时触发
     * @en Triggered when the color value changes
     * @param {string} value
     */
    change: (value: string) => true;
    /**
     * @zh 颜色面板展开和收起时触发
     * @en Triggered when the color panel is expanded and collapsed
     * @param {boolean} visible
     * @param {string} value
     */
    'open-change': (visible: boolean, value: string) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    defaultValue: {
        type: StringConstructor;
    };
    format: {
        type: import("vue").PropType<"hex" | "rgb">;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    showHistory: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPreset: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledAlpha: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideTrigger: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerProps: {
        type: import("vue").PropType<Partial<import("..").TriggerProps>>;
    };
    historyColors: {
        type: import("vue").PropType<string[]>;
    };
    presetColors: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
}>> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    showText: boolean;
    disabledAlpha: boolean;
    showHistory: boolean;
    showPreset: boolean;
    presetColors: string[];
    hideTrigger: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

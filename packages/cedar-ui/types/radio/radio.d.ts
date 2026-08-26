declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./props").RadioValue>;
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<import("./props").RadioValue>;
        default: boolean;
    };
    variant: {
        type: import("vue").PropType<import("./context").RadioVariant>;
        default: string;
        validator: (value: unknown) => value is import("./context").RadioVariant;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    uninjectGroupContext: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string | number | boolean) => true;
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @param { string | number | boolean } value
     * @param {Event} ev
     */
    change: (value: string | number | boolean, ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./props").RadioValue>;
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<import("./props").RadioValue>;
        default: boolean;
    };
    variant: {
        type: import("vue").PropType<import("./context").RadioVariant>;
        default: string;
        validator: (value: unknown) => value is import("./context").RadioVariant;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    uninjectGroupContext: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}>, {
    value: import("./props").RadioValue;
    disabled: boolean;
    variant: "button" | "radio";
    modelValue: import("./props").RadioValue;
    defaultChecked: boolean;
    uninjectGroupContext: boolean;
}, {}, {
    IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        prefix: {
            type: StringConstructor;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        prefix: {
            type: StringConstructor;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

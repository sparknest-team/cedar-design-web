declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<boolean | import("./props").CheckboxValue[]>;
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: import("vue").PropType<import("./props").CheckboxValue>;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    uninjectGroupContext: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: boolean | (string | number | boolean)[]) => true;
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @param { boolean | (string | number | boolean)[] } value
     * @param {Event} ev
     */
    change: (value: boolean | (string | number | boolean)[], ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<boolean | import("./props").CheckboxValue[]>;
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: import("vue").PropType<import("./props").CheckboxValue>;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    uninjectGroupContext: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((value: boolean | (string | number | boolean)[], ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean | (string | number | boolean)[]) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: boolean | import("./props").CheckboxValue[];
    defaultChecked: boolean;
    indeterminate: boolean;
    uninjectGroupContext: boolean;
}, {}, {
    Check: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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

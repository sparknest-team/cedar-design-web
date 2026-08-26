import { RadioOption } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./props").RadioValue>;
        default: undefined;
    };
    defaultValue: {
        type: import("vue").PropType<import("./props").RadioValue>;
        default: string;
    };
    variant: {
        type: import("vue").PropType<import("./context").RadioVariant>;
        default: string;
        validator: (value: unknown) => value is import("./context").RadioVariant;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    options: import("vue").PropType<Array<import("./props").RadioValue | RadioOption>>;
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string | number | boolean) => true;
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @property { string | number | boolean } value
     */
    change: (value: string | number | boolean, ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./props").RadioValue>;
        default: undefined;
    };
    defaultValue: {
        type: import("vue").PropType<import("./props").RadioValue>;
        default: string;
    };
    variant: {
        type: import("vue").PropType<import("./context").RadioVariant>;
        default: string;
        validator: (value: unknown) => value is import("./context").RadioVariant;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    options: import("vue").PropType<Array<import("./props").RadioValue | RadioOption>>;
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}>, {
    disabled: boolean;
    variant: "button" | "radio";
    defaultValue: import("./props").RadioValue;
    modelValue: import("./props").RadioValue;
    direction: "horizontal" | "vertical";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

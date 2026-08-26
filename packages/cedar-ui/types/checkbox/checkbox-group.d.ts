import { CheckboxOption } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./props").CheckboxValue[]>;
        default: undefined;
    };
    defaultValue: {
        type: import("vue").PropType<import("./props").CheckboxValue[]>;
        default: () => never[];
    };
    max: NumberConstructor;
    options: import("vue").PropType<Array<import("./props").CheckboxValue | CheckboxOption>>;
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: (string | number | boolean)[]) => true;
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @param {(string | number | boolean)[]} value
     * @param {Event} ev
     */
    change: (value: (string | number | boolean)[], ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./props").CheckboxValue[]>;
        default: undefined;
    };
    defaultValue: {
        type: import("vue").PropType<import("./props").CheckboxValue[]>;
        default: () => never[];
    };
    max: NumberConstructor;
    options: import("vue").PropType<Array<import("./props").CheckboxValue | CheckboxOption>>;
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((value: (string | number | boolean)[], ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: (string | number | boolean)[]) => any) | undefined;
}>, {
    disabled: boolean;
    defaultValue: import("./props").CheckboxValue[];
    modelValue: import("./props").CheckboxValue[];
    direction: "horizontal" | "vertical";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

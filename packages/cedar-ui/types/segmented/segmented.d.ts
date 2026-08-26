import { type SegmentedOption, type SegmentedValue } from './props';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<SegmentedValue>;
        default: undefined;
    };
    defaultValue: {
        type: import("vue").PropType<SegmentedValue>;
        default: undefined;
    };
    options: {
        type: import("vue").PropType<Array<SegmentedValue | SegmentedOption>>;
        default: () => never[];
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: string;
        validator: (value: unknown) => value is import("..").Direction;
    };
    name: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: SegmentedValue) => true;
    /**
     * @zh 值改变时触发
     * @en Emitted when value changes
     * @property {string | number} value
     */
    change: (value: SegmentedValue, ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<SegmentedValue>;
        default: undefined;
    };
    defaultValue: {
        type: import("vue").PropType<SegmentedValue>;
        default: undefined;
    };
    options: {
        type: import("vue").PropType<Array<SegmentedValue | SegmentedOption>>;
        default: () => never[];
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: string;
        validator: (value: unknown) => value is import("..").Direction;
    };
    name: StringConstructor;
}>> & Readonly<{
    onChange?: ((value: SegmentedValue, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: SegmentedValue) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    block: boolean;
    defaultValue: SegmentedValue;
    modelValue: SegmentedValue;
    direction: "horizontal" | "vertical";
    options: (SegmentedValue | SegmentedOption)[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

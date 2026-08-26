import { type FilterFormField } from './types';
declare var __VLS_44: {};
type __VLS_Slots = {} & {
    actions?: (props: typeof __VLS_44) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: () => {};
    };
    fields: {
        type: import("vue").PropType<FilterFormField[]>;
        default: () => never[];
    };
    fieldMap: {
        type: import("vue").PropType<import("./types").FilterFormFieldMap>;
        default: () => {};
    };
    optionsMap: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: () => {};
    };
    rules: {
        type: import("vue").PropType<Record<string, import("..").FieldRule | import("..").FieldRule[]>>;
    };
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapsible: {
        type: BooleanConstructor;
        default: boolean;
    };
    cols: {
        type: import("vue").PropType<number | Record<string, number>>;
        default: () => {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            xxl: number;
        };
    };
    gridProps: {
        type: import("vue").PropType<Record<string, unknown>>;
    };
    changeDebounce: {
        type: NumberConstructor;
        default: number;
    };
}>, {
    formRef: import("vue").Ref<any, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: Record<string, unknown>, field: string) => any;
    "update:modelValue": (value: Record<string, unknown>) => any;
    "update:collapsed": (collapsed: boolean) => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: () => {};
    };
    fields: {
        type: import("vue").PropType<FilterFormField[]>;
        default: () => never[];
    };
    fieldMap: {
        type: import("vue").PropType<import("./types").FilterFormFieldMap>;
        default: () => {};
    };
    optionsMap: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: () => {};
    };
    rules: {
        type: import("vue").PropType<Record<string, import("..").FieldRule | import("..").FieldRule[]>>;
    };
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapsible: {
        type: BooleanConstructor;
        default: boolean;
    };
    cols: {
        type: import("vue").PropType<number | Record<string, number>>;
        default: () => {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            xxl: number;
        };
    };
    gridProps: {
        type: import("vue").PropType<Record<string, unknown>>;
    };
    changeDebounce: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    onChange?: ((value: Record<string, unknown>, field: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: Record<string, unknown>) => any) | undefined;
    "onUpdate:collapsed"?: ((collapsed: boolean) => any) | undefined;
}>, {
    modelValue: Record<string, unknown>;
    cols: number | Record<string, number>;
    collapsed: boolean;
    fields: FilterFormField[];
    collapsible: boolean;
    fieldMap: import("./types").FilterFormFieldMap;
    optionsMap: Record<string, unknown>;
    changeDebounce: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

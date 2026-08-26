import _FilterForm from './filter-form.vue';
import { filterFormProps } from './props';
declare const FilterForm: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<Record<string, unknown>>;
            default: () => {};
        };
        fields: {
            type: import("vue").PropType<import("./types").FilterFormField[]>;
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
        formRef: import("vue").Ref<any, any>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (value: Record<string, unknown>, field: string) => any;
        "update:modelValue": (value: Record<string, unknown>) => any;
        "update:collapsed": (collapsed: boolean) => any;
    }, import("vue").PublicProps, {
        modelValue: Record<string, unknown>;
        cols: number | Record<string, number>;
        collapsed: boolean;
        fields: import("./types").FilterFormField[];
        collapsible: boolean;
        fieldMap: import("./types").FilterFormFieldMap;
        optionsMap: Record<string, unknown>;
        changeDebounce: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<Record<string, unknown>>;
            default: () => {};
        };
        fields: {
            type: import("vue").PropType<import("./types").FilterFormField[]>;
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
        formRef: import("vue").Ref<any, any>;
    }, {}, {}, {}, {
        modelValue: Record<string, unknown>;
        cols: number | Record<string, number>;
        collapsed: boolean;
        fields: import("./types").FilterFormField[];
        collapsible: boolean;
        fieldMap: import("./types").FilterFormFieldMap;
        optionsMap: Record<string, unknown>;
        changeDebounce: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: () => {};
    };
    fields: {
        type: import("vue").PropType<import("./types").FilterFormField[]>;
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
    formRef: import("vue").Ref<any, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: Record<string, unknown>, field: string) => any;
    "update:modelValue": (value: Record<string, unknown>) => any;
    "update:collapsed": (collapsed: boolean) => any;
}, string, {
    modelValue: Record<string, unknown>;
    cols: number | Record<string, number>;
    collapsed: boolean;
    fields: import("./types").FilterFormField[];
    collapsible: boolean;
    fieldMap: import("./types").FilterFormFieldMap;
    optionsMap: Record<string, unknown>;
    changeDebounce: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        actions?: (props: {}) => any;
    };
})>;
export type FilterFormInstance = InstanceType<typeof _FilterForm>;
export type { FilterFormProps, FilterFormField, FilterFormFieldMap, FilterFormFieldRegistration, } from './props';
export { filterFormProps };
export { FilterForm };
export declare const _FilterFormComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<Record<string, unknown>>;
            default: () => {};
        };
        fields: {
            type: import("vue").PropType<import("./types").FilterFormField[]>;
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
        formRef: import("vue").Ref<any, any>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (value: Record<string, unknown>, field: string) => any;
        "update:modelValue": (value: Record<string, unknown>) => any;
        "update:collapsed": (collapsed: boolean) => any;
    }, import("vue").PublicProps, {
        modelValue: Record<string, unknown>;
        cols: number | Record<string, number>;
        collapsed: boolean;
        fields: import("./types").FilterFormField[];
        collapsible: boolean;
        fieldMap: import("./types").FilterFormFieldMap;
        optionsMap: Record<string, unknown>;
        changeDebounce: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<Record<string, unknown>>;
            default: () => {};
        };
        fields: {
            type: import("vue").PropType<import("./types").FilterFormField[]>;
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
        formRef: import("vue").Ref<any, any>;
    }, {}, {}, {}, {
        modelValue: Record<string, unknown>;
        cols: number | Record<string, number>;
        collapsed: boolean;
        fields: import("./types").FilterFormField[];
        collapsible: boolean;
        fieldMap: import("./types").FilterFormFieldMap;
        optionsMap: Record<string, unknown>;
        changeDebounce: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: () => {};
    };
    fields: {
        type: import("vue").PropType<import("./types").FilterFormField[]>;
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
    formRef: import("vue").Ref<any, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: Record<string, unknown>, field: string) => any;
    "update:modelValue": (value: Record<string, unknown>) => any;
    "update:collapsed": (collapsed: boolean) => any;
}, string, {
    modelValue: Record<string, unknown>;
    cols: number | Record<string, number>;
    collapsed: boolean;
    fields: import("./types").FilterFormField[];
    collapsible: boolean;
    fieldMap: import("./types").FilterFormFieldMap;
    optionsMap: Record<string, unknown>;
    changeDebounce: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        actions?: (props: {}) => any;
    };
})>;
export default FilterForm;

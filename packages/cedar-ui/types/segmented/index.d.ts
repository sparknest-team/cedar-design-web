import _Segmented from './segmented';
import { segmentedProps } from './props';
declare const Segmented: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./props").SegmentedValue>;
            default: undefined;
        };
        defaultValue: {
            type: import("vue").PropType<import("./props").SegmentedValue>;
            default: undefined;
        };
        options: {
            type: import("vue").PropType<Array<import("./props").SegmentedValue | import("./props").SegmentedOption>>;
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
        onChange?: ((value: import("./props").SegmentedValue, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./props").SegmentedValue) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: import("./props").SegmentedValue) => true;
        change: (value: import("./props").SegmentedValue, ev: Event) => true;
    }, import("vue").PublicProps, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        block: boolean;
        defaultValue: import("./props").SegmentedValue;
        modelValue: import("./props").SegmentedValue;
        direction: "horizontal" | "vertical";
        options: (import("./props").SegmentedValue | import("./props").SegmentedOption)[];
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./props").SegmentedValue>;
            default: undefined;
        };
        defaultValue: {
            type: import("vue").PropType<import("./props").SegmentedValue>;
            default: undefined;
        };
        options: {
            type: import("vue").PropType<Array<import("./props").SegmentedValue | import("./props").SegmentedOption>>;
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
        onChange?: ((value: import("./props").SegmentedValue, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./props").SegmentedValue) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        block: boolean;
        defaultValue: import("./props").SegmentedValue;
        modelValue: import("./props").SegmentedValue;
        direction: "horizontal" | "vertical";
        options: (import("./props").SegmentedValue | import("./props").SegmentedOption)[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./props").SegmentedValue>;
        default: undefined;
    };
    defaultValue: {
        type: import("vue").PropType<import("./props").SegmentedValue>;
        default: undefined;
    };
    options: {
        type: import("vue").PropType<Array<import("./props").SegmentedValue | import("./props").SegmentedOption>>;
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
    onChange?: ((value: import("./props").SegmentedValue, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./props").SegmentedValue) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: import("./props").SegmentedValue) => true;
    change: (value: import("./props").SegmentedValue, ev: Event) => true;
}, string, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    block: boolean;
    defaultValue: import("./props").SegmentedValue;
    modelValue: import("./props").SegmentedValue;
    direction: "horizontal" | "vertical";
    options: (import("./props").SegmentedValue | import("./props").SegmentedOption)[];
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type SegmentedInstance = InstanceType<typeof _Segmented>;
export { segmentedProps };
export type { SegmentedOption, SegmentedProps, SegmentedValue } from './props';
export { Segmented };
export declare const _SegmentedComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./props").SegmentedValue>;
            default: undefined;
        };
        defaultValue: {
            type: import("vue").PropType<import("./props").SegmentedValue>;
            default: undefined;
        };
        options: {
            type: import("vue").PropType<Array<import("./props").SegmentedValue | import("./props").SegmentedOption>>;
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
        onChange?: ((value: import("./props").SegmentedValue, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./props").SegmentedValue) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: import("./props").SegmentedValue) => true;
        change: (value: import("./props").SegmentedValue, ev: Event) => true;
    }, import("vue").PublicProps, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        block: boolean;
        defaultValue: import("./props").SegmentedValue;
        modelValue: import("./props").SegmentedValue;
        direction: "horizontal" | "vertical";
        options: (import("./props").SegmentedValue | import("./props").SegmentedOption)[];
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./props").SegmentedValue>;
            default: undefined;
        };
        defaultValue: {
            type: import("vue").PropType<import("./props").SegmentedValue>;
            default: undefined;
        };
        options: {
            type: import("vue").PropType<Array<import("./props").SegmentedValue | import("./props").SegmentedOption>>;
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
        onChange?: ((value: import("./props").SegmentedValue, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./props").SegmentedValue) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        block: boolean;
        defaultValue: import("./props").SegmentedValue;
        modelValue: import("./props").SegmentedValue;
        direction: "horizontal" | "vertical";
        options: (import("./props").SegmentedValue | import("./props").SegmentedOption)[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./props").SegmentedValue>;
        default: undefined;
    };
    defaultValue: {
        type: import("vue").PropType<import("./props").SegmentedValue>;
        default: undefined;
    };
    options: {
        type: import("vue").PropType<Array<import("./props").SegmentedValue | import("./props").SegmentedOption>>;
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
    onChange?: ((value: import("./props").SegmentedValue, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./props").SegmentedValue) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: import("./props").SegmentedValue) => true;
    change: (value: import("./props").SegmentedValue, ev: Event) => true;
}, string, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    block: boolean;
    defaultValue: import("./props").SegmentedValue;
    modelValue: import("./props").SegmentedValue;
    direction: "horizontal" | "vertical";
    options: (import("./props").SegmentedValue | import("./props").SegmentedOption)[];
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default Segmented;

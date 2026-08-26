import _Radio from './radio';
import _RadioGroup from './radio-group';
import { radioGroupProps, radioProps } from './props';
declare const Radio: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string | number | boolean) => true;
        change: (value: string | number | boolean, ev: Event) => true;
    }, import("vue").PublicProps, {
        value: import("./props").RadioValue;
        disabled: boolean;
        variant: "button" | "radio";
        modelValue: import("./props").RadioValue;
        defaultChecked: boolean;
        uninjectGroupContext: boolean;
    }, true, {}, {}, {
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
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        value: import("./props").RadioValue;
        disabled: boolean;
        variant: "button" | "radio";
        modelValue: import("./props").RadioValue;
        defaultChecked: boolean;
        uninjectGroupContext: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string | number | boolean) => true;
    change: (value: string | number | boolean, ev: Event) => true;
}, string, {
    value: import("./props").RadioValue;
    disabled: boolean;
    variant: "button" | "radio";
    modelValue: import("./props").RadioValue;
    defaultChecked: boolean;
    uninjectGroupContext: boolean;
}, {}, string, {}, {
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
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        options: import("vue").PropType<Array<import("./props").RadioValue | import("./types").RadioOption>>;
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
        options: import("vue").PropType<Array<import("./props").RadioValue | import("./types").RadioOption>>;
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
}>;
export type RadioInstance = InstanceType<typeof _Radio>;
export type RadioGroupInstance = InstanceType<typeof _RadioGroup>;
export { radioGroupProps, radioProps };
export type { RadioGroupProps, RadioProps, RadioValue } from './props';
export type { RadioVariant } from './context';
export { Radio, _RadioGroup as RadioGroup };
export declare const _RadioComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string | number | boolean) => true;
        change: (value: string | number | boolean, ev: Event) => true;
    }, import("vue").PublicProps, {
        value: import("./props").RadioValue;
        disabled: boolean;
        variant: "button" | "radio";
        modelValue: import("./props").RadioValue;
        defaultChecked: boolean;
        uninjectGroupContext: boolean;
    }, true, {}, {}, {
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
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        value: import("./props").RadioValue;
        disabled: boolean;
        variant: "button" | "radio";
        modelValue: import("./props").RadioValue;
        defaultChecked: boolean;
        uninjectGroupContext: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string | number | boolean) => true;
    change: (value: string | number | boolean, ev: Event) => true;
}, string, {
    value: import("./props").RadioValue;
    disabled: boolean;
    variant: "button" | "radio";
    modelValue: import("./props").RadioValue;
    defaultChecked: boolean;
    uninjectGroupContext: boolean;
}, {}, string, {}, {
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
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        options: import("vue").PropType<Array<import("./props").RadioValue | import("./types").RadioOption>>;
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
        options: import("vue").PropType<Array<import("./props").RadioValue | import("./types").RadioOption>>;
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
}>;
export default Radio;

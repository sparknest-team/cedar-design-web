import _Rate from './rate';
import { rateProps } from './props';
declare const Rate: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        count: {
            type: NumberConstructor;
            default: number;
            validator: (value: unknown) => boolean;
        };
        modelValue: {
            type: NumberConstructor;
            default: undefined;
        };
        defaultValue: {
            type: NumberConstructor;
            default: number;
        };
        allowHalf: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        grading: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: import("vue").PropType<import("./props").RateColor>;
    }>> & Readonly<{
        onChange?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        onHoverChange?: ((value: number) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: number) => true;
        change: (value: number) => true;
        hoverChange: (value: number) => true;
    }, import("vue").PublicProps, {
        readonly: boolean;
        disabled: boolean;
        defaultValue: number;
        modelValue: number;
        clearable: boolean;
        count: number;
        allowHalf: boolean;
        grading: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        count: {
            type: NumberConstructor;
            default: number;
            validator: (value: unknown) => boolean;
        };
        modelValue: {
            type: NumberConstructor;
            default: undefined;
        };
        defaultValue: {
            type: NumberConstructor;
            default: number;
        };
        allowHalf: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        grading: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: import("vue").PropType<import("./props").RateColor>;
    }>> & Readonly<{
        onChange?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        onHoverChange?: ((value: number) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        readonly: boolean;
        disabled: boolean;
        defaultValue: number;
        modelValue: number;
        clearable: boolean;
        count: number;
        allowHalf: boolean;
        grading: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    count: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
    };
    modelValue: {
        type: NumberConstructor;
        default: undefined;
    };
    defaultValue: {
        type: NumberConstructor;
        default: number;
    };
    allowHalf: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    grading: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: import("vue").PropType<import("./props").RateColor>;
}>> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onHoverChange?: ((value: number) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: number) => true;
    change: (value: number) => true;
    hoverChange: (value: number) => true;
}, string, {
    readonly: boolean;
    disabled: boolean;
    defaultValue: number;
    modelValue: number;
    clearable: boolean;
    count: number;
    allowHalf: boolean;
    grading: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type RateInstance = InstanceType<typeof _Rate>;
export { Rate, rateProps };
export type { RateColor, RateProps } from './props';
export declare const _RateComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        count: {
            type: NumberConstructor;
            default: number;
            validator: (value: unknown) => boolean;
        };
        modelValue: {
            type: NumberConstructor;
            default: undefined;
        };
        defaultValue: {
            type: NumberConstructor;
            default: number;
        };
        allowHalf: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        grading: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: import("vue").PropType<import("./props").RateColor>;
    }>> & Readonly<{
        onChange?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        onHoverChange?: ((value: number) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: number) => true;
        change: (value: number) => true;
        hoverChange: (value: number) => true;
    }, import("vue").PublicProps, {
        readonly: boolean;
        disabled: boolean;
        defaultValue: number;
        modelValue: number;
        clearable: boolean;
        count: number;
        allowHalf: boolean;
        grading: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        count: {
            type: NumberConstructor;
            default: number;
            validator: (value: unknown) => boolean;
        };
        modelValue: {
            type: NumberConstructor;
            default: undefined;
        };
        defaultValue: {
            type: NumberConstructor;
            default: number;
        };
        allowHalf: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        grading: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: import("vue").PropType<import("./props").RateColor>;
    }>> & Readonly<{
        onChange?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        onHoverChange?: ((value: number) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        readonly: boolean;
        disabled: boolean;
        defaultValue: number;
        modelValue: number;
        clearable: boolean;
        count: number;
        allowHalf: boolean;
        grading: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    count: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
    };
    modelValue: {
        type: NumberConstructor;
        default: undefined;
    };
    defaultValue: {
        type: NumberConstructor;
        default: number;
    };
    allowHalf: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    grading: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: import("vue").PropType<import("./props").RateColor>;
}>> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onHoverChange?: ((value: number) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: number) => true;
    change: (value: number) => true;
    hoverChange: (value: number) => true;
}, string, {
    readonly: boolean;
    disabled: boolean;
    defaultValue: number;
    modelValue: number;
    clearable: boolean;
    count: number;
    allowHalf: boolean;
    grading: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default Rate;

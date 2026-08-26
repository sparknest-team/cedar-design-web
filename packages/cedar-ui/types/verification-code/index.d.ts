import _VerificationCode from './verification-code';
import { verificationCodeProps } from './props';
declare const VerificationCode: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        length: {
            type: NumberConstructor;
            default: number;
            validator: (value: unknown) => boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        disabled: BooleanConstructor;
        masked: BooleanConstructor;
        readonly: BooleanConstructor;
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        separator: import("vue").PropType<import("./props").VerificationCodeSeparator>;
        formatter: import("vue").PropType<import("./props").VerificationCodeFormatter>;
        ariaLabel: StringConstructor;
    }>> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((inputValue: string, index: number, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onFinish?: ((value: string) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string) => true;
        change: (value: string) => true;
        finish: (value: string) => true;
        input: (inputValue: string, index: number, ev: Event) => true;
    }, import("vue").PublicProps, {
        error: boolean;
        readonly: boolean;
        size: "xs" | "sm" | "md" | "lg" | "xl";
        length: number;
        disabled: boolean;
        defaultValue: string;
        masked: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        length: {
            type: NumberConstructor;
            default: number;
            validator: (value: unknown) => boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        disabled: BooleanConstructor;
        masked: BooleanConstructor;
        readonly: BooleanConstructor;
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        separator: import("vue").PropType<import("./props").VerificationCodeSeparator>;
        formatter: import("vue").PropType<import("./props").VerificationCodeFormatter>;
        ariaLabel: StringConstructor;
    }>> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((inputValue: string, index: number, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onFinish?: ((value: string) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        error: boolean;
        readonly: boolean;
        size: "xs" | "sm" | "md" | "lg" | "xl";
        length: number;
        disabled: boolean;
        defaultValue: string;
        masked: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    length: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    disabled: BooleanConstructor;
    masked: BooleanConstructor;
    readonly: BooleanConstructor;
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    separator: import("vue").PropType<import("./props").VerificationCodeSeparator>;
    formatter: import("vue").PropType<import("./props").VerificationCodeFormatter>;
    ariaLabel: StringConstructor;
}>> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    onInput?: ((inputValue: string, index: number, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onFinish?: ((value: string) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string) => true;
    change: (value: string) => true;
    finish: (value: string) => true;
    input: (inputValue: string, index: number, ev: Event) => true;
}, string, {
    error: boolean;
    readonly: boolean;
    size: "xs" | "sm" | "md" | "lg" | "xl";
    length: number;
    disabled: boolean;
    defaultValue: string;
    masked: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type VerificationCodeInstance = InstanceType<typeof _VerificationCode>;
export { VerificationCode, verificationCodeProps };
export type { VerificationCodeFormatter, VerificationCodeProps, VerificationCodeSeparator, } from './props';
export declare const _VerificationCodeComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        length: {
            type: NumberConstructor;
            default: number;
            validator: (value: unknown) => boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        disabled: BooleanConstructor;
        masked: BooleanConstructor;
        readonly: BooleanConstructor;
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        separator: import("vue").PropType<import("./props").VerificationCodeSeparator>;
        formatter: import("vue").PropType<import("./props").VerificationCodeFormatter>;
        ariaLabel: StringConstructor;
    }>> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((inputValue: string, index: number, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onFinish?: ((value: string) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string) => true;
        change: (value: string) => true;
        finish: (value: string) => true;
        input: (inputValue: string, index: number, ev: Event) => true;
    }, import("vue").PublicProps, {
        error: boolean;
        readonly: boolean;
        size: "xs" | "sm" | "md" | "lg" | "xl";
        length: number;
        disabled: boolean;
        defaultValue: string;
        masked: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        length: {
            type: NumberConstructor;
            default: number;
            validator: (value: unknown) => boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        disabled: BooleanConstructor;
        masked: BooleanConstructor;
        readonly: BooleanConstructor;
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        separator: import("vue").PropType<import("./props").VerificationCodeSeparator>;
        formatter: import("vue").PropType<import("./props").VerificationCodeFormatter>;
        ariaLabel: StringConstructor;
    }>> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((inputValue: string, index: number, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onFinish?: ((value: string) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        error: boolean;
        readonly: boolean;
        size: "xs" | "sm" | "md" | "lg" | "xl";
        length: number;
        disabled: boolean;
        defaultValue: string;
        masked: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    length: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    disabled: BooleanConstructor;
    masked: BooleanConstructor;
    readonly: BooleanConstructor;
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    separator: import("vue").PropType<import("./props").VerificationCodeSeparator>;
    formatter: import("vue").PropType<import("./props").VerificationCodeFormatter>;
    ariaLabel: StringConstructor;
}>> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    onInput?: ((inputValue: string, index: number, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onFinish?: ((value: string) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string) => true;
    change: (value: string) => true;
    finish: (value: string) => true;
    input: (inputValue: string, index: number, ev: Event) => true;
}, string, {
    error: boolean;
    readonly: boolean;
    size: "xs" | "sm" | "md" | "lg" | "xl";
    length: number;
    disabled: boolean;
    defaultValue: string;
    masked: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default VerificationCode;

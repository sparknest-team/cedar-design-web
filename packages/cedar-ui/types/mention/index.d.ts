import _Mention from './mention';
import { mentionProps } from './props';
declare const Mention: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        data: {
            type: import("vue").PropType<(string | number | import("..").SelectOptionData | import("..").SelectOptionGroup)[]>;
            default: () => never[];
        };
        prefix: {
            type: import("vue").PropType<string | string[]>;
            default: string;
        };
        split: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: import("vue").PropType<"input" | "textarea">;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: Event) => any) | undefined;
        onSearch?: ((value: string, prefix: string) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onSelect?: ((value: string | number | Record<string, any> | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string) => true;
        change: (value: string) => true;
        search: (value: string, prefix: string) => true;
        select: (value: string | number | Record<string, any> | undefined) => true;
        clear: (ev: Event) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, import("vue").PublicProps, {
        type: "input" | "textarea";
        split: string;
        data: (string | number | import("..").SelectOptionData | import("..").SelectOptionGroup)[];
        disabled: boolean;
        prefix: string | string[];
        defaultValue: string;
        clearable: boolean;
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
        data: {
            type: import("vue").PropType<(string | number | import("..").SelectOptionData | import("..").SelectOptionGroup)[]>;
            default: () => never[];
        };
        prefix: {
            type: import("vue").PropType<string | string[]>;
            default: string;
        };
        split: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: import("vue").PropType<"input" | "textarea">;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: Event) => any) | undefined;
        onSearch?: ((value: string, prefix: string) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onSelect?: ((value: string | number | Record<string, any> | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, {
        type: "input" | "textarea";
        split: string;
        data: (string | number | import("..").SelectOptionData | import("..").SelectOptionGroup)[];
        disabled: boolean;
        prefix: string | string[];
        defaultValue: string;
        clearable: boolean;
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
    data: {
        type: import("vue").PropType<(string | number | import("..").SelectOptionData | import("..").SelectOptionGroup)[]>;
        default: () => never[];
    };
    prefix: {
        type: import("vue").PropType<string | string[]>;
        default: string;
    };
    split: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: import("vue").PropType<"input" | "textarea">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: Event) => any) | undefined;
    onSearch?: ((value: string, prefix: string) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onSelect?: ((value: string | number | Record<string, any> | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    inputRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string) => true;
    change: (value: string) => true;
    search: (value: string, prefix: string) => true;
    select: (value: string | number | Record<string, any> | undefined) => true;
    clear: (ev: Event) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
}, string, {
    type: "input" | "textarea";
    split: string;
    data: (string | number | import("..").SelectOptionData | import("..").SelectOptionGroup)[];
    disabled: boolean;
    prefix: string | string[];
    defaultValue: string;
    clearable: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type MentionInstance = InstanceType<typeof _Mention>;
export declare const _MentionComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        data: {
            type: import("vue").PropType<(string | number | import("..").SelectOptionData | import("..").SelectOptionGroup)[]>;
            default: () => never[];
        };
        prefix: {
            type: import("vue").PropType<string | string[]>;
            default: string;
        };
        split: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: import("vue").PropType<"input" | "textarea">;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: Event) => any) | undefined;
        onSearch?: ((value: string, prefix: string) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onSelect?: ((value: string | number | Record<string, any> | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string) => true;
        change: (value: string) => true;
        search: (value: string, prefix: string) => true;
        select: (value: string | number | Record<string, any> | undefined) => true;
        clear: (ev: Event) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, import("vue").PublicProps, {
        type: "input" | "textarea";
        split: string;
        data: (string | number | import("..").SelectOptionData | import("..").SelectOptionGroup)[];
        disabled: boolean;
        prefix: string | string[];
        defaultValue: string;
        clearable: boolean;
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
        data: {
            type: import("vue").PropType<(string | number | import("..").SelectOptionData | import("..").SelectOptionGroup)[]>;
            default: () => never[];
        };
        prefix: {
            type: import("vue").PropType<string | string[]>;
            default: string;
        };
        split: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: import("vue").PropType<"input" | "textarea">;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: Event) => any) | undefined;
        onSearch?: ((value: string, prefix: string) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onSelect?: ((value: string | number | Record<string, any> | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, {
        type: "input" | "textarea";
        split: string;
        data: (string | number | import("..").SelectOptionData | import("..").SelectOptionGroup)[];
        disabled: boolean;
        prefix: string | string[];
        defaultValue: string;
        clearable: boolean;
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
    data: {
        type: import("vue").PropType<(string | number | import("..").SelectOptionData | import("..").SelectOptionGroup)[]>;
        default: () => never[];
    };
    prefix: {
        type: import("vue").PropType<string | string[]>;
        default: string;
    };
    split: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: import("vue").PropType<"input" | "textarea">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: Event) => any) | undefined;
    onSearch?: ((value: string, prefix: string) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onSelect?: ((value: string | number | Record<string, any> | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    inputRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string) => true;
    change: (value: string) => true;
    search: (value: string, prefix: string) => true;
    select: (value: string | number | Record<string, any> | undefined) => true;
    clear: (ev: Event) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
}, string, {
    type: "input" | "textarea";
    split: string;
    data: (string | number | import("..").SelectOptionData | import("..").SelectOptionGroup)[];
    disabled: boolean;
    prefix: string | string[];
    defaultValue: string;
    clearable: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export { Mention };
export { mentionProps };
export default Mention;

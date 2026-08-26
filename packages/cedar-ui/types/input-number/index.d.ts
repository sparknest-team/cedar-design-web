import _InputNumber from "./input-number";
import { inputNumberProps } from "./props";
declare const InputNumber: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: NumberConstructor;
        defaultValue: NumberConstructor;
        mode: {
            type: import("vue").PropType<import("./props").InputNumberMode>;
            default: string;
            validator: (value: unknown) => value is import("./props").InputNumberMode;
        };
        precision: {
            type: NumberConstructor;
            validator: (value: unknown) => boolean;
        };
        step: {
            type: NumberConstructor;
            default: number;
            validator: (value: unknown) => boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        formatter: import("vue").PropType<import("./props").InputNumberFormatter>;
        parser: import("vue").PropType<import("./props").InputNumberParser>;
        placeholder: StringConstructor;
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelEvent: {
            type: import("vue").PropType<import("./props").InputNumberModelEvent>;
            default: string;
            validator: (value: unknown) => value is import("./props").InputNumberModelEvent;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputAttrs: import("vue").PropType<Record<string, unknown>>;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: Event) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
        onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
        onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: number | undefined) => true;
        change: (value: number | undefined, ev: Event) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
        clear: (ev: Event) => true;
        input: (value: number | undefined, inputValue: string, ev: Event) => true;
        keydown: (ev: KeyboardEvent) => true;
    }, import("vue").PublicProps, {
        error: boolean;
        readonly: boolean;
        mode: "input" | "button" | "embed";
        disabled: boolean;
        clearable: boolean;
        max: number;
        step: number;
        min: number;
        modelEvent: "change" | "input";
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: NumberConstructor;
        defaultValue: NumberConstructor;
        mode: {
            type: import("vue").PropType<import("./props").InputNumberMode>;
            default: string;
            validator: (value: unknown) => value is import("./props").InputNumberMode;
        };
        precision: {
            type: NumberConstructor;
            validator: (value: unknown) => boolean;
        };
        step: {
            type: NumberConstructor;
            default: number;
            validator: (value: unknown) => boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        formatter: import("vue").PropType<import("./props").InputNumberFormatter>;
        parser: import("vue").PropType<import("./props").InputNumberParser>;
        placeholder: StringConstructor;
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelEvent: {
            type: import("vue").PropType<import("./props").InputNumberModelEvent>;
            default: string;
            validator: (value: unknown) => value is import("./props").InputNumberModelEvent;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputAttrs: import("vue").PropType<Record<string, unknown>>;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: Event) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
        onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
        onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, {
        error: boolean;
        readonly: boolean;
        mode: "input" | "button" | "embed";
        disabled: boolean;
        clearable: boolean;
        max: number;
        step: number;
        min: number;
        modelEvent: "change" | "input";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: NumberConstructor;
    defaultValue: NumberConstructor;
    mode: {
        type: import("vue").PropType<import("./props").InputNumberMode>;
        default: string;
        validator: (value: unknown) => value is import("./props").InputNumberMode;
    };
    precision: {
        type: NumberConstructor;
        validator: (value: unknown) => boolean;
    };
    step: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    formatter: import("vue").PropType<import("./props").InputNumberFormatter>;
    parser: import("vue").PropType<import("./props").InputNumberParser>;
    placeholder: StringConstructor;
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelEvent: {
        type: import("vue").PropType<import("./props").InputNumberModelEvent>;
        default: string;
        validator: (value: unknown) => value is import("./props").InputNumberModelEvent;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputAttrs: import("vue").PropType<Record<string, unknown>>;
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: Event) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
    onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
    onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
}>, {
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number | undefined) => true;
    change: (value: number | undefined, ev: Event) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
    clear: (ev: Event) => true;
    input: (value: number | undefined, inputValue: string, ev: Event) => true;
    keydown: (ev: KeyboardEvent) => true;
}, string, {
    error: boolean;
    readonly: boolean;
    mode: "input" | "button" | "embed";
    disabled: boolean;
    clearable: boolean;
    max: number;
    step: number;
    min: number;
    modelEvent: "change" | "input";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type InputNumberInstance = InstanceType<typeof _InputNumber>;
export { InputNumber, inputNumberProps };
export type { InputNumberMode, InputNumberFormatter, InputNumberModelEvent, InputNumberParser, InputNumberProps, } from "./props";
export declare const _InputNumberComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: NumberConstructor;
        defaultValue: NumberConstructor;
        mode: {
            type: import("vue").PropType<import("./props").InputNumberMode>;
            default: string;
            validator: (value: unknown) => value is import("./props").InputNumberMode;
        };
        precision: {
            type: NumberConstructor;
            validator: (value: unknown) => boolean;
        };
        step: {
            type: NumberConstructor;
            default: number;
            validator: (value: unknown) => boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        formatter: import("vue").PropType<import("./props").InputNumberFormatter>;
        parser: import("vue").PropType<import("./props").InputNumberParser>;
        placeholder: StringConstructor;
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelEvent: {
            type: import("vue").PropType<import("./props").InputNumberModelEvent>;
            default: string;
            validator: (value: unknown) => value is import("./props").InputNumberModelEvent;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputAttrs: import("vue").PropType<Record<string, unknown>>;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: Event) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
        onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
        onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: number | undefined) => true;
        change: (value: number | undefined, ev: Event) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
        clear: (ev: Event) => true;
        input: (value: number | undefined, inputValue: string, ev: Event) => true;
        keydown: (ev: KeyboardEvent) => true;
    }, import("vue").PublicProps, {
        error: boolean;
        readonly: boolean;
        mode: "input" | "button" | "embed";
        disabled: boolean;
        clearable: boolean;
        max: number;
        step: number;
        min: number;
        modelEvent: "change" | "input";
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: NumberConstructor;
        defaultValue: NumberConstructor;
        mode: {
            type: import("vue").PropType<import("./props").InputNumberMode>;
            default: string;
            validator: (value: unknown) => value is import("./props").InputNumberMode;
        };
        precision: {
            type: NumberConstructor;
            validator: (value: unknown) => boolean;
        };
        step: {
            type: NumberConstructor;
            default: number;
            validator: (value: unknown) => boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        formatter: import("vue").PropType<import("./props").InputNumberFormatter>;
        parser: import("vue").PropType<import("./props").InputNumberParser>;
        placeholder: StringConstructor;
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelEvent: {
            type: import("vue").PropType<import("./props").InputNumberModelEvent>;
            default: string;
            validator: (value: unknown) => value is import("./props").InputNumberModelEvent;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputAttrs: import("vue").PropType<Record<string, unknown>>;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: Event) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
        onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
        onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, {
        error: boolean;
        readonly: boolean;
        mode: "input" | "button" | "embed";
        disabled: boolean;
        clearable: boolean;
        max: number;
        step: number;
        min: number;
        modelEvent: "change" | "input";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: NumberConstructor;
    defaultValue: NumberConstructor;
    mode: {
        type: import("vue").PropType<import("./props").InputNumberMode>;
        default: string;
        validator: (value: unknown) => value is import("./props").InputNumberMode;
    };
    precision: {
        type: NumberConstructor;
        validator: (value: unknown) => boolean;
    };
    step: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    formatter: import("vue").PropType<import("./props").InputNumberFormatter>;
    parser: import("vue").PropType<import("./props").InputNumberParser>;
    placeholder: StringConstructor;
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelEvent: {
        type: import("vue").PropType<import("./props").InputNumberModelEvent>;
        default: string;
        validator: (value: unknown) => value is import("./props").InputNumberModelEvent;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputAttrs: import("vue").PropType<Record<string, unknown>>;
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: Event) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
    onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
    onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
}>, {
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number | undefined) => true;
    change: (value: number | undefined, ev: Event) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
    clear: (ev: Event) => true;
    input: (value: number | undefined, inputValue: string, ev: Event) => true;
    keydown: (ev: KeyboardEvent) => true;
}, string, {
    error: boolean;
    readonly: boolean;
    mode: "input" | "button" | "embed";
    disabled: boolean;
    clearable: boolean;
    max: number;
    step: number;
    min: number;
    modelEvent: "change" | "input";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default InputNumber;

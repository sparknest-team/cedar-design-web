import { PropType } from "vue";
import type { ComponentSize } from "../_utils/constant";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    current: {
        type: NumberConstructor;
        required: true;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    pages: {
        type: NumberConstructor;
        required: true;
    };
    size: {
        type: PropType<ComponentSize>;
    };
    onChange: {
        type: PropType<(value: number) => void>;
    };
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    t: (key: string, ...args: any[]) => string;
    inputValue: import("vue").Ref<number | undefined, number | undefined>;
    handleChange: (value: number | undefined) => void;
    handleFormatter: (value: string) => string;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    current: {
        type: NumberConstructor;
        required: true;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    pages: {
        type: NumberConstructor;
        required: true;
    };
    size: {
        type: PropType<ComponentSize>;
    };
    onChange: {
        type: PropType<(value: number) => void>;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    simple: boolean;
}, {}, {
    InputNumber: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            modelValue: NumberConstructor;
            defaultValue: NumberConstructor;
            mode: {
                type: PropType<import("..").InputNumberMode>;
                default: string;
                validator: (value: unknown) => value is import("..").InputNumberMode;
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
            formatter: PropType<import("..").InputNumberFormatter>;
            parser: PropType<import("..").InputNumberParser>;
            placeholder: StringConstructor;
            size: {
                type: PropType<ComponentSize>;
                validator: (value: unknown) => value is ComponentSize;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelEvent: {
                type: PropType<import("..").InputNumberModelEvent>;
                default: string;
                validator: (value: unknown) => value is import("..").InputNumberModelEvent;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            inputAttrs: PropType<Record<string, unknown>>;
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
                type: PropType<import("..").InputNumberMode>;
                default: string;
                validator: (value: unknown) => value is import("..").InputNumberMode;
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
            formatter: PropType<import("..").InputNumberFormatter>;
            parser: PropType<import("..").InputNumberParser>;
            placeholder: StringConstructor;
            size: {
                type: PropType<ComponentSize>;
                validator: (value: unknown) => value is ComponentSize;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelEvent: {
                type: PropType<import("..").InputNumberModelEvent>;
                default: string;
                validator: (value: unknown) => value is import("..").InputNumberModelEvent;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            inputAttrs: PropType<Record<string, unknown>>;
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
            type: PropType<import("..").InputNumberMode>;
            default: string;
            validator: (value: unknown) => value is import("..").InputNumberMode;
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
        formatter: PropType<import("..").InputNumberFormatter>;
        parser: PropType<import("..").InputNumberParser>;
        placeholder: StringConstructor;
        size: {
            type: PropType<ComponentSize>;
            validator: (value: unknown) => value is ComponentSize;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelEvent: {
            type: PropType<import("..").InputNumberModelEvent>;
            default: string;
            validator: (value: unknown) => value is import("..").InputNumberModelEvent;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputAttrs: PropType<Record<string, unknown>>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

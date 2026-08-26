declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    visibility: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultVisibility: {
        type: BooleanConstructor;
        default: boolean;
    };
    visibilityToggle: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    inputRef: import("vue").Ref<any, any>;
    mergedVisible: import("vue").ComputedRef<boolean>;
    classes: typeof import("rattail").classes;
    n: (suffix?: string) => string;
    handleInvisible: () => void;
    t: (key: string, ...args: any[]) => string;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visibility-change" | "update:visibility")[], "visibility-change" | "update:visibility", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    visibility: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultVisibility: {
        type: BooleanConstructor;
        default: boolean;
    };
    visibilityToggle: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onVisibility-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:visibility"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    visibility: boolean;
    defaultVisibility: boolean;
    visibilityToggle: boolean;
}, {}, {
    IconEye: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (event: MouseEvent) => any;
        }, import("vue").PublicProps, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{
        size?: string | number | undefined;
        strokeWidth?: number | undefined;
        strokeLinecap?: "butt" | "round" | "square" | undefined;
        strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
        rotate?: number | undefined;
        spin?: boolean | undefined;
    }> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, string, {
        strokeWidth: number;
        strokeLinecap: "butt" | "round" | "square";
        strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
    };
    IconEyeInvisible: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (event: MouseEvent) => any;
        }, import("vue").PublicProps, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{
        size?: string | number | undefined;
        strokeWidth?: number | undefined;
        strokeLinecap?: "butt" | "round" | "square" | undefined;
        strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
        rotate?: number | undefined;
        spin?: boolean | undefined;
    }> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, string, {
        strokeWidth: number;
        strokeLinecap: "butt" | "round" | "square";
        strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
    };
    IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        prefix: {
            type: StringConstructor;
        };
        size: {
            type: import("vue").PropType<import("../index.js").ComponentSize>;
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
            type: import("vue").PropType<import("../index.js").ComponentSize>;
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
    Input: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        variant: {
            type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
            validator: (value: unknown) => value is import("../_utils/form-control.js").FormControlVariant;
        };
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("../index.js").ComponentSize>;
            validator: (value: unknown) => value is import("../index.js").ComponentSize;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: BooleanConstructor;
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: StringConstructor;
        maxLength: {
            type: import("vue").PropType<import("../_utils/form-control.js").FormControlMaxLength>;
            default: number;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        wordLength: import("vue").PropType<import("../_utils/form-control.js").WordLength>;
        wordSlice: import("vue").PropType<import("../_utils/form-control.js").WordSlice>;
        inputAttrs: import("vue").PropType<Record<string, unknown>>;
        type: {
            type: import("vue").PropType<import("./props").InputType>;
            default: string;
            validator: (value: unknown) => value is import("./props").InputType;
        };
    }>, {
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string) => true;
        input: (value: string, ev: Event) => true;
        change: (value: string, ev: Event) => true;
        pressEnter: (ev: KeyboardEvent) => true;
        clear: (ev: MouseEvent) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        variant: {
            type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
            validator: (value: unknown) => value is import("../_utils/form-control.js").FormControlVariant;
        };
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("../index.js").ComponentSize>;
            validator: (value: unknown) => value is import("../index.js").ComponentSize;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: BooleanConstructor;
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: StringConstructor;
        maxLength: {
            type: import("vue").PropType<import("../_utils/form-control.js").FormControlMaxLength>;
            default: number;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        wordLength: import("vue").PropType<import("../_utils/form-control.js").WordLength>;
        wordSlice: import("vue").PropType<import("../_utils/form-control.js").WordSlice>;
        inputAttrs: import("vue").PropType<Record<string, unknown>>;
        type: {
            type: import("vue").PropType<import("./props").InputType>;
            default: string;
            validator: (value: unknown) => value is import("./props").InputType;
        };
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string, ev: Event) => any) | undefined;
        onInput?: ((value: string, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
    }>, {
        error: boolean;
        readonly: boolean;
        type: "text" | "password";
        disabled: boolean;
        defaultValue: string;
        clearable: boolean;
        maxLength: import("../_utils/form-control.js").FormControlMaxLength;
        showWordLimit: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

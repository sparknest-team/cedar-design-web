import _Textarea from './textarea.vue';
import { textareaProps } from './props';
declare const Textarea: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        placeholder: StringConstructor;
        disabled: BooleanConstructor;
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxLength: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
            default: number;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoSize: {
            type: import("vue").PropType<boolean | import("./props").TextareaAutoSize>;
            default: boolean;
        };
        wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
        wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
        textareaAttrs: import("vue").PropType<Record<string, unknown>>;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string, ev: Event) => any) | undefined;
        onInput?: ((value: string, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
        t: (key: string, ...args: any[]) => string;
        mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
        mergedVariant: import("vue").ComputedRef<"filled" | "outlined" | "standard">;
        wrapperCls: import("vue").ComputedRef<any[]>;
        textareaRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        textareaStyle: import("vue").Ref<import("vue").CSSProperties | undefined, import("vue").CSSProperties | undefined>;
        mirrorRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        mirrorStyle: import("vue").Ref<import("vue").CSSProperties | undefined, import("vue").CSSProperties | undefined>;
        computedValue: import("vue").ComputedRef<string>;
        showClearBtn: import("vue").ComputedRef<boolean>;
        valueLength: import("vue").ComputedRef<number>;
        computedMaxLength: import("vue").ComputedRef<number>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        mergedError: import("vue").ComputedRef<boolean>;
        focused: import("vue").Ref<boolean, boolean>;
        mergeTextareaAttrs: import("vue").ComputedRef<{
            [x: string]: unknown;
        }>;
        getWrapperAttrs: (attr: Record<string, any>) => Omit<import("vue").Attrs, string>;
        getTextareaAttrs: (attr: Record<string, any>) => Pick<import("vue").Attrs, string>;
        handleInput: (e: InputEvent) => void;
        handleFocus: (ev: FocusEvent) => void;
        handleBlur: (ev: FocusEvent) => void;
        handleComposition: (e: CompositionEvent) => void;
        handleClear: (ev: MouseEvent) => void;
        handleResize: () => void;
        handleMousedown: (e: MouseEvent) => void;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string) => true;
        input: (value: string, ev: Event) => true;
        change: (value: string, ev: Event) => true;
        clear: (ev: MouseEvent) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, import("vue").PublicProps, {
        error: boolean;
        readonly: boolean;
        disabled: boolean;
        defaultValue: string;
        clearable: boolean;
        maxLength: import("../_utils/form-control").FormControlMaxLength;
        showWordLimit: boolean;
        autoSize: boolean | import("./props").TextareaAutoSize;
    }, true, {}, {}, {
        ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
            onResize?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
        IconClose: {
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
            install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
        };
        FieldDecorator: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            tag: {
                type: import("vue").PropType<"div" | "span">;
                default: string;
            };
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                default: string;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            focused: BooleanConstructor;
            title: StringConstructor;
            onMousedown: import("vue").PropType<(event: MouseEvent) => void>;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: import("vue").PropType<"div" | "span">;
                default: string;
            };
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                default: string;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            focused: BooleanConstructor;
            title: StringConstructor;
            onMousedown: import("vue").PropType<(event: MouseEvent) => void>;
        }>> & Readonly<{}>, {
            error: boolean;
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            variant: "filled" | "outlined" | "standard";
            focused: boolean;
            tag: "div" | "span";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
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
        placeholder: StringConstructor;
        disabled: BooleanConstructor;
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxLength: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
            default: number;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoSize: {
            type: import("vue").PropType<boolean | import("./props").TextareaAutoSize>;
            default: boolean;
        };
        wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
        wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
        textareaAttrs: import("vue").PropType<Record<string, unknown>>;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string, ev: Event) => any) | undefined;
        onInput?: ((value: string, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
        t: (key: string, ...args: any[]) => string;
        mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
        mergedVariant: import("vue").ComputedRef<"filled" | "outlined" | "standard">;
        wrapperCls: import("vue").ComputedRef<any[]>;
        textareaRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        textareaStyle: import("vue").Ref<import("vue").CSSProperties | undefined, import("vue").CSSProperties | undefined>;
        mirrorRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        mirrorStyle: import("vue").Ref<import("vue").CSSProperties | undefined, import("vue").CSSProperties | undefined>;
        computedValue: import("vue").ComputedRef<string>;
        showClearBtn: import("vue").ComputedRef<boolean>;
        valueLength: import("vue").ComputedRef<number>;
        computedMaxLength: import("vue").ComputedRef<number>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        mergedError: import("vue").ComputedRef<boolean>;
        focused: import("vue").Ref<boolean, boolean>;
        mergeTextareaAttrs: import("vue").ComputedRef<{
            [x: string]: unknown;
        }>;
        getWrapperAttrs: (attr: Record<string, any>) => Omit<import("vue").Attrs, string>;
        getTextareaAttrs: (attr: Record<string, any>) => Pick<import("vue").Attrs, string>;
        handleInput: (e: InputEvent) => void;
        handleFocus: (ev: FocusEvent) => void;
        handleBlur: (ev: FocusEvent) => void;
        handleComposition: (e: CompositionEvent) => void;
        handleClear: (ev: MouseEvent) => void;
        handleResize: () => void;
        handleMousedown: (e: MouseEvent) => void;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, {
        error: boolean;
        readonly: boolean;
        disabled: boolean;
        defaultValue: string;
        clearable: boolean;
        maxLength: import("../_utils/form-control").FormControlMaxLength;
        showWordLimit: boolean;
        autoSize: boolean | import("./props").TextareaAutoSize;
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
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
        validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
        default: number;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSize: {
        type: import("vue").PropType<boolean | import("./props").TextareaAutoSize>;
        default: boolean;
    };
    wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
    wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
    textareaAttrs: import("vue").PropType<Record<string, unknown>>;
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: MouseEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: string, ev: Event) => any) | undefined;
    onInput?: ((value: string, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    n: (suffix?: string) => string;
    classes: typeof import("rattail").classes;
    t: (key: string, ...args: any[]) => string;
    mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
    mergedVariant: import("vue").ComputedRef<"filled" | "outlined" | "standard">;
    wrapperCls: import("vue").ComputedRef<any[]>;
    textareaRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    textareaStyle: import("vue").Ref<import("vue").CSSProperties | undefined, import("vue").CSSProperties | undefined>;
    mirrorRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    mirrorStyle: import("vue").Ref<import("vue").CSSProperties | undefined, import("vue").CSSProperties | undefined>;
    computedValue: import("vue").ComputedRef<string>;
    showClearBtn: import("vue").ComputedRef<boolean>;
    valueLength: import("vue").ComputedRef<number>;
    computedMaxLength: import("vue").ComputedRef<number>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    mergedError: import("vue").ComputedRef<boolean>;
    focused: import("vue").Ref<boolean, boolean>;
    mergeTextareaAttrs: import("vue").ComputedRef<{
        [x: string]: unknown;
    }>;
    getWrapperAttrs: (attr: Record<string, any>) => Omit<import("vue").Attrs, string>;
    getTextareaAttrs: (attr: Record<string, any>) => Pick<import("vue").Attrs, string>;
    handleInput: (e: InputEvent) => void;
    handleFocus: (ev: FocusEvent) => void;
    handleBlur: (ev: FocusEvent) => void;
    handleComposition: (e: CompositionEvent) => void;
    handleClear: (ev: MouseEvent) => void;
    handleResize: () => void;
    handleMousedown: (e: MouseEvent) => void;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string) => true;
    input: (value: string, ev: Event) => true;
    change: (value: string, ev: Event) => true;
    clear: (ev: MouseEvent) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
}, string, {
    error: boolean;
    readonly: boolean;
    disabled: boolean;
    defaultValue: string;
    clearable: boolean;
    maxLength: import("../_utils/form-control").FormControlMaxLength;
    showWordLimit: boolean;
    autoSize: boolean | import("./props").TextareaAutoSize;
}, {}, string, {}, {
    ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onResize?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
    IconClose: {
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
        install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
    };
    FieldDecorator: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        tag: {
            type: import("vue").PropType<"div" | "span">;
            default: string;
        };
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            default: string;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        focused: BooleanConstructor;
        title: StringConstructor;
        onMousedown: import("vue").PropType<(event: MouseEvent) => void>;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: import("vue").PropType<"div" | "span">;
            default: string;
        };
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            default: string;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        focused: BooleanConstructor;
        title: StringConstructor;
        onMousedown: import("vue").PropType<(event: MouseEvent) => void>;
    }>> & Readonly<{}>, {
        error: boolean;
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        variant: "filled" | "outlined" | "standard";
        focused: boolean;
        tag: "div" | "span";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type TextareaInstance = InstanceType<typeof _Textarea>;
export { textareaProps };
export type { TextareaAutoSize, TextareaProps } from './props';
export declare const _TextareaComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        placeholder: StringConstructor;
        disabled: BooleanConstructor;
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxLength: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
            default: number;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoSize: {
            type: import("vue").PropType<boolean | import("./props").TextareaAutoSize>;
            default: boolean;
        };
        wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
        wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
        textareaAttrs: import("vue").PropType<Record<string, unknown>>;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string, ev: Event) => any) | undefined;
        onInput?: ((value: string, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
        t: (key: string, ...args: any[]) => string;
        mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
        mergedVariant: import("vue").ComputedRef<"filled" | "outlined" | "standard">;
        wrapperCls: import("vue").ComputedRef<any[]>;
        textareaRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        textareaStyle: import("vue").Ref<import("vue").CSSProperties | undefined, import("vue").CSSProperties | undefined>;
        mirrorRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        mirrorStyle: import("vue").Ref<import("vue").CSSProperties | undefined, import("vue").CSSProperties | undefined>;
        computedValue: import("vue").ComputedRef<string>;
        showClearBtn: import("vue").ComputedRef<boolean>;
        valueLength: import("vue").ComputedRef<number>;
        computedMaxLength: import("vue").ComputedRef<number>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        mergedError: import("vue").ComputedRef<boolean>;
        focused: import("vue").Ref<boolean, boolean>;
        mergeTextareaAttrs: import("vue").ComputedRef<{
            [x: string]: unknown;
        }>;
        getWrapperAttrs: (attr: Record<string, any>) => Omit<import("vue").Attrs, string>;
        getTextareaAttrs: (attr: Record<string, any>) => Pick<import("vue").Attrs, string>;
        handleInput: (e: InputEvent) => void;
        handleFocus: (ev: FocusEvent) => void;
        handleBlur: (ev: FocusEvent) => void;
        handleComposition: (e: CompositionEvent) => void;
        handleClear: (ev: MouseEvent) => void;
        handleResize: () => void;
        handleMousedown: (e: MouseEvent) => void;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string) => true;
        input: (value: string, ev: Event) => true;
        change: (value: string, ev: Event) => true;
        clear: (ev: MouseEvent) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, import("vue").PublicProps, {
        error: boolean;
        readonly: boolean;
        disabled: boolean;
        defaultValue: string;
        clearable: boolean;
        maxLength: import("../_utils/form-control").FormControlMaxLength;
        showWordLimit: boolean;
        autoSize: boolean | import("./props").TextareaAutoSize;
    }, true, {}, {}, {
        ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
            onResize?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
        IconClose: {
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
            install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
        };
        FieldDecorator: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            tag: {
                type: import("vue").PropType<"div" | "span">;
                default: string;
            };
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                default: string;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            focused: BooleanConstructor;
            title: StringConstructor;
            onMousedown: import("vue").PropType<(event: MouseEvent) => void>;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: import("vue").PropType<"div" | "span">;
                default: string;
            };
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                default: string;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            focused: BooleanConstructor;
            title: StringConstructor;
            onMousedown: import("vue").PropType<(event: MouseEvent) => void>;
        }>> & Readonly<{}>, {
            error: boolean;
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            variant: "filled" | "outlined" | "standard";
            focused: boolean;
            tag: "div" | "span";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
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
        placeholder: StringConstructor;
        disabled: BooleanConstructor;
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxLength: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
            default: number;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoSize: {
            type: import("vue").PropType<boolean | import("./props").TextareaAutoSize>;
            default: boolean;
        };
        wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
        wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
        textareaAttrs: import("vue").PropType<Record<string, unknown>>;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string, ev: Event) => any) | undefined;
        onInput?: ((value: string, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
        t: (key: string, ...args: any[]) => string;
        mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
        mergedVariant: import("vue").ComputedRef<"filled" | "outlined" | "standard">;
        wrapperCls: import("vue").ComputedRef<any[]>;
        textareaRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        textareaStyle: import("vue").Ref<import("vue").CSSProperties | undefined, import("vue").CSSProperties | undefined>;
        mirrorRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        mirrorStyle: import("vue").Ref<import("vue").CSSProperties | undefined, import("vue").CSSProperties | undefined>;
        computedValue: import("vue").ComputedRef<string>;
        showClearBtn: import("vue").ComputedRef<boolean>;
        valueLength: import("vue").ComputedRef<number>;
        computedMaxLength: import("vue").ComputedRef<number>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        mergedError: import("vue").ComputedRef<boolean>;
        focused: import("vue").Ref<boolean, boolean>;
        mergeTextareaAttrs: import("vue").ComputedRef<{
            [x: string]: unknown;
        }>;
        getWrapperAttrs: (attr: Record<string, any>) => Omit<import("vue").Attrs, string>;
        getTextareaAttrs: (attr: Record<string, any>) => Pick<import("vue").Attrs, string>;
        handleInput: (e: InputEvent) => void;
        handleFocus: (ev: FocusEvent) => void;
        handleBlur: (ev: FocusEvent) => void;
        handleComposition: (e: CompositionEvent) => void;
        handleClear: (ev: MouseEvent) => void;
        handleResize: () => void;
        handleMousedown: (e: MouseEvent) => void;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, {
        error: boolean;
        readonly: boolean;
        disabled: boolean;
        defaultValue: string;
        clearable: boolean;
        maxLength: import("../_utils/form-control").FormControlMaxLength;
        showWordLimit: boolean;
        autoSize: boolean | import("./props").TextareaAutoSize;
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
    placeholder: StringConstructor;
    disabled: BooleanConstructor;
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
        validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
        default: number;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSize: {
        type: import("vue").PropType<boolean | import("./props").TextareaAutoSize>;
        default: boolean;
    };
    wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
    wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
    textareaAttrs: import("vue").PropType<Record<string, unknown>>;
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: MouseEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: string, ev: Event) => any) | undefined;
    onInput?: ((value: string, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    n: (suffix?: string) => string;
    classes: typeof import("rattail").classes;
    t: (key: string, ...args: any[]) => string;
    mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
    mergedVariant: import("vue").ComputedRef<"filled" | "outlined" | "standard">;
    wrapperCls: import("vue").ComputedRef<any[]>;
    textareaRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    textareaStyle: import("vue").Ref<import("vue").CSSProperties | undefined, import("vue").CSSProperties | undefined>;
    mirrorRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    mirrorStyle: import("vue").Ref<import("vue").CSSProperties | undefined, import("vue").CSSProperties | undefined>;
    computedValue: import("vue").ComputedRef<string>;
    showClearBtn: import("vue").ComputedRef<boolean>;
    valueLength: import("vue").ComputedRef<number>;
    computedMaxLength: import("vue").ComputedRef<number>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    mergedError: import("vue").ComputedRef<boolean>;
    focused: import("vue").Ref<boolean, boolean>;
    mergeTextareaAttrs: import("vue").ComputedRef<{
        [x: string]: unknown;
    }>;
    getWrapperAttrs: (attr: Record<string, any>) => Omit<import("vue").Attrs, string>;
    getTextareaAttrs: (attr: Record<string, any>) => Pick<import("vue").Attrs, string>;
    handleInput: (e: InputEvent) => void;
    handleFocus: (ev: FocusEvent) => void;
    handleBlur: (ev: FocusEvent) => void;
    handleComposition: (e: CompositionEvent) => void;
    handleClear: (ev: MouseEvent) => void;
    handleResize: () => void;
    handleMousedown: (e: MouseEvent) => void;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string) => true;
    input: (value: string, ev: Event) => true;
    change: (value: string, ev: Event) => true;
    clear: (ev: MouseEvent) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
}, string, {
    error: boolean;
    readonly: boolean;
    disabled: boolean;
    defaultValue: string;
    clearable: boolean;
    maxLength: import("../_utils/form-control").FormControlMaxLength;
    showWordLimit: boolean;
    autoSize: boolean | import("./props").TextareaAutoSize;
}, {}, string, {}, {
    ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onResize?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
    IconClose: {
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
        install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
    };
    FieldDecorator: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        tag: {
            type: import("vue").PropType<"div" | "span">;
            default: string;
        };
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            default: string;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        focused: BooleanConstructor;
        title: StringConstructor;
        onMousedown: import("vue").PropType<(event: MouseEvent) => void>;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: import("vue").PropType<"div" | "span">;
            default: string;
        };
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            default: string;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        focused: BooleanConstructor;
        title: StringConstructor;
        onMousedown: import("vue").PropType<(event: MouseEvent) => void>;
    }>> & Readonly<{}>, {
        error: boolean;
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        variant: "filled" | "outlined" | "standard";
        focused: boolean;
        tag: "div" | "span";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export { Textarea };
export default Textarea;

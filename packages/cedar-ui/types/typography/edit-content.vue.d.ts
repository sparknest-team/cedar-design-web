declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        required: true;
    };
}>, {
    classNames: string[];
    inputRef: import("vue").Ref<import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
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
                type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                default: number;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
            wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
            type: {
                type: import("vue").PropType<import("..").InputType>;
                default: string;
                validator: (value: unknown) => value is import("..").InputType;
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
        }, import("vue").PublicProps, {
            error: boolean;
            readonly: boolean;
            type: "text" | "password";
            disabled: boolean;
            defaultValue: string;
            clearable: boolean;
            maxLength: import("../_utils/form-control").FormControlMaxLength;
            showWordLimit: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
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
                type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                default: number;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
            wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
            type: {
                type: import("vue").PropType<import("..").InputType>;
                default: string;
                validator: (value: unknown) => value is import("..").InputType;
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
            inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, {
            error: boolean;
            readonly: boolean;
            type: "text" | "password";
            disabled: boolean;
            defaultValue: string;
            clearable: boolean;
            maxLength: import("../_utils/form-control").FormControlMaxLength;
            showWordLimit: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
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
            type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
            default: number;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
        wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
        inputAttrs: import("vue").PropType<Record<string, unknown>>;
        type: {
            type: import("vue").PropType<import("..").InputType>;
            default: string;
            validator: (value: unknown) => value is import("..").InputType;
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
    }, string, {
        error: boolean;
        readonly: boolean;
        type: "text" | "password";
        disabled: boolean;
        defaultValue: string;
        clearable: boolean;
        maxLength: import("../_utils/form-control").FormControlMaxLength;
        showWordLimit: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Password: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
            };
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
            Input: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
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
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
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
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
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
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
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
                maxLength: import("../_utils/form-control").FormControlMaxLength;
                showWordLimit: boolean;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            n: (suffix?: string) => string;
            classes: typeof import("rattail").classes;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            variant: "filled" | "outlined" | "standard";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        GroupLabel: import("vue").DefineComponent<{}, {
            n: (suffix?: string) => string;
            classes: typeof import("rattail").classes;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }> | undefined, import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
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
                type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                default: number;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
            wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
            type: {
                type: import("vue").PropType<import("..").InputType>;
                default: string;
                validator: (value: unknown) => value is import("..").InputType;
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
        }, import("vue").PublicProps, {
            error: boolean;
            readonly: boolean;
            type: "text" | "password";
            disabled: boolean;
            defaultValue: string;
            clearable: boolean;
            maxLength: import("../_utils/form-control").FormControlMaxLength;
            showWordLimit: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
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
                type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                default: number;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
            wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
            type: {
                type: import("vue").PropType<import("..").InputType>;
                default: string;
                validator: (value: unknown) => value is import("..").InputType;
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
            inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, {
            error: boolean;
            readonly: boolean;
            type: "text" | "password";
            disabled: boolean;
            defaultValue: string;
            clearable: boolean;
            maxLength: import("../_utils/form-control").FormControlMaxLength;
            showWordLimit: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
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
            type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
            default: number;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
        wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
        inputAttrs: import("vue").PropType<Record<string, unknown>>;
        type: {
            type: import("vue").PropType<import("..").InputType>;
            default: string;
            validator: (value: unknown) => value is import("..").InputType;
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
    }, string, {
        error: boolean;
        readonly: boolean;
        type: "text" | "password";
        disabled: boolean;
        defaultValue: string;
        clearable: boolean;
        maxLength: import("../_utils/form-control").FormControlMaxLength;
        showWordLimit: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Password: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
            };
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
            Input: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
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
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
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
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
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
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
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
                maxLength: import("../_utils/form-control").FormControlMaxLength;
                showWordLimit: boolean;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            n: (suffix?: string) => string;
            classes: typeof import("rattail").classes;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            variant: "filled" | "outlined" | "standard";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        GroupLabel: import("vue").DefineComponent<{}, {
            n: (suffix?: string) => string;
            classes: typeof import("rattail").classes;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }> | undefined>;
    onBlur: () => void;
    onChange: (value: string) => void;
    onEnd: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "end" | "update:text")[], "change" | "end" | "update:text", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onEnd?: ((...args: any[]) => any) | undefined;
    "onUpdate:text"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {
    Input: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
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
                type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                default: number;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
            wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
            type: {
                type: import("vue").PropType<import("..").InputType>;
                default: string;
                validator: (value: unknown) => value is import("..").InputType;
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
        }, import("vue").PublicProps, {
            error: boolean;
            readonly: boolean;
            type: "text" | "password";
            disabled: boolean;
            defaultValue: string;
            clearable: boolean;
            maxLength: import("../_utils/form-control").FormControlMaxLength;
            showWordLimit: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
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
                type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                default: number;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
            wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
            type: {
                type: import("vue").PropType<import("..").InputType>;
                default: string;
                validator: (value: unknown) => value is import("..").InputType;
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
            inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, {
            error: boolean;
            readonly: boolean;
            type: "text" | "password";
            disabled: boolean;
            defaultValue: string;
            clearable: boolean;
            maxLength: import("../_utils/form-control").FormControlMaxLength;
            showWordLimit: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
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
            type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
            default: number;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
        wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
        inputAttrs: import("vue").PropType<Record<string, unknown>>;
        type: {
            type: import("vue").PropType<import("..").InputType>;
            default: string;
            validator: (value: unknown) => value is import("..").InputType;
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
    }, string, {
        error: boolean;
        readonly: boolean;
        type: "text" | "password";
        disabled: boolean;
        defaultValue: string;
        clearable: boolean;
        maxLength: import("../_utils/form-control").FormControlMaxLength;
        showWordLimit: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Password: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
            };
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
            Input: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
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
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
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
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
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
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
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
                maxLength: import("../_utils/form-control").FormControlMaxLength;
                showWordLimit: boolean;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            n: (suffix?: string) => string;
            classes: typeof import("rattail").classes;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            variant: "filled" | "outlined" | "standard";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        GroupLabel: import("vue").DefineComponent<{}, {
            n: (suffix?: string) => string;
            classes: typeof import("rattail").classes;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

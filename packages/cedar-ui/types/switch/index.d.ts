import _Switch from './switch.vue';
import { switchProps } from './props';
declare const Switch: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./props").SwitchValue>;
            default: undefined;
        };
        defaultChecked: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: import("vue").PropType<import("./props").SwitchVariant>;
            default: string;
            validator: (value: unknown) => value is import("./props").SwitchVariant;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        checkedValue: {
            type: import("vue").PropType<import("./props").SwitchValue>;
            default: boolean;
        };
        uncheckedValue: {
            type: import("vue").PropType<import("./props").SwitchValue>;
            default: boolean;
        };
        checkedColor: StringConstructor;
        uncheckedColor: StringConstructor;
        beforeChange: import("vue").PropType<import("./props").SwitchBeforeChange>;
        checkedText: StringConstructor;
        uncheckedText: StringConstructor;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: string | boolean | undefined;
        })[]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        buttonStyle: import("vue").ComputedRef<{
            '--c-switch-custom-color': string;
            backgroundColor?: undefined;
        } | {
            backgroundColor: string;
            '--c-switch-custom-color'?: undefined;
        } | undefined>;
        computedCheck: import("vue").ComputedRef<boolean>;
        computedLoading: import("vue").ComputedRef<boolean>;
        handleClick: (ev: Event) => Promise<void>;
        handleFocus: (ev: FocusEvent) => void;
        handleBlur: (ev: FocusEvent) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: boolean | string | number) => true;
        change: (value: boolean | string | number, ev: Event) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, import("vue").PublicProps, {
        disabled: boolean;
        variant: "round" | "circle" | "line";
        modelValue: import("./props").SwitchValue;
        loading: boolean;
        defaultChecked: boolean;
        checkedValue: import("./props").SwitchValue;
        uncheckedValue: import("./props").SwitchValue;
    }, true, {}, {}, {
        IconLoading: {
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
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./props").SwitchValue>;
            default: undefined;
        };
        defaultChecked: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: import("vue").PropType<import("./props").SwitchVariant>;
            default: string;
            validator: (value: unknown) => value is import("./props").SwitchVariant;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        checkedValue: {
            type: import("vue").PropType<import("./props").SwitchValue>;
            default: boolean;
        };
        uncheckedValue: {
            type: import("vue").PropType<import("./props").SwitchValue>;
            default: boolean;
        };
        checkedColor: StringConstructor;
        uncheckedColor: StringConstructor;
        beforeChange: import("vue").PropType<import("./props").SwitchBeforeChange>;
        checkedText: StringConstructor;
        uncheckedText: StringConstructor;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: string | boolean | undefined;
        })[]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        buttonStyle: import("vue").ComputedRef<{
            '--c-switch-custom-color': string;
            backgroundColor?: undefined;
        } | {
            backgroundColor: string;
            '--c-switch-custom-color'?: undefined;
        } | undefined>;
        computedCheck: import("vue").ComputedRef<boolean>;
        computedLoading: import("vue").ComputedRef<boolean>;
        handleClick: (ev: Event) => Promise<void>;
        handleFocus: (ev: FocusEvent) => void;
        handleBlur: (ev: FocusEvent) => void;
    }, {}, {}, {}, {
        disabled: boolean;
        variant: "round" | "circle" | "line";
        modelValue: import("./props").SwitchValue;
        loading: boolean;
        defaultChecked: boolean;
        checkedValue: import("./props").SwitchValue;
        uncheckedValue: import("./props").SwitchValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./props").SwitchValue>;
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: import("vue").PropType<import("./props").SwitchVariant>;
        default: string;
        validator: (value: unknown) => value is import("./props").SwitchVariant;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    checkedValue: {
        type: import("vue").PropType<import("./props").SwitchValue>;
        default: boolean;
    };
    uncheckedValue: {
        type: import("vue").PropType<import("./props").SwitchValue>;
        default: boolean;
    };
    checkedColor: StringConstructor;
    uncheckedColor: StringConstructor;
    beforeChange: import("vue").PropType<import("./props").SwitchBeforeChange>;
    checkedText: StringConstructor;
    uncheckedText: StringConstructor;
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: string | boolean | undefined;
    })[]>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    buttonStyle: import("vue").ComputedRef<{
        '--c-switch-custom-color': string;
        backgroundColor?: undefined;
    } | {
        backgroundColor: string;
        '--c-switch-custom-color'?: undefined;
    } | undefined>;
    computedCheck: import("vue").ComputedRef<boolean>;
    computedLoading: import("vue").ComputedRef<boolean>;
    handleClick: (ev: Event) => Promise<void>;
    handleFocus: (ev: FocusEvent) => void;
    handleBlur: (ev: FocusEvent) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: boolean | string | number) => true;
    change: (value: boolean | string | number, ev: Event) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
}, string, {
    disabled: boolean;
    variant: "round" | "circle" | "line";
    modelValue: import("./props").SwitchValue;
    loading: boolean;
    defaultChecked: boolean;
    checkedValue: import("./props").SwitchValue;
    uncheckedValue: import("./props").SwitchValue;
}, {}, string, {}, {
    IconLoading: {
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
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type SwitchInstance = InstanceType<typeof _Switch>;
export { switchProps };
export type { SwitchBeforeChange, SwitchProps, SwitchValue, SwitchVariant } from './props';
export { Switch };
export declare const _SwitchComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./props").SwitchValue>;
            default: undefined;
        };
        defaultChecked: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: import("vue").PropType<import("./props").SwitchVariant>;
            default: string;
            validator: (value: unknown) => value is import("./props").SwitchVariant;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        checkedValue: {
            type: import("vue").PropType<import("./props").SwitchValue>;
            default: boolean;
        };
        uncheckedValue: {
            type: import("vue").PropType<import("./props").SwitchValue>;
            default: boolean;
        };
        checkedColor: StringConstructor;
        uncheckedColor: StringConstructor;
        beforeChange: import("vue").PropType<import("./props").SwitchBeforeChange>;
        checkedText: StringConstructor;
        uncheckedText: StringConstructor;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: string | boolean | undefined;
        })[]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        buttonStyle: import("vue").ComputedRef<{
            '--c-switch-custom-color': string;
            backgroundColor?: undefined;
        } | {
            backgroundColor: string;
            '--c-switch-custom-color'?: undefined;
        } | undefined>;
        computedCheck: import("vue").ComputedRef<boolean>;
        computedLoading: import("vue").ComputedRef<boolean>;
        handleClick: (ev: Event) => Promise<void>;
        handleFocus: (ev: FocusEvent) => void;
        handleBlur: (ev: FocusEvent) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: boolean | string | number) => true;
        change: (value: boolean | string | number, ev: Event) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, import("vue").PublicProps, {
        disabled: boolean;
        variant: "round" | "circle" | "line";
        modelValue: import("./props").SwitchValue;
        loading: boolean;
        defaultChecked: boolean;
        checkedValue: import("./props").SwitchValue;
        uncheckedValue: import("./props").SwitchValue;
    }, true, {}, {}, {
        IconLoading: {
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
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./props").SwitchValue>;
            default: undefined;
        };
        defaultChecked: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: import("vue").PropType<import("./props").SwitchVariant>;
            default: string;
            validator: (value: unknown) => value is import("./props").SwitchVariant;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        checkedValue: {
            type: import("vue").PropType<import("./props").SwitchValue>;
            default: boolean;
        };
        uncheckedValue: {
            type: import("vue").PropType<import("./props").SwitchValue>;
            default: boolean;
        };
        checkedColor: StringConstructor;
        uncheckedColor: StringConstructor;
        beforeChange: import("vue").PropType<import("./props").SwitchBeforeChange>;
        checkedText: StringConstructor;
        uncheckedText: StringConstructor;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: string | boolean | undefined;
        })[]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        buttonStyle: import("vue").ComputedRef<{
            '--c-switch-custom-color': string;
            backgroundColor?: undefined;
        } | {
            backgroundColor: string;
            '--c-switch-custom-color'?: undefined;
        } | undefined>;
        computedCheck: import("vue").ComputedRef<boolean>;
        computedLoading: import("vue").ComputedRef<boolean>;
        handleClick: (ev: Event) => Promise<void>;
        handleFocus: (ev: FocusEvent) => void;
        handleBlur: (ev: FocusEvent) => void;
    }, {}, {}, {}, {
        disabled: boolean;
        variant: "round" | "circle" | "line";
        modelValue: import("./props").SwitchValue;
        loading: boolean;
        defaultChecked: boolean;
        checkedValue: import("./props").SwitchValue;
        uncheckedValue: import("./props").SwitchValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./props").SwitchValue>;
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: import("vue").PropType<import("./props").SwitchVariant>;
        default: string;
        validator: (value: unknown) => value is import("./props").SwitchVariant;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    checkedValue: {
        type: import("vue").PropType<import("./props").SwitchValue>;
        default: boolean;
    };
    uncheckedValue: {
        type: import("vue").PropType<import("./props").SwitchValue>;
        default: boolean;
    };
    checkedColor: StringConstructor;
    uncheckedColor: StringConstructor;
    beforeChange: import("vue").PropType<import("./props").SwitchBeforeChange>;
    checkedText: StringConstructor;
    uncheckedText: StringConstructor;
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: string | boolean | undefined;
    })[]>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    buttonStyle: import("vue").ComputedRef<{
        '--c-switch-custom-color': string;
        backgroundColor?: undefined;
    } | {
        backgroundColor: string;
        '--c-switch-custom-color'?: undefined;
    } | undefined>;
    computedCheck: import("vue").ComputedRef<boolean>;
    computedLoading: import("vue").ComputedRef<boolean>;
    handleClick: (ev: Event) => Promise<void>;
    handleFocus: (ev: FocusEvent) => void;
    handleBlur: (ev: FocusEvent) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: boolean | string | number) => true;
    change: (value: boolean | string | number, ev: Event) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
}, string, {
    disabled: boolean;
    variant: "round" | "circle" | "line";
    modelValue: import("./props").SwitchValue;
    loading: boolean;
    defaultChecked: boolean;
    checkedValue: import("./props").SwitchValue;
    uncheckedValue: import("./props").SwitchValue;
}, {}, string, {}, {
    IconLoading: {
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
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default Switch;

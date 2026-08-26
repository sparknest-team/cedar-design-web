import _Button from "./button.vue";
import _ButtonGroup from "./button-group.vue";
import { buttonProps, buttonGroupProps } from "./props";
declare const Button: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        variant: {
            type: import("vue").PropType<import("./props").ButtonVariant>;
            validator: (value: unknown) => value is import("./props").ButtonVariant;
        };
        round: {
            type: BooleanConstructor;
            default: boolean;
        };
        htmlType: {
            type: import("vue").PropType<"button" | "submit" | "reset">;
            default: string;
            validator: (value: unknown) => boolean;
        };
        component: {
            type: import("vue").PropType<"button" | "a">;
            default: string;
            validator: (value: unknown) => boolean;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadingType: {
            type: import("vue").PropType<"default" | "fill" | "line">;
            default: string;
        };
        autoLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        iconContainer: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        ripple: {
            type: BooleanConstructor;
            default: boolean;
        };
        focusable: {
            type: BooleanConstructor;
            default: boolean;
        };
        autofocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        textColor: {
            type: StringConstructor;
        };
        color: {
            type: StringConstructor;
        };
        elevation: {
            type: import("vue").PropType<boolean | number>;
            default: boolean;
        };
        stacked: {
            type: BooleanConstructor;
            default: undefined;
        };
        onClick: {
            type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
            default: any;
        };
        onTouchstart: {
            type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
            default: any;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        onTouchstart?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
        touchstart: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        round: boolean;
        autofocus: boolean;
        component: "a" | "button";
        disabled: boolean;
        onTouchstart: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
        onClick: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
        block: boolean;
        elevation: number | boolean;
        loading: boolean;
        htmlType: "reset" | "submit" | "button";
        loadingType: "default" | "fill" | "line";
        autoLoading: boolean;
        iconContainer: boolean;
        ripple: boolean;
        focusable: boolean;
        stacked: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        variant: {
            type: import("vue").PropType<import("./props").ButtonVariant>;
            validator: (value: unknown) => value is import("./props").ButtonVariant;
        };
        round: {
            type: BooleanConstructor;
            default: boolean;
        };
        htmlType: {
            type: import("vue").PropType<"button" | "submit" | "reset">;
            default: string;
            validator: (value: unknown) => boolean;
        };
        component: {
            type: import("vue").PropType<"button" | "a">;
            default: string;
            validator: (value: unknown) => boolean;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadingType: {
            type: import("vue").PropType<"default" | "fill" | "line">;
            default: string;
        };
        autoLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        iconContainer: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        ripple: {
            type: BooleanConstructor;
            default: boolean;
        };
        focusable: {
            type: BooleanConstructor;
            default: boolean;
        };
        autofocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        textColor: {
            type: StringConstructor;
        };
        color: {
            type: StringConstructor;
        };
        elevation: {
            type: import("vue").PropType<boolean | number>;
            default: boolean;
        };
        stacked: {
            type: BooleanConstructor;
            default: undefined;
        };
        onClick: {
            type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
            default: any;
        };
        onTouchstart: {
            type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
            default: any;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        onTouchstart?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        round: boolean;
        autofocus: boolean;
        component: "a" | "button";
        disabled: boolean;
        onTouchstart: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
        onClick: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
        block: boolean;
        elevation: number | boolean;
        loading: boolean;
        htmlType: "reset" | "submit" | "button";
        loadingType: "default" | "fill" | "line";
        autoLoading: boolean;
        iconContainer: boolean;
        ripple: boolean;
        focusable: boolean;
        stacked: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        validator: (value: unknown) => value is import("..").SemanticStatus;
    };
    variant: {
        type: import("vue").PropType<import("./props").ButtonVariant>;
        validator: (value: unknown) => value is import("./props").ButtonVariant;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    htmlType: {
        type: import("vue").PropType<"button" | "submit" | "reset">;
        default: string;
        validator: (value: unknown) => boolean;
    };
    component: {
        type: import("vue").PropType<"button" | "a">;
        default: string;
        validator: (value: unknown) => boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingType: {
        type: import("vue").PropType<"default" | "fill" | "line">;
        default: string;
    };
    autoLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconContainer: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    textColor: {
        type: StringConstructor;
    };
    color: {
        type: StringConstructor;
    };
    elevation: {
        type: import("vue").PropType<boolean | number>;
        default: boolean;
    };
    stacked: {
        type: BooleanConstructor;
        default: undefined;
    };
    onClick: {
        type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
        default: any;
    };
    onTouchstart: {
        type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
        default: any;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onTouchstart?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    touchstart: (...args: any[]) => void;
}, string, {
    round: boolean;
    autofocus: boolean;
    component: "a" | "button";
    disabled: boolean;
    onTouchstart: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
    onClick: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
    block: boolean;
    elevation: number | boolean;
    loading: boolean;
    htmlType: "reset" | "submit" | "button";
    loadingType: "default" | "fill" | "line";
    autoLoading: boolean;
    iconContainer: boolean;
    ripple: boolean;
    focusable: boolean;
    stacked: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
}) & {
    Group: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            status: {
                type: import("vue").PropType<import("..").SemanticStatus>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<import("./props").ButtonVariant>;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            textColor: {
                type: StringConstructor;
                default: string;
            };
            stacked: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            elevation: {
                type: import("vue").PropType<boolean | number>;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            buttonGroupProvider: import("./provide").ButtonGroupProvider;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            vertical: boolean;
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            color: string;
            variant: import("./props").ButtonVariant;
            elevation: number | boolean;
            status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
            textColor: string;
            stacked: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            status: {
                type: import("vue").PropType<import("..").SemanticStatus>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<import("./props").ButtonVariant>;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            textColor: {
                type: StringConstructor;
                default: string;
            };
            stacked: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            elevation: {
                type: import("vue").PropType<boolean | number>;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            buttonGroupProvider: import("./provide").ButtonGroupProvider;
        }, {}, {}, {}, {
            vertical: boolean;
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            color: string;
            variant: import("./props").ButtonVariant;
            elevation: number | boolean;
            status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
            textColor: string;
            stacked: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
        };
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            default: string;
        };
        variant: {
            type: import("vue").PropType<import("./props").ButtonVariant>;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        textColor: {
            type: StringConstructor;
            default: string;
        };
        stacked: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        elevation: {
            type: import("vue").PropType<boolean | number>;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        buttonGroupProvider: import("./provide").ButtonGroupProvider;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        vertical: boolean;
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        color: string;
        variant: import("./props").ButtonVariant;
        elevation: number | boolean;
        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
        textColor: string;
        stacked: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
}>;
export type ButtonInstance = InstanceType<typeof _Button>;
export type ButtonGroupInstance = InstanceType<typeof _ButtonGroup>;
export type { ButtonProps, ButtonGroupProps, ButtonVariant } from "./props";
export { buttonProps, buttonGroupProps };
export { Button };
export { _ButtonGroup as ButtonGroup };
export declare const _ButtonComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        variant: {
            type: import("vue").PropType<import("./props").ButtonVariant>;
            validator: (value: unknown) => value is import("./props").ButtonVariant;
        };
        round: {
            type: BooleanConstructor;
            default: boolean;
        };
        htmlType: {
            type: import("vue").PropType<"button" | "submit" | "reset">;
            default: string;
            validator: (value: unknown) => boolean;
        };
        component: {
            type: import("vue").PropType<"button" | "a">;
            default: string;
            validator: (value: unknown) => boolean;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadingType: {
            type: import("vue").PropType<"default" | "fill" | "line">;
            default: string;
        };
        autoLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        iconContainer: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        ripple: {
            type: BooleanConstructor;
            default: boolean;
        };
        focusable: {
            type: BooleanConstructor;
            default: boolean;
        };
        autofocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        textColor: {
            type: StringConstructor;
        };
        color: {
            type: StringConstructor;
        };
        elevation: {
            type: import("vue").PropType<boolean | number>;
            default: boolean;
        };
        stacked: {
            type: BooleanConstructor;
            default: undefined;
        };
        onClick: {
            type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
            default: any;
        };
        onTouchstart: {
            type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
            default: any;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        onTouchstart?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
        touchstart: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        round: boolean;
        autofocus: boolean;
        component: "a" | "button";
        disabled: boolean;
        onTouchstart: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
        onClick: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
        block: boolean;
        elevation: number | boolean;
        loading: boolean;
        htmlType: "reset" | "submit" | "button";
        loadingType: "default" | "fill" | "line";
        autoLoading: boolean;
        iconContainer: boolean;
        ripple: boolean;
        focusable: boolean;
        stacked: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        variant: {
            type: import("vue").PropType<import("./props").ButtonVariant>;
            validator: (value: unknown) => value is import("./props").ButtonVariant;
        };
        round: {
            type: BooleanConstructor;
            default: boolean;
        };
        htmlType: {
            type: import("vue").PropType<"button" | "submit" | "reset">;
            default: string;
            validator: (value: unknown) => boolean;
        };
        component: {
            type: import("vue").PropType<"button" | "a">;
            default: string;
            validator: (value: unknown) => boolean;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadingType: {
            type: import("vue").PropType<"default" | "fill" | "line">;
            default: string;
        };
        autoLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        iconContainer: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        ripple: {
            type: BooleanConstructor;
            default: boolean;
        };
        focusable: {
            type: BooleanConstructor;
            default: boolean;
        };
        autofocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        textColor: {
            type: StringConstructor;
        };
        color: {
            type: StringConstructor;
        };
        elevation: {
            type: import("vue").PropType<boolean | number>;
            default: boolean;
        };
        stacked: {
            type: BooleanConstructor;
            default: undefined;
        };
        onClick: {
            type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
            default: any;
        };
        onTouchstart: {
            type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
            default: any;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        onTouchstart?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        round: boolean;
        autofocus: boolean;
        component: "a" | "button";
        disabled: boolean;
        onTouchstart: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
        onClick: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
        block: boolean;
        elevation: number | boolean;
        loading: boolean;
        htmlType: "reset" | "submit" | "button";
        loadingType: "default" | "fill" | "line";
        autoLoading: boolean;
        iconContainer: boolean;
        ripple: boolean;
        focusable: boolean;
        stacked: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        validator: (value: unknown) => value is import("..").SemanticStatus;
    };
    variant: {
        type: import("vue").PropType<import("./props").ButtonVariant>;
        validator: (value: unknown) => value is import("./props").ButtonVariant;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    htmlType: {
        type: import("vue").PropType<"button" | "submit" | "reset">;
        default: string;
        validator: (value: unknown) => boolean;
    };
    component: {
        type: import("vue").PropType<"button" | "a">;
        default: string;
        validator: (value: unknown) => boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingType: {
        type: import("vue").PropType<"default" | "fill" | "line">;
        default: string;
    };
    autoLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconContainer: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    textColor: {
        type: StringConstructor;
    };
    color: {
        type: StringConstructor;
    };
    elevation: {
        type: import("vue").PropType<boolean | number>;
        default: boolean;
    };
    stacked: {
        type: BooleanConstructor;
        default: undefined;
    };
    onClick: {
        type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
        default: any;
    };
    onTouchstart: {
        type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
        default: any;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onTouchstart?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    touchstart: (...args: any[]) => void;
}, string, {
    round: boolean;
    autofocus: boolean;
    component: "a" | "button";
    disabled: boolean;
    onTouchstart: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
    onClick: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
    block: boolean;
    elevation: number | boolean;
    loading: boolean;
    htmlType: "reset" | "submit" | "button";
    loadingType: "default" | "fill" | "line";
    autoLoading: boolean;
    iconContainer: boolean;
    ripple: boolean;
    focusable: boolean;
    stacked: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
}) & {
    Group: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            status: {
                type: import("vue").PropType<import("..").SemanticStatus>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<import("./props").ButtonVariant>;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            textColor: {
                type: StringConstructor;
                default: string;
            };
            stacked: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            elevation: {
                type: import("vue").PropType<boolean | number>;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            buttonGroupProvider: import("./provide").ButtonGroupProvider;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            vertical: boolean;
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            color: string;
            variant: import("./props").ButtonVariant;
            elevation: number | boolean;
            status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
            textColor: string;
            stacked: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            status: {
                type: import("vue").PropType<import("..").SemanticStatus>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<import("./props").ButtonVariant>;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            textColor: {
                type: StringConstructor;
                default: string;
            };
            stacked: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            elevation: {
                type: import("vue").PropType<boolean | number>;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            buttonGroupProvider: import("./provide").ButtonGroupProvider;
        }, {}, {}, {}, {
            vertical: boolean;
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            color: string;
            variant: import("./props").ButtonVariant;
            elevation: number | boolean;
            status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
            textColor: string;
            stacked: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
        };
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            default: string;
        };
        variant: {
            type: import("vue").PropType<import("./props").ButtonVariant>;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        textColor: {
            type: StringConstructor;
            default: string;
        };
        stacked: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        elevation: {
            type: import("vue").PropType<boolean | number>;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        buttonGroupProvider: import("./provide").ButtonGroupProvider;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        vertical: boolean;
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        color: string;
        variant: import("./props").ButtonVariant;
        elevation: number | boolean;
        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
        textColor: string;
        stacked: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
}>;
export default Button;

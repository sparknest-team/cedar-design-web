import _Alert from './alert.vue';
import { alertProps } from './props';
declare const Alert: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<import("./props").AlertType>;
            default: string;
        };
        variant: {
            type: import("vue").PropType<import("./props").AlertVariant>;
            default: string;
        };
        title: StringConstructor;
        message: StringConstructor;
        showIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        banner: {
            type: BooleanConstructor;
            default: boolean;
        };
        center: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: StringConstructor;
        elevation: {
            type: import("vue").PropType<boolean | string | number>;
            default: boolean;
        };
    }>> & Readonly<{
        onClose?: ((value: MouseEvent) => any) | undefined;
        "onAfter-close"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        close: (value: MouseEvent) => any;
        "after-close": () => any;
    }, import("vue").PublicProps, {
        closable: boolean;
        center: boolean;
        type: import("./props").AlertType;
        variant: import("./props").AlertVariant;
        showIcon: boolean;
        banner: boolean;
        elevation: string | number | boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<import("./props").AlertType>;
            default: string;
        };
        variant: {
            type: import("vue").PropType<import("./props").AlertVariant>;
            default: string;
        };
        title: StringConstructor;
        message: StringConstructor;
        showIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        banner: {
            type: BooleanConstructor;
            default: boolean;
        };
        center: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: StringConstructor;
        elevation: {
            type: import("vue").PropType<boolean | string | number>;
            default: boolean;
        };
    }>> & Readonly<{
        onClose?: ((value: MouseEvent) => any) | undefined;
        "onAfter-close"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        closable: boolean;
        center: boolean;
        type: import("./props").AlertType;
        variant: import("./props").AlertVariant;
        showIcon: boolean;
        banner: boolean;
        elevation: string | number | boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./props").AlertType>;
        default: string;
    };
    variant: {
        type: import("vue").PropType<import("./props").AlertVariant>;
        default: string;
    };
    title: StringConstructor;
    message: StringConstructor;
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    banner: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    elevation: {
        type: import("vue").PropType<boolean | string | number>;
        default: boolean;
    };
}>> & Readonly<{
    onClose?: ((value: MouseEvent) => any) | undefined;
    "onAfter-close"?: (() => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    close: (value: MouseEvent) => any;
    "after-close": () => any;
}, string, {
    closable: boolean;
    center: boolean;
    type: import("./props").AlertType;
    variant: import("./props").AlertVariant;
    showIcon: boolean;
    banner: boolean;
    elevation: string | number | boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?: (props: {}) => any;
    } & {
        title?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        action?: (props: {}) => any;
    } & {
        'close-icon'?: (props: {}) => any;
    };
})>;
export type AlertInstance = InstanceType<typeof _Alert>;
export type { AlertProps, AlertType, AlertVariant } from './props';
export { alertProps };
export { Alert };
export declare const _AlertComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<import("./props").AlertType>;
            default: string;
        };
        variant: {
            type: import("vue").PropType<import("./props").AlertVariant>;
            default: string;
        };
        title: StringConstructor;
        message: StringConstructor;
        showIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        banner: {
            type: BooleanConstructor;
            default: boolean;
        };
        center: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: StringConstructor;
        elevation: {
            type: import("vue").PropType<boolean | string | number>;
            default: boolean;
        };
    }>> & Readonly<{
        onClose?: ((value: MouseEvent) => any) | undefined;
        "onAfter-close"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        close: (value: MouseEvent) => any;
        "after-close": () => any;
    }, import("vue").PublicProps, {
        closable: boolean;
        center: boolean;
        type: import("./props").AlertType;
        variant: import("./props").AlertVariant;
        showIcon: boolean;
        banner: boolean;
        elevation: string | number | boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<import("./props").AlertType>;
            default: string;
        };
        variant: {
            type: import("vue").PropType<import("./props").AlertVariant>;
            default: string;
        };
        title: StringConstructor;
        message: StringConstructor;
        showIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        banner: {
            type: BooleanConstructor;
            default: boolean;
        };
        center: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: StringConstructor;
        elevation: {
            type: import("vue").PropType<boolean | string | number>;
            default: boolean;
        };
    }>> & Readonly<{
        onClose?: ((value: MouseEvent) => any) | undefined;
        "onAfter-close"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        closable: boolean;
        center: boolean;
        type: import("./props").AlertType;
        variant: import("./props").AlertVariant;
        showIcon: boolean;
        banner: boolean;
        elevation: string | number | boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./props").AlertType>;
        default: string;
    };
    variant: {
        type: import("vue").PropType<import("./props").AlertVariant>;
        default: string;
    };
    title: StringConstructor;
    message: StringConstructor;
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    banner: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    elevation: {
        type: import("vue").PropType<boolean | string | number>;
        default: boolean;
    };
}>> & Readonly<{
    onClose?: ((value: MouseEvent) => any) | undefined;
    "onAfter-close"?: (() => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    close: (value: MouseEvent) => any;
    "after-close": () => any;
}, string, {
    closable: boolean;
    center: boolean;
    type: import("./props").AlertType;
    variant: import("./props").AlertVariant;
    showIcon: boolean;
    banner: boolean;
    elevation: string | number | boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?: (props: {}) => any;
    } & {
        title?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        action?: (props: {}) => any;
    } & {
        'close-icon'?: (props: {}) => any;
    };
})>;
export default Alert;

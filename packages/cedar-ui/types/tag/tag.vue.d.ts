import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    color: import("vue").PropType<import("./types").TagColor | string>;
    size: import("vue").PropType<import("..").ComponentSize>;
    status: import("vue").PropType<import("..").SemanticStatus>;
    variant: {
        type: import("vue").PropType<import("./types").TagVariant>;
        default: string;
        validator: (value: unknown) => value is import("./types").TagVariant;
    };
    show: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkable: {
        type: BooleanConstructor;
        default: boolean;
    };
    checked: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    nowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    cls: import("vue").ComputedRef<any[]>;
    style: import("vue").ComputedRef<CSSProperties | undefined>;
    computedShow: import("vue").ComputedRef<boolean>;
    computedChecked: import("vue").ComputedRef<boolean>;
    n: (suffix?: string) => string;
    classes: typeof import("rattail").classes;
    handleClick: (ev: MouseEvent) => void;
    handleClose: (ev: MouseEvent) => void;
    handleKeyboardActivation: (ev: KeyboardEvent) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:show': (show: boolean) => true;
    'update:checked': (checked: boolean) => true;
    /**
     * @zh 点击关闭按钮时触发
     * @en Emitted when the close button is clicked
     * @param {MouseEvent} ev
     */
    close: (ev: MouseEvent) => true;
    /**
     * @zh 用户选中时触发（仅在可选中模式下触发）
     * @en Emitted when the user check (emit only in the checkable mode)
     * @param {boolean} checked
     * @param {MouseEvent} ev
     */
    check: (checked: boolean, ev: MouseEvent) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    color: import("vue").PropType<import("./types").TagColor | string>;
    size: import("vue").PropType<import("..").ComponentSize>;
    status: import("vue").PropType<import("..").SemanticStatus>;
    variant: {
        type: import("vue").PropType<import("./types").TagVariant>;
        default: string;
        validator: (value: unknown) => value is import("./types").TagVariant;
    };
    show: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkable: {
        type: BooleanConstructor;
        default: boolean;
    };
    checked: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    nowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClose?: ((ev: MouseEvent) => any) | undefined;
    "onUpdate:show"?: ((show: boolean) => any) | undefined;
    "onUpdate:checked"?: ((checked: boolean) => any) | undefined;
    onCheck?: ((checked: boolean, ev: MouseEvent) => any) | undefined;
}>, {
    closable: boolean;
    show: boolean;
    nowrap: boolean;
    variant: import("./types").TagVariant;
    loading: boolean;
    defaultShow: boolean;
    checkable: boolean;
    checked: boolean;
    defaultChecked: boolean;
}, {}, {
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

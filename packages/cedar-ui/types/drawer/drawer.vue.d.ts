import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: import("vue").PropType<import("./props").DrawerPlacement>;
        default: string;
        validator: (value: any) => boolean;
    };
    title: StringConstructor;
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    okText: StringConstructor;
    cancelText: StringConstructor;
    okLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    okButtonProps: {
        type: import("vue").PropType<import("..").ButtonProps>;
    };
    cancelButtonProps: {
        type: import("vue").PropType<import("..").ButtonProps>;
    };
    unmountOnClose: BooleanConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement>;
        default: string;
    };
    drawerStyle: {
        type: import("vue").PropType<CSSProperties>;
    };
    bodyClass: {
        type: import("vue").PropType<string | any[]>;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    beforeOk: {
        type: import("vue").PropType<(done: (closed: boolean) => void) => void | boolean | Promise<void | boolean>>;
    };
    beforeCancel: {
        type: import("vue").PropType<() => boolean>;
    };
    escToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    header: {
        type: BooleanConstructor;
        default: boolean;
    };
    footer: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideCancel: {
        type: BooleanConstructor;
        default: boolean;
    };
    ariaLabel: StringConstructor;
    closeButtonAriaLabel: {
        type: StringConstructor;
        default: string;
    };
}>, {
    prefixCls: string;
    style: import("vue").ComputedRef<CSSProperties>;
    t: (key: string, ...args: any[]) => string;
    mounted: import("vue").Ref<boolean, boolean>;
    computedOpen: import("vue").ComputedRef<boolean>;
    mergedOkLoading: import("vue").ComputedRef<boolean>;
    zIndex: Readonly<import("vue").Ref<number, number>>;
    handleOk: (e: Event) => Promise<void>;
    handleCancel: (e: Event) => void;
    handleOpen: () => void;
    handleClose: () => void;
    handleMask: (e: Event) => void;
    isFixed: import("vue").ComputedRef<boolean>;
    teleportContainer: import("vue").Ref<string | HTMLElement | undefined, string | HTMLElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:open': (visible: boolean) => true;
    /**
     * @zh 点击确定按钮时触发
     * @en Triggered when the OK button is clicked
     * @property {MouseEvent} ev
     */
    ok: (e: Event) => true;
    /**
     * @zh 点击取消、关闭按钮时触发
     * @en Triggered when the cancel or close button is clicked
     * @property {MouseEvent | KeyboardEvent} ev
     */
    cancel: (e: Event) => true;
    /**
     * @zh 抽屉打开后（动画结束）触发
     * @en Triggered after the drawer is opened (the animation ends)
     */
    open: () => true;
    /**
     * @zh 抽屉关闭后（动画结束）触发
     * @en Triggered when the drawer is closed (the animation ends)
     */
    close: () => true;
    /**
     * @zh 对话框打开前触发
     * @en Triggered before drawer is opened
     * @version 2.43.0
     */
    beforeOpen: () => true;
    /**
     * @zh 对话框关闭前触发
     * @en Triggered before drawer is closed
     * @version 2.43.0
     */
    beforeClose: () => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: import("vue").PropType<import("./props").DrawerPlacement>;
        default: string;
        validator: (value: any) => boolean;
    };
    title: StringConstructor;
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    okText: StringConstructor;
    cancelText: StringConstructor;
    okLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    okButtonProps: {
        type: import("vue").PropType<import("..").ButtonProps>;
    };
    cancelButtonProps: {
        type: import("vue").PropType<import("..").ButtonProps>;
    };
    unmountOnClose: BooleanConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement>;
        default: string;
    };
    drawerStyle: {
        type: import("vue").PropType<CSSProperties>;
    };
    bodyClass: {
        type: import("vue").PropType<string | any[]>;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    beforeOk: {
        type: import("vue").PropType<(done: (closed: boolean) => void) => void | boolean | Promise<void | boolean>>;
    };
    beforeCancel: {
        type: import("vue").PropType<() => boolean>;
    };
    escToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    header: {
        type: BooleanConstructor;
        default: boolean;
    };
    footer: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideCancel: {
        type: BooleanConstructor;
        default: boolean;
    };
    ariaLabel: StringConstructor;
    closeButtonAriaLabel: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onCancel?: ((e: Event) => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    onOk?: ((e: Event) => any) | undefined;
    onBeforeOpen?: (() => any) | undefined;
    onBeforeClose?: (() => any) | undefined;
}>, {
    closable: boolean;
    footer: boolean;
    header: boolean;
    mask: boolean;
    width: string | number;
    height: string | number;
    open: boolean;
    popupContainer: string | HTMLElement;
    defaultOpen: boolean;
    placement: "top" | "bottom" | "left" | "right";
    unmountOnClose: boolean;
    renderToBody: boolean;
    escToClose: boolean;
    maskClosable: boolean;
    okLoading: boolean;
    hideCancel: boolean;
    closeButtonAriaLabel: string;
}, {}, {
    ClientOnly: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | null | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Button: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            status: {
                type: import("vue").PropType<import("..").SemanticStatus>;
                validator: (value: unknown) => value is import("..").SemanticStatus;
            };
            variant: {
                type: import("vue").PropType<import("../button").ButtonVariant>;
                validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                type: import("vue").PropType<import("../button").ButtonVariant>;
                validator: (value: unknown) => value is import("../button").ButtonVariant;
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
            type: import("vue").PropType<import("../button").ButtonVariant>;
            validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                    type: import("vue").PropType<import("../button").ButtonVariant>;
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
                buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                vertical: boolean;
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                color: string;
                variant: import("../button").ButtonVariant;
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
                    type: import("vue").PropType<import("../button").ButtonVariant>;
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
                buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
            }, {}, {}, {}, {
                vertical: boolean;
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                color: string;
                variant: import("../button").ButtonVariant;
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
                type: import("vue").PropType<import("../button").ButtonVariant>;
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
            buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            vertical: boolean;
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            color: string;
            variant: import("../button").ButtonVariant;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

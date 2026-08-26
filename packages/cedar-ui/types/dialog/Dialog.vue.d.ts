import type { CSSProperties } from 'vue';
import type { DialogAction, DialogBeforeCloseRefs, DialogType } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    top: {
        type: (StringConstructor | NumberConstructor)[];
    };
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClass: StringConstructor;
    maskStyle: {
        type: import("vue").PropType<CSSProperties>;
    };
    title: StringConstructor;
    message: StringConstructor;
    type: {
        type: import("vue").PropType<DialogType>;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    titleAlign: {
        type: import("vue").PropType<"start" | "center">;
        default: string;
    };
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    unmountOnClose: BooleanConstructor;
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    escToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButtonText: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelButtonLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButtonDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelButtonDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButtonProps: {
        type: import("vue").PropType<import("..").ButtonProps>;
    };
    cancelButtonProps: {
        type: import("vue").PropType<import("..").ButtonProps>;
    };
    footer: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement | false>;
        default: string;
    };
    dialogClass: {
        type: import("vue").PropType<string | any[]>;
    };
    dialogStyle: {
        type: import("vue").PropType<CSSProperties>;
    };
    beforeClose: {
        type: import("vue").PropType<(action: DialogAction, done: () => void, refs: DialogBeforeCloseRefs) => void>;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskAnimationName: {
        type: StringConstructor;
        default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
    };
    dialogAnimationName: {
        type: StringConstructor;
        default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
    };
    bodyClass: {
        type: import("vue").PropType<string | any[]>;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    hideTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    ariaLabel: StringConstructor;
    closeButtonAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    zIndex: NumberConstructor;
}>, {
    prefixCls: string;
    mounted: import("vue").Ref<boolean, boolean>;
    computedOpen: import("vue").ComputedRef<boolean>;
    containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    mergedDialogStyle: import("vue").ComputedRef<CSSProperties>;
    confirmDisplayText: import("vue").ComputedRef<string>;
    cancelDisplayText: import("vue").ComputedRef<string>;
    zIndex: Readonly<import("vue").Ref<number, number>>;
    handleConfirm: (e: Event) => void;
    handleCancel: (e: Event) => void;
    handleMaskClick: (e: Event) => void;
    handleMaskMouseDown: (ev: Event) => void;
    handleOpened: () => void;
    handleClosed: () => void;
    mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
    mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
    mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
    mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
    dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    wrapperCls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    dialogCls: import("vue").ComputedRef<(string | any[] | {
        [x: string]: boolean;
    } | undefined)[]>;
    popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
    popupContainerDisabled: import("vue").ComputedRef<boolean>;
    handleMoveDown: (ev: MouseEvent) => void;
    showFooter: import("vue").ComputedRef<boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:open': (show: boolean) => true;
    confirm: (e: Event) => true;
    cancel: (e: Event) => true;
    open: () => true;
    opened: () => true;
    close: () => true;
    closed: () => true;
    'click-mask': () => true;
    'key-escape': () => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    top: {
        type: (StringConstructor | NumberConstructor)[];
    };
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClass: StringConstructor;
    maskStyle: {
        type: import("vue").PropType<CSSProperties>;
    };
    title: StringConstructor;
    message: StringConstructor;
    type: {
        type: import("vue").PropType<DialogType>;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    titleAlign: {
        type: import("vue").PropType<"start" | "center">;
        default: string;
    };
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    unmountOnClose: BooleanConstructor;
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    escToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButtonText: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelButtonLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButtonDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelButtonDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButtonProps: {
        type: import("vue").PropType<import("..").ButtonProps>;
    };
    cancelButtonProps: {
        type: import("vue").PropType<import("..").ButtonProps>;
    };
    footer: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement | false>;
        default: string;
    };
    dialogClass: {
        type: import("vue").PropType<string | any[]>;
    };
    dialogStyle: {
        type: import("vue").PropType<CSSProperties>;
    };
    beforeClose: {
        type: import("vue").PropType<(action: DialogAction, done: () => void, refs: DialogBeforeCloseRefs) => void>;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskAnimationName: {
        type: StringConstructor;
        default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
    };
    dialogAnimationName: {
        type: StringConstructor;
        default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
    };
    bodyClass: {
        type: import("vue").PropType<string | any[]>;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    hideTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    ariaLabel: StringConstructor;
    closeButtonAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    zIndex: NumberConstructor;
}>> & Readonly<{
    onCancel?: ((e: Event) => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:open"?: ((show: boolean) => any) | undefined;
    onOpened?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
    onConfirm?: ((e: Event) => any) | undefined;
    "onClick-mask"?: (() => any) | undefined;
    "onKey-escape"?: (() => any) | undefined;
}>, {
    closable: boolean;
    footer: boolean;
    mask: boolean;
    open: boolean;
    popupContainer: string | false | HTMLElement;
    defaultOpen: boolean;
    unmountOnClose: boolean;
    draggable: boolean;
    escToClose: boolean;
    maskClosable: boolean;
    closeButtonAriaLabel: string;
    simple: boolean;
    alignCenter: boolean;
    confirmButton: boolean;
    cancelButton: boolean;
    confirmButtonLoading: boolean;
    cancelButtonLoading: boolean;
    confirmButtonDisabled: boolean;
    cancelButtonDisabled: boolean;
    fullscreen: boolean;
    titleAlign: "center" | "start";
    maskAnimationName: string;
    dialogAnimationName: string;
    hideTitle: boolean;
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
    IconInfoCircleFill: {
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
    IconCheckCircleFill: {
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
    IconExclamationCircleFill: {
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
    IconCloseCircleFill: {
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

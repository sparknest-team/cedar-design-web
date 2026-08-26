declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 名称
     * @en the name of the action
     */
    name: {
        type: StringConstructor;
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable the action
     */
    disabled: {
        type: BooleanConstructor;
    };
}>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 名称
     * @en the name of the action
     */
    name: {
        type: StringConstructor;
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable the action
     */
    disabled: {
        type: BooleanConstructor;
    };
}>> & Readonly<{}>, {
    disabled: boolean;
}, {}, {
    Tooltip: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: BooleanConstructor;
            content: StringConstructor;
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
                validator: (value: import("..").TriggerPosition) => boolean;
            };
            xs: BooleanConstructor;
            backgroundColor: StringConstructor;
            contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
            contentStyle: import("vue").PropType<import("vue").CSSProperties>;
            arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
            arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
            popupContainer: import("vue").PropType<string | HTMLElement>;
        }>> & Readonly<{
            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
            onOpenChange?: ((visible: boolean) => any) | undefined;
        }>, {
            prefixCls: string;
            computedOpen: import("vue").ComputedRef<boolean>;
            contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
            computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
            arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
            computedArrowStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
            handleOpenChange: (visible: boolean) => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:open': (visible: boolean) => true;
            openChange: (visible: boolean) => true;
        }, import("vue").PublicProps, {
            xs: boolean;
            open: boolean;
            defaultOpen: boolean;
            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
        }, true, {}, {}, {
            Trigger: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    open: {
                        type: BooleanConstructor;
                        default: undefined;
                    };
                    defaultOpen: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    trigger: {
                        type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                        default: string;
                    };
                    placement: {
                        type: import("vue").PropType<import("..").TriggerPosition>;
                        default: string;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    popupOffset: {
                        type: NumberConstructor;
                        default: number;
                    };
                    popupTranslate: {
                        type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                    };
                    showArrow: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    alignPoint: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    popupHoverStay: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    blurToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    clickToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    clickOutsideToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    unmountOnClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    contentClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    contentStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                    };
                    arrowClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    arrowStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                    };
                    popupStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                    };
                    animationName: {
                        type: StringConstructor;
                        default: string;
                    };
                    duration: {
                        type: import("vue").PropType<number | {
                            enter: number;
                            leave: number;
                        }>;
                    };
                    mouseEnterDelay: {
                        type: NumberConstructor;
                        default: number;
                    };
                    mouseLeaveDelay: {
                        type: NumberConstructor;
                        default: number;
                    };
                    focusDelay: {
                        type: NumberConstructor;
                        default: number;
                    };
                    autoFitPopupWidth: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    autoFitPopupMinWidth: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    autoFixPosition: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    popupContainer: {
                        type: import("vue").PropType<string | HTMLElement>;
                    };
                    updateAtScroll: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    autoFitTransformOrigin: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    hideEmpty: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    openedClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    autoFitPosition: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    renderToBody: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    preventFocus: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    scrollToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    scrollToCloseDistance: {
                        type: NumberConstructor;
                        default: number;
                    };
                }>> & Readonly<{
                    onResize?: (() => any) | undefined;
                    onHide?: (() => any) | undefined;
                    onShow?: (() => any) | undefined;
                    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                    onOpenChange?: ((visible: boolean) => any) | undefined;
                    onClickOutside?: ((event: Event) => any) | undefined;
                }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    'update:open': (visible: boolean) => true;
                    openChange: (visible: boolean) => true;
                    show: () => true;
                    hide: () => true;
                    clickOutside: (event: Event) => true;
                    resize: () => true;
                }, import("vue").PublicProps, {
                    updateAtScroll: boolean;
                    scrollToClose: boolean;
                    disabled: boolean;
                    open: boolean;
                    autoFitPosition: boolean;
                    animationName: string;
                    trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                    defaultOpen: boolean;
                    placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                    popupOffset: number;
                    showArrow: boolean;
                    alignPoint: boolean;
                    popupHoverStay: boolean;
                    blurToClose: boolean;
                    clickToClose: boolean;
                    clickOutsideToClose: boolean;
                    unmountOnClose: boolean;
                    mouseEnterDelay: number;
                    mouseLeaveDelay: number;
                    focusDelay: number;
                    autoFitPopupWidth: boolean;
                    autoFitPopupMinWidth: boolean;
                    autoFixPosition: boolean;
                    autoFitTransformOrigin: boolean;
                    hideEmpty: boolean;
                    renderToBody: boolean;
                    preventFocus: boolean;
                    scrollToCloseDistance: number;
                }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    open: {
                        type: BooleanConstructor;
                        default: undefined;
                    };
                    defaultOpen: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    trigger: {
                        type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                        default: string;
                    };
                    placement: {
                        type: import("vue").PropType<import("..").TriggerPosition>;
                        default: string;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    popupOffset: {
                        type: NumberConstructor;
                        default: number;
                    };
                    popupTranslate: {
                        type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                    };
                    showArrow: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    alignPoint: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    popupHoverStay: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    blurToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    clickToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    clickOutsideToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    unmountOnClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    contentClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    contentStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                    };
                    arrowClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    arrowStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                    };
                    popupStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                    };
                    animationName: {
                        type: StringConstructor;
                        default: string;
                    };
                    duration: {
                        type: import("vue").PropType<number | {
                            enter: number;
                            leave: number;
                        }>;
                    };
                    mouseEnterDelay: {
                        type: NumberConstructor;
                        default: number;
                    };
                    mouseLeaveDelay: {
                        type: NumberConstructor;
                        default: number;
                    };
                    focusDelay: {
                        type: NumberConstructor;
                        default: number;
                    };
                    autoFitPopupWidth: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    autoFitPopupMinWidth: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    autoFixPosition: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    popupContainer: {
                        type: import("vue").PropType<string | HTMLElement>;
                    };
                    updateAtScroll: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    autoFitTransformOrigin: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    hideEmpty: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    openedClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    autoFitPosition: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    renderToBody: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    preventFocus: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    scrollToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    scrollToCloseDistance: {
                        type: NumberConstructor;
                        default: number;
                    };
                }>> & Readonly<{
                    onResize?: (() => any) | undefined;
                    onHide?: (() => any) | undefined;
                    onShow?: (() => any) | undefined;
                    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                    onOpenChange?: ((visible: boolean) => any) | undefined;
                    onClickOutside?: ((event: Event) => any) | undefined;
                }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                    updateAtScroll: boolean;
                    scrollToClose: boolean;
                    disabled: boolean;
                    open: boolean;
                    autoFitPosition: boolean;
                    animationName: string;
                    trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                    defaultOpen: boolean;
                    placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                    popupOffset: number;
                    showArrow: boolean;
                    alignPoint: boolean;
                    popupHoverStay: boolean;
                    blurToClose: boolean;
                    clickToClose: boolean;
                    clickOutsideToClose: boolean;
                    unmountOnClose: boolean;
                    mouseEnterDelay: number;
                    mouseLeaveDelay: number;
                    focusDelay: number;
                    autoFitPopupWidth: boolean;
                    autoFitPopupMinWidth: boolean;
                    autoFixPosition: boolean;
                    autoFitTransformOrigin: boolean;
                    hideEmpty: boolean;
                    renderToBody: boolean;
                    preventFocus: boolean;
                    scrollToCloseDistance: number;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                trigger: {
                    type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                    default: string;
                };
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                popupTranslate: {
                    type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                };
                showArrow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                alignPoint: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupHoverStay: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                blurToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickOutsideToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                unmountOnClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                contentClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                contentStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                arrowClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                arrowStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                popupStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                animationName: {
                    type: StringConstructor;
                    default: string;
                };
                duration: {
                    type: import("vue").PropType<number | {
                        enter: number;
                        leave: number;
                    }>;
                };
                mouseEnterDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                mouseLeaveDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                focusDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                autoFitPopupWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitPopupMinWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFixPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupContainer: {
                    type: import("vue").PropType<string | HTMLElement>;
                };
                updateAtScroll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitTransformOrigin: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideEmpty: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                openedClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                autoFitPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                renderToBody: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                preventFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToCloseDistance: {
                    type: NumberConstructor;
                    default: number;
                };
            }>> & Readonly<{
                onResize?: (() => any) | undefined;
                onHide?: (() => any) | undefined;
                onShow?: (() => any) | undefined;
                "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                onOpenChange?: ((visible: boolean) => any) | undefined;
                onClickOutside?: ((event: Event) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:open': (visible: boolean) => true;
                openChange: (visible: boolean) => true;
                show: () => true;
                hide: () => true;
                clickOutside: (event: Event) => true;
                resize: () => true;
            }, string, {
                updateAtScroll: boolean;
                scrollToClose: boolean;
                disabled: boolean;
                open: boolean;
                autoFitPosition: boolean;
                animationName: string;
                trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                defaultOpen: boolean;
                placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                popupOffset: number;
                showArrow: boolean;
                alignPoint: boolean;
                popupHoverStay: boolean;
                blurToClose: boolean;
                clickToClose: boolean;
                clickOutsideToClose: boolean;
                unmountOnClose: boolean;
                mouseEnterDelay: number;
                mouseLeaveDelay: number;
                focusDelay: number;
                autoFitPopupWidth: boolean;
                autoFitPopupMinWidth: boolean;
                autoFixPosition: boolean;
                autoFitTransformOrigin: boolean;
                hideEmpty: boolean;
                renderToBody: boolean;
                preventFocus: boolean;
                scrollToCloseDistance: number;
            }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: BooleanConstructor;
            content: StringConstructor;
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
                validator: (value: import("..").TriggerPosition) => boolean;
            };
            xs: BooleanConstructor;
            backgroundColor: StringConstructor;
            contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
            contentStyle: import("vue").PropType<import("vue").CSSProperties>;
            arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
            arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
            popupContainer: import("vue").PropType<string | HTMLElement>;
        }>> & Readonly<{
            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
            onOpenChange?: ((visible: boolean) => any) | undefined;
        }>, {
            prefixCls: string;
            computedOpen: import("vue").ComputedRef<boolean>;
            contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
            computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
            arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
            computedArrowStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
            handleOpenChange: (visible: boolean) => void;
        }, {}, {}, {}, {
            xs: boolean;
            open: boolean;
            defaultOpen: boolean;
            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: BooleanConstructor;
        content: StringConstructor;
        placement: {
            type: import("vue").PropType<import("..").TriggerPosition>;
            default: string;
            validator: (value: import("..").TriggerPosition) => boolean;
        };
        xs: BooleanConstructor;
        backgroundColor: StringConstructor;
        contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
        contentStyle: import("vue").PropType<import("vue").CSSProperties>;
        arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
        arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
        popupContainer: import("vue").PropType<string | HTMLElement>;
    }>> & Readonly<{
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        onOpenChange?: ((visible: boolean) => any) | undefined;
    }>, {
        prefixCls: string;
        computedOpen: import("vue").ComputedRef<boolean>;
        contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
        computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
        arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
        computedArrowStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
        handleOpenChange: (visible: boolean) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:open': (visible: boolean) => true;
        openChange: (visible: boolean) => true;
    }, string, {
        xs: boolean;
        open: boolean;
        defaultOpen: boolean;
        placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
    }, {}, string, {}, {
        Trigger: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                trigger: {
                    type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                    default: string;
                };
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                popupTranslate: {
                    type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                };
                showArrow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                alignPoint: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupHoverStay: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                blurToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickOutsideToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                unmountOnClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                contentClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                contentStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                arrowClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                arrowStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                popupStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                animationName: {
                    type: StringConstructor;
                    default: string;
                };
                duration: {
                    type: import("vue").PropType<number | {
                        enter: number;
                        leave: number;
                    }>;
                };
                mouseEnterDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                mouseLeaveDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                focusDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                autoFitPopupWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitPopupMinWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFixPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupContainer: {
                    type: import("vue").PropType<string | HTMLElement>;
                };
                updateAtScroll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitTransformOrigin: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideEmpty: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                openedClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                autoFitPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                renderToBody: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                preventFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToCloseDistance: {
                    type: NumberConstructor;
                    default: number;
                };
            }>> & Readonly<{
                onResize?: (() => any) | undefined;
                onHide?: (() => any) | undefined;
                onShow?: (() => any) | undefined;
                "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                onOpenChange?: ((visible: boolean) => any) | undefined;
                onClickOutside?: ((event: Event) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:open': (visible: boolean) => true;
                openChange: (visible: boolean) => true;
                show: () => true;
                hide: () => true;
                clickOutside: (event: Event) => true;
                resize: () => true;
            }, import("vue").PublicProps, {
                updateAtScroll: boolean;
                scrollToClose: boolean;
                disabled: boolean;
                open: boolean;
                autoFitPosition: boolean;
                animationName: string;
                trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                defaultOpen: boolean;
                placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                popupOffset: number;
                showArrow: boolean;
                alignPoint: boolean;
                popupHoverStay: boolean;
                blurToClose: boolean;
                clickToClose: boolean;
                clickOutsideToClose: boolean;
                unmountOnClose: boolean;
                mouseEnterDelay: number;
                mouseLeaveDelay: number;
                focusDelay: number;
                autoFitPopupWidth: boolean;
                autoFitPopupMinWidth: boolean;
                autoFixPosition: boolean;
                autoFitTransformOrigin: boolean;
                hideEmpty: boolean;
                renderToBody: boolean;
                preventFocus: boolean;
                scrollToCloseDistance: number;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                trigger: {
                    type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                    default: string;
                };
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                popupTranslate: {
                    type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                };
                showArrow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                alignPoint: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupHoverStay: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                blurToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickOutsideToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                unmountOnClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                contentClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                contentStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                arrowClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                arrowStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                popupStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                animationName: {
                    type: StringConstructor;
                    default: string;
                };
                duration: {
                    type: import("vue").PropType<number | {
                        enter: number;
                        leave: number;
                    }>;
                };
                mouseEnterDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                mouseLeaveDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                focusDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                autoFitPopupWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitPopupMinWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFixPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupContainer: {
                    type: import("vue").PropType<string | HTMLElement>;
                };
                updateAtScroll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitTransformOrigin: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideEmpty: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                openedClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                autoFitPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                renderToBody: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                preventFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToCloseDistance: {
                    type: NumberConstructor;
                    default: number;
                };
            }>> & Readonly<{
                onResize?: (() => any) | undefined;
                onHide?: (() => any) | undefined;
                onShow?: (() => any) | undefined;
                "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                onOpenChange?: ((visible: boolean) => any) | undefined;
                onClickOutside?: ((event: Event) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                updateAtScroll: boolean;
                scrollToClose: boolean;
                disabled: boolean;
                open: boolean;
                autoFitPosition: boolean;
                animationName: string;
                trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                defaultOpen: boolean;
                placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                popupOffset: number;
                showArrow: boolean;
                alignPoint: boolean;
                popupHoverStay: boolean;
                blurToClose: boolean;
                clickToClose: boolean;
                clickOutsideToClose: boolean;
                unmountOnClose: boolean;
                mouseEnterDelay: number;
                mouseLeaveDelay: number;
                focusDelay: number;
                autoFitPopupWidth: boolean;
                autoFitPopupMinWidth: boolean;
                autoFixPosition: boolean;
                autoFitTransformOrigin: boolean;
                hideEmpty: boolean;
                renderToBody: boolean;
                preventFocus: boolean;
                scrollToCloseDistance: number;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            trigger: {
                type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                default: string;
            };
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupOffset: {
                type: NumberConstructor;
                default: number;
            };
            popupTranslate: {
                type: import("vue").PropType<import("..").TriggerPopupTranslate>;
            };
            showArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            alignPoint: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupHoverStay: {
                type: BooleanConstructor;
                default: boolean;
            };
            blurToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickOutsideToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            contentClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            contentStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            arrowClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            arrowStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            animationName: {
                type: StringConstructor;
                default: string;
            };
            duration: {
                type: import("vue").PropType<number | {
                    enter: number;
                    leave: number;
                }>;
            };
            mouseEnterDelay: {
                type: NumberConstructor;
                default: number;
            };
            mouseLeaveDelay: {
                type: NumberConstructor;
                default: number;
            };
            focusDelay: {
                type: NumberConstructor;
                default: number;
            };
            autoFitPopupWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitPopupMinWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFixPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement>;
            };
            updateAtScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitTransformOrigin: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideEmpty: {
                type: BooleanConstructor;
                default: boolean;
            };
            openedClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            autoFitPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderToBody: {
                type: BooleanConstructor;
                default: boolean;
            };
            preventFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToCloseDistance: {
                type: NumberConstructor;
                default: number;
            };
        }>> & Readonly<{
            onResize?: (() => any) | undefined;
            onHide?: (() => any) | undefined;
            onShow?: (() => any) | undefined;
            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
            onOpenChange?: ((visible: boolean) => any) | undefined;
            onClickOutside?: ((event: Event) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:open': (visible: boolean) => true;
            openChange: (visible: boolean) => true;
            show: () => true;
            hide: () => true;
            clickOutside: (event: Event) => true;
            resize: () => true;
        }, string, {
            updateAtScroll: boolean;
            scrollToClose: boolean;
            disabled: boolean;
            open: boolean;
            autoFitPosition: boolean;
            animationName: string;
            trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
            defaultOpen: boolean;
            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            popupOffset: number;
            showArrow: boolean;
            alignPoint: boolean;
            popupHoverStay: boolean;
            blurToClose: boolean;
            clickToClose: boolean;
            clickOutsideToClose: boolean;
            unmountOnClose: boolean;
            mouseEnterDelay: number;
            mouseLeaveDelay: number;
            focusDelay: number;
            autoFitPopupWidth: boolean;
            autoFitPopupMinWidth: boolean;
            autoFixPosition: boolean;
            autoFitTransformOrigin: boolean;
            hideEmpty: boolean;
            renderToBody: boolean;
            preventFocus: boolean;
            scrollToCloseDistance: number;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        directive: import("vue").Directive;
    }>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

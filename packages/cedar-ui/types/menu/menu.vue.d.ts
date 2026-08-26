import { MenuValue } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<MenuValue>;
    };
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
        type: import("vue").PropType<import("./types").MenuPosition>;
        default: string;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement>;
    };
    popupMaxHeight: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFitPopupWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    alignPoint: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    prefixCls: string;
    computedOpen: import("vue").ComputedRef<boolean>;
    handleOpenChange: (visible: boolean) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: MenuValue) => true;
    'update:open': (visible: boolean) => true;
    /**
     * @zh 下拉框显示状态发生改变时触发
     * @en Triggered when the display status of the drop-down box changes
     * @param {boolean} visible
     */
    openChange: (visible: boolean) => true;
    /**
     * @zh 用户选择菜单项时触发；受控模式下是否产生选中态取决于 modelValue 是否更新
     * @en Triggered when the user selects a menu item. In controlled mode, whether the selected state changes depends on whether modelValue is updated.
     * @param {string | number | Record<string, any> | undefined } value
     * @param {{ value: any, label?: string | number, disabled?: boolean }} option
     * @param {Event} ev
     */
    select: (value: MenuValue, option: Record<string, any>, ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<MenuValue>;
    };
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
        type: import("vue").PropType<import("./types").MenuPosition>;
        default: string;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement>;
    };
    popupMaxHeight: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFitPopupWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    alignPoint: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSelect?: ((value: MenuValue, option: Record<string, any>, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: MenuValue) => any) | undefined;
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    onOpenChange?: ((visible: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    open: boolean;
    trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
    defaultOpen: boolean;
    placement: import("./types").MenuPosition;
    alignPoint: boolean;
    autoFitPopupWidth: boolean;
    popupMaxHeight: number | boolean;
    hideOnSelect: boolean;
}, {}, {
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
    MenuPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        isEmpty: {
            type: BooleanConstructor;
            default: boolean;
        };
        bottomOffset: {
            type: NumberConstructor;
            default: number;
        };
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        style: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
        wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        handleScroll: (e: Event) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "reachBottom")[], "scroll" | "reachBottom", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        isEmpty: {
            type: BooleanConstructor;
            default: boolean;
        };
        bottomOffset: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{
        onScroll?: ((...args: any[]) => any) | undefined;
        onReachBottom?: ((...args: any[]) => any) | undefined;
    }>, {
        bottomOffset: number;
        isEmpty: boolean;
    }, {}, {
        Scrollbar: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: import("vue").PropType<"track" | "embed">;
                    default: string;
                };
                outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                outerStyle: {
                    type: import("vue").PropType<import("vue").StyleValue>;
                };
                hide: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disableHorizontal: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disableVertical: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onScroll?: ((ev: Event) => any) | undefined;
            }>, {
                prefixCls: string;
                cls: import("vue").ComputedRef<(string | Record<string, any> | unknown[] | undefined)[]>;
                style: import("vue").ComputedRef<import("vue").StyleValue[]>;
                containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                horizontalThumbRef: import("vue").Ref<any, any>;
                verticalThumbRef: import("vue").Ref<any, any>;
                horizontalData: import("vue").Ref<import("../scrollbar/types").ThumbData | undefined, import("../scrollbar/types").ThumbData | undefined>;
                verticalData: import("vue").Ref<import("../scrollbar/types").ThumbData | undefined, import("../scrollbar/types").ThumbData | undefined>;
                isBoth: import("vue").Ref<boolean, boolean>;
                hasHorizontalScrollbar: import("vue").ComputedRef<boolean>;
                hasVerticalScrollbar: import("vue").ComputedRef<boolean>;
                handleResize: () => void;
                handleScroll: (ev: Event) => void;
                handleHorizontalScroll: (offset: number) => void;
                handleVerticalScroll: (offset: number) => void;
            }, {}, {}, {
                scrollTo(options?: number | {
                    left?: number;
                    top?: number;
                }, y?: number): void;
                scrollTop(top: number): void;
                scrollLeft(left: number): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                scroll: (ev: Event) => true;
            }, import("vue").PublicProps, {
                type: "embed" | "track";
                hide: boolean;
                disableHorizontal: boolean;
                disableVertical: boolean;
            }, true, {}, {}, {
                ResizeObserver: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    watchOnUpdated: BooleanConstructor;
                }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[] | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    watchOnUpdated: BooleanConstructor;
                }>> & Readonly<{
                    onResize?: ((...args: any[]) => any) | undefined;
                }>, {
                    watchOnUpdated: boolean;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                Thumb: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    data: {
                        type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                    };
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
                        default: string;
                    };
                    alwaysShow: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    both: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>, {
                    visible: import("vue").Ref<boolean, boolean>;
                    trackRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    thumbRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    prefixCls: string;
                    thumbCls: import("vue").ComputedRef<(string | {
                        [x: string]: boolean;
                    })[]>;
                    thumbStyle: import("vue").ComputedRef<{
                        [x: string]: string;
                    }>;
                    handleThumbMouseDown: (ev: MouseEvent) => void;
                    handleTrackClick: (ev: MouseEvent) => void;
                    setOffset: (_offset: number) => void;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scroll"[], "scroll", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    data: {
                        type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                    };
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
                        default: string;
                    };
                    alwaysShow: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    both: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & Readonly<{
                    onScroll?: ((...args: any[]) => any) | undefined;
                }>, {
                    both: boolean;
                    direction: "horizontal" | "vertical";
                    alwaysShow: boolean;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: import("vue").PropType<"track" | "embed">;
                    default: string;
                };
                outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                outerStyle: {
                    type: import("vue").PropType<import("vue").StyleValue>;
                };
                hide: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disableHorizontal: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disableVertical: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onScroll?: ((ev: Event) => any) | undefined;
            }>, {
                prefixCls: string;
                cls: import("vue").ComputedRef<(string | Record<string, any> | unknown[] | undefined)[]>;
                style: import("vue").ComputedRef<import("vue").StyleValue[]>;
                containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                horizontalThumbRef: import("vue").Ref<any, any>;
                verticalThumbRef: import("vue").Ref<any, any>;
                horizontalData: import("vue").Ref<import("../scrollbar/types").ThumbData | undefined, import("../scrollbar/types").ThumbData | undefined>;
                verticalData: import("vue").Ref<import("../scrollbar/types").ThumbData | undefined, import("../scrollbar/types").ThumbData | undefined>;
                isBoth: import("vue").Ref<boolean, boolean>;
                hasHorizontalScrollbar: import("vue").ComputedRef<boolean>;
                hasVerticalScrollbar: import("vue").ComputedRef<boolean>;
                handleResize: () => void;
                handleScroll: (ev: Event) => void;
                handleHorizontalScroll: (offset: number) => void;
                handleVerticalScroll: (offset: number) => void;
            }, {}, {}, {
                scrollTo(options?: number | {
                    left?: number;
                    top?: number;
                }, y?: number): void;
                scrollTop(top: number): void;
                scrollLeft(left: number): void;
            }, {
                type: "embed" | "track";
                hide: boolean;
                disableHorizontal: boolean;
                disableVertical: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: import("vue").PropType<"track" | "embed">;
                default: string;
            };
            outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            outerStyle: {
                type: import("vue").PropType<import("vue").StyleValue>;
            };
            hide: {
                type: BooleanConstructor;
                default: boolean;
            };
            disableHorizontal: {
                type: BooleanConstructor;
                default: boolean;
            };
            disableVertical: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onScroll?: ((ev: Event) => any) | undefined;
        }>, {
            prefixCls: string;
            cls: import("vue").ComputedRef<(string | Record<string, any> | unknown[] | undefined)[]>;
            style: import("vue").ComputedRef<import("vue").StyleValue[]>;
            containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            horizontalThumbRef: import("vue").Ref<any, any>;
            verticalThumbRef: import("vue").Ref<any, any>;
            horizontalData: import("vue").Ref<import("../scrollbar/types").ThumbData | undefined, import("../scrollbar/types").ThumbData | undefined>;
            verticalData: import("vue").Ref<import("../scrollbar/types").ThumbData | undefined, import("../scrollbar/types").ThumbData | undefined>;
            isBoth: import("vue").Ref<boolean, boolean>;
            hasHorizontalScrollbar: import("vue").ComputedRef<boolean>;
            hasVerticalScrollbar: import("vue").ComputedRef<boolean>;
            handleResize: () => void;
            handleScroll: (ev: Event) => void;
            handleHorizontalScroll: (offset: number) => void;
            handleVerticalScroll: (offset: number) => void;
        }, {}, {}, {
            scrollTo(options?: number | {
                left?: number;
                top?: number;
            }, y?: number): void;
            scrollTop(top: number): void;
            scrollLeft(left: number): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            scroll: (ev: Event) => true;
        }, string, {
            type: "embed" | "track";
            hide: boolean;
            disableHorizontal: boolean;
            disableVertical: boolean;
        }, {}, string, {}, {
            ResizeObserver: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                watchOnUpdated: BooleanConstructor;
            }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[] | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                watchOnUpdated: BooleanConstructor;
            }>> & Readonly<{
                onResize?: ((...args: any[]) => any) | undefined;
            }>, {
                watchOnUpdated: boolean;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            Thumb: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                data: {
                    type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                };
                direction: {
                    type: import("vue").PropType<import("..").Direction>;
                    default: string;
                };
                alwaysShow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                both: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>, {
                visible: import("vue").Ref<boolean, boolean>;
                trackRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                thumbRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                prefixCls: string;
                thumbCls: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                })[]>;
                thumbStyle: import("vue").ComputedRef<{
                    [x: string]: string;
                }>;
                handleThumbMouseDown: (ev: MouseEvent) => void;
                handleTrackClick: (ev: MouseEvent) => void;
                setOffset: (_offset: number) => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scroll"[], "scroll", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                };
                direction: {
                    type: import("vue").PropType<import("..").Direction>;
                    default: string;
                };
                alwaysShow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                both: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onScroll?: ((...args: any[]) => any) | undefined;
            }>, {
                both: boolean;
                direction: "horizontal" | "vertical";
                alwaysShow: boolean;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
        Empty: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                description: StringConstructor;
                imageUrl: StringConstructor;
                alt: {
                    type: StringConstructor;
                    default: string;
                };
                icon: StringConstructor;
                imageSize: {
                    type: import("vue").PropType<import("../empty").EmptyImageSize>;
                    default: string;
                };
                inConfigProvider: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                alt: string;
                imageSize: import("../empty").EmptyImageSize;
                inConfigProvider: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                description: StringConstructor;
                imageUrl: StringConstructor;
                alt: {
                    type: StringConstructor;
                    default: string;
                };
                icon: StringConstructor;
                imageSize: {
                    type: import("vue").PropType<import("../empty").EmptyImageSize>;
                    default: string;
                };
                inConfigProvider: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                alt: string;
                imageSize: import("../empty").EmptyImageSize;
                inConfigProvider: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            description: StringConstructor;
            imageUrl: StringConstructor;
            alt: {
                type: StringConstructor;
                default: string;
            };
            icon: StringConstructor;
            imageSize: {
                type: import("vue").PropType<import("../empty").EmptyImageSize>;
                default: string;
            };
            inConfigProvider: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            alt: string;
            imageSize: import("../empty").EmptyImageSize;
            inConfigProvider: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

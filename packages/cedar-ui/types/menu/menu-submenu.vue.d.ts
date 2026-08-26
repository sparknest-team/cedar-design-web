import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 触发方式
     * @en Trigger method
     * @values 'hover','click'
     * @version 2.10.0
     */
    trigger: {
        type: PropType<"hover" | "click" | ("hover" | "click")[]>;
        default: string;
    };
    /**
     * @zh 弹出位置
     * @en Popup placement
     * @values 'rt','lt'
     * @version 2.10.0
     */
    placement: {
        type: PropType<"rt" | "lt">;
        default: string;
    };
    /**
     * @zh 弹出框是否可见
     * @en Whether the popup is visible
     * @vModel
     */
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 弹出框默认是否可见（非受控模式）
     * @en Whether the popup is visible by default (uncontrolled mode)
     */
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 自定义选项属性
     * @en Custom option properties
     * @version 2.29.0
     */
    optionProps: {
        type: ObjectConstructor;
    };
}>, {
    prefixCls: string;
    computedOpen: import("vue").ComputedRef<boolean>;
    handleOpenChange: (visible: boolean) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:open': (visible: boolean) => true;
    /**
     * @zh 下拉框显示状态发生改变时触发
     * @en Triggered when the display status of the drop-down box changes
     * @property {boolean} visible
     */
    openChange: (visible: boolean) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 触发方式
     * @en Trigger method
     * @values 'hover','click'
     * @version 2.10.0
     */
    trigger: {
        type: PropType<"hover" | "click" | ("hover" | "click")[]>;
        default: string;
    };
    /**
     * @zh 弹出位置
     * @en Popup placement
     * @values 'rt','lt'
     * @version 2.10.0
     */
    placement: {
        type: PropType<"rt" | "lt">;
        default: string;
    };
    /**
     * @zh 弹出框是否可见
     * @en Whether the popup is visible
     * @vModel
     */
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 弹出框默认是否可见（非受控模式）
     * @en Whether the popup is visible by default (uncontrolled mode)
     */
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 自定义选项属性
     * @en Custom option properties
     * @version 2.29.0
     */
    optionProps: {
        type: ObjectConstructor;
    };
}>> & Readonly<{
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    onOpenChange?: ((visible: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    open: boolean;
    trigger: "hover" | "click" | ("hover" | "click")[];
    defaultOpen: boolean;
    placement: "lt" | "rt";
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
                type: PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                default: string;
            };
            placement: {
                type: PropType<import("..").TriggerPosition>;
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
                type: PropType<import("..").TriggerPopupTranslate>;
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
                type: PropType<import("vue").CSSProperties>;
            };
            arrowClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            arrowStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            popupStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            animationName: {
                type: StringConstructor;
                default: string;
            };
            duration: {
                type: PropType<number | {
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
                type: PropType<string | HTMLElement>;
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
                type: PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                default: string;
            };
            placement: {
                type: PropType<import("..").TriggerPosition>;
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
                type: PropType<import("..").TriggerPopupTranslate>;
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
                type: PropType<import("vue").CSSProperties>;
            };
            arrowClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            arrowStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            popupStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            animationName: {
                type: StringConstructor;
                default: string;
            };
            duration: {
                type: PropType<number | {
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
                type: PropType<string | HTMLElement>;
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
            type: PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
            default: string;
        };
        placement: {
            type: PropType<import("..").TriggerPosition>;
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
            type: PropType<import("..").TriggerPopupTranslate>;
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
            type: PropType<import("vue").CSSProperties>;
        };
        arrowClass: {
            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        };
        arrowStyle: {
            type: PropType<import("vue").CSSProperties>;
        };
        popupStyle: {
            type: PropType<import("vue").CSSProperties>;
        };
        animationName: {
            type: StringConstructor;
            default: string;
        };
        duration: {
            type: PropType<number | {
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
            type: PropType<string | HTMLElement>;
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
                    type: PropType<"track" | "embed">;
                    default: string;
                };
                outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                outerStyle: {
                    type: PropType<import("vue").StyleValue>;
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
                        type: PropType<import("../scrollbar/types").ThumbData>;
                    };
                    direction: {
                        type: PropType<import("..").Direction>;
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
                        type: PropType<import("../scrollbar/types").ThumbData>;
                    };
                    direction: {
                        type: PropType<import("..").Direction>;
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
                    type: PropType<"track" | "embed">;
                    default: string;
                };
                outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                outerStyle: {
                    type: PropType<import("vue").StyleValue>;
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
                type: PropType<"track" | "embed">;
                default: string;
            };
            outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            outerStyle: {
                type: PropType<import("vue").StyleValue>;
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
                    type: PropType<import("../scrollbar/types").ThumbData>;
                };
                direction: {
                    type: PropType<import("..").Direction>;
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
                    type: PropType<import("../scrollbar/types").ThumbData>;
                };
                direction: {
                    type: PropType<import("..").Direction>;
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
                    type: PropType<import("../empty").EmptyImageSize>;
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
                    type: PropType<import("../empty").EmptyImageSize>;
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
                type: PropType<import("../empty").EmptyImageSize>;
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
    MenuOption: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: (ObjectConstructor | StringConstructor | NumberConstructor)[];
        };
        label: {
            type: (StringConstructor | NumberConstructor)[];
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        active: BooleanConstructor;
        uninjectContext: BooleanConstructor;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        liRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        handleClick: (ev: MouseEvent) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (ev: MouseEvent) => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        value: {
            type: (ObjectConstructor | StringConstructor | NumberConstructor)[];
        };
        label: {
            type: (StringConstructor | NumberConstructor)[];
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        active: BooleanConstructor;
        uninjectContext: BooleanConstructor;
    }>> & Readonly<{
        onClick?: ((ev: MouseEvent) => any) | undefined;
    }>, {
        disabled: boolean;
        active: boolean;
        uninjectContext: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    IconRight: {
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

import _Menu from './menu.vue';
import _MenuOption from './menu-option.vue';
import _MenuGroup from './menu-group.vue';
import _MenuSubmenu from './menu-submenu.vue';
import { menuProps } from './props';
declare const Menu: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./types").MenuValue>;
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
        onSelect?: ((value: import("./types").MenuValue, option: Record<string, any>, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").MenuValue) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        onOpenChange?: ((visible: boolean) => any) | undefined;
    }>, {
        prefixCls: string;
        computedOpen: import("vue").ComputedRef<boolean>;
        handleOpenChange: (visible: boolean) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: import("./types").MenuValue) => true;
        'update:open': (visible: boolean) => true;
        openChange: (visible: boolean) => true;
        select: (value: import("./types").MenuValue, option: Record<string, any>, ev: Event) => true;
    }, import("vue").PublicProps, {
        disabled: boolean;
        open: boolean;
        trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
        defaultOpen: boolean;
        placement: import("./types").MenuPosition;
        alignPoint: boolean;
        autoFitPopupWidth: boolean;
        popupMaxHeight: number | boolean;
        hideOnSelect: boolean;
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
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./types").MenuValue>;
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
        onSelect?: ((value: import("./types").MenuValue, option: Record<string, any>, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").MenuValue) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        onOpenChange?: ((visible: boolean) => any) | undefined;
    }>, {
        prefixCls: string;
        computedOpen: import("vue").ComputedRef<boolean>;
        handleOpenChange: (visible: boolean) => void;
    }, {}, {}, {}, {
        disabled: boolean;
        open: boolean;
        trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
        defaultOpen: boolean;
        placement: import("./types").MenuPosition;
        alignPoint: boolean;
        autoFitPopupWidth: boolean;
        popupMaxHeight: number | boolean;
        hideOnSelect: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./types").MenuValue>;
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
    onSelect?: ((value: import("./types").MenuValue, option: Record<string, any>, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./types").MenuValue) => any) | undefined;
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    onOpenChange?: ((visible: boolean) => any) | undefined;
}>, {
    prefixCls: string;
    computedOpen: import("vue").ComputedRef<boolean>;
    handleOpenChange: (visible: boolean) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: import("./types").MenuValue) => true;
    'update:open': (visible: boolean) => true;
    openChange: (visible: boolean) => true;
    select: (value: import("./types").MenuValue, option: Record<string, any>, ev: Event) => true;
}, string, {
    disabled: boolean;
    open: boolean;
    trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
    defaultOpen: boolean;
    placement: import("./types").MenuPosition;
    alignPoint: boolean;
    autoFitPopupWidth: boolean;
    popupMaxHeight: number | boolean;
    hideOnSelect: boolean;
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
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Option: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: StringConstructor;
    }>, {
        prefixCls: string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Submenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: import("vue").PropType<"hover" | "click" | ("hover" | "click")[]>;
            default: string;
        };
        placement: {
            type: import("vue").PropType<"rt" | "lt">;
            default: string;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        optionProps: {
            type: ObjectConstructor;
        };
    }>, {
        prefixCls: string;
        computedOpen: import("vue").ComputedRef<boolean>;
        handleOpenChange: (visible: boolean) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:open': (visible: boolean) => true;
        openChange: (visible: boolean) => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: import("vue").PropType<"hover" | "click" | ("hover" | "click")[]>;
            default: string;
        };
        placement: {
            type: import("vue").PropType<"rt" | "lt">;
            default: string;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
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
}>;
export type MenuInstance = InstanceType<typeof _Menu>;
export type MenuOptionInstance = InstanceType<typeof _MenuOption>;
export type MenuGroupInstance = InstanceType<typeof _MenuGroup>;
export type MenuSubmenuInstance = InstanceType<typeof _MenuSubmenu>;
export type { MenuProps, MenuPosition, MenuValue } from './types';
export { Menu, _MenuOption as MenuOption, _MenuGroup as MenuGroup, _MenuSubmenu as MenuSubmenu, };
export declare const _MenuComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./types").MenuValue>;
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
        onSelect?: ((value: import("./types").MenuValue, option: Record<string, any>, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").MenuValue) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        onOpenChange?: ((visible: boolean) => any) | undefined;
    }>, {
        prefixCls: string;
        computedOpen: import("vue").ComputedRef<boolean>;
        handleOpenChange: (visible: boolean) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: import("./types").MenuValue) => true;
        'update:open': (visible: boolean) => true;
        openChange: (visible: boolean) => true;
        select: (value: import("./types").MenuValue, option: Record<string, any>, ev: Event) => true;
    }, import("vue").PublicProps, {
        disabled: boolean;
        open: boolean;
        trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
        defaultOpen: boolean;
        placement: import("./types").MenuPosition;
        alignPoint: boolean;
        autoFitPopupWidth: boolean;
        popupMaxHeight: number | boolean;
        hideOnSelect: boolean;
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
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("./types").MenuValue>;
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
        onSelect?: ((value: import("./types").MenuValue, option: Record<string, any>, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").MenuValue) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        onOpenChange?: ((visible: boolean) => any) | undefined;
    }>, {
        prefixCls: string;
        computedOpen: import("vue").ComputedRef<boolean>;
        handleOpenChange: (visible: boolean) => void;
    }, {}, {}, {}, {
        disabled: boolean;
        open: boolean;
        trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
        defaultOpen: boolean;
        placement: import("./types").MenuPosition;
        alignPoint: boolean;
        autoFitPopupWidth: boolean;
        popupMaxHeight: number | boolean;
        hideOnSelect: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<import("./types").MenuValue>;
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
    onSelect?: ((value: import("./types").MenuValue, option: Record<string, any>, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./types").MenuValue) => any) | undefined;
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    onOpenChange?: ((visible: boolean) => any) | undefined;
}>, {
    prefixCls: string;
    computedOpen: import("vue").ComputedRef<boolean>;
    handleOpenChange: (visible: boolean) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: import("./types").MenuValue) => true;
    'update:open': (visible: boolean) => true;
    openChange: (visible: boolean) => true;
    select: (value: import("./types").MenuValue, option: Record<string, any>, ev: Event) => true;
}, string, {
    disabled: boolean;
    open: boolean;
    trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
    defaultOpen: boolean;
    placement: import("./types").MenuPosition;
    alignPoint: boolean;
    autoFitPopupWidth: boolean;
    popupMaxHeight: number | boolean;
    hideOnSelect: boolean;
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
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Option: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: StringConstructor;
    }>, {
        prefixCls: string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Submenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: import("vue").PropType<"hover" | "click" | ("hover" | "click")[]>;
            default: string;
        };
        placement: {
            type: import("vue").PropType<"rt" | "lt">;
            default: string;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        optionProps: {
            type: ObjectConstructor;
        };
    }>, {
        prefixCls: string;
        computedOpen: import("vue").ComputedRef<boolean>;
        handleOpenChange: (visible: boolean) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:open': (visible: boolean) => true;
        openChange: (visible: boolean) => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: import("vue").PropType<"hover" | "click" | ("hover" | "click")[]>;
            default: string;
        };
        placement: {
            type: import("vue").PropType<"rt" | "lt">;
            default: string;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
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
}>;
export { menuProps };
export default Menu;

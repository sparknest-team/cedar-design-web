import _Slider from './slider.vue';
import { sliderProps } from './props';
declare const Slider: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: import("vue").PropType<import("./props").SliderValue>;
        defaultValue: {
            type: import("vue").PropType<import("./props").SliderValue>;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        marks: import("vue").PropType<Record<number, string>>;
        max: {
            type: NumberConstructor;
            default: number;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
            validator: (value: import("..").Direction) => boolean;
        };
        disabled: BooleanConstructor;
        showTicks: BooleanConstructor;
        showInput: BooleanConstructor;
        range: BooleanConstructor;
        formatTooltip: import("vue").PropType<import("./props").SliderTooltipFormatter>;
        showTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((value: number | [number, number]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number | [number, number]) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        trackCls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        trackRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
        computedValue: import("vue").ComputedRef<[number, number]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        markList: import("vue").ComputedRef<{
            key: number;
            content: string;
            isActive: boolean;
        }[]>;
        getBtnStyle: (value: number) => import("vue").CSSProperties;
        getBarStyle: ([start, end]: [number, number]) => import("vue").CSSProperties;
        handleClick: (e: MouseEvent) => void;
        handleMoveStart: () => void;
        handleEndMoving: (x: number, y: number) => void;
        handleMoveEnd: () => void;
        handleStartMoving: (x: number, y: number) => void;
        handleStartChange: (value?: number) => void;
        handleEndChange: (value?: number) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: number | [number, number]) => true;
        change: (value: number | [number, number]) => true;
    }, import("vue").PublicProps, {
        disabled: boolean;
        range: boolean;
        defaultValue: import("./props").SliderValue;
        direction: "horizontal" | "vertical";
        max: number;
        step: number;
        min: number;
        showTooltip: boolean;
        showTicks: boolean;
        showInput: boolean;
    }, true, {}, {}, {
        SliderButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            direction: {
                type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            formatTooltip: {
                type: FunctionConstructor;
            };
            value: (StringConstructor | NumberConstructor)[];
            tooltipPlacement: {
                type: StringConstructor;
            };
            showTooltip: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            prefixCls: string;
            cls: import("vue").ComputedRef<string[]>;
            tooltipContent: import("vue").ComputedRef<any>;
            mergedTooltipPosition: import("vue").ComputedRef<"top" | "right">;
            open: import("vue").ComputedRef<boolean | undefined>;
            handleMouseDown: (e: MouseEvent | TouchEvent) => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("moving" | "movestart" | "moveend")[], "moving" | "movestart" | "moveend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            direction: {
                type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            formatTooltip: {
                type: FunctionConstructor;
            };
            value: (StringConstructor | NumberConstructor)[];
            tooltipPlacement: {
                type: StringConstructor;
            };
            showTooltip: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onMoving?: ((...args: any[]) => any) | undefined;
            onMovestart?: ((...args: any[]) => any) | undefined;
            onMoveend?: ((...args: any[]) => any) | undefined;
        }>, {
            disabled: boolean;
            direction: "horizontal" | "vertical";
            showTooltip: boolean;
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
        SliderDots: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<Array<{
                    key: number;
                    content: string;
                    isActive: boolean;
                }>>;
                required: true;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            direction: {
                type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
                default: string;
            };
        }>, {
            prefixCls: string;
            getStyle: (value: number) => import("vue").CSSProperties;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<Array<{
                    key: number;
                    content: string;
                    isActive: boolean;
                }>>;
                required: true;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            direction: {
                type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
                default: string;
            };
        }>> & Readonly<{}>, {
            direction: "horizontal" | "vertical";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        SliderMarks: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<Array<{
                    key: number;
                    content: string;
                }>>;
                required: true;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            direction: {
                type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
                default: string;
            };
        }>, {
            prefixCls: string;
            getStyle: (value: number) => import("vue").CSSProperties;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<Array<{
                    key: number;
                    content: string;
                }>>;
                required: true;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            direction: {
                type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
                default: string;
            };
        }>> & Readonly<{}>, {
            direction: "horizontal" | "vertical";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        SliderTicks: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            value: {
                type: import("vue").PropType<[number, number]>;
                required: true;
            };
            step: {
                type: NumberConstructor;
                required: true;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            direction: {
                type: import("vue").PropType<import("..").Direction>;
                default: string;
            };
        }>, {
            prefixCls: string;
            steps: import("vue").ComputedRef<{
                key: number;
                isActive: boolean;
            }[]>;
            getStyle: (value: number) => import("vue").CSSProperties;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            value: {
                type: import("vue").PropType<[number, number]>;
                required: true;
            };
            step: {
                type: NumberConstructor;
                required: true;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            direction: {
                type: import("vue").PropType<import("..").Direction>;
                default: string;
            };
        }>> & Readonly<{}>, {
            direction: "horizontal" | "vertical";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        SliderInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: ArrayConstructor;
                required: true;
            };
            min: {
                type: NumberConstructor;
            };
            max: {
                type: NumberConstructor;
            };
            step: {
                type: NumberConstructor;
            };
            disabled: {
                type: BooleanConstructor;
            };
            range: {
                type: BooleanConstructor;
            };
        }>, {
            prefixCls: string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("startChange" | "endChange")[], "startChange" | "endChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: ArrayConstructor;
                required: true;
            };
            min: {
                type: NumberConstructor;
            };
            max: {
                type: NumberConstructor;
            };
            step: {
                type: NumberConstructor;
            };
            disabled: {
                type: BooleanConstructor;
            };
            range: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{
            onStartChange?: ((...args: any[]) => any) | undefined;
            onEndChange?: ((...args: any[]) => any) | undefined;
        }>, {
            disabled: boolean;
            range: boolean;
        }, {}, {
            InputNumber: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    modelValue: NumberConstructor;
                    defaultValue: NumberConstructor;
                    mode: {
                        type: import("vue").PropType<import("..").InputNumberMode>;
                        default: string;
                        validator: (value: unknown) => value is import("..").InputNumberMode;
                    };
                    precision: {
                        type: NumberConstructor;
                        validator: (value: unknown) => boolean;
                    };
                    step: {
                        type: NumberConstructor;
                        default: number;
                        validator: (value: unknown) => boolean;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    error: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    max: {
                        type: NumberConstructor;
                        default: number;
                    };
                    min: {
                        type: NumberConstructor;
                        default: number;
                    };
                    formatter: import("vue").PropType<import("..").InputNumberFormatter>;
                    parser: import("vue").PropType<import("..").InputNumberParser>;
                    placeholder: StringConstructor;
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        validator: (value: unknown) => value is import("..").ComponentSize;
                    };
                    clearable: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    modelEvent: {
                        type: import("vue").PropType<import("..").InputNumberModelEvent>;
                        default: string;
                        validator: (value: unknown) => value is import("..").InputNumberModelEvent;
                    };
                    readonly: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    inputAttrs: import("vue").PropType<Record<string, unknown>>;
                }>> & Readonly<{
                    onFocus?: ((ev: FocusEvent) => any) | undefined;
                    onClear?: ((ev: Event) => any) | undefined;
                    onBlur?: ((ev: FocusEvent) => any) | undefined;
                    onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
                    onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
                    onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
                    "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
                }>, {
                    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                    render: () => import("vue/jsx-runtime").JSX.Element;
                }, {}, {}, {
                    focus(): void;
                    blur(): void;
                }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    "update:modelValue": (value: number | undefined) => true;
                    change: (value: number | undefined, ev: Event) => true;
                    focus: (ev: FocusEvent) => true;
                    blur: (ev: FocusEvent) => true;
                    clear: (ev: Event) => true;
                    input: (value: number | undefined, inputValue: string, ev: Event) => true;
                    keydown: (ev: KeyboardEvent) => true;
                }, import("vue").PublicProps, {
                    error: boolean;
                    readonly: boolean;
                    mode: "input" | "button" | "embed";
                    disabled: boolean;
                    clearable: boolean;
                    max: number;
                    step: number;
                    min: number;
                    modelEvent: "change" | "input";
                }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    modelValue: NumberConstructor;
                    defaultValue: NumberConstructor;
                    mode: {
                        type: import("vue").PropType<import("..").InputNumberMode>;
                        default: string;
                        validator: (value: unknown) => value is import("..").InputNumberMode;
                    };
                    precision: {
                        type: NumberConstructor;
                        validator: (value: unknown) => boolean;
                    };
                    step: {
                        type: NumberConstructor;
                        default: number;
                        validator: (value: unknown) => boolean;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    error: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    max: {
                        type: NumberConstructor;
                        default: number;
                    };
                    min: {
                        type: NumberConstructor;
                        default: number;
                    };
                    formatter: import("vue").PropType<import("..").InputNumberFormatter>;
                    parser: import("vue").PropType<import("..").InputNumberParser>;
                    placeholder: StringConstructor;
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        validator: (value: unknown) => value is import("..").ComponentSize;
                    };
                    clearable: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    modelEvent: {
                        type: import("vue").PropType<import("..").InputNumberModelEvent>;
                        default: string;
                        validator: (value: unknown) => value is import("..").InputNumberModelEvent;
                    };
                    readonly: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    inputAttrs: import("vue").PropType<Record<string, unknown>>;
                }>> & Readonly<{
                    onFocus?: ((ev: FocusEvent) => any) | undefined;
                    onClear?: ((ev: Event) => any) | undefined;
                    onBlur?: ((ev: FocusEvent) => any) | undefined;
                    onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
                    onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
                    onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
                    "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
                }>, {
                    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                    render: () => import("vue/jsx-runtime").JSX.Element;
                }, {}, {}, {
                    focus(): void;
                    blur(): void;
                }, {
                    error: boolean;
                    readonly: boolean;
                    mode: "input" | "button" | "embed";
                    disabled: boolean;
                    clearable: boolean;
                    max: number;
                    step: number;
                    min: number;
                    modelEvent: "change" | "input";
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                modelValue: NumberConstructor;
                defaultValue: NumberConstructor;
                mode: {
                    type: import("vue").PropType<import("..").InputNumberMode>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputNumberMode;
                };
                precision: {
                    type: NumberConstructor;
                    validator: (value: unknown) => boolean;
                };
                step: {
                    type: NumberConstructor;
                    default: number;
                    validator: (value: unknown) => boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                max: {
                    type: NumberConstructor;
                    default: number;
                };
                min: {
                    type: NumberConstructor;
                    default: number;
                };
                formatter: import("vue").PropType<import("..").InputNumberFormatter>;
                parser: import("vue").PropType<import("..").InputNumberParser>;
                placeholder: StringConstructor;
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modelEvent: {
                    type: import("vue").PropType<import("..").InputNumberModelEvent>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputNumberModelEvent;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
            }>> & Readonly<{
                onFocus?: ((ev: FocusEvent) => any) | undefined;
                onClear?: ((ev: Event) => any) | undefined;
                onBlur?: ((ev: FocusEvent) => any) | undefined;
                onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
                onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
                onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
            }>, {
                inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (value: number | undefined) => true;
                change: (value: number | undefined, ev: Event) => true;
                focus: (ev: FocusEvent) => true;
                blur: (ev: FocusEvent) => true;
                clear: (ev: Event) => true;
                input: (value: number | undefined, inputValue: string, ev: Event) => true;
                keydown: (ev: KeyboardEvent) => true;
            }, string, {
                error: boolean;
                readonly: boolean;
                mode: "input" | "button" | "embed";
                disabled: boolean;
                clearable: boolean;
                max: number;
                step: number;
                min: number;
                modelEvent: "change" | "input";
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
        modelValue: import("vue").PropType<import("./props").SliderValue>;
        defaultValue: {
            type: import("vue").PropType<import("./props").SliderValue>;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        marks: import("vue").PropType<Record<number, string>>;
        max: {
            type: NumberConstructor;
            default: number;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
            validator: (value: import("..").Direction) => boolean;
        };
        disabled: BooleanConstructor;
        showTicks: BooleanConstructor;
        showInput: BooleanConstructor;
        range: BooleanConstructor;
        formatTooltip: import("vue").PropType<import("./props").SliderTooltipFormatter>;
        showTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((value: number | [number, number]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number | [number, number]) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        trackCls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        trackRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
        computedValue: import("vue").ComputedRef<[number, number]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        markList: import("vue").ComputedRef<{
            key: number;
            content: string;
            isActive: boolean;
        }[]>;
        getBtnStyle: (value: number) => import("vue").CSSProperties;
        getBarStyle: ([start, end]: [number, number]) => import("vue").CSSProperties;
        handleClick: (e: MouseEvent) => void;
        handleMoveStart: () => void;
        handleEndMoving: (x: number, y: number) => void;
        handleMoveEnd: () => void;
        handleStartMoving: (x: number, y: number) => void;
        handleStartChange: (value?: number) => void;
        handleEndChange: (value?: number) => void;
    }, {}, {}, {}, {
        disabled: boolean;
        range: boolean;
        defaultValue: import("./props").SliderValue;
        direction: "horizontal" | "vertical";
        max: number;
        step: number;
        min: number;
        showTooltip: boolean;
        showTicks: boolean;
        showInput: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<import("./props").SliderValue>;
    defaultValue: {
        type: import("vue").PropType<import("./props").SliderValue>;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    marks: import("vue").PropType<Record<number, string>>;
    max: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: string;
        validator: (value: import("..").Direction) => boolean;
    };
    disabled: BooleanConstructor;
    showTicks: BooleanConstructor;
    showInput: BooleanConstructor;
    range: BooleanConstructor;
    formatTooltip: import("vue").PropType<import("./props").SliderTooltipFormatter>;
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((value: number | [number, number]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number | [number, number]) => any) | undefined;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    trackCls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    trackRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    computedValue: import("vue").ComputedRef<[number, number]>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    markList: import("vue").ComputedRef<{
        key: number;
        content: string;
        isActive: boolean;
    }[]>;
    getBtnStyle: (value: number) => import("vue").CSSProperties;
    getBarStyle: ([start, end]: [number, number]) => import("vue").CSSProperties;
    handleClick: (e: MouseEvent) => void;
    handleMoveStart: () => void;
    handleEndMoving: (x: number, y: number) => void;
    handleMoveEnd: () => void;
    handleStartMoving: (x: number, y: number) => void;
    handleStartChange: (value?: number) => void;
    handleEndChange: (value?: number) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: number | [number, number]) => true;
    change: (value: number | [number, number]) => true;
}, string, {
    disabled: boolean;
    range: boolean;
    defaultValue: import("./props").SliderValue;
    direction: "horizontal" | "vertical";
    max: number;
    step: number;
    min: number;
    showTooltip: boolean;
    showTicks: boolean;
    showInput: boolean;
}, {}, string, {}, {
    SliderButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        direction: {
            type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        formatTooltip: {
            type: FunctionConstructor;
        };
        value: (StringConstructor | NumberConstructor)[];
        tooltipPlacement: {
            type: StringConstructor;
        };
        showTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<string[]>;
        tooltipContent: import("vue").ComputedRef<any>;
        mergedTooltipPosition: import("vue").ComputedRef<"top" | "right">;
        open: import("vue").ComputedRef<boolean | undefined>;
        handleMouseDown: (e: MouseEvent | TouchEvent) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("moving" | "movestart" | "moveend")[], "moving" | "movestart" | "moveend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        direction: {
            type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        formatTooltip: {
            type: FunctionConstructor;
        };
        value: (StringConstructor | NumberConstructor)[];
        tooltipPlacement: {
            type: StringConstructor;
        };
        showTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onMoving?: ((...args: any[]) => any) | undefined;
        onMovestart?: ((...args: any[]) => any) | undefined;
        onMoveend?: ((...args: any[]) => any) | undefined;
    }>, {
        disabled: boolean;
        direction: "horizontal" | "vertical";
        showTooltip: boolean;
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
    SliderDots: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<Array<{
                key: number;
                content: string;
                isActive: boolean;
            }>>;
            required: true;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        direction: {
            type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
            default: string;
        };
    }>, {
        prefixCls: string;
        getStyle: (value: number) => import("vue").CSSProperties;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<Array<{
                key: number;
                content: string;
                isActive: boolean;
            }>>;
            required: true;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        direction: {
            type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
            default: string;
        };
    }>> & Readonly<{}>, {
        direction: "horizontal" | "vertical";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SliderMarks: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<Array<{
                key: number;
                content: string;
            }>>;
            required: true;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        direction: {
            type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
            default: string;
        };
    }>, {
        prefixCls: string;
        getStyle: (value: number) => import("vue").CSSProperties;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<Array<{
                key: number;
                content: string;
            }>>;
            required: true;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        direction: {
            type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
            default: string;
        };
    }>> & Readonly<{}>, {
        direction: "horizontal" | "vertical";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SliderTicks: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: import("vue").PropType<[number, number]>;
            required: true;
        };
        step: {
            type: NumberConstructor;
            required: true;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
        };
    }>, {
        prefixCls: string;
        steps: import("vue").ComputedRef<{
            key: number;
            isActive: boolean;
        }[]>;
        getStyle: (value: number) => import("vue").CSSProperties;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        value: {
            type: import("vue").PropType<[number, number]>;
            required: true;
        };
        step: {
            type: NumberConstructor;
            required: true;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
        };
    }>> & Readonly<{}>, {
        direction: "horizontal" | "vertical";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SliderInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: ArrayConstructor;
            required: true;
        };
        min: {
            type: NumberConstructor;
        };
        max: {
            type: NumberConstructor;
        };
        step: {
            type: NumberConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        range: {
            type: BooleanConstructor;
        };
    }>, {
        prefixCls: string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("startChange" | "endChange")[], "startChange" | "endChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: ArrayConstructor;
            required: true;
        };
        min: {
            type: NumberConstructor;
        };
        max: {
            type: NumberConstructor;
        };
        step: {
            type: NumberConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        range: {
            type: BooleanConstructor;
        };
    }>> & Readonly<{
        onStartChange?: ((...args: any[]) => any) | undefined;
        onEndChange?: ((...args: any[]) => any) | undefined;
    }>, {
        disabled: boolean;
        range: boolean;
    }, {}, {
        InputNumber: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                modelValue: NumberConstructor;
                defaultValue: NumberConstructor;
                mode: {
                    type: import("vue").PropType<import("..").InputNumberMode>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputNumberMode;
                };
                precision: {
                    type: NumberConstructor;
                    validator: (value: unknown) => boolean;
                };
                step: {
                    type: NumberConstructor;
                    default: number;
                    validator: (value: unknown) => boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                max: {
                    type: NumberConstructor;
                    default: number;
                };
                min: {
                    type: NumberConstructor;
                    default: number;
                };
                formatter: import("vue").PropType<import("..").InputNumberFormatter>;
                parser: import("vue").PropType<import("..").InputNumberParser>;
                placeholder: StringConstructor;
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modelEvent: {
                    type: import("vue").PropType<import("..").InputNumberModelEvent>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputNumberModelEvent;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
            }>> & Readonly<{
                onFocus?: ((ev: FocusEvent) => any) | undefined;
                onClear?: ((ev: Event) => any) | undefined;
                onBlur?: ((ev: FocusEvent) => any) | undefined;
                onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
                onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
                onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
            }>, {
                inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (value: number | undefined) => true;
                change: (value: number | undefined, ev: Event) => true;
                focus: (ev: FocusEvent) => true;
                blur: (ev: FocusEvent) => true;
                clear: (ev: Event) => true;
                input: (value: number | undefined, inputValue: string, ev: Event) => true;
                keydown: (ev: KeyboardEvent) => true;
            }, import("vue").PublicProps, {
                error: boolean;
                readonly: boolean;
                mode: "input" | "button" | "embed";
                disabled: boolean;
                clearable: boolean;
                max: number;
                step: number;
                min: number;
                modelEvent: "change" | "input";
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                modelValue: NumberConstructor;
                defaultValue: NumberConstructor;
                mode: {
                    type: import("vue").PropType<import("..").InputNumberMode>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputNumberMode;
                };
                precision: {
                    type: NumberConstructor;
                    validator: (value: unknown) => boolean;
                };
                step: {
                    type: NumberConstructor;
                    default: number;
                    validator: (value: unknown) => boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                max: {
                    type: NumberConstructor;
                    default: number;
                };
                min: {
                    type: NumberConstructor;
                    default: number;
                };
                formatter: import("vue").PropType<import("..").InputNumberFormatter>;
                parser: import("vue").PropType<import("..").InputNumberParser>;
                placeholder: StringConstructor;
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modelEvent: {
                    type: import("vue").PropType<import("..").InputNumberModelEvent>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputNumberModelEvent;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
            }>> & Readonly<{
                onFocus?: ((ev: FocusEvent) => any) | undefined;
                onClear?: ((ev: Event) => any) | undefined;
                onBlur?: ((ev: FocusEvent) => any) | undefined;
                onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
                onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
                onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
            }>, {
                inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, {
                error: boolean;
                readonly: boolean;
                mode: "input" | "button" | "embed";
                disabled: boolean;
                clearable: boolean;
                max: number;
                step: number;
                min: number;
                modelEvent: "change" | "input";
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: NumberConstructor;
            defaultValue: NumberConstructor;
            mode: {
                type: import("vue").PropType<import("..").InputNumberMode>;
                default: string;
                validator: (value: unknown) => value is import("..").InputNumberMode;
            };
            precision: {
                type: NumberConstructor;
                validator: (value: unknown) => boolean;
            };
            step: {
                type: NumberConstructor;
                default: number;
                validator: (value: unknown) => boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            max: {
                type: NumberConstructor;
                default: number;
            };
            min: {
                type: NumberConstructor;
                default: number;
            };
            formatter: import("vue").PropType<import("..").InputNumberFormatter>;
            parser: import("vue").PropType<import("..").InputNumberParser>;
            placeholder: StringConstructor;
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelEvent: {
                type: import("vue").PropType<import("..").InputNumberModelEvent>;
                default: string;
                validator: (value: unknown) => value is import("..").InputNumberModelEvent;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
        }>> & Readonly<{
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onClear?: ((ev: Event) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
            onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
            onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
        }>, {
            inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: number | undefined) => true;
            change: (value: number | undefined, ev: Event) => true;
            focus: (ev: FocusEvent) => true;
            blur: (ev: FocusEvent) => true;
            clear: (ev: Event) => true;
            input: (value: number | undefined, inputValue: string, ev: Event) => true;
            keydown: (ev: KeyboardEvent) => true;
        }, string, {
            error: boolean;
            readonly: boolean;
            mode: "input" | "button" | "embed";
            disabled: boolean;
            clearable: boolean;
            max: number;
            step: number;
            min: number;
            modelEvent: "change" | "input";
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type SliderInstance = InstanceType<typeof _Slider>;
export type { SliderProps, SliderTooltipFormatter, SliderValue } from './props';
export { sliderProps };
export { Slider };
export declare const _SliderComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: import("vue").PropType<import("./props").SliderValue>;
        defaultValue: {
            type: import("vue").PropType<import("./props").SliderValue>;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        marks: import("vue").PropType<Record<number, string>>;
        max: {
            type: NumberConstructor;
            default: number;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
            validator: (value: import("..").Direction) => boolean;
        };
        disabled: BooleanConstructor;
        showTicks: BooleanConstructor;
        showInput: BooleanConstructor;
        range: BooleanConstructor;
        formatTooltip: import("vue").PropType<import("./props").SliderTooltipFormatter>;
        showTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((value: number | [number, number]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number | [number, number]) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        trackCls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        trackRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
        computedValue: import("vue").ComputedRef<[number, number]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        markList: import("vue").ComputedRef<{
            key: number;
            content: string;
            isActive: boolean;
        }[]>;
        getBtnStyle: (value: number) => import("vue").CSSProperties;
        getBarStyle: ([start, end]: [number, number]) => import("vue").CSSProperties;
        handleClick: (e: MouseEvent) => void;
        handleMoveStart: () => void;
        handleEndMoving: (x: number, y: number) => void;
        handleMoveEnd: () => void;
        handleStartMoving: (x: number, y: number) => void;
        handleStartChange: (value?: number) => void;
        handleEndChange: (value?: number) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: number | [number, number]) => true;
        change: (value: number | [number, number]) => true;
    }, import("vue").PublicProps, {
        disabled: boolean;
        range: boolean;
        defaultValue: import("./props").SliderValue;
        direction: "horizontal" | "vertical";
        max: number;
        step: number;
        min: number;
        showTooltip: boolean;
        showTicks: boolean;
        showInput: boolean;
    }, true, {}, {}, {
        SliderButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            direction: {
                type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            formatTooltip: {
                type: FunctionConstructor;
            };
            value: (StringConstructor | NumberConstructor)[];
            tooltipPlacement: {
                type: StringConstructor;
            };
            showTooltip: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            prefixCls: string;
            cls: import("vue").ComputedRef<string[]>;
            tooltipContent: import("vue").ComputedRef<any>;
            mergedTooltipPosition: import("vue").ComputedRef<"top" | "right">;
            open: import("vue").ComputedRef<boolean | undefined>;
            handleMouseDown: (e: MouseEvent | TouchEvent) => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("moving" | "movestart" | "moveend")[], "moving" | "movestart" | "moveend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            direction: {
                type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            formatTooltip: {
                type: FunctionConstructor;
            };
            value: (StringConstructor | NumberConstructor)[];
            tooltipPlacement: {
                type: StringConstructor;
            };
            showTooltip: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onMoving?: ((...args: any[]) => any) | undefined;
            onMovestart?: ((...args: any[]) => any) | undefined;
            onMoveend?: ((...args: any[]) => any) | undefined;
        }>, {
            disabled: boolean;
            direction: "horizontal" | "vertical";
            showTooltip: boolean;
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
        SliderDots: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<Array<{
                    key: number;
                    content: string;
                    isActive: boolean;
                }>>;
                required: true;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            direction: {
                type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
                default: string;
            };
        }>, {
            prefixCls: string;
            getStyle: (value: number) => import("vue").CSSProperties;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<Array<{
                    key: number;
                    content: string;
                    isActive: boolean;
                }>>;
                required: true;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            direction: {
                type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
                default: string;
            };
        }>> & Readonly<{}>, {
            direction: "horizontal" | "vertical";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        SliderMarks: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<Array<{
                    key: number;
                    content: string;
                }>>;
                required: true;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            direction: {
                type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
                default: string;
            };
        }>, {
            prefixCls: string;
            getStyle: (value: number) => import("vue").CSSProperties;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<Array<{
                    key: number;
                    content: string;
                }>>;
                required: true;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            direction: {
                type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
                default: string;
            };
        }>> & Readonly<{}>, {
            direction: "horizontal" | "vertical";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        SliderTicks: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            value: {
                type: import("vue").PropType<[number, number]>;
                required: true;
            };
            step: {
                type: NumberConstructor;
                required: true;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            direction: {
                type: import("vue").PropType<import("..").Direction>;
                default: string;
            };
        }>, {
            prefixCls: string;
            steps: import("vue").ComputedRef<{
                key: number;
                isActive: boolean;
            }[]>;
            getStyle: (value: number) => import("vue").CSSProperties;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            value: {
                type: import("vue").PropType<[number, number]>;
                required: true;
            };
            step: {
                type: NumberConstructor;
                required: true;
            };
            min: {
                type: NumberConstructor;
                required: true;
            };
            max: {
                type: NumberConstructor;
                required: true;
            };
            direction: {
                type: import("vue").PropType<import("..").Direction>;
                default: string;
            };
        }>> & Readonly<{}>, {
            direction: "horizontal" | "vertical";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        SliderInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: ArrayConstructor;
                required: true;
            };
            min: {
                type: NumberConstructor;
            };
            max: {
                type: NumberConstructor;
            };
            step: {
                type: NumberConstructor;
            };
            disabled: {
                type: BooleanConstructor;
            };
            range: {
                type: BooleanConstructor;
            };
        }>, {
            prefixCls: string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("startChange" | "endChange")[], "startChange" | "endChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: ArrayConstructor;
                required: true;
            };
            min: {
                type: NumberConstructor;
            };
            max: {
                type: NumberConstructor;
            };
            step: {
                type: NumberConstructor;
            };
            disabled: {
                type: BooleanConstructor;
            };
            range: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{
            onStartChange?: ((...args: any[]) => any) | undefined;
            onEndChange?: ((...args: any[]) => any) | undefined;
        }>, {
            disabled: boolean;
            range: boolean;
        }, {}, {
            InputNumber: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    modelValue: NumberConstructor;
                    defaultValue: NumberConstructor;
                    mode: {
                        type: import("vue").PropType<import("..").InputNumberMode>;
                        default: string;
                        validator: (value: unknown) => value is import("..").InputNumberMode;
                    };
                    precision: {
                        type: NumberConstructor;
                        validator: (value: unknown) => boolean;
                    };
                    step: {
                        type: NumberConstructor;
                        default: number;
                        validator: (value: unknown) => boolean;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    error: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    max: {
                        type: NumberConstructor;
                        default: number;
                    };
                    min: {
                        type: NumberConstructor;
                        default: number;
                    };
                    formatter: import("vue").PropType<import("..").InputNumberFormatter>;
                    parser: import("vue").PropType<import("..").InputNumberParser>;
                    placeholder: StringConstructor;
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        validator: (value: unknown) => value is import("..").ComponentSize;
                    };
                    clearable: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    modelEvent: {
                        type: import("vue").PropType<import("..").InputNumberModelEvent>;
                        default: string;
                        validator: (value: unknown) => value is import("..").InputNumberModelEvent;
                    };
                    readonly: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    inputAttrs: import("vue").PropType<Record<string, unknown>>;
                }>> & Readonly<{
                    onFocus?: ((ev: FocusEvent) => any) | undefined;
                    onClear?: ((ev: Event) => any) | undefined;
                    onBlur?: ((ev: FocusEvent) => any) | undefined;
                    onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
                    onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
                    onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
                    "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
                }>, {
                    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                    render: () => import("vue/jsx-runtime").JSX.Element;
                }, {}, {}, {
                    focus(): void;
                    blur(): void;
                }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    "update:modelValue": (value: number | undefined) => true;
                    change: (value: number | undefined, ev: Event) => true;
                    focus: (ev: FocusEvent) => true;
                    blur: (ev: FocusEvent) => true;
                    clear: (ev: Event) => true;
                    input: (value: number | undefined, inputValue: string, ev: Event) => true;
                    keydown: (ev: KeyboardEvent) => true;
                }, import("vue").PublicProps, {
                    error: boolean;
                    readonly: boolean;
                    mode: "input" | "button" | "embed";
                    disabled: boolean;
                    clearable: boolean;
                    max: number;
                    step: number;
                    min: number;
                    modelEvent: "change" | "input";
                }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    modelValue: NumberConstructor;
                    defaultValue: NumberConstructor;
                    mode: {
                        type: import("vue").PropType<import("..").InputNumberMode>;
                        default: string;
                        validator: (value: unknown) => value is import("..").InputNumberMode;
                    };
                    precision: {
                        type: NumberConstructor;
                        validator: (value: unknown) => boolean;
                    };
                    step: {
                        type: NumberConstructor;
                        default: number;
                        validator: (value: unknown) => boolean;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    error: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    max: {
                        type: NumberConstructor;
                        default: number;
                    };
                    min: {
                        type: NumberConstructor;
                        default: number;
                    };
                    formatter: import("vue").PropType<import("..").InputNumberFormatter>;
                    parser: import("vue").PropType<import("..").InputNumberParser>;
                    placeholder: StringConstructor;
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        validator: (value: unknown) => value is import("..").ComponentSize;
                    };
                    clearable: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    modelEvent: {
                        type: import("vue").PropType<import("..").InputNumberModelEvent>;
                        default: string;
                        validator: (value: unknown) => value is import("..").InputNumberModelEvent;
                    };
                    readonly: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    inputAttrs: import("vue").PropType<Record<string, unknown>>;
                }>> & Readonly<{
                    onFocus?: ((ev: FocusEvent) => any) | undefined;
                    onClear?: ((ev: Event) => any) | undefined;
                    onBlur?: ((ev: FocusEvent) => any) | undefined;
                    onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
                    onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
                    onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
                    "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
                }>, {
                    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                    render: () => import("vue/jsx-runtime").JSX.Element;
                }, {}, {}, {
                    focus(): void;
                    blur(): void;
                }, {
                    error: boolean;
                    readonly: boolean;
                    mode: "input" | "button" | "embed";
                    disabled: boolean;
                    clearable: boolean;
                    max: number;
                    step: number;
                    min: number;
                    modelEvent: "change" | "input";
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                modelValue: NumberConstructor;
                defaultValue: NumberConstructor;
                mode: {
                    type: import("vue").PropType<import("..").InputNumberMode>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputNumberMode;
                };
                precision: {
                    type: NumberConstructor;
                    validator: (value: unknown) => boolean;
                };
                step: {
                    type: NumberConstructor;
                    default: number;
                    validator: (value: unknown) => boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                max: {
                    type: NumberConstructor;
                    default: number;
                };
                min: {
                    type: NumberConstructor;
                    default: number;
                };
                formatter: import("vue").PropType<import("..").InputNumberFormatter>;
                parser: import("vue").PropType<import("..").InputNumberParser>;
                placeholder: StringConstructor;
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modelEvent: {
                    type: import("vue").PropType<import("..").InputNumberModelEvent>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputNumberModelEvent;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
            }>> & Readonly<{
                onFocus?: ((ev: FocusEvent) => any) | undefined;
                onClear?: ((ev: Event) => any) | undefined;
                onBlur?: ((ev: FocusEvent) => any) | undefined;
                onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
                onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
                onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
            }>, {
                inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (value: number | undefined) => true;
                change: (value: number | undefined, ev: Event) => true;
                focus: (ev: FocusEvent) => true;
                blur: (ev: FocusEvent) => true;
                clear: (ev: Event) => true;
                input: (value: number | undefined, inputValue: string, ev: Event) => true;
                keydown: (ev: KeyboardEvent) => true;
            }, string, {
                error: boolean;
                readonly: boolean;
                mode: "input" | "button" | "embed";
                disabled: boolean;
                clearable: boolean;
                max: number;
                step: number;
                min: number;
                modelEvent: "change" | "input";
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
        modelValue: import("vue").PropType<import("./props").SliderValue>;
        defaultValue: {
            type: import("vue").PropType<import("./props").SliderValue>;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        min: {
            type: NumberConstructor;
            default: number;
        };
        marks: import("vue").PropType<Record<number, string>>;
        max: {
            type: NumberConstructor;
            default: number;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
            validator: (value: import("..").Direction) => boolean;
        };
        disabled: BooleanConstructor;
        showTicks: BooleanConstructor;
        showInput: BooleanConstructor;
        range: BooleanConstructor;
        formatTooltip: import("vue").PropType<import("./props").SliderTooltipFormatter>;
        showTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((value: number | [number, number]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number | [number, number]) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        trackCls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        trackRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
        computedValue: import("vue").ComputedRef<[number, number]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        markList: import("vue").ComputedRef<{
            key: number;
            content: string;
            isActive: boolean;
        }[]>;
        getBtnStyle: (value: number) => import("vue").CSSProperties;
        getBarStyle: ([start, end]: [number, number]) => import("vue").CSSProperties;
        handleClick: (e: MouseEvent) => void;
        handleMoveStart: () => void;
        handleEndMoving: (x: number, y: number) => void;
        handleMoveEnd: () => void;
        handleStartMoving: (x: number, y: number) => void;
        handleStartChange: (value?: number) => void;
        handleEndChange: (value?: number) => void;
    }, {}, {}, {}, {
        disabled: boolean;
        range: boolean;
        defaultValue: import("./props").SliderValue;
        direction: "horizontal" | "vertical";
        max: number;
        step: number;
        min: number;
        showTooltip: boolean;
        showTicks: boolean;
        showInput: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<import("./props").SliderValue>;
    defaultValue: {
        type: import("vue").PropType<import("./props").SliderValue>;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    marks: import("vue").PropType<Record<number, string>>;
    max: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: string;
        validator: (value: import("..").Direction) => boolean;
    };
    disabled: BooleanConstructor;
    showTicks: BooleanConstructor;
    showInput: BooleanConstructor;
    range: BooleanConstructor;
    formatTooltip: import("vue").PropType<import("./props").SliderTooltipFormatter>;
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((value: number | [number, number]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number | [number, number]) => any) | undefined;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    trackCls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    trackRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    computedValue: import("vue").ComputedRef<[number, number]>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    markList: import("vue").ComputedRef<{
        key: number;
        content: string;
        isActive: boolean;
    }[]>;
    getBtnStyle: (value: number) => import("vue").CSSProperties;
    getBarStyle: ([start, end]: [number, number]) => import("vue").CSSProperties;
    handleClick: (e: MouseEvent) => void;
    handleMoveStart: () => void;
    handleEndMoving: (x: number, y: number) => void;
    handleMoveEnd: () => void;
    handleStartMoving: (x: number, y: number) => void;
    handleStartChange: (value?: number) => void;
    handleEndChange: (value?: number) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: number | [number, number]) => true;
    change: (value: number | [number, number]) => true;
}, string, {
    disabled: boolean;
    range: boolean;
    defaultValue: import("./props").SliderValue;
    direction: "horizontal" | "vertical";
    max: number;
    step: number;
    min: number;
    showTooltip: boolean;
    showTicks: boolean;
    showInput: boolean;
}, {}, string, {}, {
    SliderButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        direction: {
            type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        formatTooltip: {
            type: FunctionConstructor;
        };
        value: (StringConstructor | NumberConstructor)[];
        tooltipPlacement: {
            type: StringConstructor;
        };
        showTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<string[]>;
        tooltipContent: import("vue").ComputedRef<any>;
        mergedTooltipPosition: import("vue").ComputedRef<"top" | "right">;
        open: import("vue").ComputedRef<boolean | undefined>;
        handleMouseDown: (e: MouseEvent | TouchEvent) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("moving" | "movestart" | "moveend")[], "moving" | "movestart" | "moveend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        direction: {
            type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        formatTooltip: {
            type: FunctionConstructor;
        };
        value: (StringConstructor | NumberConstructor)[];
        tooltipPlacement: {
            type: StringConstructor;
        };
        showTooltip: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onMoving?: ((...args: any[]) => any) | undefined;
        onMovestart?: ((...args: any[]) => any) | undefined;
        onMoveend?: ((...args: any[]) => any) | undefined;
    }>, {
        disabled: boolean;
        direction: "horizontal" | "vertical";
        showTooltip: boolean;
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
    SliderDots: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<Array<{
                key: number;
                content: string;
                isActive: boolean;
            }>>;
            required: true;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        direction: {
            type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
            default: string;
        };
    }>, {
        prefixCls: string;
        getStyle: (value: number) => import("vue").CSSProperties;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<Array<{
                key: number;
                content: string;
                isActive: boolean;
            }>>;
            required: true;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        direction: {
            type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
            default: string;
        };
    }>> & Readonly<{}>, {
        direction: "horizontal" | "vertical";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SliderMarks: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<Array<{
                key: number;
                content: string;
            }>>;
            required: true;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        direction: {
            type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
            default: string;
        };
    }>, {
        prefixCls: string;
        getStyle: (value: number) => import("vue").CSSProperties;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<Array<{
                key: number;
                content: string;
            }>>;
            required: true;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        direction: {
            type: import("vue").PropType<typeof import("../_utils/constant").DIRECTIONS[number]>;
            default: string;
        };
    }>> & Readonly<{}>, {
        direction: "horizontal" | "vertical";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SliderTicks: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: import("vue").PropType<[number, number]>;
            required: true;
        };
        step: {
            type: NumberConstructor;
            required: true;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
        };
    }>, {
        prefixCls: string;
        steps: import("vue").ComputedRef<{
            key: number;
            isActive: boolean;
        }[]>;
        getStyle: (value: number) => import("vue").CSSProperties;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        value: {
            type: import("vue").PropType<[number, number]>;
            required: true;
        };
        step: {
            type: NumberConstructor;
            required: true;
        };
        min: {
            type: NumberConstructor;
            required: true;
        };
        max: {
            type: NumberConstructor;
            required: true;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
        };
    }>> & Readonly<{}>, {
        direction: "horizontal" | "vertical";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SliderInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: ArrayConstructor;
            required: true;
        };
        min: {
            type: NumberConstructor;
        };
        max: {
            type: NumberConstructor;
        };
        step: {
            type: NumberConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        range: {
            type: BooleanConstructor;
        };
    }>, {
        prefixCls: string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("startChange" | "endChange")[], "startChange" | "endChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: ArrayConstructor;
            required: true;
        };
        min: {
            type: NumberConstructor;
        };
        max: {
            type: NumberConstructor;
        };
        step: {
            type: NumberConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        range: {
            type: BooleanConstructor;
        };
    }>> & Readonly<{
        onStartChange?: ((...args: any[]) => any) | undefined;
        onEndChange?: ((...args: any[]) => any) | undefined;
    }>, {
        disabled: boolean;
        range: boolean;
    }, {}, {
        InputNumber: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                modelValue: NumberConstructor;
                defaultValue: NumberConstructor;
                mode: {
                    type: import("vue").PropType<import("..").InputNumberMode>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputNumberMode;
                };
                precision: {
                    type: NumberConstructor;
                    validator: (value: unknown) => boolean;
                };
                step: {
                    type: NumberConstructor;
                    default: number;
                    validator: (value: unknown) => boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                max: {
                    type: NumberConstructor;
                    default: number;
                };
                min: {
                    type: NumberConstructor;
                    default: number;
                };
                formatter: import("vue").PropType<import("..").InputNumberFormatter>;
                parser: import("vue").PropType<import("..").InputNumberParser>;
                placeholder: StringConstructor;
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modelEvent: {
                    type: import("vue").PropType<import("..").InputNumberModelEvent>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputNumberModelEvent;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
            }>> & Readonly<{
                onFocus?: ((ev: FocusEvent) => any) | undefined;
                onClear?: ((ev: Event) => any) | undefined;
                onBlur?: ((ev: FocusEvent) => any) | undefined;
                onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
                onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
                onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
            }>, {
                inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (value: number | undefined) => true;
                change: (value: number | undefined, ev: Event) => true;
                focus: (ev: FocusEvent) => true;
                blur: (ev: FocusEvent) => true;
                clear: (ev: Event) => true;
                input: (value: number | undefined, inputValue: string, ev: Event) => true;
                keydown: (ev: KeyboardEvent) => true;
            }, import("vue").PublicProps, {
                error: boolean;
                readonly: boolean;
                mode: "input" | "button" | "embed";
                disabled: boolean;
                clearable: boolean;
                max: number;
                step: number;
                min: number;
                modelEvent: "change" | "input";
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                modelValue: NumberConstructor;
                defaultValue: NumberConstructor;
                mode: {
                    type: import("vue").PropType<import("..").InputNumberMode>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputNumberMode;
                };
                precision: {
                    type: NumberConstructor;
                    validator: (value: unknown) => boolean;
                };
                step: {
                    type: NumberConstructor;
                    default: number;
                    validator: (value: unknown) => boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                max: {
                    type: NumberConstructor;
                    default: number;
                };
                min: {
                    type: NumberConstructor;
                    default: number;
                };
                formatter: import("vue").PropType<import("..").InputNumberFormatter>;
                parser: import("vue").PropType<import("..").InputNumberParser>;
                placeholder: StringConstructor;
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modelEvent: {
                    type: import("vue").PropType<import("..").InputNumberModelEvent>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputNumberModelEvent;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
            }>> & Readonly<{
                onFocus?: ((ev: FocusEvent) => any) | undefined;
                onClear?: ((ev: Event) => any) | undefined;
                onBlur?: ((ev: FocusEvent) => any) | undefined;
                onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
                onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
                onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
            }>, {
                inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, {
                error: boolean;
                readonly: boolean;
                mode: "input" | "button" | "embed";
                disabled: boolean;
                clearable: boolean;
                max: number;
                step: number;
                min: number;
                modelEvent: "change" | "input";
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: NumberConstructor;
            defaultValue: NumberConstructor;
            mode: {
                type: import("vue").PropType<import("..").InputNumberMode>;
                default: string;
                validator: (value: unknown) => value is import("..").InputNumberMode;
            };
            precision: {
                type: NumberConstructor;
                validator: (value: unknown) => boolean;
            };
            step: {
                type: NumberConstructor;
                default: number;
                validator: (value: unknown) => boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            max: {
                type: NumberConstructor;
                default: number;
            };
            min: {
                type: NumberConstructor;
                default: number;
            };
            formatter: import("vue").PropType<import("..").InputNumberFormatter>;
            parser: import("vue").PropType<import("..").InputNumberParser>;
            placeholder: StringConstructor;
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelEvent: {
                type: import("vue").PropType<import("..").InputNumberModelEvent>;
                default: string;
                validator: (value: unknown) => value is import("..").InputNumberModelEvent;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
        }>> & Readonly<{
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onClear?: ((ev: Event) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onChange?: ((value: number | undefined, ev: Event) => any) | undefined;
            onInput?: ((value: number | undefined, inputValue: string, ev: Event) => any) | undefined;
            onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
        }>, {
            inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: number | undefined) => true;
            change: (value: number | undefined, ev: Event) => true;
            focus: (ev: FocusEvent) => true;
            blur: (ev: FocusEvent) => true;
            clear: (ev: Event) => true;
            input: (value: number | undefined, inputValue: string, ev: Event) => true;
            keydown: (ev: KeyboardEvent) => true;
        }, string, {
            error: boolean;
            readonly: boolean;
            mode: "input" | "button" | "embed";
            disabled: boolean;
            clearable: boolean;
            max: number;
            step: number;
            min: number;
            modelEvent: "change" | "input";
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default Slider;

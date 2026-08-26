import ImagePreview from './preview.vue';
import ImagePreviewGroup from './preview-group.vue';
import type { ImagePreviewOptions, UserImagePreviewOptions } from './types.unified';
declare function previewImage(options: UserImagePreviewOptions): void;
declare namespace previewImage {
    var close: () => void;
    var setDefaultOptions: (options: ImagePreviewOptions) => void;
    var resetDefaultOptions: () => void;
    var Component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        renderToBody: {
            type: BooleanConstructor;
            default: boolean;
        };
        src: {
            type: StringConstructor;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        maskClosable: {
            type: BooleanConstructor;
            default: undefined;
        };
        closable: {
            type: BooleanConstructor;
            default: undefined;
        };
        actionsLayout: {
            type: import("vue").PropType<string[]>;
            default: undefined;
        };
        popupContainer: {
            type: import("vue").PropType<HTMLElement | string>;
        };
        inGroup: {
            type: BooleanConstructor;
            default: boolean;
        };
        groupArrowProps: {
            type: ObjectConstructor;
            default: () => {};
        };
        escToClose: {
            type: BooleanConstructor;
            default: undefined;
        };
        wheelZoom: {
            type: BooleanConstructor;
            default: boolean;
        };
        keyboard: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultScale: {
            type: NumberConstructor;
            default: number;
        };
        zoomRate: {
            type: NumberConstructor;
            default: number;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
    }>, {
        prefixCls: string;
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        container: import("vue").ComputedRef<HTMLElement | undefined>;
        wrapperStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        scale: import("vue").Ref<number, number>;
        translate: import("vue").Ref<number[], number[]>;
        rotate: import("vue").Ref<number, number>;
        moving: import("vue").Ref<boolean, boolean>;
        mergedVisible: import("vue").ComputedRef<boolean>;
        isLoading: import("vue").ComputedRef<boolean>;
        isLoaded: import("vue").ComputedRef<boolean>;
        scaleValueVisible: import("vue").Ref<boolean, boolean>;
        refWrapper: import("vue").Ref<any, any>;
        refImage: import("vue").Ref<any, any>;
        closable: import("vue").ComputedRef<boolean>;
        maskClosable: import("vue").ComputedRef<boolean>;
        actionsLayout: import("vue").ComputedRef<string[]>;
        inGroup: import("vue").Ref<boolean, boolean>;
        groupArrowProps: import("vue").Ref<Record<string, any>, Record<string, any>>;
        renderToBody: import("vue").Ref<boolean, boolean>;
        onWheel: {
            (...args: any[]): void;
            cancel(): void;
        };
        onMaskClick: (e: MouseEvent) => void;
        onCloseClick: () => void;
        onImgLoad(): void;
        onImgError(): void;
        actions: import("vue").ComputedRef<({
            key: string;
            name: string;
            content: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            onClick: () => void;
            disabled?: undefined;
        } | {
            key: string;
            name: string;
            content: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            onClick: () => void;
            disabled: boolean;
        })[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:open" | "openChange")[], "close" | "update:open" | "openChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        renderToBody: {
            type: BooleanConstructor;
            default: boolean;
        };
        src: {
            type: StringConstructor;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        maskClosable: {
            type: BooleanConstructor;
            default: undefined;
        };
        closable: {
            type: BooleanConstructor;
            default: undefined;
        };
        actionsLayout: {
            type: import("vue").PropType<string[]>;
            default: undefined;
        };
        popupContainer: {
            type: import("vue").PropType<HTMLElement | string>;
        };
        inGroup: {
            type: BooleanConstructor;
            default: boolean;
        };
        groupArrowProps: {
            type: ObjectConstructor;
            default: () => {};
        };
        escToClose: {
            type: BooleanConstructor;
            default: undefined;
        };
        wheelZoom: {
            type: BooleanConstructor;
            default: boolean;
        };
        keyboard: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultScale: {
            type: NumberConstructor;
            default: number;
        };
        zoomRate: {
            type: NumberConstructor;
            default: number;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
    }>> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
        "onUpdate:open"?: ((...args: any[]) => any) | undefined;
        onOpenChange?: ((...args: any[]) => any) | undefined;
    }>, {
        closable: boolean;
        open: boolean;
        defaultOpen: boolean;
        renderToBody: boolean;
        escToClose: boolean;
        keyboard: boolean;
        maskClosable: boolean;
        actionsLayout: string[];
        wheelZoom: boolean;
        defaultScale: number;
        zoomRate: number;
        groupArrowProps: Record<string, any>;
        inGroup: boolean;
    }, {}, {
        PreviewArrow: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            onPrev: {
                type: FunctionConstructor;
            };
            onNext: {
                type: FunctionConstructor;
            };
        }>, {
            prefixCls: string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            onPrev: {
                type: FunctionConstructor;
            };
            onNext: {
                type: FunctionConstructor;
            };
        }>> & Readonly<{}>, {}, {}, {
            IconLeft: {
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
            };
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
            };
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        PreviewToolbar: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            actions: {
                type: import("vue").PropType<import("./preview-toolbar.vue").ActionType[]>;
                default: () => never[];
            };
            actionsLayout: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
        }>, {
            prefixCls: string;
            resultActions: import("vue").ComputedRef<import("./preview-toolbar.vue").ActionType[]>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            actions: {
                type: import("vue").PropType<import("./preview-toolbar.vue").ActionType[]>;
                default: () => never[];
            };
            actionsLayout: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
        }>> & Readonly<{}>, {
            actionsLayout: string[];
            actions: import("./preview-toolbar.vue").ActionType[];
        }, {}, {
            RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                renderFunc: {
                    type: import("vue").PropType<import("../_components/render-function.js").RenderFunc>;
                    required: true;
                };
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                renderFunc: {
                    type: import("vue").PropType<import("../_components/render-function.js").RenderFunc>;
                    required: true;
                };
            }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            PreviewAction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                name: {
                    type: StringConstructor;
                };
                disabled: {
                    type: BooleanConstructor;
                };
            }>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                name: {
                    type: StringConstructor;
                };
                disabled: {
                    type: BooleanConstructor;
                };
            }>> & Readonly<{}>, {
                disabled: boolean;
            }, {}, {
                Tooltip: import("../_utils/global-config.js").CedarComponentWithInstall<{
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                        open: {
                            type: BooleanConstructor;
                            default: undefined;
                        };
                        defaultOpen: BooleanConstructor;
                        content: StringConstructor;
                        placement: {
                            type: import("vue").PropType<import("../index.js").TriggerPosition>;
                            default: string;
                            validator: (value: import("../index.js").TriggerPosition) => boolean;
                        };
                        xs: BooleanConstructor;
                        backgroundColor: StringConstructor;
                        contentClass: import("vue").PropType<import("../_utils/types.js").ClassName>;
                        contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                        arrowClass: import("vue").PropType<import("../_utils/types.js").ClassName>;
                        arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                        popupContainer: import("vue").PropType<string | HTMLElement>;
                    }>> & Readonly<{
                        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                        onOpenChange?: ((visible: boolean) => any) | undefined;
                    }>, {
                        prefixCls: string;
                        computedOpen: import("vue").ComputedRef<boolean>;
                        contentCls: import("vue").ComputedRef<(import("../_utils/types.js").ClassName | undefined)[]>;
                        computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                        arrowCls: import("vue").ComputedRef<(import("../_utils/types.js").ClassName | undefined)[]>;
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
                        Trigger: import("../_utils/global-config.js").CedarComponentWithInstall<{
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
                                    type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                                    default: string;
                                };
                                placement: {
                                    type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                                    type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
                                    type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                                    default: string;
                                };
                                placement: {
                                    type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                                    type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
                                type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                                default: string;
                            };
                            placement: {
                                type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                                type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
                            type: import("vue").PropType<import("../index.js").TriggerPosition>;
                            default: string;
                            validator: (value: import("../index.js").TriggerPosition) => boolean;
                        };
                        xs: BooleanConstructor;
                        backgroundColor: StringConstructor;
                        contentClass: import("vue").PropType<import("../_utils/types.js").ClassName>;
                        contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                        arrowClass: import("vue").PropType<import("../_utils/types.js").ClassName>;
                        arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                        popupContainer: import("vue").PropType<string | HTMLElement>;
                    }>> & Readonly<{
                        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                        onOpenChange?: ((visible: boolean) => any) | undefined;
                    }>, {
                        prefixCls: string;
                        computedOpen: import("vue").ComputedRef<boolean>;
                        contentCls: import("vue").ComputedRef<(import("../_utils/types.js").ClassName | undefined)[]>;
                        computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                        arrowCls: import("vue").ComputedRef<(import("../_utils/types.js").ClassName | undefined)[]>;
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
                        type: import("vue").PropType<import("../index.js").TriggerPosition>;
                        default: string;
                        validator: (value: import("../index.js").TriggerPosition) => boolean;
                    };
                    xs: BooleanConstructor;
                    backgroundColor: StringConstructor;
                    contentClass: import("vue").PropType<import("../_utils/types.js").ClassName>;
                    contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                    arrowClass: import("vue").PropType<import("../_utils/types.js").ClassName>;
                    arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                    popupContainer: import("vue").PropType<string | HTMLElement>;
                }>> & Readonly<{
                    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                    onOpenChange?: ((visible: boolean) => any) | undefined;
                }>, {
                    prefixCls: string;
                    computedOpen: import("vue").ComputedRef<boolean>;
                    contentCls: import("vue").ComputedRef<(import("../_utils/types.js").ClassName | undefined)[]>;
                    computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                    arrowCls: import("vue").ComputedRef<(import("../_utils/types.js").ClassName | undefined)[]>;
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
                    Trigger: import("../_utils/global-config.js").CedarComponentWithInstall<{
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
                                type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                                default: string;
                            };
                            placement: {
                                type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                                type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
                                type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                                default: string;
                            };
                            placement: {
                                type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                                type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
                            type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                            default: string;
                        };
                        placement: {
                            type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                            type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
            install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
        };
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
            install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
        };
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    var Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        renderToBody: {
            type: BooleanConstructor;
            default: boolean;
        };
        images: {
            type: import("vue").PropType<string[]>;
        };
        current: {
            type: NumberConstructor;
        };
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: undefined;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        maskClosable: {
            type: BooleanConstructor;
            default: undefined;
        };
        closable: {
            type: BooleanConstructor;
            default: undefined;
        };
        actionsLayout: {
            type: import("vue").PropType<string[]>;
            default: undefined;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        previewProps: {
            type: import("vue").PropType<Partial<import("./types.unified").ImagePreviewProps>>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
    }>, {
        mergedOpen: import("vue").ComputedRef<boolean>;
        mergedPreviewProps: import("vue").ComputedRef<Partial<import("./types.unified").ImagePreviewProps>>;
        currentUrl: import("vue").ComputedRef<string | undefined>;
        prevIndex: import("vue").ComputedRef<number | undefined>;
        nextIndex: import("vue").ComputedRef<number | undefined>;
        onClose(): void;
        groupArrowProps: {
            onPrev: (() => void) | undefined;
            onNext: (() => void) | undefined;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:open" | "openChange" | "update:current")[], "change" | "update:open" | "openChange" | "update:current", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        renderToBody: {
            type: BooleanConstructor;
            default: boolean;
        };
        images: {
            type: import("vue").PropType<string[]>;
        };
        current: {
            type: NumberConstructor;
        };
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: undefined;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        maskClosable: {
            type: BooleanConstructor;
            default: undefined;
        };
        closable: {
            type: BooleanConstructor;
            default: undefined;
        };
        actionsLayout: {
            type: import("vue").PropType<string[]>;
            default: undefined;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        previewProps: {
            type: import("vue").PropType<Partial<import("./types.unified").ImagePreviewProps>>;
        };
        onOpenChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:open"?: ((...args: any[]) => any) | undefined;
        onOpenChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:current"?: ((...args: any[]) => any) | undefined;
    }>, {
        closable: boolean;
        open: boolean;
        defaultOpen: boolean;
        renderToBody: boolean;
        defaultCurrent: number;
        loop: boolean;
        maskClosable: boolean;
        actionsLayout: string[];
    }, {}, {
        ImagePreview: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            renderToBody: {
                type: BooleanConstructor;
                default: boolean;
            };
            src: {
                type: StringConstructor;
            };
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskClosable: {
                type: BooleanConstructor;
                default: undefined;
            };
            closable: {
                type: BooleanConstructor;
                default: undefined;
            };
            actionsLayout: {
                type: import("vue").PropType<string[]>;
                default: undefined;
            };
            popupContainer: {
                type: import("vue").PropType<HTMLElement | string>;
            };
            inGroup: {
                type: BooleanConstructor;
                default: boolean;
            };
            groupArrowProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            escToClose: {
                type: BooleanConstructor;
                default: undefined;
            };
            wheelZoom: {
                type: BooleanConstructor;
                default: boolean;
            };
            keyboard: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultScale: {
                type: NumberConstructor;
                default: number;
            };
            zoomRate: {
                type: NumberConstructor;
                default: number;
            };
            onOpenChange: {
                type: import("vue").PropType<(open: boolean) => void>;
            };
        }>, {
            prefixCls: string;
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            container: import("vue").ComputedRef<HTMLElement | undefined>;
            wrapperStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
            scale: import("vue").Ref<number, number>;
            translate: import("vue").Ref<number[], number[]>;
            rotate: import("vue").Ref<number, number>;
            moving: import("vue").Ref<boolean, boolean>;
            mergedVisible: import("vue").ComputedRef<boolean>;
            isLoading: import("vue").ComputedRef<boolean>;
            isLoaded: import("vue").ComputedRef<boolean>;
            scaleValueVisible: import("vue").Ref<boolean, boolean>;
            refWrapper: import("vue").Ref<any, any>;
            refImage: import("vue").Ref<any, any>;
            closable: import("vue").ComputedRef<boolean>;
            maskClosable: import("vue").ComputedRef<boolean>;
            actionsLayout: import("vue").ComputedRef<string[]>;
            inGroup: import("vue").Ref<boolean, boolean>;
            groupArrowProps: import("vue").Ref<Record<string, any>, Record<string, any>>;
            renderToBody: import("vue").Ref<boolean, boolean>;
            onWheel: {
                (...args: any[]): void;
                cancel(): void;
            };
            onMaskClick: (e: MouseEvent) => void;
            onCloseClick: () => void;
            onImgLoad(): void;
            onImgError(): void;
            actions: import("vue").ComputedRef<({
                key: string;
                name: string;
                content: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
                onClick: () => void;
                disabled?: undefined;
            } | {
                key: string;
                name: string;
                content: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
                onClick: () => void;
                disabled: boolean;
            })[]>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:open" | "openChange")[], "close" | "update:open" | "openChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            renderToBody: {
                type: BooleanConstructor;
                default: boolean;
            };
            src: {
                type: StringConstructor;
            };
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskClosable: {
                type: BooleanConstructor;
                default: undefined;
            };
            closable: {
                type: BooleanConstructor;
                default: undefined;
            };
            actionsLayout: {
                type: import("vue").PropType<string[]>;
                default: undefined;
            };
            popupContainer: {
                type: import("vue").PropType<HTMLElement | string>;
            };
            inGroup: {
                type: BooleanConstructor;
                default: boolean;
            };
            groupArrowProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            escToClose: {
                type: BooleanConstructor;
                default: undefined;
            };
            wheelZoom: {
                type: BooleanConstructor;
                default: boolean;
            };
            keyboard: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultScale: {
                type: NumberConstructor;
                default: number;
            };
            zoomRate: {
                type: NumberConstructor;
                default: number;
            };
            onOpenChange: {
                type: import("vue").PropType<(open: boolean) => void>;
            };
        }>> & Readonly<{
            onClose?: ((...args: any[]) => any) | undefined;
            "onUpdate:open"?: ((...args: any[]) => any) | undefined;
            onOpenChange?: ((...args: any[]) => any) | undefined;
        }>, {
            closable: boolean;
            open: boolean;
            defaultOpen: boolean;
            renderToBody: boolean;
            escToClose: boolean;
            keyboard: boolean;
            maskClosable: boolean;
            actionsLayout: string[];
            wheelZoom: boolean;
            defaultScale: number;
            zoomRate: number;
            groupArrowProps: Record<string, any>;
            inGroup: boolean;
        }, {}, {
            PreviewArrow: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                onPrev: {
                    type: FunctionConstructor;
                };
                onNext: {
                    type: FunctionConstructor;
                };
            }>, {
                prefixCls: string;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                onPrev: {
                    type: FunctionConstructor;
                };
                onNext: {
                    type: FunctionConstructor;
                };
            }>> & Readonly<{}>, {}, {}, {
                IconLeft: {
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
                };
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
                };
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            PreviewToolbar: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                actions: {
                    type: import("vue").PropType<import("./preview-toolbar.vue").ActionType[]>;
                    default: () => never[];
                };
                actionsLayout: {
                    type: import("vue").PropType<string[]>;
                    default: () => never[];
                };
            }>, {
                prefixCls: string;
                resultActions: import("vue").ComputedRef<import("./preview-toolbar.vue").ActionType[]>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                actions: {
                    type: import("vue").PropType<import("./preview-toolbar.vue").ActionType[]>;
                    default: () => never[];
                };
                actionsLayout: {
                    type: import("vue").PropType<string[]>;
                    default: () => never[];
                };
            }>> & Readonly<{}>, {
                actionsLayout: string[];
                actions: import("./preview-toolbar.vue").ActionType[];
            }, {}, {
                RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function.js").RenderFunc>;
                        required: true;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function.js").RenderFunc>;
                        required: true;
                    };
                }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                PreviewAction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    name: {
                        type: StringConstructor;
                    };
                    disabled: {
                        type: BooleanConstructor;
                    };
                }>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    name: {
                        type: StringConstructor;
                    };
                    disabled: {
                        type: BooleanConstructor;
                    };
                }>> & Readonly<{}>, {
                    disabled: boolean;
                }, {}, {
                    Tooltip: import("../_utils/global-config.js").CedarComponentWithInstall<{
                        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                            open: {
                                type: BooleanConstructor;
                                default: undefined;
                            };
                            defaultOpen: BooleanConstructor;
                            content: StringConstructor;
                            placement: {
                                type: import("vue").PropType<import("../index.js").TriggerPosition>;
                                default: string;
                                validator: (value: import("../index.js").TriggerPosition) => boolean;
                            };
                            xs: BooleanConstructor;
                            backgroundColor: StringConstructor;
                            contentClass: import("vue").PropType<import("../_utils/types.js").ClassName>;
                            contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                            arrowClass: import("vue").PropType<import("../_utils/types.js").ClassName>;
                            arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                            popupContainer: import("vue").PropType<string | HTMLElement>;
                        }>> & Readonly<{
                            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                            onOpenChange?: ((visible: boolean) => any) | undefined;
                        }>, {
                            prefixCls: string;
                            computedOpen: import("vue").ComputedRef<boolean>;
                            contentCls: import("vue").ComputedRef<(import("../_utils/types.js").ClassName | undefined)[]>;
                            computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                            arrowCls: import("vue").ComputedRef<(import("../_utils/types.js").ClassName | undefined)[]>;
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
                            Trigger: import("../_utils/global-config.js").CedarComponentWithInstall<{
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
                                        type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                                        default: string;
                                    };
                                    placement: {
                                        type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                                        type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
                                        type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                                        default: string;
                                    };
                                    placement: {
                                        type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                                        type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
                                    type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                                    default: string;
                                };
                                placement: {
                                    type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                                    type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
                                type: import("vue").PropType<import("../index.js").TriggerPosition>;
                                default: string;
                                validator: (value: import("../index.js").TriggerPosition) => boolean;
                            };
                            xs: BooleanConstructor;
                            backgroundColor: StringConstructor;
                            contentClass: import("vue").PropType<import("../_utils/types.js").ClassName>;
                            contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                            arrowClass: import("vue").PropType<import("../_utils/types.js").ClassName>;
                            arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                            popupContainer: import("vue").PropType<string | HTMLElement>;
                        }>> & Readonly<{
                            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                            onOpenChange?: ((visible: boolean) => any) | undefined;
                        }>, {
                            prefixCls: string;
                            computedOpen: import("vue").ComputedRef<boolean>;
                            contentCls: import("vue").ComputedRef<(import("../_utils/types.js").ClassName | undefined)[]>;
                            computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                            arrowCls: import("vue").ComputedRef<(import("../_utils/types.js").ClassName | undefined)[]>;
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
                            type: import("vue").PropType<import("../index.js").TriggerPosition>;
                            default: string;
                            validator: (value: import("../index.js").TriggerPosition) => boolean;
                        };
                        xs: BooleanConstructor;
                        backgroundColor: StringConstructor;
                        contentClass: import("vue").PropType<import("../_utils/types.js").ClassName>;
                        contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                        arrowClass: import("vue").PropType<import("../_utils/types.js").ClassName>;
                        arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                        popupContainer: import("vue").PropType<string | HTMLElement>;
                    }>> & Readonly<{
                        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                        onOpenChange?: ((visible: boolean) => any) | undefined;
                    }>, {
                        prefixCls: string;
                        computedOpen: import("vue").ComputedRef<boolean>;
                        contentCls: import("vue").ComputedRef<(import("../_utils/types.js").ClassName | undefined)[]>;
                        computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                        arrowCls: import("vue").ComputedRef<(import("../_utils/types.js").ClassName | undefined)[]>;
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
                        Trigger: import("../_utils/global-config.js").CedarComponentWithInstall<{
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
                                    type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                                    default: string;
                                };
                                placement: {
                                    type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                                    type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
                                    type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                                    default: string;
                                };
                                placement: {
                                    type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                                    type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
                                type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                                default: string;
                            };
                            placement: {
                                type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                                type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
            };
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
            };
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}
export { previewImage, ImagePreview, ImagePreviewGroup };
export type { ImagePreviewOptions, UserImagePreviewOptions };
export default previewImage;
export { previewImage as ImagePreviewFn };

import { PropType, StyleValue, CSSProperties } from 'vue';
import type { ImagePreviewProps } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    renderToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    src: {
        type: StringConstructor;
    };
    width: {
        type: PropType<string | number>;
    };
    height: {
        type: PropType<string | number>;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
    fit: {
        type: PropType<"contain" | "cover" | "fill" | "none" | "scale-down">;
    };
    alt: {
        type: StringConstructor;
    };
    hideFooter: {
        type: PropType<boolean | "never">;
        default: boolean;
    };
    footerPosition: {
        type: PropType<"inner" | "outer">;
        default: string;
    };
    showLoader: {
        type: BooleanConstructor;
        default: boolean;
    };
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewOpen: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultPreviewOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewProps: {
        type: PropType<ImagePreviewProps>;
    };
    footerClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
}>, {
    t: (key: string, ...args: any[]) => string;
    refImg: import("vue").Ref<any, any>;
    prefixCls: string;
    wrapperClassNames: import("vue").ComputedRef<import("vue").ClassValue[]>;
    wrapperStyles: import("vue").ComputedRef<StyleValue[]>;
    showFooter: import("vue").ComputedRef<boolean>;
    imgProps: import("vue").ComputedRef<Omit<import("vue").Attrs, "style" | "class">>;
    imgStyle: import("vue").ComputedRef<{
        width: string | undefined;
        height: string | undefined;
    }>;
    isLoaded: import("vue").ComputedRef<boolean>;
    isError: import("vue").ComputedRef<boolean>;
    isLoading: import("vue").ComputedRef<boolean>;
    mergedPreviewOpen: import("vue").ComputedRef<boolean>;
    mergePreview: import("vue").ComputedRef<boolean>;
    onImgLoaded: () => void;
    onImgLoadError: () => void;
    onImgClick: () => void;
    onPreviewClose: () => void;
    fitStyle: import("vue").ComputedRef<CSSProperties>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("previewOpenChange" | "update:previewOpen")[], "previewOpenChange" | "update:previewOpen", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    renderToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    src: {
        type: StringConstructor;
    };
    width: {
        type: PropType<string | number>;
    };
    height: {
        type: PropType<string | number>;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
    fit: {
        type: PropType<"contain" | "cover" | "fill" | "none" | "scale-down">;
    };
    alt: {
        type: StringConstructor;
    };
    hideFooter: {
        type: PropType<boolean | "never">;
        default: boolean;
    };
    footerPosition: {
        type: PropType<"inner" | "outer">;
        default: string;
    };
    showLoader: {
        type: BooleanConstructor;
        default: boolean;
    };
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewOpen: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultPreviewOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewProps: {
        type: PropType<ImagePreviewProps>;
    };
    footerClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
}>> & Readonly<{
    onPreviewOpenChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:previewOpen"?: ((...args: any[]) => any) | undefined;
}>, {
    renderToBody: boolean;
    preview: boolean;
    hideFooter: boolean | "never";
    footerPosition: "inner" | "outer";
    showLoader: boolean;
    previewOpen: boolean;
    defaultPreviewOpen: boolean;
}, {}, {
    IconImageClose: {
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
    ImageFooter: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
        };
        description: {
            type: StringConstructor;
        };
    }>, {
        prefixCls: string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
        };
        description: {
            type: StringConstructor;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
            type: PropType<string[]>;
            default: undefined;
        };
        popupContainer: {
            type: PropType<HTMLElement | string>;
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
            type: PropType<(open: boolean) => void>;
        };
    }>, {
        prefixCls: string;
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        container: import("vue").ComputedRef<HTMLElement | undefined>;
        wrapperStyles: import("vue").ComputedRef<CSSProperties>;
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
            type: PropType<string[]>;
            default: undefined;
        };
        popupContainer: {
            type: PropType<HTMLElement | string>;
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
            type: PropType<(open: boolean) => void>;
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
            };
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        PreviewToolbar: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            actions: {
                type: PropType<import("./preview-toolbar.vue").ActionType[]>;
                default: () => never[];
            };
            actionsLayout: {
                type: PropType<string[]>;
                default: () => never[];
            };
        }>, {
            prefixCls: string;
            resultActions: import("vue").ComputedRef<import("./preview-toolbar.vue").ActionType[]>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            actions: {
                type: PropType<import("./preview-toolbar.vue").ActionType[]>;
                default: () => never[];
            };
            actionsLayout: {
                type: PropType<string[]>;
                default: () => never[];
            };
        }>> & Readonly<{}>, {
            actionsLayout: string[];
            actions: import("./preview-toolbar.vue").ActionType[];
        }, {}, {
            RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                renderFunc: {
                    type: PropType<import("../_components/render-function").RenderFunc>;
                    required: true;
                };
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                renderFunc: {
                    type: PropType<import("../_components/render-function").RenderFunc>;
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
                Tooltip: import("../_utils/global-config").CedarComponentWithInstall<{
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                        open: {
                            type: BooleanConstructor;
                            default: undefined;
                        };
                        defaultOpen: BooleanConstructor;
                        content: StringConstructor;
                        placement: {
                            type: PropType<import("..").TriggerPosition>;
                            default: string;
                            validator: (value: import("..").TriggerPosition) => boolean;
                        };
                        xs: BooleanConstructor;
                        backgroundColor: StringConstructor;
                        contentClass: PropType<import("../_utils/types").ClassName>;
                        contentStyle: PropType<CSSProperties>;
                        arrowClass: PropType<import("../_utils/types").ClassName>;
                        arrowStyle: PropType<CSSProperties>;
                        popupContainer: PropType<string | HTMLElement>;
                    }>> & Readonly<{
                        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                        onOpenChange?: ((visible: boolean) => any) | undefined;
                    }>, {
                        prefixCls: string;
                        computedOpen: import("vue").ComputedRef<boolean>;
                        contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                        computedContentStyle: import("vue").ComputedRef<CSSProperties | undefined>;
                        arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                        computedArrowStyle: import("vue").ComputedRef<CSSProperties | undefined>;
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
                                    type: PropType<CSSProperties>;
                                };
                                arrowClass: {
                                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                                };
                                arrowStyle: {
                                    type: PropType<CSSProperties>;
                                };
                                popupStyle: {
                                    type: PropType<CSSProperties>;
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
                                    type: PropType<CSSProperties>;
                                };
                                arrowClass: {
                                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                                };
                                arrowStyle: {
                                    type: PropType<CSSProperties>;
                                };
                                popupStyle: {
                                    type: PropType<CSSProperties>;
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
                                type: PropType<CSSProperties>;
                            };
                            arrowClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            arrowStyle: {
                                type: PropType<CSSProperties>;
                            };
                            popupStyle: {
                                type: PropType<CSSProperties>;
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
                            type: PropType<import("..").TriggerPosition>;
                            default: string;
                            validator: (value: import("..").TriggerPosition) => boolean;
                        };
                        xs: BooleanConstructor;
                        backgroundColor: StringConstructor;
                        contentClass: PropType<import("../_utils/types").ClassName>;
                        contentStyle: PropType<CSSProperties>;
                        arrowClass: PropType<import("../_utils/types").ClassName>;
                        arrowStyle: PropType<CSSProperties>;
                        popupContainer: PropType<string | HTMLElement>;
                    }>> & Readonly<{
                        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                        onOpenChange?: ((visible: boolean) => any) | undefined;
                    }>, {
                        prefixCls: string;
                        computedOpen: import("vue").ComputedRef<boolean>;
                        contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                        computedContentStyle: import("vue").ComputedRef<CSSProperties | undefined>;
                        arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                        computedArrowStyle: import("vue").ComputedRef<CSSProperties | undefined>;
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
                        type: PropType<import("..").TriggerPosition>;
                        default: string;
                        validator: (value: import("..").TriggerPosition) => boolean;
                    };
                    xs: BooleanConstructor;
                    backgroundColor: StringConstructor;
                    contentClass: PropType<import("../_utils/types").ClassName>;
                    contentStyle: PropType<CSSProperties>;
                    arrowClass: PropType<import("../_utils/types").ClassName>;
                    arrowStyle: PropType<CSSProperties>;
                    popupContainer: PropType<string | HTMLElement>;
                }>> & Readonly<{
                    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                    onOpenChange?: ((visible: boolean) => any) | undefined;
                }>, {
                    prefixCls: string;
                    computedOpen: import("vue").ComputedRef<boolean>;
                    contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                    computedContentStyle: import("vue").ComputedRef<CSSProperties | undefined>;
                    arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                    computedArrowStyle: import("vue").ComputedRef<CSSProperties | undefined>;
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
                                type: PropType<CSSProperties>;
                            };
                            arrowClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            arrowStyle: {
                                type: PropType<CSSProperties>;
                            };
                            popupStyle: {
                                type: PropType<CSSProperties>;
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
                                type: PropType<CSSProperties>;
                            };
                            arrowClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            arrowStyle: {
                                type: PropType<CSSProperties>;
                            };
                            popupStyle: {
                                type: PropType<CSSProperties>;
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
                            type: PropType<CSSProperties>;
                        };
                        arrowClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        arrowStyle: {
                            type: PropType<CSSProperties>;
                        };
                        popupStyle: {
                            type: PropType<CSSProperties>;
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
            install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
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
            install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
        };
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

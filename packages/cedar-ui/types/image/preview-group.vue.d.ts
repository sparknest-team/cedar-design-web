import { PropType } from 'vue';
import type { ImagePreviewProps } from './types.unified';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    renderToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 图片列表（设置了本属性之后，将不再收集 a-image 子组件的图片信息）
     * @en Picture list (after setting this property, the picture information of a-image subcomponent will no longer be collected)
     */
    images: {
        type: PropType<string[]>;
    };
    /**
     * @zh 当前展示的图片的下标
     * @en The index of the currently displayed image
     * @vModel
     */
    current: {
        type: NumberConstructor;
    };
    /**
     * @zh 第一张展示的图片的下标
     * @en The index of the first image shown
     */
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 是否无限循环
     * @en Whether to loop infinitely
     */
    loop: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 是否可见，受控属性
     * @en Whether the preview is open
     * @vModel
     */
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 默认是否可见，非受控
     * @en Default open state
     */
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 点击 mask 是否触发关闭
     * @en Whether to close the modal when mask is clicked
     */
    maskClosable: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 是否显示关闭按钮
     * @en Whether to show close button
     */
    closable: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 控制条的布局
     * @en Layout of action list
     */
    actionsLayout: {
        type: PropType<string[]>;
        default: undefined;
    };
    /**
     * @zh 设置弹出框的挂载点，缺省值是 document.body
     * @en Set the mount point of the pop-up box, the default value is document.body
     */
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    /**
     * @zh 透传给 ImagePreview 的预览配置
     * @en Preview props passed to ImagePreview
     */
    previewProps: {
        type: PropType<Partial<ImagePreviewProps>>;
    };
    onOpenChange: {
        type: PropType<(open: boolean) => void>;
    };
}>, {
    mergedOpen: import("vue").ComputedRef<boolean>;
    mergedPreviewProps: import("vue").ComputedRef<Partial<ImagePreviewProps>>;
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
    /**
     * @zh 图片列表（设置了本属性之后，将不再收集 a-image 子组件的图片信息）
     * @en Picture list (after setting this property, the picture information of a-image subcomponent will no longer be collected)
     */
    images: {
        type: PropType<string[]>;
    };
    /**
     * @zh 当前展示的图片的下标
     * @en The index of the currently displayed image
     * @vModel
     */
    current: {
        type: NumberConstructor;
    };
    /**
     * @zh 第一张展示的图片的下标
     * @en The index of the first image shown
     */
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 是否无限循环
     * @en Whether to loop infinitely
     */
    loop: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 是否可见，受控属性
     * @en Whether the preview is open
     * @vModel
     */
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 默认是否可见，非受控
     * @en Default open state
     */
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 点击 mask 是否触发关闭
     * @en Whether to close the modal when mask is clicked
     */
    maskClosable: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 是否显示关闭按钮
     * @en Whether to show close button
     */
    closable: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 控制条的布局
     * @en Layout of action list
     */
    actionsLayout: {
        type: PropType<string[]>;
        default: undefined;
    };
    /**
     * @zh 设置弹出框的挂载点，缺省值是 document.body
     * @en Set the mount point of the pop-up box, the default value is document.body
     */
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    /**
     * @zh 透传给 ImagePreview 的预览配置
     * @en Preview props passed to ImagePreview
     */
    previewProps: {
        type: PropType<Partial<ImagePreviewProps>>;
    };
    onOpenChange: {
        type: PropType<(open: boolean) => void>;
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
                        contentStyle: PropType<import("vue").CSSProperties>;
                        arrowClass: PropType<import("../_utils/types").ClassName>;
                        arrowStyle: PropType<import("vue").CSSProperties>;
                        popupContainer: PropType<string | HTMLElement>;
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
                        contentStyle: PropType<import("vue").CSSProperties>;
                        arrowClass: PropType<import("../_utils/types").ClassName>;
                        arrowStyle: PropType<import("vue").CSSProperties>;
                        popupContainer: PropType<string | HTMLElement>;
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
                        type: PropType<import("..").TriggerPosition>;
                        default: string;
                        validator: (value: import("..").TriggerPosition) => boolean;
                    };
                    xs: BooleanConstructor;
                    backgroundColor: StringConstructor;
                    contentClass: PropType<import("../_utils/types").ClassName>;
                    contentStyle: PropType<import("vue").CSSProperties>;
                    arrowClass: PropType<import("../_utils/types").ClassName>;
                    arrowStyle: PropType<import("vue").CSSProperties>;
                    popupContainer: PropType<string | HTMLElement>;
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

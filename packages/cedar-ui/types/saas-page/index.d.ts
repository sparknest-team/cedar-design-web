import _SaasPage from './saas-page.vue';
import { saasPageProps } from './props';
export declare const SaasPage: import("../_utils/global-config").CedarComponentWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
}>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    offsetTop: number;
}, {}, {
    Layout: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            hasSider: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{}>, {
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: number | true;
            })[]>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            hasSider: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            hasSider: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{}>, {
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: number | true;
            })[]>;
        }, {}, {}, {}, {
            hasSider: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        hasSider: {
            type: BooleanConstructor;
        };
    }>> & Readonly<{}>, {
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: number | true;
        })[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        hasSider: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Header: import("vue").DefineComponent<{}, {
            classNames: string[];
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Content: import("vue").DefineComponent<{}, {
            classNames: string[];
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Footer: import("vue").DefineComponent<{}, {
            classNames: string[];
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Sider: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            theme: {
                type: import("vue").PropType<"dark" | "light">;
                default: string;
            };
            collapsed: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultCollapsed: {
                type: BooleanConstructor;
            };
            collapsible: {
                type: BooleanConstructor;
            };
            width: {
                type: NumberConstructor;
                default: number;
            };
            collapsedWidth: {
                type: NumberConstructor;
                default: number;
            };
            reverseArrow: {
                type: BooleanConstructor;
            };
            breakpoint: {
                type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
            };
            resizeDirections: {
                type: import("vue").PropType<Array<"left" | "right" | "top" | "bottom">>;
                default: undefined;
            };
            hideTrigger: {
                type: BooleanConstructor;
            };
        }>, {
            componentTag: import("vue").ComputedRef<"div" | "ResizeBox">;
            prefixCls: string;
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean | undefined;
            })[]>;
            triggerClassNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            localCollapsed: import("vue").ComputedRef<boolean>;
            siderWidth: import("vue").ComputedRef<string>;
            showTrigger: import("vue").ComputedRef<boolean>;
            toggleTrigger: () => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "update:collapsed" | "breakpoint")[], "collapse" | "update:collapsed" | "breakpoint", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            theme: {
                type: import("vue").PropType<"dark" | "light">;
                default: string;
            };
            collapsed: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultCollapsed: {
                type: BooleanConstructor;
            };
            collapsible: {
                type: BooleanConstructor;
            };
            width: {
                type: NumberConstructor;
                default: number;
            };
            collapsedWidth: {
                type: NumberConstructor;
                default: number;
            };
            reverseArrow: {
                type: BooleanConstructor;
            };
            breakpoint: {
                type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
            };
            resizeDirections: {
                type: import("vue").PropType<Array<"left" | "right" | "top" | "bottom">>;
                default: undefined;
            };
            hideTrigger: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{
            onCollapse?: ((...args: any[]) => any) | undefined;
            "onUpdate:collapsed"?: ((...args: any[]) => any) | undefined;
            onBreakpoint?: ((...args: any[]) => any) | undefined;
        }>, {
            theme: "light" | "dark";
            width: number;
            hideTrigger: boolean;
            collapsed: boolean;
            defaultCollapsed: boolean;
            collapsible: boolean;
            collapsedWidth: number;
            reverseArrow: boolean;
            resizeDirections: ("top" | "bottom" | "left" | "right")[];
        }, {}, {
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
            ResizeBox: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    width: {
                        type: NumberConstructor;
                    };
                    height: {
                        type: NumberConstructor;
                    };
                    component: {
                        type: StringConstructor;
                        default: string;
                    };
                    directions: {
                        type: import("vue").PropType<("left" | "right" | "top" | "bottom")[]>;
                        default: () => string[];
                    };
                }>> & Readonly<{
                    onMoving?: ((size: {
                        width: number;
                        height: number;
                    }, ev: MouseEvent) => any) | undefined;
                    "onUpdate:width"?: ((width: number) => any) | undefined;
                    "onUpdate:height"?: ((height: number) => any) | undefined;
                    onMovingStart?: ((ev: MouseEvent) => any) | undefined;
                    onMovingEnd?: ((ev: MouseEvent) => any) | undefined;
                }>, {
                    prefixCls: string;
                    classNames: import("vue").ComputedRef<string[]>;
                    styles: import("vue").ComputedRef<{
                        "padding-bottom"?: string | undefined;
                        "padding-left"?: string | undefined;
                        "padding-right"?: string | undefined;
                        "padding-top"?: string | undefined;
                        height?: string | undefined;
                        width?: string | undefined;
                    }>;
                    wrapperRef: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
                    onMoveStart: (direction: import("../resize-box/resize-box.vue").DirectionType, e: MouseEvent) => void;
                    isHorizontal: (direction: import("../resize-box/resize-box.vue").DirectionType) => boolean;
                    allowDirections: import("vue").ComputedRef<("top" | "bottom" | "left" | "right")[]>;
                    onTiggerResize: (direction: import("../resize-box/resize-box.vue").DirectionType, entry: ResizeObserverEntry) => void;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    'update:width': (width: number) => true;
                    'update:height': (height: number) => true;
                    movingStart: (ev: MouseEvent) => true;
                    moving: (size: {
                        width: number;
                        height: number;
                    }, ev: MouseEvent) => true;
                    movingEnd: (ev: MouseEvent) => true;
                }, import("vue").PublicProps, {
                    component: string;
                    directions: ("top" | "bottom" | "left" | "right")[];
                }, true, {}, {}, {
                    ResizeTrigger: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        prefixCls: {
                            type: StringConstructor;
                            required: true;
                        };
                        direction: {
                            type: import("vue").PropType<"horizontal" | "vertical">;
                            default: string;
                        };
                    }>, {
                        classNames: import("vue").ComputedRef<(string | {
                            [x: string]: boolean;
                        })[]>;
                        onResize: (entry: ResizeObserverEntry) => void;
                        isHorizontal: import("vue").ComputedRef<boolean>;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        prefixCls: {
                            type: StringConstructor;
                            required: true;
                        };
                        direction: {
                            type: import("vue").PropType<"horizontal" | "vertical">;
                            default: string;
                        };
                    }>> & Readonly<{
                        onResize?: ((...args: any[]) => any) | undefined;
                    }>, {
                        direction: "horizontal" | "vertical";
                    }, {}, {
                        ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
                            onResize?: ((...args: any[]) => any) | undefined;
                        }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                        IconDragDot: {
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
                        IconDragDotVertical: {
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
                } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    width: {
                        type: NumberConstructor;
                    };
                    height: {
                        type: NumberConstructor;
                    };
                    component: {
                        type: StringConstructor;
                        default: string;
                    };
                    directions: {
                        type: import("vue").PropType<("left" | "right" | "top" | "bottom")[]>;
                        default: () => string[];
                    };
                }>> & Readonly<{
                    onMoving?: ((size: {
                        width: number;
                        height: number;
                    }, ev: MouseEvent) => any) | undefined;
                    "onUpdate:width"?: ((width: number) => any) | undefined;
                    "onUpdate:height"?: ((height: number) => any) | undefined;
                    onMovingStart?: ((ev: MouseEvent) => any) | undefined;
                    onMovingEnd?: ((ev: MouseEvent) => any) | undefined;
                }>, {
                    prefixCls: string;
                    classNames: import("vue").ComputedRef<string[]>;
                    styles: import("vue").ComputedRef<{
                        "padding-bottom"?: string | undefined;
                        "padding-left"?: string | undefined;
                        "padding-right"?: string | undefined;
                        "padding-top"?: string | undefined;
                        height?: string | undefined;
                        width?: string | undefined;
                    }>;
                    wrapperRef: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
                    onMoveStart: (direction: import("../resize-box/resize-box.vue").DirectionType, e: MouseEvent) => void;
                    isHorizontal: (direction: import("../resize-box/resize-box.vue").DirectionType) => boolean;
                    allowDirections: import("vue").ComputedRef<("top" | "bottom" | "left" | "right")[]>;
                    onTiggerResize: (direction: import("../resize-box/resize-box.vue").DirectionType, entry: ResizeObserverEntry) => void;
                }, {}, {}, {}, {
                    component: string;
                    directions: ("top" | "bottom" | "left" | "right")[];
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                width: {
                    type: NumberConstructor;
                };
                height: {
                    type: NumberConstructor;
                };
                component: {
                    type: StringConstructor;
                    default: string;
                };
                directions: {
                    type: import("vue").PropType<("left" | "right" | "top" | "bottom")[]>;
                    default: () => string[];
                };
            }>> & Readonly<{
                onMoving?: ((size: {
                    width: number;
                    height: number;
                }, ev: MouseEvent) => any) | undefined;
                "onUpdate:width"?: ((width: number) => any) | undefined;
                "onUpdate:height"?: ((height: number) => any) | undefined;
                onMovingStart?: ((ev: MouseEvent) => any) | undefined;
                onMovingEnd?: ((ev: MouseEvent) => any) | undefined;
            }>, {
                prefixCls: string;
                classNames: import("vue").ComputedRef<string[]>;
                styles: import("vue").ComputedRef<{
                    "padding-bottom"?: string | undefined;
                    "padding-left"?: string | undefined;
                    "padding-right"?: string | undefined;
                    "padding-top"?: string | undefined;
                    height?: string | undefined;
                    width?: string | undefined;
                }>;
                wrapperRef: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
                onMoveStart: (direction: import("../resize-box/resize-box.vue").DirectionType, e: MouseEvent) => void;
                isHorizontal: (direction: import("../resize-box/resize-box.vue").DirectionType) => boolean;
                allowDirections: import("vue").ComputedRef<("top" | "bottom" | "left" | "right")[]>;
                onTiggerResize: (direction: import("../resize-box/resize-box.vue").DirectionType, entry: ResizeObserverEntry) => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:width': (width: number) => true;
                'update:height': (height: number) => true;
                movingStart: (ev: MouseEvent) => true;
                moving: (size: {
                    width: number;
                    height: number;
                }, ev: MouseEvent) => true;
                movingEnd: (ev: MouseEvent) => true;
            }, string, {
                component: string;
                directions: ("top" | "bottom" | "left" | "right")[];
            }, {}, string, {}, {
                ResizeTrigger: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    direction: {
                        type: import("vue").PropType<"horizontal" | "vertical">;
                        default: string;
                    };
                }>, {
                    classNames: import("vue").ComputedRef<(string | {
                        [x: string]: boolean;
                    })[]>;
                    onResize: (entry: ResizeObserverEntry) => void;
                    isHorizontal: import("vue").ComputedRef<boolean>;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    direction: {
                        type: import("vue").PropType<"horizontal" | "vertical">;
                        default: string;
                    };
                }>> & Readonly<{
                    onResize?: ((...args: any[]) => any) | undefined;
                }>, {
                    direction: "horizontal" | "vertical";
                }, {}, {
                    ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
                        onResize?: ((...args: any[]) => any) | undefined;
                    }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                    IconDragDot: {
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
                    IconDragDotVertical: {
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
            } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }>;
    LayoutHeader: import("vue").DefineComponent<{}, {
        classNames: string[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    LayoutContent: import("vue").DefineComponent<{}, {
        classNames: string[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Affix: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            offsetTop: {
                type: NumberConstructor;
                default: number;
            };
            offsetBottom: NumberConstructor;
            target: import("vue").PropType<import("../index.js").AffixTarget>;
            targetContainer: import("vue").PropType<import("../index.js").AffixTarget>;
            zIndex: {
                type: NumberConstructor;
                default: number;
            };
            disabled: BooleanConstructor;
            cssMode: BooleanConstructor;
        }>> & Readonly<{
            onChange?: ((fixed: boolean) => any) | undefined;
        }>, {
            wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            isFixed: import("vue").Ref<boolean, boolean>;
            disabled: import("vue").Ref<boolean, boolean>;
            cssMode: import("vue").Ref<boolean, boolean>;
            classNames: import("vue").ComputedRef<{
                [x: string]: boolean;
            }>;
            placeholderStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
            contentStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
            stickyStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
            updatePositionThrottle: {
                (...args: any[]): void;
                cancel(): void;
            };
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            change: (fixed: boolean) => true;
        }, import("vue").PublicProps, {
            offsetTop: number;
            zIndex: number;
            disabled: boolean;
            cssMode: boolean;
        }, true, {}, {}, {
            ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
                onResize?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            offsetTop: {
                type: NumberConstructor;
                default: number;
            };
            offsetBottom: NumberConstructor;
            target: import("vue").PropType<import("../index.js").AffixTarget>;
            targetContainer: import("vue").PropType<import("../index.js").AffixTarget>;
            zIndex: {
                type: NumberConstructor;
                default: number;
            };
            disabled: BooleanConstructor;
            cssMode: BooleanConstructor;
        }>> & Readonly<{
            onChange?: ((fixed: boolean) => any) | undefined;
        }>, {
            wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            isFixed: import("vue").Ref<boolean, boolean>;
            disabled: import("vue").Ref<boolean, boolean>;
            cssMode: import("vue").Ref<boolean, boolean>;
            classNames: import("vue").ComputedRef<{
                [x: string]: boolean;
            }>;
            placeholderStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
            contentStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
            stickyStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
            updatePositionThrottle: {
                (...args: any[]): void;
                cancel(): void;
            };
        }, {}, {}, {}, {
            offsetTop: number;
            zIndex: number;
            disabled: boolean;
            cssMode: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        offsetTop: {
            type: NumberConstructor;
            default: number;
        };
        offsetBottom: NumberConstructor;
        target: import("vue").PropType<import("../index.js").AffixTarget>;
        targetContainer: import("vue").PropType<import("../index.js").AffixTarget>;
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        disabled: BooleanConstructor;
        cssMode: BooleanConstructor;
    }>> & Readonly<{
        onChange?: ((fixed: boolean) => any) | undefined;
    }>, {
        wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        isFixed: import("vue").Ref<boolean, boolean>;
        disabled: import("vue").Ref<boolean, boolean>;
        cssMode: import("vue").Ref<boolean, boolean>;
        classNames: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        placeholderStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
        contentStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        stickyStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        updatePositionThrottle: {
            (...args: any[]): void;
            cancel(): void;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (fixed: boolean) => true;
    }, string, {
        offsetTop: number;
        zIndex: number;
        disabled: boolean;
        cssMode: boolean;
    }, {}, string, {}, {
        ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
            onResize?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export type SaasPageInstance = InstanceType<typeof _SaasPage>;
export declare const _SaasPageComponent: import("../_utils/global-config").CedarComponentWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
}>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    offsetTop: number;
}, {}, {
    Layout: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            hasSider: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{}>, {
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: number | true;
            })[]>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            hasSider: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            hasSider: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{}>, {
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: number | true;
            })[]>;
        }, {}, {}, {}, {
            hasSider: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        hasSider: {
            type: BooleanConstructor;
        };
    }>> & Readonly<{}>, {
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: number | true;
        })[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        hasSider: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Header: import("vue").DefineComponent<{}, {
            classNames: string[];
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Content: import("vue").DefineComponent<{}, {
            classNames: string[];
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Footer: import("vue").DefineComponent<{}, {
            classNames: string[];
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Sider: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            theme: {
                type: import("vue").PropType<"dark" | "light">;
                default: string;
            };
            collapsed: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultCollapsed: {
                type: BooleanConstructor;
            };
            collapsible: {
                type: BooleanConstructor;
            };
            width: {
                type: NumberConstructor;
                default: number;
            };
            collapsedWidth: {
                type: NumberConstructor;
                default: number;
            };
            reverseArrow: {
                type: BooleanConstructor;
            };
            breakpoint: {
                type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
            };
            resizeDirections: {
                type: import("vue").PropType<Array<"left" | "right" | "top" | "bottom">>;
                default: undefined;
            };
            hideTrigger: {
                type: BooleanConstructor;
            };
        }>, {
            componentTag: import("vue").ComputedRef<"div" | "ResizeBox">;
            prefixCls: string;
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean | undefined;
            })[]>;
            triggerClassNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            localCollapsed: import("vue").ComputedRef<boolean>;
            siderWidth: import("vue").ComputedRef<string>;
            showTrigger: import("vue").ComputedRef<boolean>;
            toggleTrigger: () => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "update:collapsed" | "breakpoint")[], "collapse" | "update:collapsed" | "breakpoint", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            theme: {
                type: import("vue").PropType<"dark" | "light">;
                default: string;
            };
            collapsed: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultCollapsed: {
                type: BooleanConstructor;
            };
            collapsible: {
                type: BooleanConstructor;
            };
            width: {
                type: NumberConstructor;
                default: number;
            };
            collapsedWidth: {
                type: NumberConstructor;
                default: number;
            };
            reverseArrow: {
                type: BooleanConstructor;
            };
            breakpoint: {
                type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
            };
            resizeDirections: {
                type: import("vue").PropType<Array<"left" | "right" | "top" | "bottom">>;
                default: undefined;
            };
            hideTrigger: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{
            onCollapse?: ((...args: any[]) => any) | undefined;
            "onUpdate:collapsed"?: ((...args: any[]) => any) | undefined;
            onBreakpoint?: ((...args: any[]) => any) | undefined;
        }>, {
            theme: "light" | "dark";
            width: number;
            hideTrigger: boolean;
            collapsed: boolean;
            defaultCollapsed: boolean;
            collapsible: boolean;
            collapsedWidth: number;
            reverseArrow: boolean;
            resizeDirections: ("top" | "bottom" | "left" | "right")[];
        }, {}, {
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
            ResizeBox: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    width: {
                        type: NumberConstructor;
                    };
                    height: {
                        type: NumberConstructor;
                    };
                    component: {
                        type: StringConstructor;
                        default: string;
                    };
                    directions: {
                        type: import("vue").PropType<("left" | "right" | "top" | "bottom")[]>;
                        default: () => string[];
                    };
                }>> & Readonly<{
                    onMoving?: ((size: {
                        width: number;
                        height: number;
                    }, ev: MouseEvent) => any) | undefined;
                    "onUpdate:width"?: ((width: number) => any) | undefined;
                    "onUpdate:height"?: ((height: number) => any) | undefined;
                    onMovingStart?: ((ev: MouseEvent) => any) | undefined;
                    onMovingEnd?: ((ev: MouseEvent) => any) | undefined;
                }>, {
                    prefixCls: string;
                    classNames: import("vue").ComputedRef<string[]>;
                    styles: import("vue").ComputedRef<{
                        "padding-bottom"?: string | undefined;
                        "padding-left"?: string | undefined;
                        "padding-right"?: string | undefined;
                        "padding-top"?: string | undefined;
                        height?: string | undefined;
                        width?: string | undefined;
                    }>;
                    wrapperRef: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
                    onMoveStart: (direction: import("../resize-box/resize-box.vue").DirectionType, e: MouseEvent) => void;
                    isHorizontal: (direction: import("../resize-box/resize-box.vue").DirectionType) => boolean;
                    allowDirections: import("vue").ComputedRef<("top" | "bottom" | "left" | "right")[]>;
                    onTiggerResize: (direction: import("../resize-box/resize-box.vue").DirectionType, entry: ResizeObserverEntry) => void;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    'update:width': (width: number) => true;
                    'update:height': (height: number) => true;
                    movingStart: (ev: MouseEvent) => true;
                    moving: (size: {
                        width: number;
                        height: number;
                    }, ev: MouseEvent) => true;
                    movingEnd: (ev: MouseEvent) => true;
                }, import("vue").PublicProps, {
                    component: string;
                    directions: ("top" | "bottom" | "left" | "right")[];
                }, true, {}, {}, {
                    ResizeTrigger: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        prefixCls: {
                            type: StringConstructor;
                            required: true;
                        };
                        direction: {
                            type: import("vue").PropType<"horizontal" | "vertical">;
                            default: string;
                        };
                    }>, {
                        classNames: import("vue").ComputedRef<(string | {
                            [x: string]: boolean;
                        })[]>;
                        onResize: (entry: ResizeObserverEntry) => void;
                        isHorizontal: import("vue").ComputedRef<boolean>;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        prefixCls: {
                            type: StringConstructor;
                            required: true;
                        };
                        direction: {
                            type: import("vue").PropType<"horizontal" | "vertical">;
                            default: string;
                        };
                    }>> & Readonly<{
                        onResize?: ((...args: any[]) => any) | undefined;
                    }>, {
                        direction: "horizontal" | "vertical";
                    }, {}, {
                        ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
                            onResize?: ((...args: any[]) => any) | undefined;
                        }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                        IconDragDot: {
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
                        IconDragDotVertical: {
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
                } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    width: {
                        type: NumberConstructor;
                    };
                    height: {
                        type: NumberConstructor;
                    };
                    component: {
                        type: StringConstructor;
                        default: string;
                    };
                    directions: {
                        type: import("vue").PropType<("left" | "right" | "top" | "bottom")[]>;
                        default: () => string[];
                    };
                }>> & Readonly<{
                    onMoving?: ((size: {
                        width: number;
                        height: number;
                    }, ev: MouseEvent) => any) | undefined;
                    "onUpdate:width"?: ((width: number) => any) | undefined;
                    "onUpdate:height"?: ((height: number) => any) | undefined;
                    onMovingStart?: ((ev: MouseEvent) => any) | undefined;
                    onMovingEnd?: ((ev: MouseEvent) => any) | undefined;
                }>, {
                    prefixCls: string;
                    classNames: import("vue").ComputedRef<string[]>;
                    styles: import("vue").ComputedRef<{
                        "padding-bottom"?: string | undefined;
                        "padding-left"?: string | undefined;
                        "padding-right"?: string | undefined;
                        "padding-top"?: string | undefined;
                        height?: string | undefined;
                        width?: string | undefined;
                    }>;
                    wrapperRef: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
                    onMoveStart: (direction: import("../resize-box/resize-box.vue").DirectionType, e: MouseEvent) => void;
                    isHorizontal: (direction: import("../resize-box/resize-box.vue").DirectionType) => boolean;
                    allowDirections: import("vue").ComputedRef<("top" | "bottom" | "left" | "right")[]>;
                    onTiggerResize: (direction: import("../resize-box/resize-box.vue").DirectionType, entry: ResizeObserverEntry) => void;
                }, {}, {}, {}, {
                    component: string;
                    directions: ("top" | "bottom" | "left" | "right")[];
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                width: {
                    type: NumberConstructor;
                };
                height: {
                    type: NumberConstructor;
                };
                component: {
                    type: StringConstructor;
                    default: string;
                };
                directions: {
                    type: import("vue").PropType<("left" | "right" | "top" | "bottom")[]>;
                    default: () => string[];
                };
            }>> & Readonly<{
                onMoving?: ((size: {
                    width: number;
                    height: number;
                }, ev: MouseEvent) => any) | undefined;
                "onUpdate:width"?: ((width: number) => any) | undefined;
                "onUpdate:height"?: ((height: number) => any) | undefined;
                onMovingStart?: ((ev: MouseEvent) => any) | undefined;
                onMovingEnd?: ((ev: MouseEvent) => any) | undefined;
            }>, {
                prefixCls: string;
                classNames: import("vue").ComputedRef<string[]>;
                styles: import("vue").ComputedRef<{
                    "padding-bottom"?: string | undefined;
                    "padding-left"?: string | undefined;
                    "padding-right"?: string | undefined;
                    "padding-top"?: string | undefined;
                    height?: string | undefined;
                    width?: string | undefined;
                }>;
                wrapperRef: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
                onMoveStart: (direction: import("../resize-box/resize-box.vue").DirectionType, e: MouseEvent) => void;
                isHorizontal: (direction: import("../resize-box/resize-box.vue").DirectionType) => boolean;
                allowDirections: import("vue").ComputedRef<("top" | "bottom" | "left" | "right")[]>;
                onTiggerResize: (direction: import("../resize-box/resize-box.vue").DirectionType, entry: ResizeObserverEntry) => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:width': (width: number) => true;
                'update:height': (height: number) => true;
                movingStart: (ev: MouseEvent) => true;
                moving: (size: {
                    width: number;
                    height: number;
                }, ev: MouseEvent) => true;
                movingEnd: (ev: MouseEvent) => true;
            }, string, {
                component: string;
                directions: ("top" | "bottom" | "left" | "right")[];
            }, {}, string, {}, {
                ResizeTrigger: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    direction: {
                        type: import("vue").PropType<"horizontal" | "vertical">;
                        default: string;
                    };
                }>, {
                    classNames: import("vue").ComputedRef<(string | {
                        [x: string]: boolean;
                    })[]>;
                    onResize: (entry: ResizeObserverEntry) => void;
                    isHorizontal: import("vue").ComputedRef<boolean>;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    direction: {
                        type: import("vue").PropType<"horizontal" | "vertical">;
                        default: string;
                    };
                }>> & Readonly<{
                    onResize?: ((...args: any[]) => any) | undefined;
                }>, {
                    direction: "horizontal" | "vertical";
                }, {}, {
                    ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
                        onResize?: ((...args: any[]) => any) | undefined;
                    }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                    IconDragDot: {
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
                    IconDragDotVertical: {
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
            } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }>;
    LayoutHeader: import("vue").DefineComponent<{}, {
        classNames: string[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    LayoutContent: import("vue").DefineComponent<{}, {
        classNames: string[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Affix: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            offsetTop: {
                type: NumberConstructor;
                default: number;
            };
            offsetBottom: NumberConstructor;
            target: import("vue").PropType<import("../index.js").AffixTarget>;
            targetContainer: import("vue").PropType<import("../index.js").AffixTarget>;
            zIndex: {
                type: NumberConstructor;
                default: number;
            };
            disabled: BooleanConstructor;
            cssMode: BooleanConstructor;
        }>> & Readonly<{
            onChange?: ((fixed: boolean) => any) | undefined;
        }>, {
            wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            isFixed: import("vue").Ref<boolean, boolean>;
            disabled: import("vue").Ref<boolean, boolean>;
            cssMode: import("vue").Ref<boolean, boolean>;
            classNames: import("vue").ComputedRef<{
                [x: string]: boolean;
            }>;
            placeholderStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
            contentStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
            stickyStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
            updatePositionThrottle: {
                (...args: any[]): void;
                cancel(): void;
            };
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            change: (fixed: boolean) => true;
        }, import("vue").PublicProps, {
            offsetTop: number;
            zIndex: number;
            disabled: boolean;
            cssMode: boolean;
        }, true, {}, {}, {
            ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
                onResize?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            offsetTop: {
                type: NumberConstructor;
                default: number;
            };
            offsetBottom: NumberConstructor;
            target: import("vue").PropType<import("../index.js").AffixTarget>;
            targetContainer: import("vue").PropType<import("../index.js").AffixTarget>;
            zIndex: {
                type: NumberConstructor;
                default: number;
            };
            disabled: BooleanConstructor;
            cssMode: BooleanConstructor;
        }>> & Readonly<{
            onChange?: ((fixed: boolean) => any) | undefined;
        }>, {
            wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            isFixed: import("vue").Ref<boolean, boolean>;
            disabled: import("vue").Ref<boolean, boolean>;
            cssMode: import("vue").Ref<boolean, boolean>;
            classNames: import("vue").ComputedRef<{
                [x: string]: boolean;
            }>;
            placeholderStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
            contentStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
            stickyStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
            updatePositionThrottle: {
                (...args: any[]): void;
                cancel(): void;
            };
        }, {}, {}, {}, {
            offsetTop: number;
            zIndex: number;
            disabled: boolean;
            cssMode: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        offsetTop: {
            type: NumberConstructor;
            default: number;
        };
        offsetBottom: NumberConstructor;
        target: import("vue").PropType<import("../index.js").AffixTarget>;
        targetContainer: import("vue").PropType<import("../index.js").AffixTarget>;
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        disabled: BooleanConstructor;
        cssMode: BooleanConstructor;
    }>> & Readonly<{
        onChange?: ((fixed: boolean) => any) | undefined;
    }>, {
        wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        isFixed: import("vue").Ref<boolean, boolean>;
        disabled: import("vue").Ref<boolean, boolean>;
        cssMode: import("vue").Ref<boolean, boolean>;
        classNames: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        placeholderStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
        contentStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        stickyStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        updatePositionThrottle: {
            (...args: any[]): void;
            cancel(): void;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (fixed: boolean) => true;
    }, string, {
        offsetTop: number;
        zIndex: number;
        disabled: boolean;
        cssMode: boolean;
    }, {}, string, {}, {
        ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
            onResize?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export { saasPageProps };
export default SaasPage;

import { PropType, Ref } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 主题颜色
     * @en Theme
     */
    theme: {
        type: PropType<"dark" | "light">;
        default: string;
    };
    /**
     * @zh 当前收起状态
     * @en Current collapsed state
     */
    collapsed: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 默认的收起状态
     * @en The default collapsed state
     */
    defaultCollapsed: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否可收起
     * @en Whether is collapsible
     */
    collapsible: {
        type: BooleanConstructor;
    };
    /**
     * @zh 宽度
     * @en Width
     */
    width: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 收缩宽度
     * @en Collapsed width
     */
    collapsedWidth: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用
     * @en Flip and fold the direction of the hint arrow, which can be used when Sider is on the right
     */
    reverseArrow: {
        type: BooleanConstructor;
    };
    /**
     * @zh 触发响应式布局的断点, 详见[响应式栅格](/vue/component/grid)
     * @en Trigger breakpoints for responsive layout, see [Responsive Grid](/vue/component/grid) for details
     */
    breakpoint: {
        type: PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
    };
    /**
     * @zh 可以用 ResizeBox 替换原生的 `aside` 标签，这个参数即 ResizeBox的 `directions` 参数。详情请看 [ResizeBox](/vue/component/resize-box)。
     * @en Can replace the native `aside` tag with ResizeBox. This is the `directions` parameter of ResizeBox. For details, please see [ResizeBox](/vue/component/resize-box)
     */
    resizeDirections: {
        type: PropType<Array<"left" | "right" | "top" | "bottom">>;
        default: undefined;
    };
    /**
     * @zh 隐藏底部折叠触发器
     * @en Whether to hide the bottom fold trigger
     */
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
    /**
     * @zh 主题颜色
     * @en Theme
     */
    theme: {
        type: PropType<"dark" | "light">;
        default: string;
    };
    /**
     * @zh 当前收起状态
     * @en Current collapsed state
     */
    collapsed: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 默认的收起状态
     * @en The default collapsed state
     */
    defaultCollapsed: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否可收起
     * @en Whether is collapsible
     */
    collapsible: {
        type: BooleanConstructor;
    };
    /**
     * @zh 宽度
     * @en Width
     */
    width: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 收缩宽度
     * @en Collapsed width
     */
    collapsedWidth: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用
     * @en Flip and fold the direction of the hint arrow, which can be used when Sider is on the right
     */
    reverseArrow: {
        type: BooleanConstructor;
    };
    /**
     * @zh 触发响应式布局的断点, 详见[响应式栅格](/vue/component/grid)
     * @en Trigger breakpoints for responsive layout, see [Responsive Grid](/vue/component/grid) for details
     */
    breakpoint: {
        type: PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
    };
    /**
     * @zh 可以用 ResizeBox 替换原生的 `aside` 标签，这个参数即 ResizeBox的 `directions` 参数。详情请看 [ResizeBox](/vue/component/resize-box)。
     * @en Can replace the native `aside` tag with ResizeBox. This is the `directions` parameter of ResizeBox. For details, please see [ResizeBox](/vue/component/resize-box)
     */
    resizeDirections: {
        type: PropType<Array<"left" | "right" | "top" | "bottom">>;
        default: undefined;
    };
    /**
     * @zh 隐藏底部折叠触发器
     * @en Whether to hide the bottom fold trigger
     */
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
                type: PropType<("left" | "right" | "top" | "bottom")[]>;
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
            wrapperRef: Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
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
                    type: PropType<"horizontal" | "vertical">;
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
                    type: PropType<"horizontal" | "vertical">;
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
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
                type: PropType<("left" | "right" | "top" | "bottom")[]>;
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
            wrapperRef: Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
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
            type: PropType<("left" | "right" | "top" | "bottom")[]>;
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
        wrapperRef: Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
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
                type: PropType<"horizontal" | "vertical">;
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
                type: PropType<"horizontal" | "vertical">;
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
            };
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

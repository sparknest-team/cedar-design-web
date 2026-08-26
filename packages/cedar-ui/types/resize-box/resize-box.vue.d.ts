import { PropType } from 'vue';
export type DirectionType = 'left' | 'right' | 'top' | 'bottom';
declare function isHorizontal(direction: DirectionType): boolean;
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    onMoveStart: (direction: DirectionType, e: MouseEvent) => void;
    isHorizontal: typeof isHorizontal;
    allowDirections: import("vue").ComputedRef<("top" | "bottom" | "left" | "right")[]>;
    onTiggerResize: (direction: DirectionType, entry: ResizeObserverEntry) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:width': (width: number) => true;
    'update:height': (height: number) => true;
    /**
     * @zh 拖拽开始时触发
     * @en Triggered when dragging starts
     * @param {MouseEvent} ev
     */
    movingStart: (ev: MouseEvent) => true;
    /**
     * @zh 拖拽时触发
     * @en Triggered when dragging
     * @param {{ width: number; height: number; }} size
     * @param {MouseEvent} ev
     */
    moving: (size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => true;
    /**
     * @zh 拖拽结束时触发
     * @en Triggered when the drag ends
     * @param {MouseEvent} ev
     */
    movingEnd: (ev: MouseEvent) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    component: string;
    directions: ("top" | "bottom" | "left" | "right")[];
}, {}, {
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

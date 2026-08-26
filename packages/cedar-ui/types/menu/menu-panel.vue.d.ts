import { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    style: import("vue").ComputedRef<CSSProperties | undefined>;
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
export default _default;

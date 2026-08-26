import _Progress from './progress.vue';
import { progressProps } from './props';
declare const Progress: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        mode: {
            type: import("vue").PropType<import("./props").ProgressMode>;
            default: string;
            validator: (value: unknown) => value is import("./props").ProgressMode;
        };
        size: import("vue").PropType<import("..").ComponentSize>;
        percent: {
            type: NumberConstructor;
            default: number;
        };
        steps: {
            type: NumberConstructor;
            default: number;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        strokeWidth: NumberConstructor;
        width: (StringConstructor | NumberConstructor)[];
        color: import("vue").PropType<import("./props").ProgressColor>;
        trackColor: StringConstructor;
        bufferColor: import("vue").PropType<import("./props").ProgressColor>;
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            default: string;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        cls: import("vue").ComputedRef<any[]>;
        computedStatus: import("vue").ComputedRef<"default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger">;
        mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: "circle" | "line";
        animation: boolean;
        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
        indeterminate: boolean;
        showText: boolean;
        percent: number;
        steps: number;
    }, true, {}, {}, {
        ProgressLine: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            percent: {
                type: NumberConstructor;
                default: number;
            };
            animation: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg">;
                default: string;
            };
            strokeWidth: {
                type: NumberConstructor;
                default: number;
            };
            width: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            color: {
                type: (ObjectConstructor | StringConstructor)[];
                default: undefined;
            };
            trackColor: StringConstructor;
            formatText: {
                type: FunctionConstructor;
                default: undefined;
            };
            type: {
                type: import("vue").PropType<import("..").SemanticStatus>;
            };
            showText: BooleanConstructor;
            indeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
            style: import("vue").ComputedRef<{
                width: string | number;
                height: string;
                backgroundColor: string | undefined;
            }>;
            barStyle: import("vue").ComputedRef<{
                width: string;
            } | {
                backgroundImage: string;
                backgroundColor?: undefined;
                width: string;
            } | {
                backgroundColor: string;
                backgroundImage?: undefined;
                width: string;
            }>;
            text: import("vue").ComputedRef<string>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            percent: {
                type: NumberConstructor;
                default: number;
            };
            animation: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg">;
                default: string;
            };
            strokeWidth: {
                type: NumberConstructor;
                default: number;
            };
            width: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            color: {
                type: (ObjectConstructor | StringConstructor)[];
                default: undefined;
            };
            trackColor: StringConstructor;
            formatText: {
                type: FunctionConstructor;
                default: undefined;
            };
            type: {
                type: import("vue").PropType<import("..").SemanticStatus>;
            };
            showText: BooleanConstructor;
            indeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: "sm" | "md" | "lg";
            width: string | number;
            color: string | Record<string, any>;
            animation: boolean;
            strokeWidth: number;
            indeterminate: boolean;
            showText: boolean;
            percent: number;
            formatText: Function;
        }, {}, {
            IconExclamationCircleFill: {
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
        ProgressCircle: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            percent: {
                type: NumberConstructor;
                default: number;
            };
            mode: {
                type: import("vue").PropType<"line" | "circle">;
            };
            size: {
                type: import("vue").PropType<typeof import("..").componentSizes[number]>;
                default: string;
            };
            strokeWidth: {
                type: NumberConstructor;
            };
            width: {
                type: NumberConstructor;
                default: undefined;
            };
            color: {
                type: (ObjectConstructor | StringConstructor)[];
                default: undefined;
            };
            trackColor: StringConstructor;
            type: {
                type: StringConstructor;
                default: undefined;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
            pathStrokeWidth: {
                type: NumberConstructor;
            };
        }>, {
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
            isLinearGradient: boolean;
            radius: import("vue").ComputedRef<number>;
            text: import("vue").ComputedRef<string>;
            perimeter: import("vue").ComputedRef<number>;
            center: import("vue").ComputedRef<number>;
            mergedWidth: import("vue").ComputedRef<any>;
            mergedStrokeWidth: import("vue").ComputedRef<any>;
            mergedPathStrokeWidth: import("vue").ComputedRef<any>;
            linearGradientId: import("vue").ComputedRef<string>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            percent: {
                type: NumberConstructor;
                default: number;
            };
            mode: {
                type: import("vue").PropType<"line" | "circle">;
            };
            size: {
                type: import("vue").PropType<typeof import("..").componentSizes[number]>;
                default: string;
            };
            strokeWidth: {
                type: NumberConstructor;
            };
            width: {
                type: NumberConstructor;
                default: undefined;
            };
            color: {
                type: (ObjectConstructor | StringConstructor)[];
                default: undefined;
            };
            trackColor: StringConstructor;
            type: {
                type: StringConstructor;
                default: undefined;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
            pathStrokeWidth: {
                type: NumberConstructor;
            };
        }>> & Readonly<{}>, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            type: string;
            width: number;
            color: string | Record<string, any>;
            showText: boolean;
            percent: number;
        }, {}, {
            IconExclamation: {
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
            IconCheck: {
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
        ProgressSteps: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            steps: {
                type: NumberConstructor;
                default: number;
            };
            percent: {
                type: NumberConstructor;
                default: number;
            };
            size: {
                type: StringConstructor;
            };
            color: {
                type: (ObjectConstructor | StringConstructor)[];
                default: undefined;
            };
            trackColor: StringConstructor;
            strokeWidth: {
                type: NumberConstructor;
            };
            type: {
                type: StringConstructor;
                default: undefined;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
            stepList: import("vue").ComputedRef<boolean[]>;
            mergedStrokeWidth: import("vue").ComputedRef<4 | 8>;
            text: import("vue").ComputedRef<string>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            steps: {
                type: NumberConstructor;
                default: number;
            };
            percent: {
                type: NumberConstructor;
                default: number;
            };
            size: {
                type: StringConstructor;
            };
            color: {
                type: (ObjectConstructor | StringConstructor)[];
                default: undefined;
            };
            trackColor: StringConstructor;
            strokeWidth: {
                type: NumberConstructor;
            };
            type: {
                type: StringConstructor;
                default: undefined;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            type: string;
            color: string | Record<string, any>;
            showText: boolean;
            percent: number;
            steps: number;
        }, {}, {
            IconExclamationCircleFill: {
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
        mode: {
            type: import("vue").PropType<import("./props").ProgressMode>;
            default: string;
            validator: (value: unknown) => value is import("./props").ProgressMode;
        };
        size: import("vue").PropType<import("..").ComponentSize>;
        percent: {
            type: NumberConstructor;
            default: number;
        };
        steps: {
            type: NumberConstructor;
            default: number;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        strokeWidth: NumberConstructor;
        width: (StringConstructor | NumberConstructor)[];
        color: import("vue").PropType<import("./props").ProgressColor>;
        trackColor: StringConstructor;
        bufferColor: import("vue").PropType<import("./props").ProgressColor>;
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            default: string;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        cls: import("vue").ComputedRef<any[]>;
        computedStatus: import("vue").ComputedRef<"default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger">;
        mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
    }, {}, {}, {}, {
        mode: "circle" | "line";
        animation: boolean;
        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
        indeterminate: boolean;
        showText: boolean;
        percent: number;
        steps: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: import("vue").PropType<import("./props").ProgressMode>;
        default: string;
        validator: (value: unknown) => value is import("./props").ProgressMode;
    };
    size: import("vue").PropType<import("..").ComponentSize>;
    percent: {
        type: NumberConstructor;
        default: number;
    };
    steps: {
        type: NumberConstructor;
        default: number;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeWidth: NumberConstructor;
    width: (StringConstructor | NumberConstructor)[];
    color: import("vue").PropType<import("./props").ProgressColor>;
    trackColor: StringConstructor;
    bufferColor: import("vue").PropType<import("./props").ProgressColor>;
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        default: string;
        validator: (value: unknown) => value is import("..").SemanticStatus;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    cls: import("vue").ComputedRef<any[]>;
    computedStatus: import("vue").ComputedRef<"default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger">;
    mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: "circle" | "line";
    animation: boolean;
    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
    indeterminate: boolean;
    showText: boolean;
    percent: number;
    steps: number;
}, {}, string, {}, {
    ProgressLine: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        percent: {
            type: NumberConstructor;
            default: number;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"sm" | "md" | "lg">;
            default: string;
        };
        strokeWidth: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        color: {
            type: (ObjectConstructor | StringConstructor)[];
            default: undefined;
        };
        trackColor: StringConstructor;
        formatText: {
            type: FunctionConstructor;
            default: undefined;
        };
        type: {
            type: import("vue").PropType<import("..").SemanticStatus>;
        };
        showText: BooleanConstructor;
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
        style: import("vue").ComputedRef<{
            width: string | number;
            height: string;
            backgroundColor: string | undefined;
        }>;
        barStyle: import("vue").ComputedRef<{
            width: string;
        } | {
            backgroundImage: string;
            backgroundColor?: undefined;
            width: string;
        } | {
            backgroundColor: string;
            backgroundImage?: undefined;
            width: string;
        }>;
        text: import("vue").ComputedRef<string>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        percent: {
            type: NumberConstructor;
            default: number;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"sm" | "md" | "lg">;
            default: string;
        };
        strokeWidth: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        color: {
            type: (ObjectConstructor | StringConstructor)[];
            default: undefined;
        };
        trackColor: StringConstructor;
        formatText: {
            type: FunctionConstructor;
            default: undefined;
        };
        type: {
            type: import("vue").PropType<import("..").SemanticStatus>;
        };
        showText: BooleanConstructor;
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        size: "sm" | "md" | "lg";
        width: string | number;
        color: string | Record<string, any>;
        animation: boolean;
        strokeWidth: number;
        indeterminate: boolean;
        showText: boolean;
        percent: number;
        formatText: Function;
    }, {}, {
        IconExclamationCircleFill: {
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
    ProgressCircle: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        percent: {
            type: NumberConstructor;
            default: number;
        };
        mode: {
            type: import("vue").PropType<"line" | "circle">;
        };
        size: {
            type: import("vue").PropType<typeof import("..").componentSizes[number]>;
            default: string;
        };
        strokeWidth: {
            type: NumberConstructor;
        };
        width: {
            type: NumberConstructor;
            default: undefined;
        };
        color: {
            type: (ObjectConstructor | StringConstructor)[];
            default: undefined;
        };
        trackColor: StringConstructor;
        type: {
            type: StringConstructor;
            default: undefined;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        pathStrokeWidth: {
            type: NumberConstructor;
        };
    }>, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
        isLinearGradient: boolean;
        radius: import("vue").ComputedRef<number>;
        text: import("vue").ComputedRef<string>;
        perimeter: import("vue").ComputedRef<number>;
        center: import("vue").ComputedRef<number>;
        mergedWidth: import("vue").ComputedRef<any>;
        mergedStrokeWidth: import("vue").ComputedRef<any>;
        mergedPathStrokeWidth: import("vue").ComputedRef<any>;
        linearGradientId: import("vue").ComputedRef<string>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        percent: {
            type: NumberConstructor;
            default: number;
        };
        mode: {
            type: import("vue").PropType<"line" | "circle">;
        };
        size: {
            type: import("vue").PropType<typeof import("..").componentSizes[number]>;
            default: string;
        };
        strokeWidth: {
            type: NumberConstructor;
        };
        width: {
            type: NumberConstructor;
            default: undefined;
        };
        color: {
            type: (ObjectConstructor | StringConstructor)[];
            default: undefined;
        };
        trackColor: StringConstructor;
        type: {
            type: StringConstructor;
            default: undefined;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        pathStrokeWidth: {
            type: NumberConstructor;
        };
    }>> & Readonly<{}>, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        type: string;
        width: number;
        color: string | Record<string, any>;
        showText: boolean;
        percent: number;
    }, {}, {
        IconExclamation: {
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
        IconCheck: {
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
    ProgressSteps: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        steps: {
            type: NumberConstructor;
            default: number;
        };
        percent: {
            type: NumberConstructor;
            default: number;
        };
        size: {
            type: StringConstructor;
        };
        color: {
            type: (ObjectConstructor | StringConstructor)[];
            default: undefined;
        };
        trackColor: StringConstructor;
        strokeWidth: {
            type: NumberConstructor;
        };
        type: {
            type: StringConstructor;
            default: undefined;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
        stepList: import("vue").ComputedRef<boolean[]>;
        mergedStrokeWidth: import("vue").ComputedRef<4 | 8>;
        text: import("vue").ComputedRef<string>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        steps: {
            type: NumberConstructor;
            default: number;
        };
        percent: {
            type: NumberConstructor;
            default: number;
        };
        size: {
            type: StringConstructor;
        };
        color: {
            type: (ObjectConstructor | StringConstructor)[];
            default: undefined;
        };
        trackColor: StringConstructor;
        strokeWidth: {
            type: NumberConstructor;
        };
        type: {
            type: StringConstructor;
            default: undefined;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        type: string;
        color: string | Record<string, any>;
        showText: boolean;
        percent: number;
        steps: number;
    }, {}, {
        IconExclamationCircleFill: {
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
export type ProgressInstance = InstanceType<typeof _Progress>;
export { progressProps };
export type { ProgressColor, ProgressMode, ProgressProps } from './props';
export { Progress };
export declare const _ProgressComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        mode: {
            type: import("vue").PropType<import("./props").ProgressMode>;
            default: string;
            validator: (value: unknown) => value is import("./props").ProgressMode;
        };
        size: import("vue").PropType<import("..").ComponentSize>;
        percent: {
            type: NumberConstructor;
            default: number;
        };
        steps: {
            type: NumberConstructor;
            default: number;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        strokeWidth: NumberConstructor;
        width: (StringConstructor | NumberConstructor)[];
        color: import("vue").PropType<import("./props").ProgressColor>;
        trackColor: StringConstructor;
        bufferColor: import("vue").PropType<import("./props").ProgressColor>;
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            default: string;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        cls: import("vue").ComputedRef<any[]>;
        computedStatus: import("vue").ComputedRef<"default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger">;
        mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: "circle" | "line";
        animation: boolean;
        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
        indeterminate: boolean;
        showText: boolean;
        percent: number;
        steps: number;
    }, true, {}, {}, {
        ProgressLine: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            percent: {
                type: NumberConstructor;
                default: number;
            };
            animation: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg">;
                default: string;
            };
            strokeWidth: {
                type: NumberConstructor;
                default: number;
            };
            width: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            color: {
                type: (ObjectConstructor | StringConstructor)[];
                default: undefined;
            };
            trackColor: StringConstructor;
            formatText: {
                type: FunctionConstructor;
                default: undefined;
            };
            type: {
                type: import("vue").PropType<import("..").SemanticStatus>;
            };
            showText: BooleanConstructor;
            indeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
            style: import("vue").ComputedRef<{
                width: string | number;
                height: string;
                backgroundColor: string | undefined;
            }>;
            barStyle: import("vue").ComputedRef<{
                width: string;
            } | {
                backgroundImage: string;
                backgroundColor?: undefined;
                width: string;
            } | {
                backgroundColor: string;
                backgroundImage?: undefined;
                width: string;
            }>;
            text: import("vue").ComputedRef<string>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            percent: {
                type: NumberConstructor;
                default: number;
            };
            animation: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: import("vue").PropType<"sm" | "md" | "lg">;
                default: string;
            };
            strokeWidth: {
                type: NumberConstructor;
                default: number;
            };
            width: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            color: {
                type: (ObjectConstructor | StringConstructor)[];
                default: undefined;
            };
            trackColor: StringConstructor;
            formatText: {
                type: FunctionConstructor;
                default: undefined;
            };
            type: {
                type: import("vue").PropType<import("..").SemanticStatus>;
            };
            showText: BooleanConstructor;
            indeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: "sm" | "md" | "lg";
            width: string | number;
            color: string | Record<string, any>;
            animation: boolean;
            strokeWidth: number;
            indeterminate: boolean;
            showText: boolean;
            percent: number;
            formatText: Function;
        }, {}, {
            IconExclamationCircleFill: {
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
        ProgressCircle: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            percent: {
                type: NumberConstructor;
                default: number;
            };
            mode: {
                type: import("vue").PropType<"line" | "circle">;
            };
            size: {
                type: import("vue").PropType<typeof import("..").componentSizes[number]>;
                default: string;
            };
            strokeWidth: {
                type: NumberConstructor;
            };
            width: {
                type: NumberConstructor;
                default: undefined;
            };
            color: {
                type: (ObjectConstructor | StringConstructor)[];
                default: undefined;
            };
            trackColor: StringConstructor;
            type: {
                type: StringConstructor;
                default: undefined;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
            pathStrokeWidth: {
                type: NumberConstructor;
            };
        }>, {
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
            isLinearGradient: boolean;
            radius: import("vue").ComputedRef<number>;
            text: import("vue").ComputedRef<string>;
            perimeter: import("vue").ComputedRef<number>;
            center: import("vue").ComputedRef<number>;
            mergedWidth: import("vue").ComputedRef<any>;
            mergedStrokeWidth: import("vue").ComputedRef<any>;
            mergedPathStrokeWidth: import("vue").ComputedRef<any>;
            linearGradientId: import("vue").ComputedRef<string>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            percent: {
                type: NumberConstructor;
                default: number;
            };
            mode: {
                type: import("vue").PropType<"line" | "circle">;
            };
            size: {
                type: import("vue").PropType<typeof import("..").componentSizes[number]>;
                default: string;
            };
            strokeWidth: {
                type: NumberConstructor;
            };
            width: {
                type: NumberConstructor;
                default: undefined;
            };
            color: {
                type: (ObjectConstructor | StringConstructor)[];
                default: undefined;
            };
            trackColor: StringConstructor;
            type: {
                type: StringConstructor;
                default: undefined;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
            pathStrokeWidth: {
                type: NumberConstructor;
            };
        }>> & Readonly<{}>, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            type: string;
            width: number;
            color: string | Record<string, any>;
            showText: boolean;
            percent: number;
        }, {}, {
            IconExclamation: {
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
            IconCheck: {
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
        ProgressSteps: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            steps: {
                type: NumberConstructor;
                default: number;
            };
            percent: {
                type: NumberConstructor;
                default: number;
            };
            size: {
                type: StringConstructor;
            };
            color: {
                type: (ObjectConstructor | StringConstructor)[];
                default: undefined;
            };
            trackColor: StringConstructor;
            strokeWidth: {
                type: NumberConstructor;
            };
            type: {
                type: StringConstructor;
                default: undefined;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
            stepList: import("vue").ComputedRef<boolean[]>;
            mergedStrokeWidth: import("vue").ComputedRef<4 | 8>;
            text: import("vue").ComputedRef<string>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            steps: {
                type: NumberConstructor;
                default: number;
            };
            percent: {
                type: NumberConstructor;
                default: number;
            };
            size: {
                type: StringConstructor;
            };
            color: {
                type: (ObjectConstructor | StringConstructor)[];
                default: undefined;
            };
            trackColor: StringConstructor;
            strokeWidth: {
                type: NumberConstructor;
            };
            type: {
                type: StringConstructor;
                default: undefined;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            type: string;
            color: string | Record<string, any>;
            showText: boolean;
            percent: number;
            steps: number;
        }, {}, {
            IconExclamationCircleFill: {
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
        mode: {
            type: import("vue").PropType<import("./props").ProgressMode>;
            default: string;
            validator: (value: unknown) => value is import("./props").ProgressMode;
        };
        size: import("vue").PropType<import("..").ComponentSize>;
        percent: {
            type: NumberConstructor;
            default: number;
        };
        steps: {
            type: NumberConstructor;
            default: number;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        strokeWidth: NumberConstructor;
        width: (StringConstructor | NumberConstructor)[];
        color: import("vue").PropType<import("./props").ProgressColor>;
        trackColor: StringConstructor;
        bufferColor: import("vue").PropType<import("./props").ProgressColor>;
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            default: string;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        cls: import("vue").ComputedRef<any[]>;
        computedStatus: import("vue").ComputedRef<"default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger">;
        mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
    }, {}, {}, {}, {
        mode: "circle" | "line";
        animation: boolean;
        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
        indeterminate: boolean;
        showText: boolean;
        percent: number;
        steps: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: import("vue").PropType<import("./props").ProgressMode>;
        default: string;
        validator: (value: unknown) => value is import("./props").ProgressMode;
    };
    size: import("vue").PropType<import("..").ComponentSize>;
    percent: {
        type: NumberConstructor;
        default: number;
    };
    steps: {
        type: NumberConstructor;
        default: number;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeWidth: NumberConstructor;
    width: (StringConstructor | NumberConstructor)[];
    color: import("vue").PropType<import("./props").ProgressColor>;
    trackColor: StringConstructor;
    bufferColor: import("vue").PropType<import("./props").ProgressColor>;
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        default: string;
        validator: (value: unknown) => value is import("..").SemanticStatus;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    cls: import("vue").ComputedRef<any[]>;
    computedStatus: import("vue").ComputedRef<"default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger">;
    mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: "circle" | "line";
    animation: boolean;
    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
    indeterminate: boolean;
    showText: boolean;
    percent: number;
    steps: number;
}, {}, string, {}, {
    ProgressLine: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        percent: {
            type: NumberConstructor;
            default: number;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"sm" | "md" | "lg">;
            default: string;
        };
        strokeWidth: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        color: {
            type: (ObjectConstructor | StringConstructor)[];
            default: undefined;
        };
        trackColor: StringConstructor;
        formatText: {
            type: FunctionConstructor;
            default: undefined;
        };
        type: {
            type: import("vue").PropType<import("..").SemanticStatus>;
        };
        showText: BooleanConstructor;
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
        style: import("vue").ComputedRef<{
            width: string | number;
            height: string;
            backgroundColor: string | undefined;
        }>;
        barStyle: import("vue").ComputedRef<{
            width: string;
        } | {
            backgroundImage: string;
            backgroundColor?: undefined;
            width: string;
        } | {
            backgroundColor: string;
            backgroundImage?: undefined;
            width: string;
        }>;
        text: import("vue").ComputedRef<string>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        percent: {
            type: NumberConstructor;
            default: number;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"sm" | "md" | "lg">;
            default: string;
        };
        strokeWidth: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        color: {
            type: (ObjectConstructor | StringConstructor)[];
            default: undefined;
        };
        trackColor: StringConstructor;
        formatText: {
            type: FunctionConstructor;
            default: undefined;
        };
        type: {
            type: import("vue").PropType<import("..").SemanticStatus>;
        };
        showText: BooleanConstructor;
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        size: "sm" | "md" | "lg";
        width: string | number;
        color: string | Record<string, any>;
        animation: boolean;
        strokeWidth: number;
        indeterminate: boolean;
        showText: boolean;
        percent: number;
        formatText: Function;
    }, {}, {
        IconExclamationCircleFill: {
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
    ProgressCircle: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        percent: {
            type: NumberConstructor;
            default: number;
        };
        mode: {
            type: import("vue").PropType<"line" | "circle">;
        };
        size: {
            type: import("vue").PropType<typeof import("..").componentSizes[number]>;
            default: string;
        };
        strokeWidth: {
            type: NumberConstructor;
        };
        width: {
            type: NumberConstructor;
            default: undefined;
        };
        color: {
            type: (ObjectConstructor | StringConstructor)[];
            default: undefined;
        };
        trackColor: StringConstructor;
        type: {
            type: StringConstructor;
            default: undefined;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        pathStrokeWidth: {
            type: NumberConstructor;
        };
    }>, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
        isLinearGradient: boolean;
        radius: import("vue").ComputedRef<number>;
        text: import("vue").ComputedRef<string>;
        perimeter: import("vue").ComputedRef<number>;
        center: import("vue").ComputedRef<number>;
        mergedWidth: import("vue").ComputedRef<any>;
        mergedStrokeWidth: import("vue").ComputedRef<any>;
        mergedPathStrokeWidth: import("vue").ComputedRef<any>;
        linearGradientId: import("vue").ComputedRef<string>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        percent: {
            type: NumberConstructor;
            default: number;
        };
        mode: {
            type: import("vue").PropType<"line" | "circle">;
        };
        size: {
            type: import("vue").PropType<typeof import("..").componentSizes[number]>;
            default: string;
        };
        strokeWidth: {
            type: NumberConstructor;
        };
        width: {
            type: NumberConstructor;
            default: undefined;
        };
        color: {
            type: (ObjectConstructor | StringConstructor)[];
            default: undefined;
        };
        trackColor: StringConstructor;
        type: {
            type: StringConstructor;
            default: undefined;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        pathStrokeWidth: {
            type: NumberConstructor;
        };
    }>> & Readonly<{}>, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        type: string;
        width: number;
        color: string | Record<string, any>;
        showText: boolean;
        percent: number;
    }, {}, {
        IconExclamation: {
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
        IconCheck: {
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
    ProgressSteps: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        steps: {
            type: NumberConstructor;
            default: number;
        };
        percent: {
            type: NumberConstructor;
            default: number;
        };
        size: {
            type: StringConstructor;
        };
        color: {
            type: (ObjectConstructor | StringConstructor)[];
            default: undefined;
        };
        trackColor: StringConstructor;
        strokeWidth: {
            type: NumberConstructor;
        };
        type: {
            type: StringConstructor;
            default: undefined;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
        stepList: import("vue").ComputedRef<boolean[]>;
        mergedStrokeWidth: import("vue").ComputedRef<4 | 8>;
        text: import("vue").ComputedRef<string>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        steps: {
            type: NumberConstructor;
            default: number;
        };
        percent: {
            type: NumberConstructor;
            default: number;
        };
        size: {
            type: StringConstructor;
        };
        color: {
            type: (ObjectConstructor | StringConstructor)[];
            default: undefined;
        };
        trackColor: StringConstructor;
        strokeWidth: {
            type: NumberConstructor;
        };
        type: {
            type: StringConstructor;
            default: undefined;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        type: string;
        color: string | Record<string, any>;
        showText: boolean;
        percent: number;
        steps: number;
    }, {}, {
        IconExclamationCircleFill: {
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
export default Progress;

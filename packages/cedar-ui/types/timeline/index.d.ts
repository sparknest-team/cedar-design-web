import _Timeline from './timeline';
import _TimelineItem from './item.vue';
import { timelineProps } from './props';
declare const Timeline: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        reverse: {
            type: BooleanConstructor;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
        };
        mode: {
            type: import("vue").PropType<import("./types").ModeType>;
            default: string;
        };
        pending: {
            type: (StringConstructor | BooleanConstructor)[];
        };
        labelPosition: {
            type: import("vue").PropType<import("./types").LabelPositionType>;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        reverse: boolean;
        mode: import("./types").ModeType;
        direction: "horizontal" | "vertical";
        labelPosition: import("./types").LabelPositionType;
    }, true, {}, {}, {
        Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            dotColor: {
                type: StringConstructor;
            };
            dotType: {
                type: import("vue").PropType<import("./types").DotType>;
                default: string;
            };
            lineType: {
                type: import("vue").PropType<import("./types").LineType>;
                default: string;
            };
            lineColor: {
                type: StringConstructor;
            };
            label: {
                type: StringConstructor;
            };
            position: {
                type: import("vue").PropType<import("./types").PositionType>;
            };
        }>, {
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean | "horizontal" | "vertical" | import("./types").LabelPositionType | undefined;
            })[]>;
            dotLineCls: import("vue").ComputedRef<string[]>;
            dotTypeCls: import("vue").ComputedRef<string[]>;
            prefixCls: string;
            computedDotLineStyle: import("vue").ComputedRef<{
                borderColor?: string | undefined;
            }>;
            computedDotStyle: import("vue").ComputedRef<{
                [x: string]: string | undefined;
            }>;
            labelPosition: import("vue").ComputedRef<import("./types").LabelPositionType>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            dotColor: {
                type: StringConstructor;
            };
            dotType: {
                type: import("vue").PropType<import("./types").DotType>;
                default: string;
            };
            lineType: {
                type: import("vue").PropType<import("./types").LineType>;
                default: string;
            };
            lineColor: {
                type: StringConstructor;
            };
            label: {
                type: StringConstructor;
            };
            position: {
                type: import("vue").PropType<import("./types").PositionType>;
            };
        }>> & Readonly<{}>, {
            dotType: import("./types").DotType;
            lineType: import("./types").LineType;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Spin: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: NumberConstructor;
                };
                loading: BooleanConstructor;
                dot: BooleanConstructor;
                tip: StringConstructor;
                hideIcon: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                dot: boolean;
                loading: boolean;
                hideIcon: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: NumberConstructor;
                };
                loading: BooleanConstructor;
                dot: BooleanConstructor;
                tip: StringConstructor;
                hideIcon: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                dot: boolean;
                loading: boolean;
                hideIcon: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        reverse: {
            type: BooleanConstructor;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
        };
        mode: {
            type: import("vue").PropType<import("./types").ModeType>;
            default: string;
        };
        pending: {
            type: (StringConstructor | BooleanConstructor)[];
        };
        labelPosition: {
            type: import("vue").PropType<import("./types").LabelPositionType>;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        reverse: boolean;
        mode: import("./types").ModeType;
        direction: "horizontal" | "vertical";
        labelPosition: import("./types").LabelPositionType;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    reverse: {
        type: BooleanConstructor;
    };
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: string;
    };
    mode: {
        type: import("vue").PropType<import("./types").ModeType>;
        default: string;
    };
    pending: {
        type: (StringConstructor | BooleanConstructor)[];
    };
    labelPosition: {
        type: import("vue").PropType<import("./types").LabelPositionType>;
        default: string;
    };
}>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    reverse: boolean;
    mode: import("./types").ModeType;
    direction: "horizontal" | "vertical";
    labelPosition: import("./types").LabelPositionType;
}, {}, string, {}, {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        dotColor: {
            type: StringConstructor;
        };
        dotType: {
            type: import("vue").PropType<import("./types").DotType>;
            default: string;
        };
        lineType: {
            type: import("vue").PropType<import("./types").LineType>;
            default: string;
        };
        lineColor: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        position: {
            type: import("vue").PropType<import("./types").PositionType>;
        };
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean | "horizontal" | "vertical" | import("./types").LabelPositionType | undefined;
        })[]>;
        dotLineCls: import("vue").ComputedRef<string[]>;
        dotTypeCls: import("vue").ComputedRef<string[]>;
        prefixCls: string;
        computedDotLineStyle: import("vue").ComputedRef<{
            borderColor?: string | undefined;
        }>;
        computedDotStyle: import("vue").ComputedRef<{
            [x: string]: string | undefined;
        }>;
        labelPosition: import("vue").ComputedRef<import("./types").LabelPositionType>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        dotColor: {
            type: StringConstructor;
        };
        dotType: {
            type: import("vue").PropType<import("./types").DotType>;
            default: string;
        };
        lineType: {
            type: import("vue").PropType<import("./types").LineType>;
            default: string;
        };
        lineColor: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        position: {
            type: import("vue").PropType<import("./types").PositionType>;
        };
    }>> & Readonly<{}>, {
        dotType: import("./types").DotType;
        lineType: import("./types").LineType;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Spin: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: NumberConstructor;
        };
        loading: BooleanConstructor;
        dot: BooleanConstructor;
        tip: StringConstructor;
        hideIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        dot: boolean;
        loading: boolean;
        hideIcon: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        dotColor: {
            type: StringConstructor;
        };
        dotType: {
            type: import("vue").PropType<import("./types").DotType>;
            default: string;
        };
        lineType: {
            type: import("vue").PropType<import("./types").LineType>;
            default: string;
        };
        lineColor: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        position: {
            type: import("vue").PropType<import("./types").PositionType>;
        };
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean | "horizontal" | "vertical" | import("./types").LabelPositionType | undefined;
        })[]>;
        dotLineCls: import("vue").ComputedRef<string[]>;
        dotTypeCls: import("vue").ComputedRef<string[]>;
        prefixCls: string;
        computedDotLineStyle: import("vue").ComputedRef<{
            borderColor?: string | undefined;
        }>;
        computedDotStyle: import("vue").ComputedRef<{
            [x: string]: string | undefined;
        }>;
        labelPosition: import("vue").ComputedRef<import("./types").LabelPositionType>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        dotColor: {
            type: StringConstructor;
        };
        dotType: {
            type: import("vue").PropType<import("./types").DotType>;
            default: string;
        };
        lineType: {
            type: import("vue").PropType<import("./types").LineType>;
            default: string;
        };
        lineColor: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        position: {
            type: import("vue").PropType<import("./types").PositionType>;
        };
    }>> & Readonly<{}>, {
        dotType: import("./types").DotType;
        lineType: import("./types").LineType;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type TimelineInstance = InstanceType<typeof _Timeline>;
export type TimelineItemInstance = InstanceType<typeof _TimelineItem>;
export { _TimelineItem as TimelineItem };
export declare const _TimelineComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        reverse: {
            type: BooleanConstructor;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
        };
        mode: {
            type: import("vue").PropType<import("./types").ModeType>;
            default: string;
        };
        pending: {
            type: (StringConstructor | BooleanConstructor)[];
        };
        labelPosition: {
            type: import("vue").PropType<import("./types").LabelPositionType>;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        reverse: boolean;
        mode: import("./types").ModeType;
        direction: "horizontal" | "vertical";
        labelPosition: import("./types").LabelPositionType;
    }, true, {}, {}, {
        Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            dotColor: {
                type: StringConstructor;
            };
            dotType: {
                type: import("vue").PropType<import("./types").DotType>;
                default: string;
            };
            lineType: {
                type: import("vue").PropType<import("./types").LineType>;
                default: string;
            };
            lineColor: {
                type: StringConstructor;
            };
            label: {
                type: StringConstructor;
            };
            position: {
                type: import("vue").PropType<import("./types").PositionType>;
            };
        }>, {
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean | "horizontal" | "vertical" | import("./types").LabelPositionType | undefined;
            })[]>;
            dotLineCls: import("vue").ComputedRef<string[]>;
            dotTypeCls: import("vue").ComputedRef<string[]>;
            prefixCls: string;
            computedDotLineStyle: import("vue").ComputedRef<{
                borderColor?: string | undefined;
            }>;
            computedDotStyle: import("vue").ComputedRef<{
                [x: string]: string | undefined;
            }>;
            labelPosition: import("vue").ComputedRef<import("./types").LabelPositionType>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            dotColor: {
                type: StringConstructor;
            };
            dotType: {
                type: import("vue").PropType<import("./types").DotType>;
                default: string;
            };
            lineType: {
                type: import("vue").PropType<import("./types").LineType>;
                default: string;
            };
            lineColor: {
                type: StringConstructor;
            };
            label: {
                type: StringConstructor;
            };
            position: {
                type: import("vue").PropType<import("./types").PositionType>;
            };
        }>> & Readonly<{}>, {
            dotType: import("./types").DotType;
            lineType: import("./types").LineType;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Spin: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: NumberConstructor;
                };
                loading: BooleanConstructor;
                dot: BooleanConstructor;
                tip: StringConstructor;
                hideIcon: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                dot: boolean;
                loading: boolean;
                hideIcon: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: NumberConstructor;
                };
                loading: BooleanConstructor;
                dot: BooleanConstructor;
                tip: StringConstructor;
                hideIcon: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                dot: boolean;
                loading: boolean;
                hideIcon: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        reverse: {
            type: BooleanConstructor;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
        };
        mode: {
            type: import("vue").PropType<import("./types").ModeType>;
            default: string;
        };
        pending: {
            type: (StringConstructor | BooleanConstructor)[];
        };
        labelPosition: {
            type: import("vue").PropType<import("./types").LabelPositionType>;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        reverse: boolean;
        mode: import("./types").ModeType;
        direction: "horizontal" | "vertical";
        labelPosition: import("./types").LabelPositionType;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    reverse: {
        type: BooleanConstructor;
    };
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: string;
    };
    mode: {
        type: import("vue").PropType<import("./types").ModeType>;
        default: string;
    };
    pending: {
        type: (StringConstructor | BooleanConstructor)[];
    };
    labelPosition: {
        type: import("vue").PropType<import("./types").LabelPositionType>;
        default: string;
    };
}>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    reverse: boolean;
    mode: import("./types").ModeType;
    direction: "horizontal" | "vertical";
    labelPosition: import("./types").LabelPositionType;
}, {}, string, {}, {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        dotColor: {
            type: StringConstructor;
        };
        dotType: {
            type: import("vue").PropType<import("./types").DotType>;
            default: string;
        };
        lineType: {
            type: import("vue").PropType<import("./types").LineType>;
            default: string;
        };
        lineColor: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        position: {
            type: import("vue").PropType<import("./types").PositionType>;
        };
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean | "horizontal" | "vertical" | import("./types").LabelPositionType | undefined;
        })[]>;
        dotLineCls: import("vue").ComputedRef<string[]>;
        dotTypeCls: import("vue").ComputedRef<string[]>;
        prefixCls: string;
        computedDotLineStyle: import("vue").ComputedRef<{
            borderColor?: string | undefined;
        }>;
        computedDotStyle: import("vue").ComputedRef<{
            [x: string]: string | undefined;
        }>;
        labelPosition: import("vue").ComputedRef<import("./types").LabelPositionType>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        dotColor: {
            type: StringConstructor;
        };
        dotType: {
            type: import("vue").PropType<import("./types").DotType>;
            default: string;
        };
        lineType: {
            type: import("vue").PropType<import("./types").LineType>;
            default: string;
        };
        lineColor: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        position: {
            type: import("vue").PropType<import("./types").PositionType>;
        };
    }>> & Readonly<{}>, {
        dotType: import("./types").DotType;
        lineType: import("./types").LineType;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Spin: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: NumberConstructor;
        };
        loading: BooleanConstructor;
        dot: BooleanConstructor;
        tip: StringConstructor;
        hideIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        dot: boolean;
        loading: boolean;
        hideIcon: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        dotColor: {
            type: StringConstructor;
        };
        dotType: {
            type: import("vue").PropType<import("./types").DotType>;
            default: string;
        };
        lineType: {
            type: import("vue").PropType<import("./types").LineType>;
            default: string;
        };
        lineColor: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        position: {
            type: import("vue").PropType<import("./types").PositionType>;
        };
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean | "horizontal" | "vertical" | import("./types").LabelPositionType | undefined;
        })[]>;
        dotLineCls: import("vue").ComputedRef<string[]>;
        dotTypeCls: import("vue").ComputedRef<string[]>;
        prefixCls: string;
        computedDotLineStyle: import("vue").ComputedRef<{
            borderColor?: string | undefined;
        }>;
        computedDotStyle: import("vue").ComputedRef<{
            [x: string]: string | undefined;
        }>;
        labelPosition: import("vue").ComputedRef<import("./types").LabelPositionType>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        dotColor: {
            type: StringConstructor;
        };
        dotType: {
            type: import("vue").PropType<import("./types").DotType>;
            default: string;
        };
        lineType: {
            type: import("vue").PropType<import("./types").LineType>;
            default: string;
        };
        lineColor: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        position: {
            type: import("vue").PropType<import("./types").PositionType>;
        };
    }>> & Readonly<{}>, {
        dotType: import("./types").DotType;
        lineType: import("./types").LineType;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export { Timeline };
export { timelineProps };
export default Timeline;
